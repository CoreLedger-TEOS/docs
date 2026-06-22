# GitBook to MkDocs migration

This branch starts the migration from GitBook-hosted documentation to a static MkDocs Material site with Decap CMS as the browser-based editor.

## Target workflow

1. Authors edit content in `/admin` through Decap CMS or directly in GitHub.
2. Decap writes Markdown changes back to the `mkdocs-migration` branch.
3. GitHub pull requests run `mkdocs build --strict`.
4. Pushes to `mkdocs-migration` deploy the MkDocs site to Azure Storage.
5. GitBook remains backed by `main` until the final cutover.

## Local preview

```powershell
python -m venv .venv
.\.venv\Scripts\pip install -r requirements-docs.txt
.\.venv\Scripts\python.exe -m mkdocs serve --dev-addr 127.0.0.1:8000
```

Open `http://127.0.0.1:8000`.

## Deployment through Azure Storage and Front Door

The MkDocs site is deployed from the `mkdocs-migration` branch to the existing `devfrontends` storage account.

Build output is uploaded to:

```text
devfrontends / $web / docs-mkdocs
```

The external URL should be served by a dedicated Azure Front Door host that points to:

```text
https://devfrontends.z6.web.core.windows.net/
```

with the Front Door route origin path set to:

```text
/docs-mkdocs
```

Required GitHub secrets for OIDC Azure login:

- `AZURE_CLIENT_ID`
- `AZURE_TENANT_ID`
- `AZURE_SUBSCRIPTION_ID`

The Azure application/service principal used by those secrets needs `Storage Blob Data Contributor` on the `devfrontends` storage account.

## Remaining migration work

- Convert GitBook hints (`{% hint %}`) to MkDocs Material admonitions.
- Normalize GitBook figure HTML where needed.
- Remove GitBook `"mention"` link titles.
- Decide whether all Markdown files should appear in navigation or only the current `SUMMARY.md` tree.
- Replace `docs.example.com` with the production documentation domain.
