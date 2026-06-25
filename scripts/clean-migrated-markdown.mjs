import fs from 'node:fs';
import path from 'node:path';

const docsDir = path.resolve('docs');

function walkMarkdown(dir) {
  return fs.readdirSync(dir, {withFileTypes: true}).flatMap((entry) => {
    const fullPath = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      return walkMarkdown(fullPath);
    }
    return /\.(md|mdx)$/.test(entry.name) ? [fullPath] : [];
  });
}

function splitFrontmatter(content) {
  const match = content.match(/^(---\r?\n[\s\S]*?\r?\n---\r?\n)([\s\S]*)$/);
  return match ? {frontmatter: match[1], body: match[2]} : {frontmatter: '', body: content};
}

function cleanGitBookHtmlFragments(value) {
  return value
    .replace(/\\&lt;([^<>]+?)\\&gt;/g, '<$1>')
    .replace(/&lt;code&gt;([\s\S]*?)&lt;\/code&gt;/g, '`$1`')
    .replace(/&lt;em&gt;([\s\S]*?)&lt;\/em&gt;/g, '*$1*')
    .replace(
      /&lt;a\s+href=&quot;([^&]+)&quot;&gt;([\s\S]*?)&lt;\/a&gt;/g,
      '[$2]($1)',
    )
    .replace(
      /&lt;a\s+href="([^"]+)"&gt;([\s\S]*?)&lt;\/a&gt;/g,
      '[$2]($1)',
    )
    .replace(/&lt;\/p&gt;\s*&lt;p&gt;/g, '<br />')
    .replace(/&lt;p&gt;/g, '')
    .replace(/&lt;\/p&gt;/g, '')
    .replace(/&lt;br\s*\/?&gt;/g, '<br />')
    .replace(/&lt;table\b[\s\S]*?&lt;\/table&gt;/g, '')
    .replace(/-&gt;/g, '->')
    .replace(/&#x20;/g, '')
    .replace(/&#123;/g, '\\{')
    .replace(/&#125;/g, '\\}');
}

function cleanBody(body) {
  const lines = body.split(/\r?\n/);
  let inFence = false;

  return lines
    .map((line) => {
      if (/^\s*```/.test(line) || /^\s*~~~/.test(line)) {
        inFence = !inFence;
        return line;
      }
      return inFence ? line : cleanGitBookHtmlFragments(line);
    })
    .join('\n');
}

let changed = 0;
for (const file of walkMarkdown(docsDir)) {
  const original = fs.readFileSync(file, 'utf8');
  const {frontmatter, body} = splitFrontmatter(original);
  const cleaned = `${frontmatter}${cleanBody(body)}`;

  if (cleaned !== original) {
    fs.writeFileSync(file, cleaned);
    changed += 1;
  }
}

console.log(`Cleaned migrated markdown in ${changed} files.`);
