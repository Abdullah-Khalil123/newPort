'use client'
import { CSSProperties, RefObject, useRef, useState } from 'react'
import style from './toggle.module.css'
import gsap from 'gsap'

function handleClick(ref: RefObject<HTMLDivElement>, isActive: boolean) {
  if (isActive) {
    gsap.to(ref.current, { x: 24, ease: 'bounce.out' })
  } else {
    gsap.to(ref.current, { x: 0, ease: 'bounce.out' })
  }
}

function handleTheme(prevActive: boolean) {
  document
    .querySelector('body')
    ?.setAttribute('data-theme', !prevActive ? 'dark' : 'light')

  const svgs: HTMLCollectionOf<Element> = document.getElementsByClassName('svg')
  for (let i = 0; i < svgs.length; i++) {
    svgs[i].setAttribute('data-theme-svg', !prevActive ? 'dark' : 'light')
  }

  const inputs = document.getElementsByTagName('input')
  if (!prevActive) {
    for (let i = 0; i < inputs.length; i++) {
      inputs[i].style.color = 'white'
    }
    document.getElementsByTagName('textarea')[0].style.color = 'white'
  } else {
    for (let i = 0; i < inputs.length; i++) {
      inputs[i].style.color = 'black'
    }
    document.getElementsByTagName('textarea')[0].style.color = 'black'
  }
}

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
