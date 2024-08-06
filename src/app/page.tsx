import Home from "./Sections/Main";
import WorkingExperience from "./Sections/WorkingExperience";
// import SelectedWorks from "./Sections/SelectedWorks";
import Footer from "@/components/footer";
import style from "./home.module.css";
import Works from "./Sections/Works";

const WorkItems = [
  {
    year: 2015,
    title: "Introduction to Programming",
    description:
      "This project focuses on the basics of programming, including understanding fundamental concepts, syntax, and logic building. Students will learn to write simple programs using a chosen programming language.",
    imageSrc: "",
  },
  {
    year: 2016,
    title: "Data Structures and Algorithms",
    description:
      "In this project, students will delve into data structures and algorithms, learning to implement and optimize various structures like arrays, linked lists, stacks, queues, and trees. The project emphasizes problem-solving skills and efficient algorithm design.",
    imageSrc: "",
  },
  {
    year: 2017,
    title: "Web Development and Databases",
    description:
      "This project introduces students to web development, including both frontend and backend technologies. Students will learn to create dynamic web applications using HTML, CSS, JavaScript, and integrate databases using SQL for data management.",
    imageSrc: "",
  },
  {
    year: 2018,
    title: "Capstone Project: AI-Enhanced Smart System",
    description:
      "The final year project involves designing and developing an AI-enhanced smart system. Students will integrate machine learning algorithms and hardware components to create a solution that addresses a real-world problem, such as a smart home automation system or an intelligent transportation system.",
    imageSrc: "",
  },
];

const Front = () => {
  return (
    <div className={style.front}>
      <Home />
      <WorkingExperience />
      {/* <SelectedWorks /> */}
      <Works items={WorkItems} />
      <Footer />
    </div>
  );
};

export default Front;
