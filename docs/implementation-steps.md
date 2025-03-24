# Dark Wizardry Theme Implementation Steps

This document outlines the necessary steps to upgrade the current Nextra documentation site to match the Dark Wizardry theme as detailed in the `darkwiz-theme-guide.md`. The current codebase is a standard Nextra documentation site without Tailwind CSS integration.

## Current Codebase Analysis

The current codebase is a Nextra docs site with the following characteristics:

- **Framework**: Next.js 13 with Nextra documentation theme
- **Styling**: No Tailwind CSS currently integrated, only basic CSS modules
- **Components**: Minimal custom components (only a counter example)
- **Theme Configuration**: Basic Nextra theme configuration in `theme.config.tsx`
- **Pages**: MDX-based documentation pages organized in directories
- **Dependencies**: No UI library or Tailwind CSS dependencies

## Implementation Steps

### 1. Install Required Dependencies

```bash
npm install -D tailwindcss postcss autoprefixer tailwindcss-animate
# or with pnpm
pnpm add -D tailwindcss postcss autoprefixer tailwindcss-animate
```

### 2. Initialize Tailwind CSS

```bash
npx tailwindcss init -p
```

This will create:
- `tailwind.config.js`: Tailwind configuration
- `postcss.config.js`: PostCSS configuration

### 3. Configure Tailwind CSS

Replace the content of `tailwind.config.js` with the configuration from the Dark Wizardry theme guide:

```javascript
// tailwind.config.js
module.exports = {
  darkMode: "class",
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './theme.config.tsx'
  ],
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "shimmer-slide": {
          to: {
            transform: "translate(calc(100cqw - 100%))",
          },
        },
        "spin-around": {
          "0%": {
            transform: "translateZ(0) rotate(0)",
          },
          "15%, 35%": {
            transform: "translateZ(0) rotate(90deg)",
          },
          "65%, 85%": {
            transform: "translateZ(0) rotate(270deg)",
          },
          "to": {
            transform: "translateZ(0) rotate(1turn)",
          },
        },
        "rainbow": {
          "0%": {
            backgroundPosition: "0%",
          },
          "100%": {
            backgroundPosition: "200%",
          },
        },
      },
      animation: {
        "shimmer-slide": "shimmer-slide var(--speed) ease-in-out infinite alternate",
        "spin-around": "spin-around calc(var(--speed) * 2) infinite linear",
        "rainbow": "rainbow var(--speed, 2s) infinite linear",
      },
    },
  },
  plugins: [
    require("tailwindcss-animate"),
  ],
}
```

### 4. Create Global CSS File

Create a new file `styles/globals.css` with the following content:

```css
@tailwind base;
@tailwind components;
@tailwind utilities;

@layer base {
  :root {
    --background: 0 0% 100%;
    --foreground: 240 10% 3.9%;
    --card: 0 0% 100%;
    --card-foreground: 240 10% 3.9%;
    --popover: 0 0% 100%;
    --popover-foreground: 240 10% 3.9%;
    --primary: 240 5.9% 10%;
    --primary-foreground: 0 0% 98%;
    --secondary: 240 4.8% 95.9%;
    --secondary-foreground: 240 5.9% 10%;
    --muted: 240 4.8% 95.9%;
    --muted-foreground: 240 3.8% 46.1%;
    --accent: 240 4.8% 95.9%;
    --accent-foreground: 240 5.9% 10%;
    --destructive: 0 84.2% 60.2%;
    --destructive-foreground: 0 0% 98%;
    --border: 240 5.9% 90%;
    --input: 240 5.9% 90%;
    --ring: 240 10% 3.9%;
    --radius: 0.5rem;
    
    /* Accent Colors */
    --color-1: 0 100% 63%;   /* Red */
    --color-2: 270 100% 63%; /* Purple */
    --color-3: 210 100% 63%; /* Blue */
    --color-4: 195 100% 63%; /* Cyan */
    --color-5: 90 100% 63%;  /* Green */
  }

  .dark {
    --background: 240 10% 3.9%;
    --foreground: 0 0% 98%;
    --card: 240 10% 3.9%;
    --card-foreground: 0 0% 98%;
    --popover: 240 10% 3.9%;
    --popover-foreground: 0 0% 98%;
    --primary: 0 0% 98%;
    --primary-foreground: 240 5.9% 10%;
    --secondary: 240 3.7% 15.9%;
    --secondary-foreground: 0 0% 98%;
    --muted: 240 3.7% 15.9%;
    --muted-foreground: 240 5% 64.9%;
    --accent: 240 3.7% 15.9%;
    --accent-foreground: 0 0% 98%;
    --destructive: 0 62.8% 30.6%;
    --destructive-foreground: 0 0% 98%;
    --border: 240 3.7% 15.9%;
    --input: 240 3.7% 15.9%;
    --ring: 240 4.9% 83.9%;
  }

  * {
    @apply border-border;
  }

  body {
    @apply bg-background text-foreground;
  }
}
```

