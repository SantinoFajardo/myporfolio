import { CONTACT } from "./interfaces";
import links from "./links";

const whatsapp: CONTACT = {
  data: "+54 3487707459",
  icon: "https://cdn-icons-png.flaticon.com/512/1383/1383269.png",
  link: "https://api.whatsapp.com/send?phone=3487707459&text=Hola,%20mi%20nombre%20es%20(COMPLETAR)%20y%20me%20comunico%20desde%20(COMPLETAR).%20Vi%20tu%20perfil%20en%20(COMPLETAR)%20y%20me%20gustaria%20contactarme%20con%20vos%20para%20(COMPLETAR)",
};

const linkedin: CONTACT = {
  data: "@Santino Fajardo",
  icon: "https://cdn-icons-png.flaticon.com/512/174/174857.png",
  link: links.myLinkedinLink,
};

const gitHub: CONTACT = {
  data: "@SantinoFajardo",
  icon: "https://cdn-icons-png.flaticon.com/512/25/25231.png",
  link: links.myGitHubLink,
};

const gmail: CONTACT = {
  data: "santinofajardo02@gmail.com",
  icon: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7e/Gmail_icon_%282020%29.svg/245px-Gmail_icon_%282020%29.svg.png",
  link: "mailto:santinofajardo02@gmail.com",
};

const iconsContact: CONTACT[] = [whatsapp, linkedin, gitHub, gmail];

export default iconsContact;
