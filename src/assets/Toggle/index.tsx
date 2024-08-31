'use client'

import { CSSProperties } from 'react'
import style from './toggle.module.css'
import useThemeToggle from './useThemeToggle'

const Toggle = ({ styles }: { styles?: CSSProperties }) => {
  const { isActive, boxRef, toggleActive } = useThemeToggle()
  const theamModes = ['Dark Mode', 'Light Mode']

  return (
    <div className={style.toggle} style={styles} onClick={toggleActive}>
      <div className={style.toggleButton}>
        <div className={style.smollBox} ref={boxRef}></div>
      </div>
      <p>{isActive ? theamModes[0] : theamModes[1]}</p>
    </div>
  )
}

export default Toggle
