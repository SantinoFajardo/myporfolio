import { NextPage } from "next";
import traductionOfAboutMe from "../lenguajes/AboutMe";
import Cookies from "universal-cookie";

const AboutMe: NextPage = () => {
  const Cookie = new Cookies();
  let lenguajeofPage = Cookie.get("Lenguaje");
  return (
    <div>
      <h1>
        {lenguajeofPage == "ES"
          ? traductionOfAboutMe.title.ES
          : traductionOfAboutMe.title.EN}
      </h1>
    </div>
  );
};

export default AboutMe;
