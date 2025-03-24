import React from 'react'

interface MainLayoutProps {
  children: React.ReactNode
}

export function MainLayout({ children }: MainLayoutProps) {
  return (
    <div className="min-h-screen bg-black text-zinc-200">
      <main className="container py-8 mx-auto">{children}</main>
    </div>
  )
} 