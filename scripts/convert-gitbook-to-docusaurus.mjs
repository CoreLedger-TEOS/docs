import fs from 'node:fs';
import path from 'node:path';

const rootDir = process.cwd();
const backupDir = path.join(rootDir, 'gitbook-backup');
const docsDir = path.join(rootDir, 'docs');
const staticAssetDir = path.join(rootDir, 'static', 'img', 'gitbook-assets');
const summaryPath = path.join(backupDir, 'SUMMARY.md');

const ignoredDirs = new Set(['.git', '.agents', '.codex', '.tmp', '.site', '.venv']);

function ensureDir(dir) {
  fs.mkdirSync(dir, { recursive: true });
}

function emptyDir(dir) {
  if (fs.existsSync(dir)) {
    fs.rmSync(dir, { recursive: true, force: true });
  }
  ensureDir(dir);
}

function walk(dir, predicate = () => true) {
  const results = [];
  if (!fs.existsSync(dir)) return results;
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    if (ignoredDirs.has(entry.name)) continue;
    const fullPath = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      results.push(...walk(fullPath, predicate));
    } else if (predicate(fullPath)) {
      results.push(fullPath);
    }
  }
  return results;
}

function toPosix(value) {
  return value.split(path.sep).join('/');
}

function stripMd(value) {
  return value.replace(/\.md$/i, '');
}

function removeLeadingSlash(value) {
  return value.replace(/^\/+/, '');
}

function isExternalLink(href) {
  return /^(https?:|mailto:|tel:)/i.test(href);
}

function normalizeDocPathFromGitBookLink(link) {
  let clean = decodeURI(link.trim()).split('#')[0].split('?')[0];
  clean = clean.replace(/\\/g, '/').replace(/\/+$/, '');
  if (!clean) return 'index';
  clean = clean.replace(/\.md$/i, '');
  clean = clean.replace(/(^|\/)README$/i, '$1index');
  clean = clean.replace(/^index$/i, 'index');
  return removeLeadingSlash(clean);
}

function docIdFromRelativeOutput(relativeOutputPath) {
  return stripMd(relativeOutputPath).replace(/\\/g, '/');
}

function outputPathForMarkdown(sourcePath) {
  const rel = toPosix(path.relative(backupDir, sourcePath));
  if (rel.toLowerCase() === 'readme.md') return 'index.md';
  return rel.replace(/(^|\/)README\.md$/i, '$1index.md');
}

function inferExtension(filePath) {
  const ext = path.extname(filePath);
  if (ext) return ext.toLowerCase();

  const buffer = fs.readFileSync(filePath);
  if (buffer.subarray(0, 8).equals(Buffer.from([0x89, 0x50, 0x4e, 0x47, 0x0d, 0x0a, 0x1a, 0x0a]))) return '.png';
  if (buffer.subarray(0, 3).equals(Buffer.from([0xff, 0xd8, 0xff]))) return '.jpg';
  if (buffer.subarray(0, 4).toString('utf8') === '%PDF') return '.pdf';
  if (buffer.subarray(4, 8).toString('utf8') === 'ftyp') return '.mov';
  const textStart = buffer.subarray(0, 256).toString('utf8').trimStart();
  if (textStart.startsWith('<svg')) return '.svg';
  return '.bin';
}

function slugifyAssetName(fileName, index) {
  const ext = inferExtension(path.join(backupDir, '.gitbook', 'assets', fileName));
  const base = path.basename(fileName, path.extname(fileName))
    .normalize('NFKD')
    .replace(/[^\w\s.-]/g, '')
    .trim()
    .replace(/\s+/g, '-')
    .replace(/-+/g, '-')
    .replace(/^[-.]+|[-.]+$/g, '')
    .toLowerCase();
  return `${base || `asset-${index + 1}`}${ext}`;
}

function buildAssetMap() {
  const assetsRoot = path.join(backupDir, '.gitbook', 'assets');
  ensureDir(staticAssetDir);
  const assetMap = new Map();
  const usedNames = new Set();
  const files = fs.existsSync(assetsRoot)
    ? fs.readdirSync(assetsRoot, { withFileTypes: true }).filter((entry) => entry.isFile())
    : [];

  files.forEach((entry, index) => {
    let targetName = slugifyAssetName(entry.name, index);
    const ext = path.extname(targetName);
    const base = path.basename(targetName, ext);
    let counter = 2;
    while (usedNames.has(targetName)) {
      targetName = `${base}-${counter}${ext}`;
      counter += 1;
    }
    usedNames.add(targetName);

    fs.copyFileSync(path.join(assetsRoot, entry.name), path.join(staticAssetDir, targetName));
    assetMap.set(entry.name, `/img/gitbook-assets/${encodeURIComponent(targetName).replace(/%2F/g, '/')}`);
  });

  return assetMap;
}

