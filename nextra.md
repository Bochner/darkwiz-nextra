# Setting Up Nextra Documentation Theme

This guide explains how to install, configure, and manage a Nextra documentation site.

## Prerequisites

Before you begin, ensure you have:

- Node.js (v14 or higher)
- npm (v7 or higher) or yarn
- Git (for version control)

## Initial Setup

### 1. Create a New Next.js Project

```bash
npx create-next-app@latest darkwiz-nextra
cd darkwiz-nextra
```

### 2. Install Nextra and the Documentation Theme

```bash
npm install next-themes nextra nextra-theme-docs
```

### 3. Configure Nextra

Create a `next.config.js` file in the root of your project:

```js
const withNextra = require('nextra')({
  theme: 'nextra-theme-docs',
  themeConfig: './theme.config.js',
})

module.exports = withNextra()
```

### 4. Create a Theme Configuration

Create a `theme.config.js` file in the root of your project:

```js
export default {
  logo: <span>Dark Wizardry Documentation</span>,
  project: {
    link: 'https://github.com/yourusername/darkwiz-nextra',
  },
  docsRepositoryBase: 'https://github.com/yourusername/darkwiz-nextra/blob/main',
  footer: {
    text: 'Dark Wizardry MUD Documentation © 2023',
  },
  // ... other theme options
}
```

## Directory Structure

Organize your documentation in the `pages` directory:

```
pages/
├── index.mdx         # Homepage
├── _meta.json        # Navigation structure
├── getting-started/
│   ├── _meta.json    # Section navigation
│   ├── index.mdx     # Getting Started landing page
│   ├── installation.mdx
│   └── ...
├── game-mechanics/
│   ├── _meta.json
│   ├── index.mdx
│   └── ...
└── ...
```

### Creating Navigation Structure

Each folder should have a `_meta.json` file that defines the navigation order:

```json
{
  "index": "Introduction",
  "installation": "Installation Guide",
  "basic-commands": "Basic Commands"
}
```

## Managing Content

### Adding Pages

Create `.mdx` or `.md` files in the `pages` directory:

```md
# Installation Guide

This guide will help you install Dark Wizardry MUD.

## System Requirements

- Windows, macOS, or Linux
- ...
```

### Using Components

You can use React components in `.mdx` files:

```mdx
import { Callout } from 'nextra/components'

# Welcome to Dark Wizardry

<Callout type="info">
  This documentation is under active development.
</Callout>

## Getting Started
```

## Customizing the Theme

### Styling

Create a `styles/global.css` file for custom CSS and import it in your `pages/_app.js`:

```css
/* styles/global.css */
:root {
  --nextra-primary-hue: 270;
  --nextra-primary-saturation: 80%;
}

.dark {
  --nextra-primary-hue: 260;
  --nextra-primary-saturation: 75%;
}
```

### Theme Configuration Options

Common configuration options in `theme.config.js`:

```js
export default {
  // UI customizations
  banner: {
    key: 'beta-announcement',
    text: 'This is a beta version of the documentation.'
  },
  
  // Navigation options
  sidebar: {
    defaultMenuCollapseLevel: 1,
    titleComponent: ({ title }) => <>{title}</>,
  },
  
  // Search settings
  search: {
    placeholder: 'Search documentation...'
  },
  
  // Dark mode
  darkMode: true,
  
  // ... many more options
}
```

## Managing Dependencies

### Updating Nextra

```bash
npm update nextra nextra-theme-docs
```

### Troubleshooting Updates

If you encounter issues after updating:

1. Clear the `.next` folder:
   ```bash
   rm -rf .next
   ```

2. Reinstall dependencies:
   ```bash
   npm ci
   ```

## Deployment

The easiest way to deploy a Nextra site is with Vercel:

```bash
npm install -g vercel
vercel
```

For other platforms, build the static site:

```bash
npm run build
npm run export
```

This creates an `out` directory with static HTML files that can be deployed to any static hosting service.

## Common Features

### Code Syntax Highlighting

Nextra supports syntax highlighting for code blocks:

````md
```js
function hello() {
  console.log('Hello, Dark Wizardry!');
}
```
````

### Callouts/Admonitions

Use the Callout component for important notes:

```jsx
import { Callout } from 'nextra/components'

<Callout type="warning">
  This feature requires an admin account.
</Callout>
```

### Tables

```md
| Character Class | Strength | Intelligence | Dexterity |
| --------------- | :------: | :----------: | :-------: |
| Warrior         |    10    |      3       |     5     |
| Mage            |    3     |      10      |     5     |
| Rogue           |    5     |      5       |    10     |
```

## Advanced Configuration

### Custom Plugins

You can extend Nextra with custom plugins in your `next.config.js`:

```js
const withNextra = require('nextra')({
  // ... nextra config
})

module.exports = withNextra({
  // Your custom Next.js config
  images: {
    domains: ['yourimagedomain.com'],
  },
})
```

### Internationalization

For multi-language support, organize your content by locale:

```
pages/
├── en/
│   ├── index.mdx
│   └── ...
└── fr/
    ├── index.mdx
    └── ...
```

Configure in `next.config.js`:

```js
module.exports = withNextra({
  i18n: {
    locales: ['en', 'fr'],
    defaultLocale: 'en'
  }
})
``` 