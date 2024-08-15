'use client'
import React, { CSSProperties, useEffect } from 'react'
import style from './contact.module.css'
import Image from 'next/image'
import github from '@/public/github-svgrepo-com.svg'
import linkedIn from '@/public/linkedin-svgrepo-com.svg'
import insta from '@/public/insta-svgrepo-com.svg'
import Button from '@/assets/button'
import { handleThemeChange } from './handleThemeChange'

const ContactMe = () => {
  useEffect(() => {
    handleThemeChange()
    const socials = document.getElementById('socialsRef')
    if (socials) {
      socials.style.display = 'none'
    }
    return () => {
      if (socials) {
        socials.style.display = 'block'
      }
    }
  })
  return (
    <div className={style.ContactMe}>
      <div className={style.getInTouch}>
        <h3>Get in touch</h3>

        <section>
          <h4>Visit me</h4>
          <p>Come say hello at my freelancing profiles</p>
          <a
            href="https://www.upwork.com/freelancers/abdullahk307"
            target="_blank"
          >
            Upwork
          </a>
          <a href="https://www.fiverr.com/abdullahkhalil6" target="_blank">
            Fiverr
          </a>
        </section>

        <section>
          <h4>Chat with me</h4>
          <p>Im here to help</p>
          <a
            href=""
            onClick={(e) => {
              e.preventDefault() // Prevent the default link behavior

              const email = 'abdullah.khalil123321@gmail.com'
              navigator.clipboard
                .writeText(email)
                .then(() => {
                  alert('Email copied to clipboard!')
                })
                .catch((err) => {
                  console.error('Failed to copy: ', err)
                })
            }}
          >
            abdullah.khalil123321@gmail.com
          </a>
        </section>

        <section>
          <h4>Call me</h4>
          <p>Mon-Sat from 10am to 6pm</p>
          <a href="" id={style.num}>
            03123456789
          </a>
        </section>

        <div>
          <h4>Social media</h4>
          <div className={style.ImagesSocials}>
            <div className={style.ImageHolder}>
              <Image src={insta} alt={''} fill />
            </div>
            <div className={style.ImageHolder}>
              <Image src={github} alt={''} fill />
            </div>
            <div className={style.ImageHolder}>
              <Image src={linkedIn} alt={''} fill />
            </div>
          </div>
        </div>
      </div>
      <Forms />
    </div>
  )
}

const Forms = () => {
  return (
    <form
      action=""
      className={style.forms}
      onSubmit={(e) => {
        e.preventDefault()
      }}
    >
      <div className="flexItems">
        <Input
          title={'First Name'}
          placeholder={'Alex'}
          styles={{ marginRight: '20px', width: '100%' }}
        />
        <Input
          title={'Last Name'}
          placeholder={'Regan'}
          styles={{ width: '100%' }}
        />
      </div>
      <Input title={'Company Name'} placeholder={'Google'} />
      <Input title={'Email'} placeholder={'abc@email.com'} />
      <div className={style.input} style={{}}>
        <p>Message</p>
        <textarea
          name="message"
          placeholder="Tell us what i can help you with"
        ></textarea>
      </div>
      <div className={style.receiveInfo}>
        <input type="checkbox" />
        <p>
          I{"'"}d like to receive more information about this company. I
          understand and agree to the Privacy Policy
        </p>
      </div>
      <Button
        text={'Send Message'}
        styles={{ width: '100%', backgroundColor: '#6f86d6', height: '40px' }}
      />
    </form>
  )
}

const Input = ({
  title,
  placeholder,
  styles,
  type = 'text',
}: {
  title: string
  placeholder: string
  styles?: CSSProperties
  type?: string
}) => {
  return (
    <div className={style.input} style={styles}>
      <p>{title}</p>
      <input type={type} placeholder={placeholder} />
    </div>
  )
}

export default ContactMe
