import { NextPage } from "next";
import s from '../styles/skills.module.css'
import skillsTraduction from "../lenguajes/skills";
import Cookies from "universal-cookie";
import technologiesLink from "../utils/technologiesIcons";

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
            <div className={s.divIcons}>
                    <h2 className={s.frontendTitle}>FRONT-END</h2>
                <div className={s.divIconsFront}>
                    {
                        technologiesLink.Front.map((FL:string)=>(
                            <img src={FL} width="70px" height="70px" alt="" />
                        ))
                    }
                </div>
            </div>
        </div>
    )
}

export default Skills