import { RefObject } from 'react'
import gsap from 'gsap'

// Function to handle theme change
function handleTheme(prevActive: boolean) {
  const theme = !prevActive ? 'dark' : 'light'

  document.querySelector('body')?.setAttribute('data-theme', theme)

  const svgs: HTMLCollectionOf<Element> = document.getElementsByClassName('svg')
  for (let i = 0; i < svgs.length; i++) {
    svgs[i].setAttribute('data-theme-svg', theme)
  }

  const inputs = document.getElementsByTagName('input')
  const textarea = document.getElementsByTagName('textarea')[0]

  if (inputs.length > 0) {
    for (let i = 0; i < inputs.length; i++) {
      inputs[i].style.color = theme === 'dark' ? 'white' : 'black'
    }
    if (textarea) {
      textarea.style.color = theme === 'dark' ? 'white' : 'black'
    }
  }
}

// Function to handle animation click
function handleClick(ref: RefObject<HTMLDivElement>, isActive: boolean) {
  gsap.to(ref.current, { x: isActive ? 24 : 0, ease: 'bounce.out' })
}

export { handleClick, handleTheme }
