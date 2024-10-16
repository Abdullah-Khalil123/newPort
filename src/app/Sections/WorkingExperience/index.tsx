'use client'
import React, { useEffect, useRef, useState } from 'react'
import style from './WorkingExp.module.css'
import WorkExpBox from './WorkExpBox'
import Image from 'next/image'
import { StaticImageData } from 'next/image'
import gsap from 'gsap'
import building from '@/public/buildings-2-svgrepo-com.svg'
import code from '@/public/code-svgrepo-com.svg'
import debug from '@/public/debug-svgrepo-com.svg'
import rocket from '@/public/rocket-svgrepo-com.svg'

interface WorkExperProps {
  year: number
  icon: StaticImageData
  title: string
  description: string
  technologies: string[]
  role: string
  challenges: string
  outcome: string
  link: string
  organization?: string
  duration?: string
  event?: string
  project?: string
}

const WorkExper: WorkExperProps[] = [
  {
    icon: building,
    year: 2024,
    title: 'Fiverr',
    description:
      'Developed various web and mobile applications for clients on Fiverr, providing customized solutions based on their requirements.',
    technologies: ['React', 'Node.js', 'Express', 'MongoDB'],
    role: 'Freelancer',
    challenges:
      'Met tight deadlines and customized solutions to fit diverse client needs while maintaining code quality and functionality.',
    outcome:
      'Successfully delivered projects with positive client feedback and repeat business, helping clients improve their operations.',
    link: 'https://www.fiverr.com/abdullahkhalil6',
  },
  {
    icon: code,
    year: 2023,
    title: 'Local Projects',
    description:
      'Worked on local software projects, building solutions like a food delivery system and a hotel booking management system for small businesses.',
    technologies: ['Flutter', 'Firebase', 'Next.js', 'MySQL'],
    role: 'Full-stack Developer',
    challenges:
      'Managed full project lifecycles, from initial requirements gathering to deployment, and solved real-world business challenges for local businesses.',
    outcome:
      'Delivered reliable and scalable solutions, contributing to business growth by automating key processes and enhancing customer experiences.',
    link: 'https://github.com/Abdullah-Khalil123',
  },
  // {
  //   icon: debug,
  //   year: 2023,
  //   title: 'Software Development Intern',
  //   organization: 'Tech Innovators Inc.',
  //   duration: 'June 2023 - August 2023',
  //   description:
  //     'Assisted in developing and testing web applications. Worked closely with the development team to implement new features and fix bugs.',
  //   technologies: ['JavaScript', 'HTML', 'CSS', 'Node.js'],
  //   role: 'Intern',
  //   outcome:
  //     'Gained hands-on experience in software development and contributed to several key projects.',
  //   link: 'https://www.techinnovators.com',
  //   challenges: '',
  // },
  // {
  //   icon: rocket,
  //   year: 2022,
  //   title: 'Hackathon Winner',
  //   event: 'CodeFest 2022',
  //   project: 'Smart City Dashboard',
  //   description:
  //     'Developed a dashboard application for smart city management, integrating real-time data from various sensors and providing actionable insights.',
  //   technologies: ['React', 'Django', 'PostgreSQL'],
  //   role: 'Lead Developer',
  //   outcome:
  //     'Won first place in the competition for the innovative use of data and user interface design.',
  //   link: 'https://www.codefest2022.com/smart-city-dashboard',
  //   challenges: '',
  // },
]

const WorkingExperience = () => {
  const containerRef = useRef<HTMLDivElement | null>(null)
  const workRef = useRef<HTMLDivElement | null>(null)
  const [selectedBox, setSelectedBox] = useState<{
    active: boolean
    index: number
  }>({
    active: false,
    index: 0,
  })

  useEffect(() => {
    const containerMoveX = gsap.quickTo(containerRef.current, 'left', {
      duration: 0.5,
      ease: 'power3',
    })
    const containerMoveY = gsap.quickTo(containerRef.current, 'top', {
      duration: 0.5,
      ease: 'power3',
    })

    const handleMouseMove = (event: MouseEvent) => {
      if (workRef.current) {
        containerMoveX(event.clientX)
        containerMoveY(
          event.clientY - workRef.current.getBoundingClientRect().top
        )
      }
    }

    window.addEventListener('mousemove', handleMouseMove)

    return () => {
      window.removeEventListener('mousemove', handleMouseMove)
    }
  }, [])

  return (
    <div className={style.working} ref={workRef}>
      <h1>Working Experience</h1>
      {WorkExper.map((work, index) => (
        <WorkExp
          img={work.icon}
          key={index}
          item={work}
          setSelected={setSelectedBox}
          index={index}
        />
      ))}
      <WorkExpBox
        containerRef={containerRef}
        active={selectedBox.active}
        index={selectedBox.index}
      />
    </div>
  )
}

const WorkExp = ({
  item,
  index,
  setSelected,
  img,
}: {
  img: any
  item: WorkExperProps
  setSelected: React.Dispatch<
    React.SetStateAction<{ active: boolean; index: number }>
  >
  index: number
}) => {
  return (
    <div
      className={style.workExp}
      onMouseEnter={() => {
        setSelected({ active: true, index: index })
      }}
      onMouseLeave={() => {
        setSelected({ active: false, index: index })
      }}
    >
      <div className={style.workImageHolder}>
        <Image className="svg" src={img} alt={''} fill />
      </div>
      <div className={style.work}>
        <h3>{item.title}</h3>
        <p>{item.duration || item.outcome}</p>
      </div>
    </div>
  )
}

export default WorkingExperience
