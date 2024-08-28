'use client'
import { CSSProperties, RefObject, useEffect, useRef, useState } from 'react'
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

  // useEffect(() => {
  //   // Check the user's system preference
  //   const userPrefersDark =
  //     window.matchMedia &&
  //     window.matchMedia('(prefers-color-scheme: dark)').matches

  //   handleTheme(!userPrefersDark)
  //   handleClick(boxRef, userPrefersDark)
  //   setActive(userPrefersDark)
  // }, [])
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
