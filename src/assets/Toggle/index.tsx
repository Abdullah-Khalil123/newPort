'use client'
import { CSSProperties, RefObject, useRef, useState } from 'react'
import style from './toggle.module.css'
import { handleClick, handleTheme } from './togglehandler'

const Toggle = ({ styles }: { styles?: CSSProperties }) => {
  const [isActive, setActive] = useState<boolean>(false)
  const boxRef = useRef<HTMLDivElement>(null)
  const theamModes = ['Dark Mode', 'Light Mode']
  const toggleActive = () => {
    setActive((prevActive) => {
      handleClick(boxRef, !prevActive)
      handleTheme(prevActive)
      return !isActive
    })
  }
  return (
    <div className={style.toggle} style={styles}>
      <div className={style.toggleButton} onClick={toggleActive}>
        <div className={style.smollBox} ref={boxRef}></div>
      </div>
      <p>{isActive ? theamModes[0] : theamModes[1]}</p>
    </div>
  )
}

export default Toggle
