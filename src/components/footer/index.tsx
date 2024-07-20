import Button from "@/assets/button";
import style from "./footer.module.css";
import Link from "next/link";
import GetTime from "@/assets/time";

const Footer = () => {
  return (
    <div className={style.footer}>
      <p id={style.have}>Have a Project?</p>
      <h1 id={style.letsTalk}>Let's talk with me</h1>
      <Button text={"Talk with me"} />
      <span className={style.localTimeBot}>
        <p className={style.local}>My local time</p>
        <p className={style.time}>
          <GetTime />
        </p>
      </span>

      <div className={style.footNav}>
        <span>
          <h2>Abdullah</h2>
          <p>Website Developer</p>
        </span>

        <div className={style.bottomNavLinks}>
          <Link href={""}>Home</Link>
          <Link href={""}>PlayGround</Link>
          <Link href={""}>Services</Link>
          <Link href={""}>Case Studies</Link>
        </div>
      </div>
    </div>
  );
};

export default Footer;
