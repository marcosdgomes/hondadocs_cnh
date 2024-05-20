// @ts-check
// `@type` JSDoc annotations allow editor autocompletion and type checking
// (when paired with `@ts-check`).
// There are various equivalent ways to declare your Docusaurus config.
// See: https://docusaurus.io/docs/api/docusaurus-config

import {themes as prismThemes} from 'prism-react-renderer';




/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Honda Docs - CNH',
  tagline: 'Aqui estarão disponiveis documentações do CNH',
  favicon: 'img/favicon.ico',

  // Set the production url of your site here
  url: 'https://hondadocs-cnh.netlify.app/',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deploymehttps://mobyandocs.netlify.app/nt config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'mdfreitastf', // Usually your GitHub org/user name.
  projectName: 'hondadocs_fi', // Usually your repo name.

  onBrokenLinks: 'ignore', //throw ativa novamente
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'pt',
    locales: ['pt'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: './sidebars.js',
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          // editUrl:
          //   'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        },
        blog: {
          showReadingTime: true,
          blogSidebarTitle: 'Postagens Recentes',
          blogSidebarCount: 'ALL'
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // Replace with your project's social card
      image: 'img/bancohonda_logo.png',
      navbar: {
        title: 'Docs',
        logo: {
          alt: 'Honda Logo',
          src: 'img/bancohonda_logo.png',
        },
        items: [
          {
            type: 'docSidebar',
            sidebarId: 'mobileSidebar',
            position: 'left',
            label: 'Mobile',
          },
          {
            type: 'docSidebar',
            sidebarId: 'webSidebar',
            position: 'left',
            label: 'Web',
          },
          {
            type: 'docSidebar',
            sidebarId: 'processSidebar',
            position: 'left',
            label: 'Processos',
          },
          {to: '/blog', label: 'Novidades', position: 'left'},
          {to: '/reports', label: 'Relatórios', position: 'left'},

          {
            href: 'https://qa-stefanini.atlassian.net/jira/software/projects/EAQ/boards/1',
            label: 'Board - Engenharia de Automação e QA',
            position: 'right',
          },
          // {
          //   type: 'html',
          //   value: `<button onClick="signOut()">Sign out</button>`,
          //   position: 'right',

          // },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Acesso Rápido',
            items: [
              {
                label: 'Gerador de Reports PDF',
                to: '/gerador-reports',
              },
            ],
          },
          {
            title: 'Ambientes - Honda',
            items: [
              {
                label: 'Sandbox',
                href: 'https://ads-honda-banco-front-cnh.sandbox.banco-honda.stefanini.io/',
              },
              {
                label: 'Stage',
                href: 'https://ads-honda-banco-front-cnh.stage.banco-honda.stefanini.io/',
              },
              {
                label: 'Dev',
                href: 'https://ads-honda-banco-front-cnh.dev.banco-honda.stefanini.io/',
              },
            ],
          },
          {
            title: 'Referências',
            items: [
              {
                label: 'Stage',
                href: 'https://example.com',
              },
              {
                label: 'Dev',
                href: 'https://example.com',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Honda - Stefanini`,
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
      },
    }),
};

export default config;

