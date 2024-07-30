import style from "./works.module.css";
import Image from "next/image";
import arrow from "@/public/arrow.svg";

const Works = () => {
  return (
    <div className={style.works}>
      <div className={style.alignEnd}>
        <h2>
          <span>Lorem,</span> ipsum dolor sit amet consectetur adipisicing elit.
          Tenetur commodi <span>praesentium</span> expedita rem, natus ullam
          voluptatibus impedit autem quos, unde neque <span>quisquam</span> amet
          quidem odio qui culpa officiis adipisci maxime.
        </h2>
      </div>
      <div className={style.itemDisplay}>
        <div className={style.workItems}>
          <WorkItem />
          <WorkItem />
          <WorkItem />
          <WorkItem />
        </div>
        <WorkDisplay />
      </div>
    </div>
  );
};

function WorkItem() {
  return (
    <div className={style.workItem}>
      <p className={style.year}>2015</p>
      <p>Sony World Photography Awards This Year</p>
      <WorkItemButton />
    </div>
  );
}

function WorkDisplay() {
  return (
    <div className={style.workDisplay}>
      <div className={style.ImageHolder}></div>
      <p className={style.bold}>A Quiet Afternoon in the Countryside</p>
      <p>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nam quos
        reprehenderit laboriosam enim qui numquam dolorum ducimus. Saepe hic
        magni modi nemo impedit, adipisci delectus eligendi assumenda pariatur
        exercitationem a?
      </p>
    </div>
  );
}
function WorkItemButton() {
  return (
    <button>
      <Image src={arrow} alt={""} height={25} />
    </button>
  );
}

export default Works;
