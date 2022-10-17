import { NextPage } from "next";
import Link from "next/link";
import s from "../styles/contact.module.css";
import iconsContact from "../utils/contactIcons";
import { CONTACT } from "../utils/interfaces";

const Contact: NextPage = () => {
  return (
    <div className={s.contactContainer}>
      <h1 className={s.contactTitle}>Contact me</h1>
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
