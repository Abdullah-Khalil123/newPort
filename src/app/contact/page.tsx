import React from 'react'
import style from './contact.module.css'

const ContactMe = () => {
  return (
    <div>
      <div className={style.getInTouch}>
        <h3>Get in touch</h3>

        <section>
          <h4>Visit me</h4>
          <p>Come say hello at my freelancing profiles</p>
          <a href="">Upwork</a>
          <a href="">Fiverr</a>
        </section>

        <section>
          <h4>Chat with me</h4>
          <p>Im here to help</p>
          <a href="">abdullah@gmail.com</a>
        </section>

        <section>
          <h4>Call me</h4>
          <p>Mon-Sat from 10am to 6pm</p>
          <a href="">03123456789</a>
        </section>

        <div>
          <h4>Social media</h4>
          <div className={style.ImageHolder}></div>
          <div className={style.ImageHolder}></div>
          <div className={style.ImageHolder}></div>
        </div>
      </div>
      <Forms />
    </div>
  )
}

const Forms = () => {
  return <div className={style.form}></div>
}

export default ContactMe
