'use client'

import { CSSProperties, useEffect, useState } from 'react'
import style from './toggle.module.css'
import useThemeToggle from './useThemeToggle'
import { handleClick, handleTheme } from './togglehandler'
import gsap from 'gsap'
const Toggle = ({ styles }: { styles?: CSSProperties }) => {
  const { isActive, boxRef, toggleActive, setActive } = useThemeToggle()
  const [isMounted, setIsMounted] = useState(false)
  const theamModes = ['Dark Mode', 'Light Mode']

  useEffect(() => {
    if (localStorage.getItem('theme') == 'dark') {
      if (boxRef != null) {
        // handleClick(boxRef, true)
        gsap.to(boxRef.current, { x: isActive ? 24 : 0, duration: 0.2 })

        setActive(true)
        handleTheme(false)
      }
    }
    setIsMounted(true)
  })
  return (
    <div className={style.toggle} style={styles} onClick={toggleActive}>
      <div className={style.toggleButton}>
        <div className={style.smollBox} ref={boxRef}></div>
      </div>
      {isMounted ? <p>{isActive ? theamModes[0] : theamModes[1]}</p> : null}
    </div>
  )
}

export default Toggle
