import React from "react";
import style from "./WorkingExp.module.css";

const WorkingExperience = () => {
  return (
    <div className={style.working}>
      <h1>Working Experience</h1>
      <WorkExp />
      <WorkExp />
      <WorkExp />
      <WorkExp />
    </div>
  );
};

const WorkExp = () => {
  return (
    <div className={style.workExp}>
      <div className={style.workImageHolder}></div>
      <div className={style.work}>
        <h3>Product design at Uber</h3>
        <p>February 2019 - February 2020</p>
      </div>
    </div>
  );
};

export default WorkingExperience;
