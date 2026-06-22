# GitBook to MkDocs migration

This branch starts the migration from GitBook-hosted documentation to a static MkDocs Material site with Decap CMS as the browser-based editor.

## Target workflow

1. Authors edit content in `/admin` through Decap CMS or directly in GitHub.
2. Decap writes Markdown changes back to this GitHub repository.
3. GitHub pull requests run `mkdocs build --strict`.
4. Merged changes on `main` are deployed as a static site.

## Local preview

```powershell
python -m venv .venv
.\.venv\Scripts\pip install -r requirements-docs.txt
.\.venv\Scripts\mkdocs serve
```

Open `http://127.0.0.1:8000`.

## Azure Static Web Apps deployment

1. Create an Azure Static Web App.
2. Choose GitHub as the deployment source and select `CoreLedger-TEOS/docs`.
3. Use custom build settings:
   - app location: `.site`
   - output location: leave empty
   - skip app build: enabled
4. Add the deployment token as GitHub secret `AZURE_STATIC_WEB_APPS_API_TOKEN`.
5. Merge this branch into `main`.

## Remaining migration work

- Convert GitBook hints (`{% hint %}`) to MkDocs Material admonitions.
- Normalize GitBook figure HTML where needed.
- Remove GitBook `"mention"` link titles.
- Decide whether all Markdown files should appear in navigation or only the current `SUMMARY.md` tree.
- Replace `docs.example.com` with the production documentation domain.
