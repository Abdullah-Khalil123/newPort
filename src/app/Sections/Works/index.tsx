"use client";
import style from "./works.module.css";
import Image from "next/image";
import arrow from "@/public/arrow.svg";
import test from "@/public/Screenshot 2024-07-20 021155.png";
import { Dispatch, SetStateAction, useState } from "react";

interface WorkItemProps {
  year: number;
  title: string;
  description: string;
  imageSrc: string;
}

const Works = ({ items }: { items: WorkItemProps[] }) => {
  const [selectedItem, setselectedItem] = useState(0);

  return (
    <div className={style.works}>
      <div className={style.alignEnd}>
        <h2>
          Code is a <span>pixel</span> that reflects our commitment to crafting{" "}
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
          }}
        />
      </div>
    </div>
  );
};

function WorkItem({
  item,
  index,
  setSelected,
}: {
  item: WorkItemProps;
  index: number;
  setSelected: Dispatch<SetStateAction<number>>;
}) {
  return (
    <div
      className={style.workItem}
      onClick={() => {
        setSelected(index);
        console.log(index);
      }}
    >
      <p className={style.year}>{item.year}</p>
      <p>{item.title}</p>
      <WorkItemButton />
    </div>
  );
}

function WorkDisplay({
  itemDetail,
}: {
  itemDetail: { title: string; description: string; imageSrc?: string };
}) {
  return (
    <div className={style.workDisplay}>
      <div className={style.ImageHolder}>
        <Image src={test} alt={""} fill />
      </div>
      <p className={style.bold}>{itemDetail.title}</p>
      <p className={style.ItemDiscrip}>{itemDetail.description}</p>
    </div>
  );
}
function WorkItemButton() {
  return (
    <button>
      <Image className="svg" src={arrow} alt={""} height={25} />
    </button>
  );
}

export default Works;
