'use client'
import React, { useEffect } from 'react'
import style from './mainAbout.module.css'
import SplitType from 'split-type'
import gsap from 'gsap'

const MainAbout = () => {
  useEffect(() => {
    new SplitType('h1#aboutMainText')

    window.addEventListener('resize', () => {
      new SplitType('h1#aboutMainText')
    })
    gsap.fromTo(
      '.word',
      {
        opacity: 0,
        x: -10,
      },
      {
        x: 0,
        opacity: 1,
        stagger: 0.01,
        duration: 2,
        ease: 'power4.out',
      }
    )

    return () => {
      window.removeEventListener('resize', () => {
        new SplitType('h1#aboutMainText')
      })
    }
  }, [])

  return (
    <div className={style.MainAbout}>
      <h1 id="aboutMainText">
        I’m a digital creator who loves turning wild ideas into beautiful,
        functional code. When I’m not coding, I’m exploring new tech trends or
        brewing the perfect cup of coffee. Let’s make something amazing
        together!
      </h1>
    </div>
  )
}

export default MainAbout
