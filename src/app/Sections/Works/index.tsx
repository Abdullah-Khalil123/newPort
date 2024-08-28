'use client'
import style from './works.module.css'
import Image, { StaticImageData } from 'next/image'
import arrow from '@/public/arrow.svg'
import test from '@/public/underConst.png'
import { Dispatch, SetStateAction, useEffect, useState } from 'react'

interface WorkItemProps {
  year: number
  title: string
  description: string
  imageSrc: StaticImageData | string | undefined
}

const Works = ({ items }: { items: WorkItemProps[] }) => {
  const [selectedItem, setselectedItem] = useState(0)
  useEffect(() => {
    const svgs = document.getElementsByClassName('svg')
    const theme = document.querySelector('body')?.getAttribute('data-theme')

    if (theme == 'dark') {
      for (let i = 0; i < svgs.length; i++) {
        svgs[i].setAttribute('data-theme-svg', theme)
      }
    }
  }, [])
  return (
    <div className={style.works}>
      <div className={style.alignEnd}>
        <h2>
          Code is a <span>pixel</span> that reflects our commitment to crafting{' '}
          <span>seamless</span> and <span>innovative</span> web experiences
        </h2>
      </div>
      <div className={style.itemDisplay}>
        <div className={style.workItems}>
          {items.map((item, index) => (
            <WorkItem
              item={item}
              key={index}
              index={index}
              setSelected={setselectedItem}
            />
          ))}
        </div>
        <WorkDisplay
          itemDetail={{
            title: items[selectedItem].title,
            description: items[selectedItem].description,
            imageSrc: items[selectedItem].imageSrc,
          }}
        />
      </div>
    </div>
  )
}

function WorkItem({
  item,
  index,
  setSelected,
}: {
  item: WorkItemProps
  index: number
  setSelected: Dispatch<SetStateAction<number>>
}) {
  return (
    <div
      className={style.workItem}
      onClick={() => {
        setSelected(index)
      }}
    >
      <p className={style.year}>{item.year}</p>
      <p>{item.title}</p>
      <WorkItemButton />
    </div>
  )
}

function WorkDisplay({
  itemDetail,
}: {
  itemDetail: {
    title: string
    description: string
    imageSrc?: string | StaticImageData
  }
}) {
  return (
    <div className={style.workDisplay}>
      <div className={style.ImageHolder}>
        <Image
          src={itemDetail.imageSrc ? itemDetail.imageSrc : test}
          alt={''}
          fill
          objectFit="cover"
        />
      </div>
      <p className={style.bold}>{itemDetail.title}</p>
      <p className={style.ItemDiscrip}>{itemDetail.description}</p>
    </div>
  )
}
function WorkItemButton() {
  return (
    <button>
      <Image className="svg" src={arrow} alt={''} height={25} />
    </button>
  )
}

export default Works
