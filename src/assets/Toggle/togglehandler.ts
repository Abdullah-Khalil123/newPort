import { RefObject } from 'react'
import gsap from 'gsap'

function handleTheme(prevActive: boolean) {
  document
    .querySelector('body')
    ?.setAttribute('data-theme', !prevActive ? 'dark' : 'light')

  const svgs: HTMLCollectionOf<Element> = document.getElementsByClassName('svg')
  for (let i = 0; i < svgs.length; i++) {
    svgs[i].setAttribute('data-theme-svg', !prevActive ? 'dark' : 'light')
  }

  const inputs = document.getElementsByTagName('input')
  if (inputs.length > 0) {
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
}

function handleClick(ref: RefObject<HTMLDivElement>, isActive: boolean) {
  if (isActive) {
    gsap.to(ref.current, { x: 24, ease: 'bounce.out' })
  } else {
    gsap.to(ref.current, { x: 0, ease: 'bounce.out' })
  }
}

export { handleClick, handleTheme }
