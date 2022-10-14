import { NextPage } from "next";
import Carousel from "./carrousel";
import s from "../styles/projects.module.css"

const Projects : NextPage = () =>{
    return(
        <div className={s.projectsDiv}>
            <h1 className={s.projectsTitle}>PROJECTS</h1>
            <Carousel/>
        </div>
    )
}

export default Projects