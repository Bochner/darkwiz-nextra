const withNextra = require('nextra')({
  theme: 'nextra-theme-docs',
  themeConfig: './theme.config.tsx',
  search: {
    codeblocks: true,
    indexContent: true  // Ensure all content is indexed for search
  }
})

module.exports = withNextra()
