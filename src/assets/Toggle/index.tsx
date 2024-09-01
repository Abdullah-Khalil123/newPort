'use client'

import { CSSProperties, useEffect, useState } from 'react'
import style from './toggle.module.css'
import useThemeToggle from './useThemeToggle'
import { handleClick } from './togglehandler'

const Toggle = ({ styles }: { styles?: CSSProperties }) => {
  const { isActive, boxRef, toggleActive, setActive } = useThemeToggle()
  const [isMounted, setIsMounted] = useState(false)
  const theamModes = ['Dark Mode', 'Light Mode']

  useEffect(() => {
    if (localStorage.getItem('theme') == 'dark') {
      if (boxRef != null) {
        handleClick(boxRef, true)
        setActive(true)
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
