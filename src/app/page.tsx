import React from "react";
import Home from "./Sections/Main";
import WorkingExperience from "./Sections/WorkingExperience";
import style from "./home.module.css";
import SelectedWorks from "./Sections/SelectedWorks";

const Front = () => {
  return (
    <div className={style.front}>
      <Home />
      <WorkingExperience />
      <SelectedWorks />
    </div>
  );
};

export default Front;
