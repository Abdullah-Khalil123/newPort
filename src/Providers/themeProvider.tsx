'use client'
import { useEffect, useState } from 'react'

const ThemeProvider = ({ children }: { children: React.ReactNode }) => {
  const [mounted, setMounted] = useState(false)
  useEffect(() => {
    const savedTheme = localStorage.getItem('theme') || 'light'
    if (savedTheme) {
      document.querySelector('body')?.setAttribute('data-theme', savedTheme)
    }
    setMounted(true)
  }, [])

  if (!mounted) return null
  return <>{children}</>
}

export default ThemeProvider
