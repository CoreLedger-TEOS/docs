# CoreLedger Docs Docusaurus Migration

This branch contains the Docusaurus migration of the GitBook documentation snapshot.

The original GitBook-shaped repository content is kept in `gitbook-backup/`.

## Commands

```bash
pnpm install
pnpm run convert:gitbook
pnpm run build
pnpm run start
```

The static build output is written to `docusaurus/`.