### 5. Update Next.js Configuration

Modify `next.config.js` to include the global CSS:

```javascript
const withNextra = require('nextra')({
  theme: 'nextra-theme-docs',
  themeConfig: './theme.config.tsx',
})

module.exports = withNextra({
  // Include any additional Next.js configuration options here
})
```

### 6. Create _app.tsx for Global CSS Import

Create or update the `pages/_app.tsx` file:

```tsx
import { AppProps } from 'next/app'
import '../styles/globals.css'

export default function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}
```

### 7. Update Theme Configuration

Modify `theme.config.tsx` to include the Dark Wizardry styling:

```tsx
import React from 'react'
import { DocsThemeConfig } from 'nextra-theme-docs'

const config: DocsThemeConfig = {
  logo: (
    <div className="flex items-center space-x-4 group">
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-7 h-7 text-zinc-500 group-hover:text-zinc-300 transition-colors">
        <polyline points="4 17 10 11 4 5"></polyline>
        <line x1="12" x2="20" y1="19" y2="19"></line>
      </svg>
      <span className="text-xl font-bold group-hover:text-zinc-300 transition-colors">Dark Wizardry</span>
    </div>
  ),
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
    </>
  ),
  darkMode: true,
  nextThemes: {
    defaultTheme: 'dark',
  },
  primaryHue: 280,
  sidebar: {
    defaultMenuCollapseLevel: 1,
    titleComponent: ({ title, type }) => {
      return <div className="text-zinc-300 hover:text-zinc-100 transition-colors">{title}</div>
    },
    className: 'bg-black text-zinc-200',
  },
  toc: {
    float: true,
    title: "On This Page",
    className: 'text-zinc-400',
  },
  navbar: {
    className: 'sticky top-0 z-50 w-full bg-black/95 backdrop-blur supports-[backdrop-filter]:bg-black/60 border-b border-[#2a2a2a]',
  },
  main: {
    className: 'bg-black text-zinc-200',
  },
  themeSwitch: {
    useOptions() {
      return {
        dark: 'Dark',
        light: 'Light',
      }
    },
  },
}

export default config
```

### 8. Create Component Directory Structure

Set up the following component directory structure:

```
components/
├── ui/
│   ├── Button.tsx
│   ├── Card.tsx
│   ├── Header.tsx
│   ├── Footer.tsx
│   └── ...
├── layout/
│   ├── MainLayout.tsx
│   └── ...
```

### 9. Implement UI Components

#### Button Component

Create `components/ui/Button.tsx`:

