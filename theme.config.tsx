import React from 'react'
import { DocsThemeConfig } from 'nextra-theme-docs'

const config: DocsThemeConfig = {
  logo: <span className="font-bold text-xl">Dark Wizardry</span>,
  project: {
    link: 'https://github.com/Bochner/darkwiz-nextra',
  },
  chat: {
    link: 'https://discord.gg/r6kM56YrEV',
  },
  docsRepositoryBase: 'https://github.com/Bochner/darkwiz-nextra',
  footer: {
    text: (
      <div className="flex w-full flex-col items-center sm:items-start">
        <p>
          © {new Date().getFullYear()} Dark Wizardry MUD
        </p>
      </div>
    ),
  },
  useNextSeoProps() {
    return {
      titleTemplate: '%s – Dark Wizardry Docs',
    }
  },
  head: (
    <>
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta name="description" content="Dark Wizardry MUD Documentation" />
      <meta name="og:title" content="Dark Wizardry Documentation" />
    </>
  ),
  darkMode: true,
  nextThemes: {
    defaultTheme: 'dark',
  },
  primaryHue: 280,
  sidebar: {
    defaultMenuCollapseLevel: 1,
  },
  toc: {
    float: true,
    title: "On This Page",
  }
}

export default config