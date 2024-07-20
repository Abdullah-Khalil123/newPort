import React from "react";
import style from "./navbar.module.css";
import Image from "next/image";
import Link from "next/link";
import Button from "@/assets/button";
import dropdown from "@/public/dropdown.svg";
import image from "@/public/Screenshot 2024-07-20 021155.png";
import GetTime from "@/assets/time";

import linkedIn from "@/public/linkedin-svgrepo-com.svg";
import github from "@/public/github-svgrepo-com.svg";
import insta from "@/public/insta-svgrepo-com.svg";
import { link } from "fs";

const NavBar = () => {
  return (
    <div className={style.navbar}>
      <div className={style.navPaths}>
        <div className={style.logoImg}>
          <Image src={image} fill alt={"logo"} />
        </div>
        <div className={style.links}>
          <Link href={""}>Playground</Link>
          <Link href={""}>Services</Link>
          <Link href={""}>Case Studies</Link>
          <Link href={""}>About me</Link>
        </div>
      </div>
      <div className={style.bookings}>
        <div className={style.locAndTime}>
          <p style={{ fontWeight: "bold" }}>Islamabad, Pakistan</p>
          <p>
            <GetTime />
          </p>
        </div>
        <Button
          text={"Slot Booked"}
          styles={{
            backgroundColor: "var(--secondary-light)",
            color: "#8f8f8e",
          }}
        />
        <Button
          text={"Slot Booked"}
          styles={{
            backgroundColor: "var(--secondary-light)",
            color: "#8f8f8e",
          }}
        />
        <Button text={"+"} />
      </div>
      <button className={style.mobileDropDown}>
        {/* <DropDown /> */}
        <Image src={dropdown} alt={""} width={25} />
      </button>

      <div className={style.socials}>
        <div className={style.circle}>
          <Image src={insta} alt={""} width={30} />
        </div>
        <div className={style.circle}>
          <Image src={linkedIn} alt={""} width={30} />
        </div>
        <div className={style.circle}>
          <Image src={github} alt={""} width={30} />
        </div>
      </div>
    </div>
  );
};

export default NavBar;
