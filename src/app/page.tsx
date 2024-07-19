import React from "react";
import Home from "./Sections/Main";
import WorkingExperience from "./Sections/WorkingExperience";
import style from "./home.module.css";

const Front = () => {
  return (
    <div className={style.front}>
      <Home />
      <WorkingExperience />
    </div>
  );
};

export default Front;
