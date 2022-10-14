import { NextPage } from "next";
import { useState } from "react";
import projects from "../utils/projects";
import s from "../styles/projects.module.css"
import { GrNext,GrPrevious } from "react-icons/gr"

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
            <GrPrevious className={s.previousButton} onClick={previous}/>
           {
            <div className={s.currentProjectDiv}>
                <h1>{projects[carrouselIndex].title}</h1>
                <p>{projects[carrouselIndex].description}</p>
                <div style={{display:"flex", justifyContent:"center"}}>
                    Technologies:
                {
                    projects[carrouselIndex].technologies.map((T:string)=>(
                        <img height={"20px"} width="20px" src={T} alt="" />
                    ))
                }
                </div>
            </div>
           }
           <GrNext className={s.nextButton} onClick={next}/>
        </div>
    )
}

export default Carrousel