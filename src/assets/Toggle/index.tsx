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

function handleSvgsTheme(prevActive: boolean) {
  const svgs: HTMLCollectionOf<Element> =
    document.getElementsByClassName("svg");
  for (let i = 0; i < svgs.length; i++) {
    svgs[i].setAttribute("data-theme-svg", !prevActive ? "dark" : "light");
  }
}

const Toggle = () => {
  const [isActive, setActive] = useState(false);
  const boxRef = useRef<HTMLDivElement>(null);
  const theamModes = ["Light Mode", "Dark Mode"];
  const toggleActive = () => {
    setActive((prevActive) => {
      handleClick(boxRef, !prevActive);
      document
        .querySelector("body")
        ?.setAttribute("data-theme", !prevActive ? "dark" : "light");
      handleSvgsTheme(prevActive);
      return !isActive;
    });
  };
  return (
    <div className={style.toggle}>
      <div className={style.toggleButton} onClick={toggleActive}>
        <div className={style.smollBox} ref={boxRef}></div>
      </div>
      <p>{isActive ? theamModes[0] : theamModes[1]}</p>
    </div>
  );
};

export default Toggle;
