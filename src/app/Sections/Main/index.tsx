import React from 'react'
import style from './main.module.css'
import Button from '@/assets/button'
import image from '@/public/creative-minimalist-letter-ak-logo-600nw-1501334273.webp'
import Image from 'next/image'
import Link from 'next/link'
const Home = () => {
  return (
    <div className={style.home}>
      <div className={style.profileHello}>
        <div className={style.profileImageHolder}>
          <Image src={image} alt={'profile'} fill />
        </div>
        <h1>Hello! I&apos;m Abdullah Khalil</h1>
      </div>
      <div className={style.talkSeeWork}>
        <h2>A Web Developer based in Islamabad, Pakistan</h2>
        <p style={{ marginBottom: '30px' }}>
          Passionate creating great experience Digital Product
        </p>

        <div>
          <Link href={'/contact'}>
            <Button text={'Talk with me'} />
          </Link>
          <Link href="/archive">
            <Button
              text={'See my work'}
              styles={{
                backgroundColor: 'white',
                color: 'black',
                border: 'var(--primary-background) 1px solid',
                marginLeft: '20px',
              }}
            />
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Home
