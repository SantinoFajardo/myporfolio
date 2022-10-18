import { NextPage } from "next";
import traductionOfAboutMe from "../lenguajes/AboutMe";
import Cookies from "universal-cookie";
import s from "../styles/aboutMe.module.css";
import Image from "next/image";

const AboutMe: NextPage = () => {
  const Cookie = new Cookies();
  let lenguajeofPage = Cookie.get("Lenguaje");
  return (
    <div className={s.divAboutMe}>
      <h1 className={s.aboutMeTitle}>
        {lenguajeofPage == "ES"
          ? traductionOfAboutMe.title.ES
          : traductionOfAboutMe.title.EN}
      </h1>
      <div className={s.aboutMeFlexDiv}>
        <div className={s.firstParagraphDiv}>
          <p className={s.firstParagraph}>
            {lenguajeofPage == "ES"
              ? traductionOfAboutMe.firstParagraph.ES
              : traductionOfAboutMe.firstParagraph.EN}
          </p>
        </div>
        <div className={s.vline}></div>
        <div className={s.firstImgDiv}>
          <Image
            src="https://mirazarate.com.ar/wp-content/uploads/2019/05/cnz-1-696x392.jpeg"
            alt=""
            className={s.firstImage}
            width="500px"
            height="200px"
          />
        </div>
        <div className={s.secondImgDiv}>
          <Image
            src="https://avatars.githubusercontent.com/u/106558763?v=4"
            alt=""
            className={s.secondImage}
            width="500px"
            height="300px"
          />
        </div>
        <div className={s.secondParagraphDiv}>
          <p className={s.secondParagraph}>
            {lenguajeofPage == "ES"
              ? traductionOfAboutMe.secondParagraph.ES
              : traductionOfAboutMe.secondParagraph.EN}
          </p>
        </div>
      </div>
      <div id="skills"></div>
    </div>
  );
};

export default AboutMe;
