import React from "react";
import style from "./main.module.css";
import Button from "@/assets/button";

const Home = () => {
  return (
    <div className={style.home}>
      <div className={style.profileHello}>
        <div className={style.profileImageHolder}></div>
        <h1>Hello! I'm Abdullah Khalil</h1>
      </div>
      <div className={style.talkSeeWork}>
        <h2>A Website designer based in Islamabad, Pakistan</h2>
        <p style={{ marginBottom: "30px" }}>
          Passionate creating great experience Digital Product
        </p>

        <div>
          <Button text={"Talk with me"} />
          <Button
            text={"See my work"}
            styles={{
              backgroundColor: "var(--grey-backgroundColor)",
              // color: "black",
              marginLeft: "30px",
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
