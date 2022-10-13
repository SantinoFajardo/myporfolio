import { NextPage } from "next";
import s from '../styles/skills.module.css'
import skillsTraduction from "../lenguajes/skills";
import Cookies from "universal-cookie";

const Skills : NextPage = () => {
    const Cookie = new Cookies()
    let lenguajeofPage = Cookie.get("Lenguaje");
    return(
        <div className={s.skillsDiv}>
            <h1 className={s.skillsTitle}>{
            lenguajeofPage == "ES" 
            ? skillsTraduction.title.ES 
            : skillsTraduction.title.EN
            }</h1>
        </div>
    )
}

export default Skills