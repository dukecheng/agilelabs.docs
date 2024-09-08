import { themes as prismThemes } from 'prism-react-renderer';
import type { Config } from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

const config: Config = {
  title: 'AgileLabs Framework Docs',
  tagline: '一款严谨高效的.NET Core项目基础类库',
  favicon: 'img/favicon.ico',

  // Set the production url of your site here
  url: 'https://docs.agilelabs.net',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'dukecheng', // Usually your GitHub org/user name.
  projectName: 'agilelabs.docs', // Usually your repo name.

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'zh-cn',
    locales: ['zh-cn'],
  },

  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: './sidebars.ts',
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/dukecheng/agilelabs.docs/tree/main/',
        },
        blog: {
          showReadingTime: true,
          feedOptions: {
            type: ['rss', 'atom'],
            xslt: true,
          },
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/facebook/docusaurus/tree/main/',
          // Useful options to enforce blogging best practices
          onInlineTags: 'warn',
          onInlineAuthors: 'warn',
          onUntruncatedBlogPosts: 'warn',
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    // Replace with your project's social card
    image: 'img/docusaurus-social-card.jpg',
    navbar: {
      title: 'AgileLabs Framework',
      logo: {
        alt: 'AgileLabs Framework',
        src: 'img/logo.svg',
      },
      items: [
        // { to: '/my-page', label: '介绍', position: 'left' },
        // { to: '/docs/get-strated', label: '起步', position: 'left' },

        {
          type: 'docSidebar',
          sidebarId: 'tutorialSidebar',
          position: 'left',
          label: '文档',
        },
        { to: '/blog', label: 'Blog', position: 'left' },
        {
          type: 'docsVersionDropdown',
          position: 'right',
        },
        // {
        //   type: 'localeDropdown',
        //   position: 'right',
        // },        
        {
          href: 'https://git.feinian.net/agilelabs.framework',
          label: '框架GIT仓库(CN)',
          position: 'right',
        },
        {
          href: 'https://git.feinian.net/agilelabs.framework/agilelabs.docs',
          label: 'Gitea(CN)',
          position: 'right',
        },
        {
          href: 'https://github.com/dukecheng/agilelabs.docs',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: '文档',
          items: [
            {
              label: '教程',
              to: '/docs/intro',
            },
          ],
        },
        {
          title: 'Links',
          items: [
            {
              label: 'CDN',
              href: '/cdn',
            },
          ],
        },
        {
          title: 'More',
          items: [
            {
              label: 'Blog',
              to: '/blog',
            },
            {
              label: 'GitHub',
              href: 'https://github.com/dukecheng/agilelabs.docs',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} AgileLabs Framework Project. Built with Docusaurus.`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
