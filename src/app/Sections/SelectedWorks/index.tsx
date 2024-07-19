import SelectedWork from "@/components/SelectedWork";
import style from "./works.module.css";

const SelectedWorks = () => {
  return (
    <div className={style.worksSelected}>
      <h1 className={style.title}>Selected Works</h1>
      <div className={style.flexColumns}>
        <SelectedWork />
        <SelectedWork />
        <SelectedWork />
        <SelectedWork />
      </div>
    </div>
  );
};

export default SelectedWorks;
