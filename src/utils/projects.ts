import { PROJECT } from "./interfaces/interfaces";
import technologiesLink from "./technologiesIcons";

const PF: PROJECT = {
  title: "World Travelers",
  image: "",
  video:
    "https://res.cloudinary.com/santino/video/upload/v1665964427/worldTravelers/World_Travelers_video_hwpn3b.mp4",
  descriptionES:
    "En este proyecto buscamos crear una comunidad de viajeros, donde un usuario puediera registrarse, crear viajes, unirse a viajes, pagar viajes, dar feedbacks a las actividades en las que estuvo presente y poder comunicarse a traves de un chat con otros viajeros. Como usuario adminisitrador, puede modificar viajes, crear actividades turisticas y modificar los comentarios y perfiles de los usuariso",
  descriptionEN:
    "In this project we seek to create a community of travelers, where a user can register, create trips, join trips, pay for trips, give feedback to the activities in which he was present and be able to communicate through a chat with other travelers. As an administrator user, you can modify trips, create tourist activities and modify user comments and profiles.",
  technologies: [
    technologiesLink.Front[0],
    technologiesLink.Front[1],
    technologiesLink.Front[3],
    technologiesLink.Front[4],
    technologiesLink.Front[5],
    technologiesLink.Front[6],
    technologiesLink.Back[0],
    technologiesLink.DataBases[0],
    technologiesLink.DataBases[2],
    "https://cdn.iconscout.com/icon/free/png-256/mongodb-5-1175140.png",
    "https://raw.githubusercontent.com/github/explore/master/topics/mongoose/mongoose.png",
  ],
  deploy: "https://worldtravelers-app.herokuapp.com/",
  repository: "https://github.com/SantinoFajardo/PF-SoyHenry",
};
const PI: PROJECT = {
  title: "PI HENRY",
  image: "https://assets.soyhenry.com/LOGO-REDES-01_og.jpg",
  video: "",
  descriptionES:
    "En este projecto individual, debia cumplir con los requisitos dados por Henry. Crear una SPA donde en ella haya filtros combinados, CSS PURO, formularios controlados y mezclar datos de una API externa con datos provenientes de la base de datos. Tampoco podia usar otra tecnologia que no sean las vistas debajo.",
  descriptionEN:
    "In this individual project, he had to fulfill the requirements given by Henry. Create a SPA where there are combined filters, PURE CSS, controlled forms and mix data from an external API with data from the database. He also couldn't use technology other than the ones seen below.",
  technologies: [
    technologiesLink.Front[0],
    technologiesLink.Front[1],
    technologiesLink.Front[2],
    technologiesLink.Front[4],
    technologiesLink.Front[5],
    technologiesLink.Back[0],
    technologiesLink.Back[1],
    technologiesLink.DataBases[0],
    technologiesLink.DataBases[1],
  ],
  repository: "https://github.com/SantinoFajardo/Pi-VideoGames",
};

const projects: PROJECT[] = [PF, PI];

export default projects;
