"use client";
import { RefObject, useRef, useState } from "react";
import style from "./toggle.module.css";
import gsap from "gsap";

function handleClick(ref: RefObject<HTMLDivElement>, isActive: boolean) {
  if (isActive) {
    gsap.to(ref.current, { x: 24, ease: "bounce.out" });
  } else {
    gsap.to(ref.current, { x: 0, ease: "bounce.out" });
  }
}

const Toggle = () => {
  const [isActive, setActive] = useState(false);
  const boxRef = useRef<HTMLDivElement>(null);
  const lightDark = ["Light Mode", "Dark Mode"];
  const toggleActive = () => {
    setActive((isActive) => {
      handleClick(boxRef, !isActive);
      return !isActive;
    });
  };
  return (
    <div className={style.toggle}>
      <div className={style.toggleButton} onClick={toggleActive}>
        <div className={style.smollBox} ref={boxRef}></div>
      </div>
      <p>{isActive ? lightDark[0] : lightDark[1]}</p>
    </div>
  );
};

export default Toggle;
