import { NextPage } from "next";
import { useState } from "react";
import projects from "../utils/projects";
import s from "../styles/projects.module.css"
import {FaHandPointRight,FaHandPointLeft} from 'react-icons/fa'

const Carrousel : NextPage = () => {
    const [carrouselIndex, setCarrouselIndex] = useState(0)
    const [selectedProject, setSelectedProject] = useState(projects[0])

    const previous = () => {
        setCarrouselIndex(carrouselIndex == 0 ? projects.length - 1: carrouselIndex - 1)
        setSelectedProject(projects[carrouselIndex])
    }

    const next = () => {
        setCarrouselIndex(carrouselIndex == projects.length - 1 ? 0 : carrouselIndex + 1)
        setSelectedProject(projects[carrouselIndex])
    }
    return(
        <div className={s.divCarrousel}>
            <FaHandPointLeft className={s.previousButton} onClick={previous}/>
           {
            <div className={s.currentProjectDiv}>
                {
                    projects[carrouselIndex].image 
                    ? <img width={"500px"} src={projects[carrouselIndex].image} alt="" /> 
                    : <h1 className={s.ProjectName}><b>{projects[carrouselIndex].title}</b></h1>
                }
                <p className={s.projectDescription}>Description: {projects[carrouselIndex].description}</p>
                    <h3 className={s.projectTechnologies}>Technologies:</h3>
                <div className={s.flexDivTechnologiesProject} style={{display:"flex", justifyContent:"center"}}>
                {
                    projects[carrouselIndex].technologies.map((T:string)=>(
                        <img height={"40px"} width="40px" src={T} alt="" />
                    ))
                }
                </div>
            </div>
           }
           <FaHandPointRight className={s.nextButton} onClick={next}/>
        </div>
    )
}

export default Carrousel