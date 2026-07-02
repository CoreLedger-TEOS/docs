# How to Edit Documentation

This guide is for people who need to update documentation pages, add new pages, or add images without working deeply with the code.

## Where Pages Live

All documentation pages are in the `docs/` folder.

Each page is a Markdown file with the `.md` extension. For example:

- `docs/index.md`
- `docs/get-started/quickstart-guide.md`
- `docs/admin-user-guide/portal-configuration/asset-configuration.md`

Folders usually match the sections in the left navigation.

## Edit an Existing Page

1. Open the documentation site.
2. Find the page you want to change.
3. Click **Edit this page**.
4. GitHub opens the correct Markdown file.
5. Click the pencil icon or **Edit**.
6. Make your change.
7. Use the **Preview** tab in GitHub to check the result.
8. Commit the change.

Keep edits small when possible. A small change is easier to review and safer to publish.

## Basic Formatting

Use normal Markdown:

```md
# Page title

## Section title

Regular paragraph text.

- Bullet point
- Another bullet point

1. First step
2. Second step

[Link text](../another-page.md)
```

Use one `#` title at the top of the page. Use `##` and `###` for sections inside the page.

## Links

Use relative links for internal documentation pages.

Good:

```md
[Authentication Types](../get-started/authentication-types.md)
```

Avoid hardcoded links to the documentation domain:

```md
https://docusaurus-g3dfathsdxhygxdb.a02.azurefd.net/...
https://teos-docs.coreledger.net/...
```

External links, such as links to CoreLedger or Swagger, can stay as full URLs.

## Notes and Warnings

Use Docusaurus note blocks when a page needs a highlighted message:

```md
:::info
This is useful information.
:::

:::tip
This is a positive recommendation or helpful hint.
:::

:::warning
This is important and needs attention.
:::

:::caution[Attention]
Use this for stronger warnings, but avoid overusing it.
:::
```

## Images

Images used by documentation pages are stored in `static/img/`.

Most migrated images are currently in:

```text
static/img/gitbook-assets/
```

Product-specific images may also be in folders like:

```text
static/img/wlp/
static/img/wlm/
static/img/wla/
```

To add an image:

1. Add the image file to the correct folder under `static/img/`.
2. Use a clear file name, for example `wlp-payment-methods-overview.png`.
3. Add it to the page like this:

```md
![Payment methods overview](/img/wlp/wlp-payment-methods-overview.png)
```

The text inside `![...]` is important. It is used as the image caption and also helps accessibility.

## Add a New Page

1. Create a new `.md` file inside the correct folder under `docs/`.
2. Add a page title at the top.
3. Write the content.
4. Add the page to `sidebars.js` so it appears in the left navigation.

Example page:

```md
# New Page Title

Short introduction.

## First Section

Page content.
```

If you are not comfortable editing `sidebars.js`, ask a developer to add the page to the menu. The page can exist without it, but users will not easily find it from the left navigation.

## Larger Updates and Pull Requests

If you need to change many pages, do not edit `main` directly.

Use this rule:

```text
One task or package of related changes = one branch = one pull request
```

Recommended workflow:

1. Create a new branch from `main`.
2. Make all related page, image, and navigation changes in that branch.
3. Commit changes in small logical steps.
4. Open one pull request from your branch to `main`.
5. Check the pull request.
6. Add review fixes to the same branch.
7. Merge the pull request only when the whole package is approved.

Good branch names are short and describe the work:

```text
docs/update-wlp-pages
docs/fix-wla-screenshots
docs/add-teos-api-examples
```

This keeps unfinished work away from `main`, makes review easier, and gives testers one clear package to validate.

How to check a pull request:

1. Open the pull request in GitHub.
2. Check the **Files changed** tab and make sure only expected files were changed.
3. Open changed `.md` files and use GitHub's **Preview** tab to check basic formatting.
4. Check that the GitHub build status is green. The build confirms that Docusaurus can generate the site.
5. For visual testing on the real site, use the test/deploy URL provided by the technical team.

GitHub Markdown preview is useful, but it is not identical to the final Docusaurus site. Images, side navigation, search, captions, and some note blocks should be checked on the deployed test site before merging a large documentation update.

## Page Description

Some pages show a short description under the title. It is written near the top of the page:

```md
---
description: 'Latest version: v1.1'
---

# Welcome to TEOS API

<p className="doc-description">Latest version: v1.1</p>
```

If the page already has this block, update both places when changing the description.

## Before Publishing

Before a change is merged or deployed, check:

- The page opens without errors.
- Links go to the expected pages.
- Images are visible and have captions.
- The left navigation still looks correct.
- No old GitBook or temporary Docusaurus preview URLs were added.

## Common Mistakes

- Adding an image to `docs/` instead of `static/img/`.
- Using a full documentation URL instead of a relative link.
- Creating a new page but forgetting to add it to `sidebars.js`.
- Using more than one top-level `#` title on the same page.
- Leaving placeholder text or temporary screenshots in the page.
