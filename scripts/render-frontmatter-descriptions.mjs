import fs from 'node:fs';
import path from 'node:path';

const docsDir = path.resolve('docs');

function listMarkdownFiles(dir) {
  return fs.readdirSync(dir, {withFileTypes: true}).flatMap((entry) => {
    const fullPath = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      return listMarkdownFiles(fullPath);
    }
    return /\.(md|mdx)$/.test(entry.name) ? [fullPath] : [];
  });
}

function decodeHtmlEntities(value) {
  return value
    .replaceAll('&gt;', '>')
    .replaceAll('&lt;', '<')
    .replaceAll('&amp;', '&')
    .replaceAll('&quot;', '"')
    .replaceAll('&#39;', "'");
}

function escapeJsxText(value) {
  return value
    .replaceAll('&', '&amp;')
    .replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;')
    .replaceAll('{', '&#123;')
    .replaceAll('}', '&#125;');
}

function unquote(value) {
  const trimmed = value.trim();
  if (
    (trimmed.startsWith("'") && trimmed.endsWith("'")) ||
    (trimmed.startsWith('"') && trimmed.endsWith('"'))
  ) {
    return trimmed.slice(1, -1);
  }
  return trimmed;
}

function extractDescription(frontmatter) {
  const lines = frontmatter.split(/\r?\n/);

  for (let index = 0; index < lines.length; index += 1) {
    const match = lines[index].match(/^description:\s*(.*)$/);
    if (!match) {
      continue;
    }

    const rawValue = match[1].trim();
    const decodedRawValue = decodeHtmlEntities(rawValue);
    if (decodedRawValue === '>-' || decodedRawValue === '>') {
      const foldedLines = [];
      for (let cursor = index + 1; cursor < lines.length; cursor += 1) {
        const line = lines[cursor];
        if (!/^\s+/.test(line)) {
          break;
        }
        foldedLines.push(line.trim());
      }
      return decodeHtmlEntities(foldedLines.join(' ').trim());
    }

    return decodeHtmlEntities(unquote(rawValue));
  }

  return null;
}

function renderDescriptions() {
  let changed = 0;

  for (const file of listMarkdownFiles(docsDir)) {
    const content = fs.readFileSync(file, 'utf8');
    const match = content.match(/^---\r?\n([\s\S]*?)\r?\n---\r?\n([\s\S]*)$/);
    if (!match) {
      continue;
    }

    const [, frontmatter, body] = match;
    const description = extractDescription(frontmatter);
    if (!description) {
      continue;
    }

    const lines = body.split(/\r?\n/);
    const titleIndex = lines.findIndex((line) => /^#\s+/.test(line));
    if (titleIndex === -1) {
      continue;
    }

    const nextTextIndex = lines.findIndex(
      (line, index) => index > titleIndex && line.trim() !== '',
    );
    if (
      nextTextIndex !== -1 &&
      lines[nextTextIndex].includes('className="doc-description"')
    ) {
      continue;
    }

    lines.splice(
      titleIndex + 1,
      0,
      '',
      `<p className="doc-description">${escapeJsxText(description)}</p>`,
    );

    fs.writeFileSync(file, `${match[0].slice(0, match[0].length - body.length)}${lines.join('\n')}`);
    changed += 1;
  }

  console.log(`Rendered ${changed} frontmatter descriptions.`);
}

renderDescriptions();
