'use client'
import React, { useEffect } from 'react'
import style from './about.module.css'
import MainAbout from './Sections/MainAbout'

const About = () => {
  useEffect(() => {
    const socials = document.getElementById('socialsRef')
    if (socials) {
      socials.style.display = 'none'
    }
    return () => {
      if (socials) {
        socials.style.display = 'block'
      }
    }
  }, [])
  return (
    <div className={style.aboutPage}>
      <MainAbout />
    </div>
  )
}

export default About
