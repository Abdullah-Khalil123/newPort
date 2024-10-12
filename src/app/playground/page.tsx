'use client'
import { Dispatch, SetStateAction, useEffect, useRef, useState } from 'react'
import style from './playground.module.css'
import gsap from 'gsap'
import Image from 'next/image'

import image1 from '@/public/pexels-photo-3113541.jpeg'
import image2 from '@/public/WorkImages/horizon.png'
import image3 from '@/public/WorkImages/Exclusive.png'
import { StaticImport } from 'next/dist/shared/lib/get-img-props'

const Playground = () => {
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
  }, []) // Add an empty dependency array to only run on mount and unmount

  const playgroundData: {
    date: string
    project: string
    type: string
    link: string
    image: StaticImport | string
  }[] = [
    {
      date: 'Augest 2024',
      project: 'Portfolio',
      type: 'Portfolio',
      link: 'NAN',
      image: image1,
    },
    {
      date: 'April 2024',
      project: 'Horizon',
      type: 'Front End',
      link: 'https://horizon-web-works.firebaseapp.com/',
      image: image2,
    },
    {
      date: 'Feburary 2024',
      project: 'Exclusive',
      type: 'E Commerce',
      link: 'https://exclusive-zeta.vercel.app/',
      image: image3,
    },
    // {
    //   date: 'NAN',
    //   project: 'NAN',
    //   type: 'NAN',
    //   link: 'NAN',
    //   image: '',
    // },
  ]

  const typeRef = useRef<HTMLTableHeaderCellElement>(null)
  const imageRef = useRef<HTMLDivElement>(null)
  const animateImage = useRef<HTMLImageElement>(null)
  const [selected, setSelected] = useState<{ index: number }>({ index: 0 })

  useEffect(() => {
    // Animate the current image out
    if (window.innerWidth >= 800) {
      if (animateImage.current) {
        gsap.fromTo(
          animateImage.current,
          { opacity: 0.4, scale: 0.9 },
          { opacity: 1, scale: 1, duration: 0.5 }
        )
      }
    }
  }, [selected]) // Re-run this effect when 'selected' changes

  return (
    <div className={style.playground}>
      <table>
        <thead>
          <tr>
            <th>Date</th>
            <th>Project</th>
            <th ref={typeRef}>Type</th>
          </tr>
        </thead>
        <tbody
          onMouseEnter={() => {
            gsap.to(imageRef.current, {
              opacity: 1,
              duration: 0.2,
            })
          }}
          onMouseLeave={() => {
            gsap.to(imageRef.current, {
              opacity: 0,
              duration: 0.2,
            })
          }}
        >
          {playgroundData.map((item, index) => (
            <PlaygroundItem
              key={index}
              date={item.date}
              item={item.project}
              type={item.type}
              index={index}
              selectFunction={setSelected}
            />
          ))}
        </tbody>
      </table>
      <div className={style.ImageHolderPlayground} ref={imageRef}>
        {playgroundData.map((item, index) =>
          selected.index === index ? (
            item.image != '' ? (
              <Image
                src={item.image}
                alt=""
                key={index}
                objectFit="contain"
                fill
                priority
                ref={animateImage}
              />
            ) : null
          ) : null
        )}
      </div>
    </div>
  )
}

const PlaygroundItem = ({
  date,
  item,
  type,
  index,
  selectFunction,
}: {
  date: string
  item: string
  type: string
  index: number
  selectFunction: Dispatch<
    SetStateAction<{
      index: number
    }>
  >
}) => {
  return (
    <tr
      className={style.PlaygroundItemRow}
      onMouseEnter={() => {
        selectFunction({ index })
      }}
    >
      <td>{date}</td>
      <td>{item}</td>
      <td>{type}</td>
    </tr>
  )
}

export default Playground
