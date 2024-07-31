import { LegacyRef, RefAttributes } from "react";
import style from "./workExpBox.module.css";
import Image from "next/image";
import image1 from "@/public/ProjectImages/1.png";
import image2 from "@/public/ProjectImages/2.png";
import image3 from "@/public/ProjectImages/3.png";
import image4 from "@/public/ProjectImages/4.png";
import { motion } from "framer-motion";

const ScaleAnimation = {
  initial: { scale: 0, x: "-50%", y: "-50%" },
  open: {
    scale: 1,
    x: "-50%",
    y: "-50%",
    transition: { duration: 0.4, ease: [0.76, 0, 0.24, 1] },
  },
  close: {
    scale: 0,
    x: "-50%",
    y: "-50%",
    transition: { duration: 0.4, ease: [0.32, 0, 0.67, 0] },
  },
};
const WorkExpBox = ({
  containerRef,
  active,
  index,
}: {
  index: number;
  active: boolean;
  containerRef: LegacyRef<HTMLDivElement> | undefined;
}) => {
  const imagesList = [
    { image: image1, color: "#000000" },
    { image: image2, color: "#e9b7ef" },
    { image: image3, color: "#c4cfe2" },
    { image: image4, color: "#000000" },
  ];

  return (
    <motion.div
      variants={ScaleAnimation}
      initial={"initial"}
      animate={active ? "open" : "closed"}
      className={style.workBox}
      ref={containerRef}
    >
      <div className={style.ImageHolderWork}>
        {imagesList.map((item) => (
          <Image
            src={item.image}
            alt={""}
            width={300}
            height={200}
            style={{
              objectFit: "contain",
              transform: `translateY(-${index * 100}%)`,
              backgroundColor: item.color,
            }}
          />
        ))}
      </div>
    </motion.div>
  );
};

export default WorkExpBox;
