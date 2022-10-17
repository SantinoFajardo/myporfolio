import { NextPage } from "next";
import s from "../styles/skills.module.css";
import skillsTraduction from "../lenguajes/skills";
import Cookies from "universal-cookie";
import technologiesLink from "../utils/technologiesIcons";

const Skills: NextPage = () => {
  const Cookie = new Cookies();
  let lenguajeofPage: string = Cookie.get("Lenguaje");
  return (
    <div id="skills" className={s.skillsDiv}>
      <h1 className={s.skillsTitle}>
        {lenguajeofPage == "ES"
          ? skillsTraduction.title.ES
          : skillsTraduction.title.EN}
      </h1>
      <div className={s.vline}></div>
      <div className={s.divIcons}>
        <div className={s.flexDivSkills}>
          <h2 className={s.titleOfTechnologieType}>
            {lenguajeofPage == "ES"
              ? skillsTraduction.front.ES
              : skillsTraduction.front.EN}
          </h2>
          <div className={s.divIconsFront}>
            {technologiesLink.Front.map((FL: string, i: number) => (
              <img key={i} src={FL} width="70px" height="70px" alt="" />
            ))}
          </div>
        </div>
        <div className={s.flexDivSkills}>
          <h2 className={s.titleOfTechnologieType}>BACKEND</h2>
          <div className={s.divIconsFront}>
            {technologiesLink.Back.map((FL: string, i: number) => (
              <img key={i} src={FL} width="70px" height="70px" alt="" />
            ))}
          </div>
        </div>
        <div className={s.flexDivSkills}>
          <h2 className={s.titleOfTechnologieType}>
            {lenguajeofPage == "ES"
              ? skillsTraduction.dataBases.ES
              : skillsTraduction.dataBases.EN}
          </h2>
          <div className={s.divIconsFront}>
            {technologiesLink.DataBases.map((FL: string, i: number) => (
              <img key={i} src={FL} width="70px" height="70px" alt="" />
            ))}
          </div>
        </div>
        <div className={s.flexDivSkills}>
          <h2 className={s.titleOfTechnologieType}>
            {lenguajeofPage == "ES"
              ? skillsTraduction.others.ES
              : skillsTraduction.others.EN}
          </h2>
          <div className={s.divIconsFront}>
            {technologiesLink.Others.map((FL: string, i: number) => (
              <img key={i} src={FL} width="70px" height="70px" alt="" />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
