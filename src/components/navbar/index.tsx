'use client'
import { useEffect, useRef, useState } from 'react'
import style from './navbar.module.css'
import Image from 'next/image'
import Link from 'next/link'
import Button from '@/assets/button'
import dropdown from '@/public/dropdown.svg'
import image from '@/public/creative-minimalist-letter-ak-logo-600nw-1501334273.webp'
import GetTime from '@/assets/time'
import linkedIn from '@/public/linkedin-svgrepo-com.svg'
import github from '@/public/github-svgrepo-com.svg'
import insta from '@/public/insta-svgrepo-com.svg'
import DropDown from '@/assets/dropDown'
import Toggle from '@/assets/Toggle'
import React from 'react'

const NavBar = () => {
  const dropDownRef = useRef<
    React.LegacyRef<HTMLButtonElement> | undefined | any
  >(null)

  const [showDropDown, setshowDropDown] = useState(false)
  const handleClickOutside = (event: { target: any }) => {
    if (dropDownRef.current) {
      if (!dropDownRef.current.contains(event.target)) {
        setshowDropDown(false)
      }
    }
  }

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside)
    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [])

  return (
    <div className={style.navbar}>
      <div className={style.navPaths}>
        <div className={style.logoImg}>
          <Link href={'/'}>
            <Image src={image} fill alt={'logo'} />
          </Link>
        </div>
        <div className={style.links}>
          <Link href={'/archive'}>Playground</Link>
          <Link href={''}>Services</Link>
          <Link href={''}>Case Studies</Link>
          <Link href={''}>About me</Link>
        </div>
      </div>
      <div className={style.bookings}>
        <div className={style.locAndTime}>
          <p style={{ fontWeight: 'bold' }}>Islamabad, Pakistan</p>
          <p>
            <GetTime />
          </p>
        </div>
        <Button
          text={'Slot Booked'}
          styles={{
            backgroundColor: 'var(--secondary-light)',
            color: '#8f8f8e',
          }}
        />
        <Button
          text={'Slot Booked'}
          styles={{
            backgroundColor: 'var(--secondary-light)',
            color: '#8f8f8e',
            marginRight: '10px',
          }}
        />
        <div className={style.toggleNav}>
          <Toggle styles={{ fontSize: '12px', fontWeight: '500' }} />
        </div>
      </div>
      <button className={style.mobileDropDown} ref={dropDownRef}>
        <Image
          className="svg"
          src={dropdown}
          alt={''}
          width={25}
          onClick={() => {
            setshowDropDown((showDropDown) => !showDropDown)
          }}
        />
        <DropDown active={showDropDown} showDropDown={setshowDropDown} />
      </button>

      <div className={style.socials}>
        <div className={style.circle}>
          <a
            href="https://www.instagram.com/3157abdullah/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image className="svg" src={insta} alt={''} width={30} />
          </a>
        </div>
        <div className={style.circle}>
          <a
            href="https://www.linkedin.com/in/abdullah-k-b6083722b/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image className="svg" src={linkedIn} alt={''} width={30} />
          </a>
        </div>
        <div className={style.circle}>
          <a
            href="https://github.com/Abdullah-Khalil123"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image className="svg" src={github} alt={''} width={30} />
          </a>
        </div>
      </div>
    </div>
  )
}

export default NavBar
