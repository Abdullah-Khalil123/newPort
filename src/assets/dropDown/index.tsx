"use client";
import Link from "next/link";
import style from "./dropDown.module.css";

const DropDown = ({ active }: { active: boolean }) => {
  return (
    <ul className={`${style.dropdown} ${active ? style.active : ""}`}>
      <li>
        <Link href={""}>Playground</Link>
      </li>
      <li>
        <Link href={""}>Services</Link>
      </li>
      <li>
        <Link href={""}>Case Studies</Link>
      </li>
      <li>
        <Link href={""}>About</Link>
      </li>
    </ul>
  );
};

export default DropDown;
