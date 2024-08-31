import { useState, useRef } from 'react'
import { handleClick, handleTheme } from './togglehandler'

const useThemeToggle = () => {
  const [isActive, setActive] = useState<boolean>(false)
  const boxRef = useRef<HTMLDivElement>(null)

  const toggleActive = () => {
    setActive((prevActive) => {
      const newTheme = !prevActive ? 'dark' : 'light'
      localStorage.setItem('theme', newTheme)
      handleClick(boxRef, !prevActive)
      handleTheme(prevActive)
      return !prevActive
    })
  }

  return {
    isActive,
    boxRef,
    setActive,
    toggleActive,
  }
}

export default useThemeToggle
