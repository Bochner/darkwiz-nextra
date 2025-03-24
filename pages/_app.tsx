import { AppProps } from 'next/app'
import { useEffect } from 'react'
import '../tailwind.css'
import '../styles/globals.css'
import '../styles/custom.css'

export default function App({ Component, pageProps }: AppProps) {
  // Force dark mode with a side effect
  useEffect(() => {
    // Ensure dark mode is set in localStorage
    localStorage.setItem('theme', 'dark');
    
    // Ensure the 'dark' class is applied to the HTML element
    document.documentElement.classList.add('dark');
    
    // Disable any theme switcher by overriding its function
    const originalSetItem = localStorage.setItem;
    localStorage.setItem = function(key, value) {
      if (key === 'theme') {
        return originalSetItem.call(this, key, 'dark');
      }
      return originalSetItem.call(this, key, value);
    };
  }, []);
  
  return <Component {...pageProps} />
} 