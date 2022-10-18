import { NextPage } from "next";
import Image from "next/image";
import Link from "next/link";
import Cookies from "universal-cookie";
import s from "../styles/contact.module.css";
import iconsContact from "../utils/contactIcons";
import { CONTACT } from "../utils/interfaces";
import { Tooltip } from "@chakra-ui/react";

const Contact: NextPage = () => {
  const Cookie = new Cookies();
  let lenguageOfPage = Cookie.get("Lenguaje");
  return (
    <div id="contactMe" className={s.contactContainer}>
      <h1 className={s.contactTitle}>
        {lenguageOfPage == "ES" ? "CONTACTAME" : "CONTACT ME"}
      </h1>
      <div className={s.flexDivContact}>
        {iconsContact.map((IC: CONTACT, i: number) => (
          <div className={s.iconContact} key={i}>
            <Link href={IC.link} passHref>
              <a target={"_blank"}>
                <Tooltip hasArrow label={`${IC.data}`}>
                  <img width={"100em"} key={i} src={IC.icon} alt="" />
                </Tooltip>
              </a>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Contact;
