import React from "react";
import style from "./navbar.module.css";
import Image from "next/image";
import Link from "next/link";
import Button from "@/assets/button";

const NavBar = () => {
  return (
    <div className={style.navbar}>
      <div className={style.navPaths}>
        <div className={style.logoImg}>
          <Image src={""} fill alt={"logo"} />
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
          <p>Islamabad, Pakistan</p>
          <p>6:18:31 pm</p>
        </div>
        <Button
          text={"Slot Booked"}
          styles={{ backgroundColor: "#f5f5f0", color: "#8f8f8e" }}
        />
        <Button
          text={"Slot Booked"}
          styles={{ backgroundColor: "#f5f5f0", color: "#8f8f8e" }}
        />
        <Button text={"+"} />
      </div>
    </div>
  );
};

export default NavBar;
