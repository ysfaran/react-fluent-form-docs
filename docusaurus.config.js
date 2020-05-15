module.exports = {
  title: "react-fluent-form",
  tagline: "A Form Library to Ease Developer Lifes",
  url: "https://elegant-ride-60014b.netlify.app",
  baseUrl: "/",
  favicon: "img/favicon.ico",
  organizationName: "ysfaran", // Usually your GitHub org/user name.
  projectName: "react-fluent-form-docs", // Usually your repo name.
  themeConfig: {
    image: "img/react-fluent-form-showcase.png",
    prism: {
      theme: require("prism-react-renderer/themes/nightOwl"),
    },
    navbar: {
      title: "react-fluent-form",
      logo: {
        alt: "react-fluent-form Logo",
        src: "img/react-fluent-form-logo.svg",
      },
      links: [
        {
          to: "docs/getting-started/introduction",
          activeBasePath: "docs",
          label: "Docs",
          position: "left",
        },
        {
          href: "https://github.com/ysfaran/react-fluent-form",
          label: "GitHub",
          position: "right",
        },
      ],
    },
    footer: {
      style: "dark",
      links: [
        {
          title: "Docs",
          items: [
            {
              label: "Getting Started",
              to: "docs/getting-started/introduction",
            },
            {
              label: "Advanced",
              to: "docs/advanced/form-array",
            },
            {
              label: "API",
              to: "docs/api/use-fluent-form",
            },
          ],
        },
        {
          title: "Community",
          items: [
            {
              label: "GitHub Issues",
              href: "https://github.com/ysfaran/react-fluent-form/issues",
            },
          ],
        },
        {
          title: "Social",
          items: [
            {
              label: "Introductional Blog",
              to:
                "https://dev.to/ysfaran/react-fluent-form-how-to-write-forms-with-validation-in-few-steps-56ho",
            },
            {
              label: "GitHub",
              href: "https://github.com/ysfaran/react-fluent-form",
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} react-fluent-form, Inc. Built with Docusaurus.`,
    },
  },
  presets: [
    [
      "@docusaurus/preset-classic",
      {
        docs: {
          sidebarPath: require.resolve("./sidebars.js"),
          editUrl:
            "https://github.com/ysfaran/react-fluent-form-docs/edit/master/",
        },
        theme: {
          customCss: require.resolve("./src/css/custom.css"),
        },
      },
    ],
  ],
};
