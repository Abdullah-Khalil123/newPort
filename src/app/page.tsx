import Home from "./Sections/Main";
import WorkingExperience from "./Sections/WorkingExperience";
import SelectedWorks from "./Sections/SelectedWorks";
import Footer from "@/components/footer";
import style from "./home.module.css";

const Front = () => {
  return (
    <div className={style.front}>
      <Home />
      <WorkingExperience />
      <SelectedWorks />
      <Footer />
    </div>
  );
};

export default Front;
