import Button from "@/assets/button";
import style from "./select.module.css";
import Image from "next/image";

const SelectedWork = () => {
  return (
    <div className={style.workBox}>
      <div className={style.workImageHolder}></div>
      <h1>Struktura</h1>
      <h3>Construction Company</h3>
      <p className={style.textTime}>Augest 2022</p>
      <p className={style.textTime}>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Recusandae
        neque eaque assumenda et iste delectus aperiam corrupti iusto dolorum
        quibusdam, eveniet id repellendus quidem sunt veritatis hic explicabo
        autem maxime?
      </p>

      <Button text={"View detail works"} />
    </div>
  );
};

export default SelectedWork;
