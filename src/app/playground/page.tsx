'use client'
import { Dispatch, SetStateAction, useEffect, useRef, useState } from 'react'
import style from './playground.module.css'
import gsap from 'gsap'
import Image from 'next/image'

import image1 from '@/public/pexels-photo-3113541.jpeg'
import image2 from '@/public/WorkImages/horizon.png'

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

  const images = [image1, image2]

  const typeRef = useRef<HTMLTableHeaderCellElement>(null)
  const imageRef = useRef<HTMLDivElement>(null)
  const animateImage = useRef<HTMLImageElement>(null)
  const [selected, setSelected] = useState<{ index: number }>({ index: 0 })

  useEffect(() => {
    // Animate the current image out
    if (animateImage.current) {
      gsap.fromTo(
        animateImage.current,
        { opacity: 0.4, scale: 0.9 },
        { opacity: 1, scale: 1, duration: 0.5 }
      )
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
          {[...Array(images.length)].map((_, index) => (
            <PlaygroundItem
              key={index}
              date={'2024'}
              item={'Scroll Animation'}
              type={'GSAP SCROLL'}
              index={index}
              selectFunction={setSelected}
            />
          ))}
        </tbody>
      </table>
      <div className={style.ImageHolderPlayground} ref={imageRef}>
        {images.map((image, index) =>
          selected.index === index ? (
            <Image
              src={image}
              alt=""
              key={index}
              objectFit="contain"
              fill
              ref={animateImage}
            />
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
