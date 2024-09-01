'use client'
import React, { CSSProperties, useEffect, useRef, useState } from 'react'
import style from './contact.module.css'
import Image from 'next/image'
import github from '@/public/github-svgrepo-com.svg'
import linkedIn from '@/public/linkedin-svgrepo-com.svg'
import insta from '@/public/insta-svgrepo-com.svg'
import Button from '@/assets/button'
import { handleThemeChange } from './handleThemeChange'
import { useMutation } from 'react-query'
import sendContact from '@/api/contactsApi'
import { inter } from '../layoutFont'
import toast, { Toaster } from 'react-hot-toast'
import Link from 'next/link'

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
      <Toaster />
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
              <Link
                href={'https://www.instagram.com/3157abdullah/'}
                target="blank"
              >
                <Image src={insta} alt={''} fill />
              </Link>
            </div>
            <div className={style.ImageHolder}>
              <Link
                href={'https://github.com/abdullah-Khalil123'}
                target="blank"
              >
                <Image src={github} alt={''} fill />
              </Link>
            </div>
            <div className={style.ImageHolder}>
              <Link
                href={'https://www.linkedin.com/in/abdullah-k-b6083722b/'}
                target="blank"
              >
                <Image src={linkedIn} alt={''} fill />
              </Link>
            </div>
          </div>
        </div>
      </div>
      <Forms />
    </div>
  )
}

interface contactDataInterface {
  firstName: String
  lastName: String
  companyName: String
  email: String
  message: String
  reciveInfo: boolean
}

const Forms = () => {
  const [contactData, setcontactData] = useState<contactDataInterface>({
    firstName: '',
    lastName: '',
    companyName: '',
    email: '',
    message: '',
    reciveInfo: false,
  })
  const checkBoxRef = useRef<HTMLInputElement>(null)
  const { mutateAsync: sendContactMutation } = useMutation({
    mutationFn: sendContact,
  })

  useEffect(() => document.querySelector('textarea')?.focus())

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    try {
      toast.promise(sendContactMutation(contactData), {
        loading: 'Sending...',
        success: <b>Message Sent</b>,
        error: <b>Already Sent!</b>,
      })
    } catch (error: any) {}
  }
  return (
    <form action="" className={style.forms} onSubmit={handleSubmit}>
      <div className="flexItems">
        <Input
          title={'First Name'}
          placeholder={'Alex'}
          styles={{ marginRight: '20px', width: '100%' }}
          required={true}
          name="firstName"
          onChange={setcontactData}
        />
        <Input
          title={'Last Name'}
          placeholder={'Regan'}
          styles={{ width: '100%' }}
          name="lastName"
          onChange={setcontactData}
        />
      </div>
      <Input
        title={'Company Name'}
        placeholder={'Google'}
        name="companyName"
        onChange={setcontactData}
      />
      <Input
        title={'Email'}
        placeholder={'alexregan@gmail.com'}
        required={true}
        name="email"
        onChange={setcontactData}
      />
      <div className={style.input} style={{}}>
        <p>Message</p>
        <textarea
          className={`${inter.className}`}
          name="message"
          placeholder="Tell us what i can help you with"
          onChange={(e) => {
            setcontactData({ ...contactData, message: e.target.value })
          }}
        ></textarea>
      </div>
      <div className={style.receiveInfo}>
        <input
          type="checkbox"
          checked={contactData.reciveInfo}
          ref={checkBoxRef}
          onChange={(e) => {
            setcontactData({
              ...contactData,
              reciveInfo: e.target.checked,
            })
          }}
        />

        <p
          onClick={() => {
            if (checkBoxRef.current) {
              checkBoxRef.current.checked = !checkBoxRef.current.checked
            }
          }}
        >
          I{"'"}d like to receive more information about this company. I
          understand and agree to the Privacy Policy
        </p>
      </div>
      <Button
        text={'Send Message'}
        styles={{ width: '100%', backgroundColor: '#6f86d6', height: '40px' }}
        onClick={() => {}}
      />
    </form>
  )
}

const Input = ({
  title,
  placeholder,
  styles,
  type = 'text',
  required = false,
  onChange,
  name,
}: {
  title: string
  placeholder: string
  styles?: CSSProperties
  type?: string
  required?: boolean
  onChange?: React.Dispatch<React.SetStateAction<contactDataInterface>>
  name: string
}) => {
  return (
    <div className={style.input} style={styles}>
      <p>{title}</p>
      <input
        type={type}
        placeholder={placeholder}
        required={required}
        onChange={(event) => {
          if (onChange) {
            onChange((prev) => ({
              ...prev,
              [name]: event.target.value,
            }))
          }
        }}
      />
    </div>
  )
}

export default ContactMe
