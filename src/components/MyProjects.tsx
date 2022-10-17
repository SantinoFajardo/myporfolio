import { NextPage } from "next";
import s from "../styles/projects.module.css";
import Cookies from "universal-cookie";
import SimpleSlider from "./carrousel";

const Projects: NextPage = () => {
  const Cookie = new Cookies();
  let lenguajeofPage: String = Cookie.get("Lenguaje");
  return (
    <div id="projects" className={s.projectsDiv}>
      <h1 className={s.projectsTitle}>
        {lenguajeofPage == "ES" ? "PROYECTOS" : "PROJECTS"}
      </h1>
      <SimpleSlider />
    </div>
  );
};

export default Projects;
