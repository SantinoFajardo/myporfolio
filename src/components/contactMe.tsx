import { NextPage } from "next";
import Link from "next/link";
import Cookies from "universal-cookie";
import s from "../styles/contact.module.css";
import iconsContact from "../utils/contactIcons";
import { CONTACT } from "../utils/interfaces";

const Contact: NextPage = () => {
  const Cookie = new Cookies();
  let lenguageOfPage = Cookie.get("Lenguaje");
  return (
    <div className={s.contactContainer}>
      <h1 className={s.contactTitle}>
        {lenguageOfPage == "ES" ? "CONTACTAME" : "CONTACT ME"}
      </h1>
      <div className={s.flexDivContact}>
        {iconsContact.map((IC: CONTACT, i: number) => (
          <Link href={IC.link} passHref>
            <a target={"_blank"}>
              <img width={"100px"} key={i} src={IC.icon} alt="" />
            </a>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Contact;
