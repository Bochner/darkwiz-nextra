# Dark Wizardry Theme Guide

This guide provides a detailed breakdown of the Dark Wizardry website theme and instructions on how to implement it in your Nextra project. The theme is built primarily with Tailwind CSS and features a dark, modern aesthetic with magical/fantasy-inspired UI elements.

## Table of Contents

- [Color Scheme](#color-scheme)
- [Typography](#typography)
- [Layout & Container Styles](#layout--container-styles)
- [Component Styling](#component-styling)
- [Special Effects](#special-effects)
- [Responsive Design](#responsive-design)
- [Tailwind Configuration](#tailwind-configuration)
- [Implementation Guide](#implementation-guide)

## Color Scheme

### Base Colors

The theme uses a dark color palette:

- **Primary Background**: Black (`#000000`)
- **Secondary Backgrounds**: 
  - Dark Gray 1: `#151515`
  - Dark Gray 2: `#202020` 
  - Dark Gray 3: `#2a2a2a`
- **Text Colors**:
  - Primary Text: `text-zinc-200` (light gray/almost white)
  - Secondary Text: `text-zinc-400` (medium gray)
  - Muted Text: `text-zinc-500` (darker gray)
- **Border Colors**: 
  - `#2a2a2a` (subtle borders)
  - `#303030` (slightly lighter borders)
- **Accent Colors**: Defined as CSS variables (see [Tailwind Configuration](#tailwind-configuration))

### Color Variables

The theme uses HSL color variables for flexible theming:

```css
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
```

## Typography

### Font Family

The site uses the Inter font family:

```css
@font-face {
  font-family: __Inter_d65c78;
  font-style: normal;
  font-weight: 100 900;
  font-display: swap;
  src: url(/_next/static/media/a34f9d1faa5f3315-s.p.woff2) format("woff2");
  unicode-range: u+00??,u+0131,u+0152-0153,u+02bb-02bc,u+02c6,u+02da,u+02dc,u+0304,u+0308,u+0329,u+2000-206f,u+20ac,u+2122,u+2191,u+2193,u+2212,u+2215,u+feff,u+fffd;
}
```

### Text Sizes

- Headings:
  - `text-4xl md:text-7xl` (Hero heading)
  - `text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl` (Section headings)
  - `text-2xl font-semibold` (Card headings)
  - `text-xl font-bold` (Smaller headings)
- Body Text:
  - `text-xl md:text-2xl` (Large body text)
  - `text-base` (Regular body text)
  - `text-sm` (Small text, used in cards, buttons)
  - `text-xs` (Very small text)

### Text Colors

- `text-zinc-100` (Very light - for high emphasis)
- `text-zinc-200/300` (Light - for headings and important text)
- `text-zinc-400` (Medium - for regular text)
- `text-zinc-500` (Dark - for low emphasis text)

## Layout & Container Styles

### Container

```css
.container {
  width: 100%;
  margin-right: auto;
  margin-left: auto;
  padding-right: 2rem;
  padding-left: 2rem;
}

@media (min-width: 1400px) {
  .container {
    max-width: 1400px;
  }
}
```

### Main Layout

```html
<div class="flex flex-col min-h-screen bg-black text-zinc-200">
  <!-- Header -->
  <header>...</header>
  
  <!-- Main content -->
  <main class="flex-grow">...</main>
  
  <!-- Footer -->
  <footer>...</footer>
</div>
```

### Section Spacing

- `py-12 md:py-24 lg:py-32` (Large vertical padding for sections)
- `py-20` (Medium vertical padding)
- `py-12` (Smaller vertical padding, like for footer)
- `space-y-4` / `space-x-4` (Spacing between elements)

## Component Styling

### Navigation Bar

```html
<div class="sticky top-0 z-50 w-full bg-black/95 backdrop-blur supports-[backdrop-filter]:bg-black/60 border-b border-[#2a2a2a]">
  <div class="container mx-auto">
    <header class="flex justify-between items-center px-4 py-4">
      <!-- Logo -->
      <a class="flex items-center space-x-4 group" href="/">
        <svg class="w-7 h-7 text-zinc-500 group-hover:text-zinc-300 transition-colors">...</svg>
        <span class="text-xl font-bold group-hover:text-zinc-300 transition-colors">Dark Wizardry</span>
      </a>
      
      <!-- Desktop Navigation -->
      <div class="hidden md:flex items-center">
        <nav class="flex space-x-6 items-center">
          <a class="block px-4 py-2 text-zinc-400 hover:text-zinc-200 transition-colors relative after:absolute after:bottom-0 after:left-0 after:right-0 after:h-[2px] after:bg-zinc-200 after:scale-x-0 hover:after:scale-x-100 after:transition-transform after:duration-300" href="#features">Features</a>
          <!-- More nav links -->
          
          <!-- Button -->
          <a href="/play">
            <button class="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium h-10 px-4 py-2 bg-zinc-900 text-white hover:bg-zinc-700 transition-colors">Play Now</button>
          </a>
        </nav>
      </div>
      
      <!-- Mobile menu button -->
      <button class="md:hidden p-2 rounded-md hover:bg-zinc-800/50 transition-colors">
        <svg class="w-6 h-6 text-zinc-300">...</svg>
      </button>
    </header>
    
    <!-- Mobile menu (hidden by default) -->
    <div class="md:hidden overflow-hidden transition-all duration-300 ease-in-out max-h-0 py-0">
      <!-- Mobile nav -->
    </div>
  </div>
</div>
```

### Hero Section

```html
<section class="container mx-auto px-4 py-20 text-center">
  <h1 class="text-4xl md:text-7xl font-bold mb-6 text-zinc-100">Your portal to magical realms.</h1>
  <p class="text-xl md:text-2xl mb-10 text-zinc-400 max-w-3xl mx-auto">Embark on an epic text-based adventure...</p>
  
  <!-- Buttons -->
  <div class="flex justify-center space-x-4 mb-12">
    <!-- Animated button with shimmer effect -->
    <a href="/play">
      <button style="--spread:90deg;--shimmer-color:#ffffff;--radius:100px;--speed:3s;--cut:0.05em;--bg:rgb(10, 10, 10)" class="group relative z-0 flex cursor-pointer items-center justify-center overflow-hidden whitespace-nowrap border border-white/10 px-6 py-3 text-white [background:var(--bg)] [border-radius:var(--radius)] transform-gpu transition-transform duration-300 ease-in-out active:translate-y-px">
        <div class="-z-30 blur-[2px] absolute inset-0 overflow-visible [container-type:size]">
          <div class="absolute inset-0 h-[100cqh] animate-shimmer-slide [aspect-ratio:1] [border-radius:0] [mask:none]">
            <div class="absolute -inset-full w-auto rotate-0 animate-spin-around [background:conic-gradient(from_calc(270deg-(var(--spread)*0.5)),transparent_0,var(--shimmer-color)_var(--spread),transparent_var(--spread))] [translate:0_0]"></div>
          </div>
        </div>
        Play Now
        <div class="insert-0 absolute size-full rounded-2xl px-4 py-1.5 text-sm font-medium shadow-[inset_0_-8px_10px_#ffffff1f] transform-gpu transition-all duration-300 ease-in-out group-hover:shadow-[inset_0_-6px_10px_#ffffff3f] group-active:shadow-[inset_0_-10px_10px_#ffffff3f]"></div>
        <div class="absolute -z-20 [background:var(--bg)] [border-radius:var(--radius)] [inset:var(--cut)]"></div>
      </button>
    </a>
    
    <!-- Secondary button -->
    <a href="/learn">
      <button style="--radius:100px;--bg:rgb(10, 10, 10)" class="group relative z-0 flex cursor-pointer items-center justify-center overflow-hidden whitespace-nowrap border border-white/10 px-6 py-3 text-white [background:var(--bg)] [border-radius:var(--radius)] transform-gpu transition-transform duration-300 ease-in-out active:translate-y-px">
        Explore More
        <div class="insert-0 absolute size-full rounded-2xl px-4 py-1.5 text-sm font-medium shadow-[inset_0_-8px_10px_#ffffff1f] transform-gpu transition-all duration-300 ease-in-out group-hover:shadow-[inset_0_-6px_10px_#ffffff3f] group-active:shadow-[inset_0_-10px_10px_#ffffff3f]"></div>
        <div class="absolute -z-20 [background:var(--bg)] [border-radius:var(--radius)] inset-0"></div>
      </button>
    </a>
  </div>
  
  <!-- Featured image with glow effect -->
  <div class="relative md:px-8 lg:px-8">
    <div class="absolute inset-0 bg-[#ffffff] blur-[100px] opacity-10"></div>
    <div class="relative rounded-xl overflow-hidden border border-[#2a2a2a] shadow-[0_0_20px_rgba(70,70,70,1)] hover:scale-105 transition-transform duration-500 hover:shadow-[0_0_40px_rgba(70,70,70,1)]">
      <img alt="Screenshot" class="w-full h-auto" src="/image.webp"/>
    </div>
  </div>
</section>
```

### Feature Cards

```html
<section id="features" class="py-20 bg-black">
  <div class="container mx-auto px-4 md:px-6">
    <div class="grid gap-6 lg:grid-cols-3 items-start group" data-spotlight="true">
      <!-- Feature Card with glow effect -->
      <div class="relative h-full bg-[#202020] rounded-3xl p-px before:absolute before:w-80 before:h-80 before:-left-40 before:-top-40 before:bg-slate-400 before:rounded-full before:opacity-0 before:pointer-events-none before:transition-opacity before:duration-500 before:translate-x-[var(--mouse-x)] before:translate-y-[var(--mouse-y)] before:group-hover:opacity-100 before:z-10 before:blur-[100px] after:absolute after:w-96 after:h-96 after:-left-48 after:-top-48 after:bg-[#646464] after:rounded-full after:opacity-0 after:pointer-events-none after:transition-opacity after:duration-500 after:translate-x-[var(--mouse-x)] after:translate-y-[var(--mouse-y)] after:hover:opacity-10 after:z-30 after:blur-[100px] overflow-hidden">
        <div class="relative h-full bg-black p-6 pb-8 rounded-[inherit] z-20 overflow-hidden">
          <div class="absolute bottom-0 translate-y-1/2 left-1/2 -translate-x-1/2 pointer-events-none -z-10 w-1/2 aspect-square">
            <div class="absolute inset-0 translate-z-0 bg-[#151515] rounded-full blur-[80px]"></div>
          </div>
          <div class="flex flex-col h-full items-center text-center">
            <!-- Card icon/image -->
            <div class="relative inline-flex">
              <div class="w-[40%] h-[40%] absolute inset-0 m-auto -translate-y-[10%] blur-3xl -z-10 rounded-full bg-slate-600"></div>
              <img class="inline-flex" src="./card-01.png" width="200" height="200" alt="Card 01"/>
            </div>
            
            <!-- Card content -->
            <div class="grow mb-5">
              <h2 class="text-xl text-slate-200 font-bold mb-1">Feature Title</h2>
              <p class="text-sm text-zinc-400">Feature description text goes here.</p>
            </div>
            
            <!-- Card button -->
            <a class="inline-flex justify-center items-center whitespace-nowrap rounded-lg bg-[#202020] hover:bg-black border border-[#303030] px-3 py-1.5 text-sm font-medium text-slate-300 focus-visible:outline-none focus-visible:ring focus-visible:ring-indigo-300 transition-colors duration-150" href="#">
              <svg class="fill-slate-500 mr-2">...</svg>
              <span>Action Text</span>
            </a>
          </div>
        </div>
      </div>
      
      <!-- More cards... -->
    </div>
  </div>
</section>
```

### Tabs Component

```html
<div role="tablist" aria-orientation="horizontal" class="inline-flex h-10 items-center justify-center rounded-md p-1 bg-zinc-900 text-zinc-400">
  <button type="button" role="tab" aria-selected="true" class="inline-flex items-center justify-center whitespace-nowrap rounded-sm px-3 py-1.5 text-sm font-medium data-[state=active]:shadow-sm data-[state=active]:bg-[#000000] data-[state=active]:text-zinc-200">Tab 1</button>
  <button type="button" role="tab" aria-selected="false" class="inline-flex items-center justify-center whitespace-nowrap rounded-sm px-3 py-1.5 text-sm font-medium data-[state=active]:shadow-sm data-[state=active]:bg-[#000000] data-[state=active]:text-zinc-200">Tab 2</button>
</div>
```

### Footer

```html
<footer class="bg-black py-12 border-t border-[#2a2a2a]">
  <div class="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center">
    <!-- Logo -->
    <a class="flex items-center space-x-4 mb-4 md:mb-0 group" href="/">
      <svg class="w-8 h-8 text-zinc-500 group-hover:text-zinc-300 transition-colors">...</svg>
      <span class="text-xl font-bold text-zinc-100 group-hover:text-zinc-300 transition-colors">Dark Wizardry</span>
    </a>
    
    <!-- Social icons -->
    <div class="flex space-x-6">
      <a href="#" class="text-zinc-400 hover:text-zinc-200 transition-colors">
        <svg class="w-6 h-6">...</svg>
      </a>
      <!-- More social links... -->
    </div>
  </div>
</footer>
```

## Special Effects

### Shimmer Button

The site features buttons with a shimmer effect:

```html
<button style="--spread:90deg;--shimmer-color:#ffffff;--radius:100px;--speed:3s;--cut:0.05em;--bg:rgb(10, 10, 10)" class="group relative z-0 flex cursor-pointer items-center justify-center overflow-hidden whitespace-nowrap border border-white/10 px-6 py-3 text-white [background:var(--bg)] [border-radius:var(--radius)] transform-gpu transition-transform duration-300 ease-in-out active:translate-y-px">
  <div class="-z-30 blur-[2px] absolute inset-0 overflow-visible [container-type:size]">
    <div class="absolute inset-0 h-[100cqh] animate-shimmer-slide [aspect-ratio:1] [border-radius:0] [mask:none]">
      <div class="absolute -inset-full w-auto rotate-0 animate-spin-around [background:conic-gradient(from_calc(270deg-(var(--spread)*0.5)),transparent_0,var(--shimmer-color)_var(--spread),transparent_var(--spread))] [translate:0_0]"></div>
    </div>
  </div>
  Button Text
  <div class="insert-0 absolute size-full rounded-2xl px-4 py-1.5 text-sm font-medium shadow-[inset_0_-8px_10px_#ffffff1f] transform-gpu transition-all duration-300 ease-in-out group-hover:shadow-[inset_0_-6px_10px_#ffffff3f] group-active:shadow-[inset_0_-10px_10px_#ffffff3f]"></div>
  <div class="absolute -z-20 [background:var(--bg)] [border-radius:var(--radius)] [inset:var(--cut)]"></div>
</button>
```

Required animations in your CSS:

```css
@keyframes shimmer-slide {
  to {
    transform: translate(calc(100cqw - 100%));
  }
}

.animate-shimmer-slide {
  animation: shimmer-slide var(--speed) ease-in-out infinite alternate;
}

@keyframes spin-around {
  0% {
    transform: translateZ(0) rotate(0);
  }
  15%, 35% {
    transform: translateZ(0) rotate(90deg);
  }
  65%, 85% {
    transform: translateZ(0) rotate(270deg);
  }
  to {
    transform: translateZ(0) rotate(1turn);
  }
}

.animate-spin-around {
  animation: spin-around calc(var(--speed) * 2) infinite linear;
}
```

### Glow Effects

1. Card glow effect (mouse-tracking):

```html
<div class="relative h-full bg-[#202020] rounded-3xl p-px before:absolute before:w-80 before:h-80 before:-left-40 before:-top-40 before:bg-slate-400 before:rounded-full before:opacity-0 before:pointer-events-none before:transition-opacity before:duration-500 before:translate-x-[var(--mouse-x)] before:translate-y-[var(--mouse-y)] before:group-hover:opacity-100 before:z-10 before:blur-[100px] after:absolute after:w-96 after:h-96 after:-left-48 after:-top-48 after:bg-[#646464] after:rounded-full after:opacity-0 after:pointer-events-none after:transition-opacity after:duration-500 after:translate-x-[var(--mouse-x)] after:translate-y-[var(--mouse-y)] after:hover:opacity-10 after:z-30 after:blur-[100px] overflow-hidden">
  <!-- Card content -->
</div>
```

2. Background glow for images/sections:

```html
<div class="relative">
  <div class="absolute inset-0 bg-[#ffffff] blur-[100px] opacity-10"></div>
  <div class="relative">
    <!-- Content -->
  </div>
</div>
```

3. Inner card glow:

```html
<div class="absolute bottom-0 translate-y-1/2 left-1/2 -translate-x-1/2 pointer-events-none -z-10 w-1/2 aspect-square">
  <div class="absolute inset-0 translate-z-0 bg-[#151515] rounded-full blur-[80px]"></div>
</div>
```

### Mouse-tracking Effect

For the mouse-tracking glow effect on cards, you'll need JavaScript:

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

## Responsive Design

### Breakpoints

The site uses standard Tailwind breakpoints:

- `sm`: Small screens (640px and up)
- `md`: Medium screens (768px and up)
- `lg`: Large screens (1024px and up)
- `xl`: Extra large screens (1280px and up)
- `2xl`: 2X large screens (1536px and up)

### Key Responsive Patterns

1. Navigation:
   - Desktop: Horizontal navigation with links
   - Mobile: Hamburger menu with dropdown

2. Layouts:
   - Single column on mobile
   - Multi-column on larger screens (`lg:grid-cols-3`)

3. Text sizes:
   - Smaller on mobile
   - Larger on desktop (`text-4xl md:text-7xl`)

4. Spacing:
   - Different padding at breakpoints (`py-12 md:py-24 lg:py-32`)

## Tailwind Configuration

To implement this theme, you'll need to configure Tailwind CSS with the following:

```javascript
// tailwind.config.js
module.exports = {
  darkMode: "class",
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
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

## Implementation Guide

### Step 1: Configure Tailwind CSS

1. Install the required dependencies:

```bash
npm install tailwindcss postcss autoprefixer tailwindcss-animate
```

2. Create or update the Tailwind config with the configuration provided above

3. Add the custom CSS variables to your global CSS file:

```css
@tailwind base;
@tailwind components;
@tailwind utilities;

@layer base {
  :root {
    --background: 0 0% 100%;
    --foreground: 240 10% 3.9%;
    /* Add all the variables from the Color Variables section */
  }

  .dark {
    --background: 240 10% 3.9%;
    --foreground: 0 0% 98%;
    /* Add all the dark theme variables */
  }

  * {
    @apply border-border;
  }

  body {
    @apply bg-background text-foreground;
  }
}
```

### Step 2: Update Your Layout Structure

Replace your main layout with the Dark Wizardry structure:

```jsx
export default function RootLayout({ children }) {
  return (
    <html lang="en" className="dark">
      <body className="flex flex-col min-h-screen bg-black text-zinc-200">
        <Header />
        <main className="flex-grow">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
```

### Step 3: Create the Main Components

1. Create a Header component with the navigation structure shown earlier
2. Create a Footer component with the structure shown earlier
3. Create reusable card components for feature sections
4. Create reusable button components with shimmer effects

### Step 4: Add JavaScript for Special Effects

Add the mouse-tracking JavaScript code to your project. This can be included in a script tag or as part of your component setup.

### Step 5: Additional Customization

1. Customize the font loading to use Inter font (or your preferred alternative)
2. Adjust the color variables to match your brand if needed
3. Modify the component styles while maintaining the overall dark theme aesthetic

### Step 6: Test Responsiveness

Ensure your implementation works across all screen sizes by testing at various breakpoints.

## Conclusion

By following this guide, you can implement the Dark Wizardry theme in your Nextra project. The theme combines a dark color palette with modern CSS effects to create an immersive, fantasy-inspired user interface.

Remember that the core of this theme is:

1. The dark color scheme with carefully chosen grays
2. Special effects like glows, shimmers, and hover animations
3. Clean typography with proper hierarchy
4. Responsive design patterns

These elements together create the distinctive Dark Wizardry aesthetic. 