function replaceAssets(content, assetMap) {
  let result = content;
  const names = [...assetMap.keys()].sort((a, b) => b.length - a.length);
  for (const originalName of names) {
    const variants = [
      originalName,
      encodeURI(originalName),
      originalName.replace(/_/g, '\\_'),
      encodeURI(originalName).replace(/_/g, '\\_'),
    ];
    const target = assetMap.get(originalName);
    for (const variant of variants) {
      const escaped = variant.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
      result = result.replace(new RegExp(`(?:\\.\\.\\/)*\\.gitbook/assets/${escaped}`, 'g'), target);
    }
  }
  return result;
}

function convertHints(content) {
  return content
    .replace(/{% hint style="([^"]+)" %}/g, (_, style) => {
      const normalized = style === 'danger' ? 'danger' : style === 'warning' ? 'warning' : 'info';
      return `:::${normalized}`;
    })
    .replace(/{% endhint %}/g, ':::');
}

function stripGitBookFrontMatter(content) {
  if (!content.startsWith('---\n') && !content.startsWith('---\r\n')) return content;
  const newline = content.startsWith('---\r\n') ? '\r\n' : '\n';
  const endMarker = `${newline}---${newline}`;
  const end = content.indexOf(endMarker, 3);
  if (end === -1) return content;

  const raw = content.slice(3 + newline.length - 1, end).trim();
  const body = content.slice(end + endMarker.length);
  const kept = raw
    .split(/\r?\n/)
    .filter((line) => !/^\s*(cover|coverY|icon|layout):/i.test(line))
    .filter(Boolean);

  if (!kept.length) return body.replace(/^\s+/, '');
  return `---\n${kept.join('\n')}\n---\n\n${body.replace(/^\s+/, '')}`;
}

function htmlToText(value) {
  return value
    .replace(/<br\s*\/?>/gi, '\n')
    .replace(/<[^>]+>/g, '')
    .replace(/&nbsp;/g, ' ')
    .replace(/&amp;/g, '&')
    .replace(/&lt;/g, '<')
    .replace(/&gt;/g, '>')
    .replace(/&quot;/g, '"')
    .trim();
}

function convertGitBookCardTables(content) {
  return content.replace(/<table\b[^>]*data-view="cards"[\s\S]*?<\/table>/gi, (table) => {
    const rows = [...table.matchAll(/<tr>([\s\S]*?)<\/tr>/gi)].slice(1);
    const items = rows.map(([, row]) => {
      const cells = [...row.matchAll(/<td[^>]*>([\s\S]*?)<\/td>/gi)].map((match) => match[1]);
      const title = htmlToText(cells[0] || 'Untitled');
      const description = htmlToText(cells[1] || '');
      const href = cells.join(' ').match(/href="([^"]+)"/i)?.[1];
      const link = href ? `[${title}](${href})` : title;
      return description ? `- **${link}** - ${description}` : `- **${link}**`;
    });
    return items.length ? items.join('\n') : '';
  });
}

function convertHtmlImages(content) {
  let result = content.replace(/<figure>\s*<img\b([^>]*)>\s*(?:<figcaption>([\s\S]*?)<\/figcaption>\s*)?<\/figure>/gi, (_, attrs, caption) => {
    const src = attrs.match(/\bsrc="([^"]+)"/i)?.[1];
    const alt = attrs.match(/\balt="([^"]*)"/i)?.[1] || '';
    if (!src) return '';
    const captionText = caption ? htmlToText(caption) : '';
    return captionText ? `![${alt}](${src})\n\n_${captionText}_` : `![${alt}](${src})`;
  });

  result = result.replace(/<img\b([^>]*?)(?<!\/)>/gi, '<img$1 />');
  result = result.replace(/<br>/gi, '<br />');
  result = result.replace(/<\/?div[^>]*>/gi, '');
  return result;
}

function convertHtmlCodeBlocks(content) {
  return content
    .replace(/<pre[^>]*>\s*<code[^>]*>/gi, '\n```\n')
    .replace(/<\/code>\s*<\/pre>/gi, '\n```\n')
    .replace(/<\/?strong>/gi, '');
}

function convertExpandableHeadings(content) {
  return content
    .replace(/{% tabs %}/g, '')
    .replace(/{% endtabs %}/g, '')
    .replace(/{% tab title="([^"]+)" %}/g, '\n#### $1\n')
    .replace(/{% endtab %}/g, '');
}

