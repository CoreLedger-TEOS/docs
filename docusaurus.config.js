// @ts-check

const lightCodeTheme = require('prism-react-renderer').themes.github;
const darkCodeTheme = require('prism-react-renderer').themes.dracula;

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'CoreLedger Docs',
  tagline: 'TEOS platform documentation',
  favicon: 'img/favicon.ico',

  url: 'https://docs.coreledger.net',
  baseUrl: '/',
  trailingSlash: true,

  organizationName: 'CoreLedger',
  projectName: 'docs',

  onBrokenLinks: 'warn',
  onDuplicateRoutes: 'warn',
  markdown: {
    hooks: {
      onBrokenMarkdownLinks: 'warn',
    },
  },

  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          routeBasePath: '/',
          sidebarPath: require.resolve('./sidebars.js'),
          showLastUpdateTime: false,
          showLastUpdateAuthor: false,
          editUrl:
            'https://github.com/CoreLedger-TEOS/docs/edit/docusaurus-migration/',
        },
        blog: false,
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  plugins: [
    [
      require.resolve('@easyops-cn/docusaurus-search-local'),
      {
        hashed: true,
        language: ['en'],
        docsRouteBasePath: '/',
        indexBlog: false,
        highlightSearchTermsOnTargetPage: true,
        explicitSearchResultPath: true,
      },
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      image: 'img/coreledger-social-card.png',
      docs: {
        sidebar: {
          autoCollapseCategories: true,
        },
      },
      navbar: {
        logo: {
          alt: 'CoreLedger',
          src: 'img/coreledger-logo.png',
        },
        items: [],
      },
      footer: {
        style: 'light',
        links: [
          {
            title: 'Docs',
            items: [
              {
                label: 'Get started',
                to: '/get-started',
              },
              {
                label: 'Guides',
                to: '/guides',
              },
              {
                label: 'Reference',
                to: '/reference',
              },
            ],
          },
          {
            title: 'CoreLedger',
            items: [
              {
                label: 'Website',
                href: 'https://coreledger.net/',
              },
              {
                label: 'Book a call',
                href: 'https://coreledger.net/book-a-call/',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} CoreLedger.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
        additionalLanguages: ['bash', 'json', 'powershell'],
      },
      tableOfContents: {
        minHeadingLevel: 2,
        maxHeadingLevel: 4,
      },
    }),
};

module.exports = config;
