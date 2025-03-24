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