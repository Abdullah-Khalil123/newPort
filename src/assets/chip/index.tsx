import style from "./chip.module.css";
const Chip = ({ text }: { text: string }) => {
  return (
    <div className={style.chip}>
      <p>{text}</p>
    </div>
  );
};

export default Chip;
