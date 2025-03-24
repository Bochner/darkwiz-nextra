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