```tsx
import React from 'react'

interface ButtonProps {
  children: React.ReactNode
  variant?: 'primary' | 'secondary'
  href?: string
  shimmer?: boolean
  className?: string
  onClick?: () => void
}

export function Button({ 
  children, 
  variant = 'primary', 
  href, 
  shimmer = false,
  className = '',
  onClick 
}: ButtonProps) {
  const buttonContent = (
    <>
      {shimmer ? (
        <button 
          style={{
            '--spread': '90deg',
            '--shimmer-color': '#ffffff',
            '--radius': '100px',
            '--speed': '3s',
            '--cut': '0.05em',
            '--bg': 'rgb(10, 10, 10)'
          } as React.CSSProperties} 
          className={`group relative z-0 flex cursor-pointer items-center justify-center overflow-hidden whitespace-nowrap border border-white/10 px-6 py-3 text-white [background:var(--bg)] [border-radius:var(--radius)] transform-gpu transition-transform duration-300 ease-in-out active:translate-y-px ${className}`}
          onClick={onClick}
        >
          <div className="-z-30 blur-[2px] absolute inset-0 overflow-visible [container-type:size]">
            <div className="absolute inset-0 h-[100cqh] animate-shimmer-slide [aspect-ratio:1] [border-radius:0] [mask:none]">
              <div className="absolute -inset-full w-auto rotate-0 animate-spin-around [background:conic-gradient(from_calc(270deg-(var(--spread)*0.5)),transparent_0,var(--shimmer-color)_var(--spread),transparent_var(--spread))] [translate:0_0]"></div>
            </div>
          </div>
          {children}
          <div className="insert-0 absolute size-full rounded-2xl px-4 py-1.5 text-sm font-medium shadow-[inset_0_-8px_10px_#ffffff1f] transform-gpu transition-all duration-300 ease-in-out group-hover:shadow-[inset_0_-6px_10px_#ffffff3f] group-active:shadow-[inset_0_-10px_10px_#ffffff3f]"></div>
          <div className="absolute -z-20 [background:var(--bg)] [border-radius:var(--radius)] [inset:var(--cut)]"></div>
        </button>
      ) : (
        <button 
          style={{
            '--radius': '100px',
            '--bg': 'rgb(10, 10, 10)'
          } as React.CSSProperties}
          className={`group relative z-0 flex cursor-pointer items-center justify-center overflow-hidden whitespace-nowrap border border-white/10 px-6 py-3 text-white [background:var(--bg)] [border-radius:var(--radius)] transform-gpu transition-transform duration-300 ease-in-out active:translate-y-px ${className}`}
          onClick={onClick}
        >
          {children}
          <div className="insert-0 absolute size-full rounded-2xl px-4 py-1.5 text-sm font-medium shadow-[inset_0_-8px_10px_#ffffff1f] transform-gpu transition-all duration-300 ease-in-out group-hover:shadow-[inset_0_-6px_10px_#ffffff3f] group-active:shadow-[inset_0_-10px_10px_#ffffff3f]"></div>
          <div className="absolute -z-20 [background:var(--bg)] [border-radius:var(--radius)] inset-0"></div>
        </button>
      )}
    </>
  )

  if (href) {
    return (
      <a href={href}>
        {buttonContent}
      </a>
    )
  }

  return buttonContent
}
```

#### Card Component

Create `components/ui/Card.tsx`:

