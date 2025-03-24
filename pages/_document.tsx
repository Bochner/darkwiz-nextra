import Document, { Html, Head, Main, NextScript } from 'next/document'

class MyDocument extends Document {
  render() {
    return (
      <Html lang="en" className="dark">
        <Head>
          <link
            rel="preconnect"
            href="https://fonts.googleapis.com"
          />
          <link
            rel="preconnect"
            href="https://fonts.gstatic.com" 
            crossOrigin="anonymous"
          />
          <link
            href="https://fonts.googleapis.com/css2?family=Inter:wght@100..900&display=swap"
            rel="stylesheet"
          />
          <style>
            {`
              /* Ensure these styles are applied at the document level to override everything */
              [data-headlessui-state] {
                background-color: #151515 !important;
                border: 1px solid #2a2a2a !important;
                color: #a1a1aa !important;
                box-shadow: 0 2px 10px rgba(0, 0, 0, 0.5) !important;
              }
              
              [data-headlessui-state] button {
                background-color: #151515 !important;
                color: #a1a1aa !important;
              }
              
              [data-headlessui-state] button:hover {
                background-color: #202020 !important;
                color: #e4e4e7 !important;
              }
              
              /* Target floating button - these selectors are extremely specific */
              div.nx-fixed.nx-bottom-8.nx-right-8,
              .nx-fixed.nx-bottom-8.nx-right-8,
              [role="button"][aria-label="Question?"],
              .nextra-floating-button,
              div[aria-label="Question?"] {
                background-color: #151515 !important;
                border: 1px solid #2a2a2a !important;
                color: #a1a1aa !important;
                box-shadow: 0 2px 10px rgba(0, 0, 0, 0.5) !important;
              }
              
              /* Target theme toggle and dropdown */
              [role="menu"],
              div[role="menu"],
              [id*="headlessui-menu"],
              [data-headlessui-state][role="menu"] {
                background-color: #151515 !important;
                border: 1px solid #2a2a2a !important;
                color: #e4e4e7 !important;
                box-shadow: 0 2px 10px rgba(0, 0, 0, 0.5) !important;
              }
              
              [role="menuitem"],
              [role="menuitemradio"] {
                background-color: #151515 !important;
                color: #a1a1aa !important;
              }
              
              [role="menuitem"]:hover,
              [role="menuitemradio"]:hover {
                background-color: #202020 !important;
                color: #e4e4e7 !important;
              }
              
              [role="menuitem"][aria-checked="true"],
              [role="menuitemradio"][aria-checked="true"] {
                background-color: #202020 !important;
                color: #e4e4e7 !important;
              }
              
              /* Force purple highlight on active navigation items at document level */
              .nx-text-primary-600:not(.nextra-content .nx-text-primary-600),
              [class*="nx-text-primary-"]:not(.nextra-content [class*="nx-text-primary-"]),
              a.nx-text-primary-600:not(.nextra-content a.nx-text-primary-600),
              nav li a.nx-flex.nx-text-primary-600,
              .nextra-sidebar-container a.nx-text-primary-600,
              a.nx-flex.nx-gap-1.nx-py-1.nx-transition-colors.nx-text-primary-600,
              li a.nx-flex.nx-gap-1.nx-py-1.nx-text-primary-600,
              .nextra-sidebar li a.nx-flex.nx-gap-1.nx-py-1.nx-text-primary-600 {
                background-color: rgba(168, 85, 247, 0.2) !important;
                color: #ffffff !important;
                font-weight: 500 !important;
                border-left: 2px solid #a855f7 !important;
              }

              /* Highlight active page */
              a[aria-current="page"],
              .nx-text-primary-600[aria-current="page"],
              .nx-font-medium[aria-current="page"] {
                background-color: rgba(168, 85, 247, 0.2) !important;
                color: #ffffff !important;
                font-weight: 500 !important;
                border-left: 2px solid #a855f7 !important;
              }

              /* Only keep specific styling for the actual active item */
              .nextra-sidebar a.active,
              .nextra-sidebar-container a.active {
                background-color: rgba(168, 85, 247, 0.2) !important;
                color: #ffffff !important;
                font-weight: 500 !important;
                border-left: 2px solid #a855f7 !important;
              }

              /* Make sure content links have standard styling */
              .nextra-content a,
              .nextra-content .nx-text-primary-600,
              .nextra-content [class*="nx-text-primary-"] {
                color: #a855f7 !important;
                text-decoration: underline !important;
                background-color: transparent !important;
                border-left: none !important;
                font-weight: normal !important;
              }
            `}
          </style>
        </Head>
        <body style={{ backgroundColor: '#000', color: '#e4e4e7' }}>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument 