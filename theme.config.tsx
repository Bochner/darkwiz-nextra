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
    link: 'https://discord.gg/avDXd7PS',
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
        
        /* Hide empty boxes in TOC */
        .nextra-toc li:empty,
        .nextra-toc a:empty, 
        .nextra-toc a:not([href]):not(:has(*)),
        .nextra-toc nav > div > div > div:empty,
        .nextra-toc nav > div > div > div:not(:has(*)),
        .nextra-toc li:has(a:empty),
        .nextra-toc li:has(a:not([href]):not(:has(*))),
        .nextra-toc-item:empty,
        .nextra-toc-item:has(a:empty) {
          display: none !important;
        }
        
        /* Target only the black box at the bottom of TOC */
        .nextra-toc > div:last-child:empty,
        .nextra-toc > div:last-child:has(div:empty:only-child),
        .nextra-toc nav ~ div:last-child:empty,
        .nextra-toc [class*="nx-sticky"][class*="nx-bottom-0"]:empty,
        .nextra-toc [class*="nx-sticky"][class*="nx-bottom-0"]:has(div:empty:only-child),
        .nextra-toc a[href*="how-to-use-this-documentation"] ~ div:empty:last-child,
        /* Target specific black box more precisely */
        .nextra-toc nav + div[class*="nx-sticky"][class*="nx-bottom-0"],
        .nextra-toc nav ~ div[class*="nx-sticky"][class*="nx-bottom-0"],
        .nextra-toc div[class*="nx-sticky"][class*="nx-bottom-0"]:not(:has(button, a, span:not(:empty), p:not(:empty))),
        .nextra-toc div[class*="nx-border-t"][class*="nx-bottom-0"],
        .nextra-toc div[class*="nx-h-12"][class*="nx-bottom-0"],
        /* Target the progress indicator container at the bottom */
        .nextra-toc div[class*="nx-sticky"]:has(div[class*="nx-h-0.5"]):last-child,
        .nextra-toc div:has(div[class*="nx-h-0.5"]),
        /* Add ultra-specific selector for the black box */
        .nextra-toc .nx-fixed.nx-bottom-0, 
        .nextra-toc .nx-sticky.nx-bottom-0, 
        .nextra-toc div[class*="fixed"][class*="bottom-0"], 
        .nextra-toc div[class*="sticky"][class*="bottom-0"], 
        .nextra-toc-content + div[class*="fixed"],
        .nextra-toc-content + div[class*="sticky"],
        /* Target TOC footer and progress bar */
        .nextra-toc-footer, 
        [data-nextra-toc-footer],
        .nextra-toc-progress,
        /* Additional precise selectors for the black box */
        .nextra-toc > div:has(> div:empty),
        .nextra-toc > div:not(:has(a, p, span:not(:empty))) {
          display: none !important;
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
          background-color: rgba(15, 15, 15, 0.6) !important;
          border: 1px solid rgba(168, 85, 247, 0.3) !important;
          color: #e4e4e7 !important;
          backdrop-filter: blur(10px) !important;
          border-radius: 8px !important;
          padding: 0.6rem 1rem !important;
          transition: all 0.2s ease-in-out !important;
          box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06) !important;
        }

        .nextra-search input:hover, 
        .nextra-search input:focus {
          border-color: rgba(168, 85, 247, 0.6) !important;
          box-shadow: 0 0 0 2px rgba(168, 85, 247, 0.2) !important;
        }

        /* Search icon and placeholder styling */
        .nextra-search svg {
          color: rgba(168, 85, 247, 0.8) !important;
        }
        
        .nextra-search input::placeholder {
          color: rgba(228, 228, 231, 0.6) !important;
        }
        
        /* Search Dialog/Modal - enhanced glassmorphic effect */
        div[role="dialog"][data-headlessui-state],
        div[role="dialog"][data-headlessui-state*="open"],
        .nextra-search-dialog,
        [data-nextra-search-dialog],
        .nextra-modal-dialog,
        div[role="dialog"][cmdk-dialog],
        div[cmdk-dialog] {
          background-color: rgba(0, 0, 0, 0.25) !important; /* Further reduced opacity */
          backdrop-filter: blur(4px) !important; /* Reduced blur even more */
          position: fixed !important;
          animation: fadeIn 0.2s ease-out !important;
        }
        
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        
        /* Search Dialog Container - enhanced glassmorphic styling */
        div[role="dialog"] > div,
        div[role="dialog"] > div > div,
        div[cmdk-root],
        [cmdk-root],
        [data-cmdk-root],
        .nextra-search-dialog-container,
        .nextra-search-content {
          background-color: rgba(15, 15, 15, 0.6) !important; /* More transparent */
          backdrop-filter: blur(8px) !important;
          border: 1px solid rgba(168, 85, 247, 0.3) !important;
          border-radius: 16px !important; /* Increased border radius for better look */
          box-shadow: 
            0 10px 25px -5px rgba(0, 0, 0, 0.05), 
            0 8px 10px -6px rgba(0, 0, 0, 0.03),
            0 0 0 1px rgba(168, 85, 247, 0.1) !important; /* Multiple layered shadows */
          overflow: hidden !important;
          max-width: 650px !important; /* Increased width slightly */
          width: 92% !important;
          margin: 8vh auto !important; /* Moved up slightly */
          transition: all 0.2s ease-in-out !important;
          animation: scaleIn 0.15s ease-out !important;
        }
        
        @keyframes scaleIn {
          from { transform: scale(0.98); opacity: 0; }
          to { transform: scale(1); opacity: 1; }
        }
        
        /* Search Input inside Dialog - improved focus states */
        div[role="dialog"] input,
        div[cmdk-input],
        [cmdk-input],
        [data-cmdk-input],
        .nextra-search-dialog input {
          background-color: rgba(0, 0, 0, 0.2) !important;
          border: none !important;
          border-bottom: 1px solid rgba(168, 85, 247, 0.2) !important;
          border-radius: 0 !important;
          color: #ffffff !important;
          font-size: 1.1rem !important;
          padding: 1rem !important;
          transition: all 0.2s ease !important;
        }
        
        div[role="dialog"] input:focus,
        [cmdk-input]:focus,
        .nextra-search-dialog input:focus {
          outline: none !important;
          border-bottom: 1px solid rgba(168, 85, 247, 0.5) !important;
          box-shadow: 0 1px 3px 0 rgba(168, 85, 247, 0.05) !important;
        }
        
        /* Search Results Container - smoother scrolling */
        div[cmdk-list],
        [cmdk-list],
        [data-cmdk-list],
        .nextra-search-results,
        div[role="dialog"] ul,
        .nextra-scrollbar {
          background-color: transparent !important;
          padding: 0.5rem !important;
          max-height: 60vh !important;
          scrollbar-width: thin !important;
          scrollbar-color: rgba(168, 85, 247, 0.3) transparent !important;
          scroll-behavior: smooth !important;
        }

        /* Search Result Items - cleaner design */
        div[cmdk-item],
        [cmdk-item],
        [data-cmdk-item],
        .nextra-search-result,
        div[role="dialog"] li,
        div[role="option"] {
          background-color: rgba(25, 25, 25, 0.3) !important;
          border: 1px solid rgba(42, 42, 42, 0.2) !important;
          border-radius: 10px !important;
          margin: 0.35rem 0 !important;
          padding: 0.85rem 1rem !important;
          transition: all 0.2s ease-in-out !important;
        }
        
        div[cmdk-item]:hover,
        [cmdk-item]:hover,
        [data-cmdk-item]:hover,
        .nextra-search-result:hover,
        div[role="dialog"] li:hover,
        div[role="option"]:hover,
        div[cmdk-item][data-selected="true"],
        [cmdk-item][data-selected="true"],
        [data-cmdk-item][data-selected="true"],
        .nextra-search-result[aria-selected="true"],
        div[role="dialog"] li[aria-selected="true"],
        div[role="option"][aria-selected="true"] {
          background-color: rgba(40, 40, 40, 0.4) !important;
          border-color: rgba(168, 85, 247, 0.3) !important;
          transform: translateY(-1px) scale(1.005) !important;
          box-shadow: 0 4px 10px -2px rgba(0, 0, 0, 0.04), 0 2px 6px -1px rgba(0, 0, 0, 0.02) !important;
        }
        
        /* Search Result Item Titles - better typography */
        div[cmdk-item] span:first-child,
        [cmdk-item] span:first-child,
        [data-cmdk-item] span:first-child,
        .nextra-search-result-title,
        div[role="dialog"] li div:first-child,
        div[role="option"] div:first-child {
          color: #ffffff !important;
          font-weight: 500 !important;
          letter-spacing: 0.01em !important;
          padding-bottom: 0.2rem !important;
        }
        
        /* Search Result Item Subtitles/Descriptions - improved readability */
        div[cmdk-item] span:not(:first-child),
        [cmdk-item] span:not(:first-child),
        [data-cmdk-item] span:not(:first-child),
        .nextra-search-result-subtitle,
        div[role="dialog"] li div:not(:first-child),
        div[role="option"] div:not(:first-child) {
          color: rgba(228, 228, 231, 0.65) !important;
          font-size: 0.9rem !important;
          line-height: 1.4 !important;
        }
        
        /* Highlighted text in search results - extremely subtle */
        div[cmdk-item] mark,
        [cmdk-item] mark,
        [data-cmdk-item] mark,
        .nextra-search-highlight,
        div[role="dialog"] mark,
        div[role="option"] mark {
          background-color: transparent !important;
          color: rgba(192, 132, 252, 0.9) !important;
          font-weight: 500 !important;
          border-bottom: 1px dotted rgba(168, 85, 247, 0.3) !important;
          padding: 0 !important;
          position: relative !important;
        }
        
        /* Keyboard navigation hints */
        div[role="dialog"] kbd,
        .nextra-search-kbd {
          background-color: rgba(30, 30, 30, 0.8) !important;
          border: 1px solid rgba(168, 85, 247, 0.3) !important;
          border-radius: 4px !important;
          color: rgba(228, 228, 231, 0.8) !important;
          font-family: monospace !important;
          padding: 0.1rem 0.3rem !important;
          font-size: 0.8rem !important;
          box-shadow: 0 1px 1px rgba(0, 0, 0, 0.2) !important;
        }
        
        /* Search footer - more transparent */
        div[cmdk-footer],
        [cmdk-footer],
        [data-cmdk-footer],
        .nextra-search-footer,
        div[role="dialog"] footer {
          background-color: rgba(21, 21, 21, 0.6) !important;
          border-top: 1px solid rgba(42, 42, 42, 0.3) !important;
          padding: 0.75rem 1rem !important;
        }
        
        /* Empty state message */
        div[cmdk-empty],
        [cmdk-empty],
        [data-cmdk-empty],
        .nextra-search-empty,
        div[role="dialog"] .empty {
          color: rgba(228, 228, 231, 0.6) !important;
          text-align: center !important;
          padding: 2rem 1rem !important;
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
    }
  },
  toc: {
    float: true,
    title: "On This Page",
    extraContent: null
  },
  search: {
    placeholder: 'Search documentation...',
    emptyResult: 'No results found. Try a different search term.',
    loading: 'Searching documentation...',
    error: 'An error occurred while searching. Please try again.'
  },
  direction: 'ltr',
  navigation: {
    next: true,
    prev: true
  },
  gitTimestamp: null
}

export default config