```tsx
import React, { useEffect, useRef } from 'react'

interface CardProps {
  children: React.ReactNode
  className?: string
  title?: string
  icon?: React.ReactNode
  action?: {
    text: string
    href: string
    icon?: React.ReactNode
  }
}

export function Card({ 
  children, 
  className = '',
  title,
  icon,
  action
}: CardProps) {
  const cardRef = useRef<HTMLDivElement>(null)
  
  useEffect(() => {
    const card = cardRef.current
    if (!card) return
    
    const handleMouseMove = (e: MouseEvent) => {
      const rect = card.getBoundingClientRect()
      const x = e.clientX - rect.left
      const y = e.clientY - rect.top
      
      card.style.setProperty('--mouse-x', `${x}px`)
      card.style.setProperty('--mouse-y', `${y}px`)
    }
    
    card.addEventListener('mousemove', handleMouseMove)
    
    return () => {
      card.removeEventListener('mousemove', handleMouseMove)
    }
  }, [])
  
  return (
    <div ref={cardRef} className={`relative h-full bg-[#202020] rounded-3xl p-px before:absolute before:w-80 before:h-80 before:-left-40 before:-top-40 before:bg-slate-400 before:rounded-full before:opacity-0 before:pointer-events-none before:transition-opacity before:duration-500 before:translate-x-[var(--mouse-x)] before:translate-y-[var(--mouse-y)] before:group-hover:opacity-100 before:z-10 before:blur-[100px] after:absolute after:w-96 after:h-96 after:-left-48 after:-top-48 after:bg-[#646464] after:rounded-full after:opacity-0 after:pointer-events-none after:transition-opacity after:duration-500 after:translate-x-[var(--mouse-x)] after:translate-y-[var(--mouse-y)] after:hover:opacity-10 after:z-30 after:blur-[100px] overflow-hidden ${className}`}>
      <div className="relative h-full bg-black p-6 pb-8 rounded-[inherit] z-20 overflow-hidden">
        <div className="absolute bottom-0 translate-y-1/2 left-1/2 -translate-x-1/2 pointer-events-none -z-10 w-1/2 aspect-square">
          <div className="absolute inset-0 translate-z-0 bg-[#151515] rounded-full blur-[80px]"></div>
        </div>
        <div className="flex flex-col h-full items-center text-center">
          {icon && (
            <div className="relative inline-flex mb-4">
              <div className="w-[40%] h-[40%] absolute inset-0 m-auto -translate-y-[10%] blur-3xl -z-10 rounded-full bg-slate-600"></div>
              {icon}
            </div>
          )}
          
          {title && (
            <h2 className="text-xl text-slate-200 font-bold mb-1">{title}</h2>
          )}
          
          <div className="grow mb-5">
            {children}
          </div>
          
          {action && (
            <a className="inline-flex justify-center items-center whitespace-nowrap rounded-lg bg-[#202020] hover:bg-black border border-[#303030] px-3 py-1.5 text-sm font-medium text-slate-300 focus-visible:outline-none focus-visible:ring focus-visible:ring-indigo-300 transition-colors duration-150" href={action.href}>
              {action.icon && action.icon}
              <span>{action.text}</span>
            </a>
          )}
        </div>
      </div>
    </div>
  )
}
```

### 10. Create Script for Mouse Tracking Effect

Create `public/js/spotlight.js` with the mouse tracking code:

```javascript
document.addEventListener('DOMContentLoaded', () => {
  const spotlightGroups = document.querySelectorAll('[data-spotlight="true"]');
  
  spotlightGroups.forEach(group => {
    group.addEventListener('mousemove', e => {
      const rect = group.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      
      group.style.setProperty('--mouse-x', `${x}px`);
      group.style.setProperty('--mouse-y', `${y}px`);
    });
  });
});
```

### 11. Create Public Directory for Assets

Set up the public directory:

```
public/
├── images/
│   ├── card-01.png
│   ├── card-02.png
│   ├── card-03.png
│   └── mushimage.webp
├── js/
│   └── spotlight.js
└── favicon.ico
```

### 12. Add Script Import to Layout

Update your main layout component to include the spotlight script:

```tsx
<script src="/js/spotlight.js" defer></script>
```

### 13. Create Custom Font Configuration (Optional)

To use Inter font, add the following to your CSS or customize the font loading in Next.js:

```tsx
// In pages/_document.tsx
import Document, { Html, Head, Main, NextScript } from 'next/document'

class MyDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <Head>
          <link
            rel="preload"
            href="/fonts/inter.woff2"
            as="font"
            type="font/woff2"
            crossOrigin="anonymous"
          />
        </Head>
        <body className="bg-black text-zinc-200">
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument
```

### 14. Test Integration

After implementing these changes, ensure the following elements work correctly:

- Dark theme is correctly applied
- UI components display with proper styling
- Mouse-tracking effect works on card components
- Shimmer buttons display and animate correctly
- Responsive design works on different screen sizes

## Additional Customization

After implementing the base theme, consider these additional customizations:

1. **Document-specific styling**: Add specific Tailwind classes to individual documentation pages.
2. **Code blocks**: Customize the code block styling to match the dark theme.
3. **Table styles**: Update table styles to match the dark theme colors.
4. **Search bar**: Customize the search bar appearance to match the theme.
5. **Callouts/Admonitions**: Style the Nextra admonitions (note, warning, etc.) to match the theme.

## Testing and Refinement

After implementation, perform the following:

1. Test the site on multiple devices and browsers
2. Verify all animations work correctly
3. Ensure dark/light mode toggle works properly
4. Check for any styling conflicts between Nextra's default styles and the Dark Wizardry theme
5. Validate accessibility with keyboard navigation and screen readers

## Conclusion

By following these steps, you'll be able to transform your current Nextra documentation site into one that matches the Dark Wizardry theme. The implementation focuses on adding Tailwind CSS and creating custom components to achieve the desired look and feel without modifying the existing content. 