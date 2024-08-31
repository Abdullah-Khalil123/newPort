'use client'
import React, { useEffect, useRef, useState } from 'react'
import style from './mainAbout.module.css'
import SplitType from 'split-type'
import gsap from 'gsap'
import Button from '@/assets/button'
import { timesNewRoman } from '@/app/layoutFont'
import { useRouter } from 'next/navigation'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import scrollImage from '@/public/pexels-photo-3113541.jpeg'
import Image, { StaticImageData } from 'next/image'
import skills from '../../utils/skills'

gsap.registerPlugin(ScrollTrigger)

const MainAbout = () => {
  const router = useRouter()
  const boxRef = useRef<HTMLDivElement>(null)

  const [hasRendered, setHasRendered] = useState(false)
  useEffect(() => {
    setHasRendered(true)
  })

  useEffect(() => {
    new SplitType('h1#aboutMainText')
    window.addEventListener('resize', () => {
      new SplitType('h1#aboutMainText')
    })

    gsap.fromTo(
      '.line',
      {
        opacity: 0,
        x: -10,
      },
      {
        x: 0,
        opacity: 1,
        stagger: 0.05,
        duration: 2,
        ease: 'power4.out',
      }
    )

    if (hasRendered && boxRef.current) {
      gsap.to(boxRef.current, {
        scrollTrigger: {
          trigger: boxRef.current,
          start: 'top 80',
          end: `+=${boxRef.current?.offsetHeight * 3} 0`,
          pin: true,
        },
      })
    }

    return () => {
      window.removeEventListener('resize', () => {
        new SplitType('h1#aboutMainText')
      })
    }
  }, [hasRendered])

  useEffect(() => {})

  const pdfUrl = '/Resume.pdf'
  const openPdfInNewTab = () => {
    window.open(pdfUrl, '_blank', 'noopener,noreferrer')
  }

  return (
    <div className={style.aboutText}>
      <section className={style.MainAbout}>
        <h1 id="aboutMainText">
          I&apos;m a digital creator who loves turning wild ideas into
          beautiful, functional code. When I&apos;m not coding, I&apos;m
          exploring new tech trends or brewing the perfect cup of coffee.
          Let&apos;s make something amazing together!
        </h1>
      </section>
      <div className={style.FlexImage}>
        <div className={style.bottomPart}>
          <section className={style.infoAbout}>
            <div>
              <h2>
                I&apos;m Abdullah, a developer, creator, and lifelong learner.
              </h2>
              <p>
                From a young age, I&apos;ve been captivated by the power of
                technology and its potential to transform the world. This
                fascination led me to explore various areas, including web
                development, artificial intelligence, and mobile app
                development. Whether it&apos;s coding with JavaScript, crafting
                user interfaces, or building smart algorithms, I thrive on
                turning complex challenges into innovative solutions.
              </p>

              <p>One of my guiding philosophies is:</p>
              <p className={`${style.quote} ${timesNewRoman.className}`}>
                &quot;Innovation begins with curiosity and is fueled by the
                drive to make a difference.&quot;
              </p>
              <p>
                I don&apos;t just aim to create—I&apos;m driven by the desire to
                solve real problems, to innovate, and to bring ideas to life
                that matter. For me, it&apos;s about more than just code or
                design—it&apos;s about creating value and making a positive
                impact.
              </p>
            </div>
          </section>
          <section className={style.bullets}>
            <h3>Experience</h3>
            <p> - BS in Computer Science (Expected Graduation: 2025)</p>
            <p>
              - Experience in Web Development, Artificial Intelligence, and
              Software Engineering
            </p>
            <h3>Highlights of my journey:</h3>
            <p> - 3 years experience in Web Development</p>
            <p>
              - Developed an AI-based facial recognition system using TensorFlow
            </p>
            <p>
              - Created a university map using Dijkstra&apos;s algorithm for
              shortest path calculations
            </p>
            <p> - Built a food delivery system with Flutter and Firebase</p>
            <p>
              - Implemented a hotel booking management system using Next.js,
              Express, and MySQL
            </p>
            <h3>Acknowledgments</h3>
            <p>
              I owe much of my growth to the collaborative spirit of the tech
              community. Every project has been a learning experience, and
              I&apos;m grateful for the support and inspiration from fellow
              developers, mentors, and friends who have been part of my journey.
            </p>
            <h3>Contact Me</h3>
            <p>
              I&apos;m always open to new opportunities, collaborations, and
              conversations. Reach out, and let&apos;s make something amazing
              together!
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
            <div className={style.MySkills}>
              {skills.map((skill) => (
                <MySkill
                  title={skill.title}
                  sub={skill.sub}
                  img={skill.img}
                  key={skill.title}
                />
              ))}
            </div>
            <Button
              text={'My Resume'}
              styles={{
                marginTop: '30px',
                width: '200px',
                borderRadius: '100px',
                fontSize: '20px',
                border: '2px solid white',
              }}
              onClick={openPdfInNewTab}
            />
          </section>
        </div>
        <div className={style.ImageHolder} ref={boxRef}>
          <Image src={scrollImage} fill alt={''}></Image>
        </div>
      </div>
    </div>
  )
}

const MySkill = ({
  img,
  title,
  sub,
}: {
  img: StaticImageData | string
  title: string
  sub: string
}) => {
  return (
    <div className={style.MySkill}>
      <Image src={img} alt={'Skill Image'} height={40} width={40} />
      <div className={style.SkillData}>
        <p className={style.title}>{title}</p>
        <p className={style.sub}>{sub}</p>
      </div>
    </div>
  )
}

export default MainAbout