function escapeMdxTextExpressions(content) {
  const lines = content.split(/\r?\n/);
  let inFence = false;
  return lines
    .map((line) => {
      if (/^\s*```/.test(line) || /^\s*~~~/.test(line)) {
        inFence = !inFence;
        return line;
      }
      if (inFence) return line;
      if (/^\s*</.test(line)) return line;
      return line
        .replace(/</g, '&lt;')
        .replace(/>/g, '&gt;')
        .replace(/{/g, '&#123;')
        .replace(/}/g, '&#125;');
    })
    .join('\n');
}

function addFrontMatterField(content, key, value) {
  if (content.startsWith('---\n') || content.startsWith('---\r\n')) {
    const newline = content.startsWith('---\r\n') ? '\r\n' : '\n';
    const endMarker = `${newline}---${newline}`;
    const end = content.indexOf(endMarker, 3);
    if (end !== -1) {
      return `${content.slice(0, end)}${newline}${key}: ${value}${content.slice(end)}`;
    }
  }
  return `---\n${key}: ${value}\n---\n\n${content}`;
}

function buildSlugOverrides(outputRels) {
  const outputSet = new Set(outputRels.map((rel) => rel.replace(/\\/g, '/')));
  const overrides = new Map();

  for (const rel of outputSet) {
    if (rel.endsWith('/index.md')) continue;
    const id = stripMd(rel);
    const dir = path.posix.dirname(rel);
    const base = path.posix.basename(id);

    if (dir === '.') {
      if (outputSet.has(`${base}/index.md`)) {
        overrides.set(rel, `/${base}-page`);
      }
      continue;
    }

    if (path.posix.basename(dir) === base && outputSet.has(`${dir}/index.md`)) {
      overrides.set(rel, `/${id}-page`);
    }
  }

  return overrides;
}

function rewriteLocalLinks(content, currentOutputRel) {
  return content.replace(/(!?\[[^\]]*]\()([^)# \t]+)(#[^) \t]+)?(?:\s+"mention")?(\))/gi, (match, prefix, href, hash = '', suffix) => {
    if (prefix.startsWith('!')) return match;
    if (isExternalLink(href)) return match;
    if (href.startsWith('/') || href.startsWith('#')) return match;
    if (href.includes('broken-reference')) return `${prefix}#${suffix}`;
    if (/\.(png|jpe?g|gif|svg|webp|pdf|mov|mp4)$/i.test(href)) return match;

    const currentDir = path.posix.dirname(currentOutputRel.replace(/\\/g, '/'));
    let targetHref = decodeURI(href).replace(/\\/g, '/').replace(/\/+$/, '');
    if (!/\.md$/i.test(targetHref)) {
      targetHref = `${targetHref}/index.md`;
    }
    const absoluteTarget = path.posix.normalize(path.posix.join(currentDir === '.' ? '' : currentDir, targetHref));
    const normalized = absoluteTarget.replace(/(^|\/)README\.md$/i, '$1index.md');
    let relative = path.posix.relative(currentDir === '.' ? '' : currentDir, normalized);
    if (!relative || relative === '') relative = './index.md';
    if (!relative.startsWith('.')) relative = `./${relative}`;
    return `${prefix}${relative}${hash}${suffix}`;
  });
}

function convertMarkdown(sourcePath, assetMap, slugOverrides) {
  const outputRel = outputPathForMarkdown(sourcePath);
  const outputPath = path.join(docsDir, outputRel);
  ensureDir(path.dirname(outputPath));

  let content = fs.readFileSync(sourcePath, 'utf8');
  content = stripGitBookFrontMatter(content);
  content = replaceAssets(content, assetMap);
  content = content.replace(/(!?\[[^\]]*]\()<([^>\s]+)>(\))/g, '$1$2$3');
  content = convertHints(content);
  content = convertGitBookCardTables(content);
  content = convertHtmlImages(content);
  content = convertHtmlCodeBlocks(content);
  content = convertExpandableHeadings(content);
  content = rewriteLocalLinks(content, outputRel);
  content = content.replace(/<mark\b[^>]*>/gi, '').replace(/<\/mark>/gi, '');
  content = escapeMdxTextExpressions(content);
  if (slugOverrides.has(outputRel)) {
    content = addFrontMatterField(content, 'slug', slugOverrides.get(outputRel));
  }
  content = content.replace(/[ \t]+\n/g, '\n');

  fs.writeFileSync(outputPath, content, 'utf8');
  return outputRel;
}

