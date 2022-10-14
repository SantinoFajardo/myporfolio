import { NextPage } from "next";
import Carousel from "./carrousel";
import s from "../styles/projects.module.css"
import Cookies from "universal-cookie";

const Projects : NextPage = () =>{
    const Cookie = new Cookies()
    let lenguajeofPage : String = Cookie.get("Lenguaje")
    return(
        <div className={s.projectsDiv}>
            <h1 className={s.projectsTitle}>
                {
                    lenguajeofPage == "ES" 
                    ? "PROYECTOS"
                    : "PROJECTS"
                }
                </h1>
            <Carousel/>
        </div>
    )
}

export default Projects