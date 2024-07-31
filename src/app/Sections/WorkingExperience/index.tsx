"use client";
import React, { useEffect, useRef, useState } from "react";
import style from "./WorkingExp.module.css";
import WorkExpBox from "./WorkExpBox";

import { StaticImageData } from "next/image";
import gsap from "gsap";

interface WorkExperProps {
  year: number;
  title: string;
  description: string;
  technologies: string[];
  role: string;
  challenges: string;
  outcome: string;
  link: string;
  organization?: string;
  duration?: string;
  event?: string;
  project?: string;
  imgSrc?: StaticImageData;
}

const WorkExper: WorkExperProps[] = [
  {
    year: 2024,
    title: "Personal Budget Tracker",
    description:
      "Developed a web application to help users track and manage their personal finances. The application allows users to input income and expenses, categorize them, and generate financial reports.",
    technologies: ["React", "Node.js", "Express", "MongoDB"],
    role: "Full-stack Developer",
    challenges:
      "Implemented user authentication and real-time data updates using WebSocket.",
    outcome:
      "Successfully deployed the application and received positive feedback from users for its intuitive interface.",
    link: "https://github.com/yourusername/personal-budget-tracker",
  },
  {
    year: 2023,
    title: "Open Source Contributor",
    description:
      "Contributed to an open-source project by fixing bugs and improving documentation.",
    technologies: ["JavaScript", "Git"],
    role: "Contributor",
    challenges:
      "Worked on resolving issues related to performance optimization.",
    outcome: "Helped improve the project's stability and usability.",
    link: "https://github.com/opensourceproject/repository",
  },
  {
    year: 2023,
    title: "Software Development Intern",
    organization: "Tech Innovators Inc.",
    duration: "June 2023 - August 2023",
    description:
      "Assisted in developing and testing web applications. Worked closely with the development team to implement new features and fix bugs.",
    technologies: ["JavaScript", "HTML", "CSS", "Node.js"],
    role: "Intern",
    outcome:
      "Gained hands-on experience in software development and contributed to several key projects.",
    link: "https://www.techinnovators.com",
    challenges: "",
  },
  {
    year: 2022,
    title: "Hackathon Winner",
    event: "CodeFest 2022",
    project: "Smart City Dashboard",
    description:
      "Developed a dashboard application for smart city management, integrating real-time data from various sensors and providing actionable insights.",
    technologies: ["React", "Django", "PostgreSQL"],
    role: "Lead Developer",
    outcome:
      "Won first place in the competition for the innovative use of data and user interface design.",
    link: "https://www.codefest2022.com/smart-city-dashboard",
    challenges: "",
  },
];

const WorkingExperience = () => {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const workRef = useRef<HTMLDivElement | null>(null);
  const [selectedBox, setSelectedBox] = useState<{
    active: boolean;
    index: number;
  }>({
    active: false,
    index: 0,
  });

  useEffect(() => {
    const containerMoveX = gsap.quickTo(containerRef.current, "left", {
      duration: 0.5,
      ease: "power3",
    });
    const containerMoveY = gsap.quickTo(containerRef.current, "top", {
      duration: 0.5,
      ease: "power3",
    });

    const handleMouseMove = (event: MouseEvent) => {
      if (workRef.current) {
        containerMoveX(event.clientX);
        containerMoveY(
          event.clientY - workRef.current.getBoundingClientRect().top
        );
      }
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <div
      className={style.working}
      ref={workRef}
      onMouseEnter={() => {
        setSelectedBox({ active: true, index: selectedBox.index });
      }}
      onMouseLeave={() => {
        setSelectedBox({ active: false, index: selectedBox.index });
      }}
    >
      <h1>Working Experience</h1>
      {WorkExper.map((work, index) => (
        <WorkExp
          key={index}
          item={work}
          setSelected={setSelectedBox}
          index={index}
        />
      ))}
      <WorkExpBox
        containerRef={containerRef}
        active={selectedBox.active}
        index={selectedBox.index}
      />
    </div>
  );
};

const WorkExp = ({
  item,
  index,
  setSelected,
}: {
  item: WorkExperProps;
  setSelected: React.Dispatch<
    React.SetStateAction<{ active: boolean; index: number }>
  >;
  index: number;
}) => {
  return (
    <div
      className={style.workExp}
      onMouseEnter={() => {
        setSelected({ active: true, index: index });
      }}
    >
      <div className={style.workImageHolder}></div>
      <div className={style.work}>
        <h3>{item.title}</h3>
        <p>{item.duration || item.outcome}</p>
      </div>
    </div>
  );
};

export default WorkingExperience;