function parseSummary() {
  const lines = fs.readFileSync(summaryPath, 'utf8').split(/\r?\n/);
  const root = [];
  const stack = [{ indent: -1, items: root }];

  for (const line of lines) {
    const match = line.match(/^(\s*)\*\s+\[([^\]]+)]\(([^)]+)\)/);
    if (!match) continue;

    const indent = match[1].length;
    const label = match[2].replace(/"/g, '\\"');
    const href = match[3];
    const item = { label, href, children: [] };

    while (stack.length > 1 && indent <= stack[stack.length - 1].indent) {
      stack.pop();
    }
    stack[stack.length - 1].items.push(item);
    stack.push({ indent, items: item.children });
  }

  return root;
}

function summaryItemToSidebar(item, existingDocIds) {
  if (isExternalLink(item.href)) {
    return { type: 'link', label: item.label, href: item.href };
  }

  const id = normalizeDocPathFromGitBookLink(item.href);
  const hasDoc = existingDocIds.has(id);
  const children = item.children.map((child) => summaryItemToSidebar(child, existingDocIds)).filter(Boolean);

  if (children.length) {
    const category = {
      type: 'category',
      label: item.label,
      items: children,
      collapsed: false,
    };
    if (hasDoc) category.link = { type: 'doc', id };
    return category;
  }

  if (hasDoc) return { type: 'doc', id, label: item.label };
  return null;
}

function collectSummaryDocIds(items, target = new Set()) {
  for (const item of items) {
    if (!isExternalLink(item.href)) target.add(normalizeDocPathFromGitBookLink(item.href));
    collectSummaryDocIds(item.children, target);
  }
  return target;
}

function buildAdditionalItems(allDocIds, summaryDocIds) {
  const extras = [...allDocIds]
    .filter((id) => !summaryDocIds.has(id) && id !== 'index')
    .sort((a, b) => a.localeCompare(b));
  if (!extras.length) return [];
  return [
    {
      type: 'category',
      label: 'Additional GitBook pages',
      collapsed: true,
      items: extras.map((id) => ({ type: 'doc', id })),
    },
  ];
}

function writeSidebar(allDocIds) {
  const summary = parseSummary();
  const summaryDocIds = collectSummaryDocIds(summary);
  const sidebarItems = summary.map((item) => summaryItemToSidebar(item, allDocIds)).filter(Boolean);
  sidebarItems.push(...buildAdditionalItems(allDocIds, summaryDocIds));

  const file = `// Generated by scripts/convert-gitbook-to-docusaurus.mjs.\n\n/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */\nconst sidebars = ${JSON.stringify({ docsSidebar: sidebarItems }, null, 2)};\n\nmodule.exports = sidebars;\n`;
  fs.writeFileSync(path.join(rootDir, 'sidebars.js'), file, 'utf8');
}

function copyBrandAssets(assetMap) {
  const logoTarget = path.join(rootDir, 'static', 'img', 'coreledger-logo.png');
  const socialTarget = path.join(rootDir, 'static', 'img', 'coreledger-social-card.png');
  const logo = assetMap.get('CoreLedger_Logo_Normal_RGB_horizontal.png') || assetMap.get('logo for git.png');
  if (!logo) return;
  const source = path.join(rootDir, 'static', logo.replace(/^\//, '').replace(/\//g, path.sep));
  if (fs.existsSync(source)) {
    fs.copyFileSync(source, logoTarget);
    fs.copyFileSync(source, socialTarget);
  }
}

function main() {
  if (!fs.existsSync(backupDir)) {
    throw new Error(`Missing backup directory: ${backupDir}`);
  }
  if (!fs.existsSync(summaryPath)) {
    throw new Error(`Missing SUMMARY.md in backup directory: ${summaryPath}`);
  }

  emptyDir(docsDir);
  emptyDir(staticAssetDir);

  const assetMap = buildAssetMap();
  copyBrandAssets(assetMap);

  const markdownFiles = walk(backupDir, (file) => file.toLowerCase().endsWith('.md'));
  const outputRels = markdownFiles.map(outputPathForMarkdown);
  const slugOverrides = buildSlugOverrides(outputRels);
  const allDocIds = new Set();
  for (const file of markdownFiles) {
    const outputRel = convertMarkdown(file, assetMap, slugOverrides);
    allDocIds.add(docIdFromRelativeOutput(outputRel));
  }

  writeSidebar(allDocIds);
  console.log(`Converted ${markdownFiles.length} markdown files and ${assetMap.size} assets.`);
}

main();
