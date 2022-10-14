import { NextPage } from "next";
import { useState } from "react";
import projects from "../utils/projects";
import s from "../styles/projects.module.css"
import {AiFillRightCircle,AiFillLeftCircle} from 'react-icons/ai'
import Cookies from "universal-cookie";
import Link from "next/link";

const Carrousel : NextPage = () => {
    const Cookie = new Cookies()
    let lenguajeofPage : String = Cookie.get("Lenguaje")
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
            <AiFillLeftCircle className={s.previousButton} onClick={previous}/>
           {
            <div className={s.currentProjectDiv}>
                {
                    projects[carrouselIndex].image 
                    ?   <Link 
                        href={projects[carrouselIndex].deploy && projects[carrouselIndex].deploy}         passHref
                        >
                            <a target={"_blank"}>
                                <img 
                                width={"500px"} 
                                className={s.imageOfProject} 
                                src={projects[carrouselIndex].image} 
                                alt="Project image" 
                                />
                            </a>
                        </Link>
                    : <a><h1 className={s.ProjectName}><b>{projects[carrouselIndex].title}</b></h1></a>
                }
                <p className={s.projectDescription}><b>Description:</b> {
                    lenguajeofPage == "ES" 
                    ? projects[carrouselIndex].descriptionES
                    : projects[carrouselIndex].descriptionEN
                }</p>
                    <h3 className={s.projectTechnologies}>
                        {
                            lenguajeofPage == "ES"
                            ? "TECNOLOGIAS USADAS:"
                            : "USED TECHNOLOGIES:"
                        }
                        </h3>
                <div className={s.flexDivTechnologiesProject} style={{display:"flex", justifyContent:"center"}}>
                {
                    projects[carrouselIndex].technologies.map((T:string)=>(
                        <img height={"40px"} width="40px" src={T} alt="" />
                    ))
                }
                </div>
            </div>
           }
           <AiFillRightCircle className={s.nextButton} onClick={next}/>
        </div>
    )
}

export default Carrousel