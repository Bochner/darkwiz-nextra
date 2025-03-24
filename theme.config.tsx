import React from 'react'
import { DocsThemeConfig } from 'nextra-theme-docs'

const config: DocsThemeConfig = {
  logo: (
    <>
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-7 h-7 text-zinc-500 group-hover:text-zinc-300 transition-colors" style={{ display: 'inline-block', verticalAlign: 'middle', marginRight: '8px' }}>
        <polyline points="4 17 10 11 4 5"></polyline>
        <line x1="12" x2="20" y1="19" y2="19"></line>
      </svg>
      <span className="text-xl font-bold group-hover:text-zinc-300 transition-colors" style={{ display: 'inline-block', verticalAlign: 'middle' }}>Dark Wizardry MUD</span>
    </>
  ),
  project: {
    link: 'https://github.com/Bochner/darkwiz-nextra',
  },
  chat: {
    link: 'https://discord.gg/r6kM56YrEV',
  },
  docsRepositoryBase: 'https://github.com/Bochner/darkwiz-nextra',
  feedback: {
    content: null
  },
  editLink: {
    text: ''
  },
  footer: {
    text: (
      <div className="flex w-full flex-col items-center sm:items-start">
        <p className="text-zinc-400">
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
      <link rel="icon" href="/favicon.ico" type="image/x-icon" sizes="16x16"/>
      <style>{`
        /* Base Elements */
        body {
          background-color: #000 !important;
          color: #e4e4e7 !important;
        }
        
        /* Navigation & Header */
        .nextra-navbar {
          background-color: #000 !important;
          backdrop-filter: blur(10px);
          border-bottom: 1px solid #2a2a2a !important;
        }
        .nextra-nav-container {
          background-color: #000 !important;
          border-bottom: 1px solid #2a2a2a !important;
        }
        .dark .nextra-nav-container {
          background-color: #000 !important;
        }
        
        /* Fix the gray boxes at the ends of the header */
        .nx-bg-white, .nx-bg-slate-50, .nx-bg-gray-50, .nx-bg-neutral-50,
        [class*="nx-bg-white"], [class*="nx-bg-gray"], [class*="nx-bg-slate"],
        nav > div, header > div, .nextra-nav-container > *, .nextra-nav-container-blur > *,
        div[class*="nx-sticky"], div[class*="nx-top-0"], div[class*="nx-z-"] {
          background-color: #000 !important;
        }
        
        /* Ensure all header children are black */
        header *, nav *, .nextra-nav-container *, .nextra-nav-container-blur *,
        [class*="nx-sticky"] * {
          background-color: transparent !important;
        }
        
        /* Sidebar Navigation */
        aside.nextra-sidebar {
          background-color: #000 !important;
          border-right: 1px solid #2a2a2a !important;
        }
        .dark .nextra-sidebar-container {
          background-color: #000 !important;
        }
        
        /* Sidebar Menu Items */
        .nextra-sidebar a, 
        .nextra-sidebar button,
        .nextra-sidebar-container a, 
        .nextra-sidebar-container button {
          color: #a1a1aa !important;
        }
        .nextra-sidebar a:hover, 
        .nextra-sidebar button:hover,
        .nextra-sidebar-container a:hover, 
        .nextra-sidebar-container button:hover {
          color: #e4e4e7 !important;
        }
        
        /* Enhanced active item styling */
        .nextra-sidebar a.active,
        .nextra-sidebar-container a.active {
          background-color: rgba(168, 85, 247, 0.2) !important;
          color: #ffffff !important;
          font-weight: 500 !important;
          border-left: 2px solid #a855f7 !important;
          padding-left: 0.75rem !important;
        }
        
        /* Also highlight current page links */
        a[aria-current="page"],
        .nx-text-primary-600[aria-current="page"],
        li a.nx-flex.nx-gap-1.nx-py-1.nx-text-primary-600,
        .nx-text-primary-600:not(.nextra-content .nx-text-primary-600) {
          background-color: rgba(168, 85, 247, 0.2) !important;
          color: #ffffff !important;
          font-weight: 500 !important;
          border-left: 2px solid #a855f7 !important;
          padding-left: 0.75rem !important;
        }
        
        /* Reset other selectors that might cause double highlighting */
        .nx-text-primary-600:not(.nextra-content .nx-text-primary-600),
        nav li a.nx-text-primary-600,
        a.nx-flex.nx-gap-1.nx-py-1.nx-transition-colors.nx-text-primary-600 {
          background-color: rgba(168, 85, 247, 0.2) !important;
          border-left: 2px solid #a855f7 !important;
        }
        
        /* Links in content area should have standard styling */
        .nextra-content a,
        .nextra-content .nx-text-primary-600 {
          color: #a855f7 !important;
          text-decoration: underline !important;
          background-color: transparent !important;
          border-left: none !important;
          padding-left: 0 !important;
          font-weight: normal !important;
        }
        
        /* Page Content */
        main.nextra-content {
          background-color: #000 !important;
        }
        .nextra-content h1,
        .nextra-content h2,
        .nextra-content h3,
        .nextra-content h4,
        .nextra-content h5,
        .nextra-content h6 {
          color: #e4e4e7 !important;
        }
        .nextra-content p,
        .nextra-content li {
          color: #e4e4e7 !important;
        }
        
        /* Make bullet points and list items more visible */
        .nextra-content ul li::before {
          color: #a855f7 !important;
          opacity: 1 !important;
          margin-left: -1.3em !important;
          margin-right: 0.4em !important;
        }
        
        /* Tables */
        .nextra-content table {
          border-color: #2a2a2a !important;
          border-collapse: collapse !important;
          width: 100% !important;
          margin: 1.5rem 0 !important;
        }
        .nextra-content th {
          background-color: #151515 !important;
          color: #ffffff !important;
          border-color: #2a2a2a !important;
          font-weight: 600 !important;
          padding: 0.75rem 1rem !important;
          text-align: left !important;
        }
        .nextra-content td {
          background-color: #000 !important;
          color: #ffffff !important;
          border-color: #2a2a2a !important;
          padding: 0.75rem 1rem !important;
          font-weight: 400 !important;
        }
        
        /* Table row hover effect */
        .nextra-content tr:hover td {
          background-color: #0a0a0a !important;
        }
        
        /* Alternating row colors for better readability */
        .nextra-content tr:nth-child(even) td {
          background-color: #050505 !important;
        }
        
        .nextra-content tr:nth-child(even):hover td {
          background-color: #0a0a0a !important;
        }

        /* Force table text to be bright everywhere */
        table td, 
        .nextra-content table td, 
        .nextra-content tbody td, 
        .dark .nextra-content table td,
        .nextra-content table span,
        .nextra-content table div {
          color: #ffffff !important;
        }
        
        /* Improved list spacing */
        .nextra-content ul li, 
        .nextra-content ol li {
          margin-bottom: 0.25rem !important;
          line-height: 1.4 !important;
          position: relative !important;
        }
        
        .nextra-content ul {
          margin-top: 0.4rem !important;
          margin-bottom: 0.4rem !important;
        }
        
        /* More compact lists with better positioning */
        .nextra-content ol,
        .nextra-content ul {
          padding-left: 1.5rem !important;
        }
        
        .nextra-content ul li strong,
        .nextra-content p strong,
        .nextra-content strong {
          color: #ffffff !important;
          font-weight: 600 !important;
        }
        
        /* Improve readability for emphasized text */
        .nextra-content em,
        .nextra-content em * {
          color: #d8b4fe !important;
        }
        
        /* Links */
        .nextra-content a {
          color: #a855f7 !important;
          text-decoration: underline !important;
        }
        .nextra-content a:hover {
          color: #c084fc !important;
          text-decoration: underline !important;
        }
        
        /* Code Blocks */
        .nextra-content pre {
          background-color: #151515 !important;
          border: 1px solid #2a2a2a !important;
        }
        .nextra-content code {
          color: #e4e4e7 !important;
        }
        
        /* Footer */
        footer.nextra-footer {
          background-color: #000 !important;
          border-top: 1px solid #2a2a2a !important;
        }
        
        /* Cards and Boxes */
        .nx-border, .nx-border-x, .nx-border-y, .nx-border-t, .nx-border-r, .nx-border-b, .nx-border-l {
          border-color: #2a2a2a !important;
        }
        
        /* Background colors */
        .nx-bg-white {
          background-color: #151515 !important;
        }
        
        /* Question Container */
        .nextra-question-container {
          background-color: #151515 !important;
          border: 1px solid #2a2a2a !important;
          color: #e4e4e7 !important;
        }
        
        /* TOC (Table of Contents) */
        .nextra-toc {
          background-color: transparent !important;
        }
        .nextra-toc a {
          color: #a1a1aa !important;
        }
        .nextra-toc a:hover {
          color: #e4e4e7 !important;
        }
        .nextra-toc a.active {
          color: #a855f7 !important;
        }
        
        /* Search Bar */
        .nextra-search input {
          background-color: #151515 !important;
          border: 1px solid #2a2a2a !important;
          color: #e4e4e7 !important;
        }
        
        /* Command line styling */
        .nextra-command-line {
          background-color: #151515 !important;
          border: 1px solid #2a2a2a !important;
        }
        
        /* Callouts styling */
        .nextra-callout {
          background-color: #151515 !important;
          border-color: #2a2a2a !important;
        }
        
        /* Steps styling */
        .nextra-steps {
          border-color: #2a2a2a !important;
        }
        .nextra-steps li::before {
          background-color: #151515 !important;
          border-color: #2a2a2a !important;
          color: #e4e4e7 !important;
        }
        
        /* Tabs styling */
        .nextra-tabs {
          border-color: #2a2a2a !important;
        }
        .nextra-tabs button {
          color: #a1a1aa !important;
        }
        .nextra-tabs button[aria-selected="true"] {
          border-color: #a855f7 !important;
          color: #e4e4e7 !important;
        }
        
        /* Special "Question?" floating feedback button */
        div[role="button"][aria-label="Question?"] {
          background-color: #151515 !important;
          border: 1px solid #2a2a2a !important;
          color: #a1a1aa !important;
          box-shadow: 0 4px 20px rgba(0, 0, 0, 0.7) !important;
        }
        
        div[role="button"][aria-label="Question?"]:hover {
          background-color: #202020 !important;
          color: #e4e4e7 !important;
        }
        
        /* Buttons inside the feedback dialog */
        div[data-headlessui-state] button {
          background-color: #151515 !important;
          border: 1px solid #2a2a2a !important;
          color: #a1a1aa !important;
        }
        
        div[data-headlessui-state] button:hover {
          background-color: #202020 !important;
          color: #e4e4e7 !important;
        }
        
        /* Improved theme toggle styling */
        .nextra-sidebar-menu button,
        header button,
        [aria-label="Toggle Dark Mode"],
        [aria-label="Toggle Light Mode"],
        [aria-label="Menu"] {
          color: #e4e4e7 !important;
        }
        
        .nextra-sidebar-menu button:hover,
        header button:hover,
        [aria-label="Toggle Dark Mode"]:hover,
        [aria-label="Toggle Light Mode"]:hover,
        [aria-label="Menu"]:hover {
          color: #ffffff !important;
          background-color: rgba(255, 255, 255, 0.1) !important;
        }
        
        /* Theme dropdown menu */
        div[role="menu"],
        .nextra-scrollbar[role="menu"],
        [data-headlessui-state*="open"][role="menu"] {
          background-color: #151515 !important;
          border: 1px solid #2a2a2a !important;
          color: #e4e4e7 !important;
          box-shadow: 0 4px 20px rgba(0, 0, 0, 0.7) !important;
        }
        
        div[role="menu"] button,
        div[role="menu"] [role="menuitem"],
        div[role="menu"] [role="menuitemradio"] {
          background-color: #151515 !important;
          color: #e4e4e7 !important;
        }
        
        div[role="menu"] button:hover,
        div[role="menu"] [role="menuitem"]:hover,
        div[role="menu"] [role="menuitemradio"]:hover {
          background-color: #202020 !important;
          color: #ffffff !important;
        }
        
        div[role="menu"] [aria-checked="true"],
        div[role="menu"] button[aria-checked="true"] {
          background-color: #202020 !important;
          color: #ffffff !important;
        }
      `}</style>
    </>
  ),
  darkMode: false,
  nextThemes: {
    defaultTheme: 'dark',
    forcedTheme: 'dark',
  },
  primaryHue: {
    dark: 280,
    light: 280
  },
  sidebar: {
    defaultMenuCollapseLevel: 1,
    titleComponent: ({ title, type }) => {
      return <div className="text-zinc-300 hover:text-zinc-100 transition-colors">{title}</div>
    },
  },
  toc: {
    float: true,
    title: "On This Page",
  },
  search: {
    placeholder: 'Search documentation...',
  },
  direction: 'ltr'
}

export default config