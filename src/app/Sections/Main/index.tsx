import React from "react";
import style from "./main.module.css";
import Button from "@/assets/button";
import image from "@/public/Screenshot 2024-07-20 021155.png";
import Image from "next/image";
const Home = () => {
  return (
    <div className={style.home}>
      <div className={style.profileHello}>
        <div className={style.profileImageHolder}>
          <Image src={image} alt={"profile"} fill />
        </div>
        <h1>Hello! I&apos;m Abdullah Khalil</h1>
      </div>
      <div className={style.talkSeeWork}>
        <h2>A Web Developer based in Islamabad, Pakistan</h2>
        <p style={{ marginBottom: "30px" }}>
          Passionate creating great experience Digital Product
        </p>

        <div>
          <Button text={"Talk with me"} />
          <Button
            text={"See my work"}
            styles={{
              backgroundColor: "white",
              color: "black",
              border: "var(--primary-background) 1px solid",
              marginLeft: "20px",
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
