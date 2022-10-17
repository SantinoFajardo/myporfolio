import { NextPage } from "next";
import s from "../styles/contact.module.css";

const Contact: NextPage = () => {
  return (
    <div className={s.contactContainer}>
      <h1 className={s.contactTitle}>Contact me</h1>
    </div>
  );
};

export default Contact;
