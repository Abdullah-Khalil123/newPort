'use client'
import { CSSProperties, RefObject, useEffect, useRef, useState } from 'react'
import style from './toggle.module.css'
import { handleClick, handleTheme } from './togglehandler'

const Toggle = ({ styles }: { styles?: CSSProperties }) => {
  const [isActive, setActive] = useState<boolean>(
    document.querySelector('body')?.getAttribute('data-theme') == 'dark'
  )
  const boxRef = useRef<HTMLDivElement>(null)
  const theamModes = ['Dark Mode', 'Light Mode']
  const toggleActive = () => {
    setActive((prevActive) => {
      handleClick(boxRef, !prevActive)
      handleTheme(prevActive)
      return !isActive
    })
  }

  useEffect(() => {})
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
