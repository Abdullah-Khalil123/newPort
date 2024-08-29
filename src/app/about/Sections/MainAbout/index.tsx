'use client'
import React, { useEffect } from 'react'
import style from './mainAbout.module.css'
import SplitType from 'split-type'
import gsap from 'gsap'
import Button from '@/assets/button'
import { timesNewRoman } from '@/app/layoutFont'
import { useRouter } from 'next/navigation'

const MainAbout = () => {
  const router = useRouter()
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
        stagger: 0.015,
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
    <div className={style.aboutText}>
      <section className={style.MainAbout}>
        <h1 id="aboutMainText">
          I’m a digital creator who loves turning wild ideas into beautiful,
          functional code. When I’m not coding, I’m exploring new tech trends or
          brewing the perfect cup of coffee. Let’s make something amazing
          together!
        </h1>
      </section>
      <section className={style.infoAbout}>
        <h2>I'm Abdullah, a developer, creator, and lifelong learner.</h2>
        <p>
          From a young age, I’ve been captivated by the power of technology and
          its potential to transform the world. This fascination led me to
          explore various areas, including web development, artificial
          intelligence, and mobile app development. Whether it's coding with
          JavaScript, crafting user interfaces, or building smart algorithms, I
          thrive on turning complex challenges into innovative solutions.
        </p>
        {/* <p>
          Today, my journey has brought me through numerous projects—from
          developing an AI-driven facial recognition system to building
          interactive web applications and creating Bluetooth-based indoor
          positioning solutions. Every project has taught me something new, and
          I’m always eager to learn and grow.
        </p> */}
        {/* <p>
          What excites me most is the ability to create technology that has a
          meaningful impact. I believe in building solutions that are not just
          technically sound, but also user-centric and impactful. Whether it’s
          developing a seamless user experience for a web app, enhancing
          accessibility, or optimizing performance, my goal is to make
          technology that improves lives.
        </p> */}
        <p>One of my guiding philosophies is:</p>
        <p className={`${style.quote} ${timesNewRoman.className}`}>
          "Innovation begins with curiosity and is fueled by the drive to make a
          difference."
        </p>
        <p>
          I don't just aim to create—I'm driven by the desire to solve real
          problems, to innovate, and to bring ideas to life that matter. For me,
          it's about more than just code or design—it's about creating value and
          making a positive impact.
        </p>
      </section>
      <section className={style.bullets}>
        <h3>Experience</h3>
        <p> - BS in Computer Science (Expected Graduation: 2025)</p>
        <p>
          - Experience in Web Development, Artificial Intelligence, and Software
          Engineering
        </p>
        <h3>Highlights of my journey:</h3>
        <p> - 3 years experience in Web Development</p>
        <p>
          - Developed an AI-based facial recognition system using TensorFlow
        </p>
        <p>
          - Created a university map using Dijkstra’s algorithm for shortest
          path calculations
        </p>
        <p> - Built a food delivery system with Flutter and Firebase</p>
        <p>
          - Implemented a hotel booking management system using Next.js,
          Express, and MySQL
        </p>
        <h3>Acknowledgments</h3>
        <p>
          I owe much of my growth to the collaborative spirit of the tech
          community. Every project has been a learning experience, and I'm
          grateful for the support and inspiration from fellow developers,
          mentors, and friends who have been part of my journey.
        </p>
        <h3>Contact Me</h3>
        <p>
          I'm always open to new opportunities, collaborations, and
          conversations. Reach out, and let’s make something amazing together!
        </p>
        <Button
          text={'Contact Me'}
          styles={{
            marginTop: '30px',
            width: '200px',
            borderRadius: '100px',
            fontSize: '20px',
            border: '2px solid white',
          }}
          onClick={() => {
            router.push('/contact')
          }}
        />
        <h3>Skills</h3>
        <Button
          text={'My Resume'}
          styles={{
            marginTop: '30px',
            width: '200px',
            borderRadius: '100px',
            fontSize: '20px',
            border: '2px solid white',
          }}
        />
      </section>
    </div>
  )
}

export default MainAbout
