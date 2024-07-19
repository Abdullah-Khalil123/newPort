import React from "react";
import style from "./button.module.css";

const Button = ({
  styles,
  text,
}: {
  styles?: React.CSSProperties;
  text?: String;
}) => {
  return (
    <button className={style.button} style={styles}>
      <p>{text}</p>
    </button>
  );
};

export default Button;
