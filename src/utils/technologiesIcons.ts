import { TECHNOLOGIE } from "./interfaces";

const html: TECHNOLOGIE = {
  name: "HTML",
  icon: "https://icons.iconarchive.com/icons/cornmanthe3rd/plex/256/Other-html-5-icon.png",
};
const css: TECHNOLOGIE = {
  name: "CSS",
  icon: "https://cdn.iconscout.com/icon/free/png-256/css3-9-1175237.png",
};
const js: TECHNOLOGIE = {
  name: "Javascript",
  icon: "https://static-00.iconduck.com/assets.00/javascript-plain-icon-256x256-ianqz9kb.png",
};
const ts: TECHNOLOGIE = {
  name: "Typescript",
  icon: "https://cdn.iconscout.com/icon/free/png-256/typescript-1174965.png",
};
const react: TECHNOLOGIE = {
  name: "React.js",
  icon: "https://cdn.iconscout.com/icon/free/png-256/react-4-1175110.png",
};
const reactQuery: TECHNOLOGIE = {
  name: "React Query",
  icon: "https://camo.githubusercontent.com/807a841178a49b85c44b25373873d8c5121ee2711e676a968643dbb642eb1eba/68747470733a2f2f6d69726f2e6d656469756d2e636f6d2f6d61782f3430302f312a59745f6b7867616f567746585f6c4f336c775a506c672e706e67",
};
const redux: TECHNOLOGIE = {
  name: "React Redux",
  icon: "https://cdn.iconscout.com/icon/free/png-256/redux-283024.png",
};
const next: TECHNOLOGIE = {
  name: "Next.js",
  icon: "https://ui-lib.com/blog/wp-content/uploads/2021/12/nextjs-boilerplate-logo.png",
};
const node: TECHNOLOGIE = {
  name: "Node.js",
  icon: "https://cdn.iconscout.com/icon/free/png-256/node-js-1174925.png",
};
const express: TECHNOLOGIE = {
  name: "Express",
  icon: "https://www.mementotech.in/assets/images/icons/express.png",
};
const sql: TECHNOLOGIE = {
  name: "SQL Server",
  icon: "https://cdn-icons-png.flaticon.com/512/2721/2721297.png",
};
const postgresql: TECHNOLOGIE = {
  name: "PostgreSQL",
  icon: "https://cdn.iconscout.com/icon/free/png-256/postgresql-226047.png",
};
const sequelize: TECHNOLOGIE = {
  name: "Sequelize ORM",
  icon: "https://cdn.iconscout.com/icon/free/png-256/sequelize-2-1175003.png",
};
const prisma: TECHNOLOGIE = {
  name: "Prisma ORM",
  icon: "https://res.cloudinary.com/spantree-technology-group/image/upload/c_scale,w_256/v1644258944/spantree.net/tool_icons/prisma_ax9pfb.png",
};
const mongodb: TECHNOLOGIE = {
  name: "MongoDB",
  icon: "https://cdn.iconscout.com/icon/free/png-256/mongodb-5-1175140.png",
};
const mongoose: TECHNOLOGIE = {
  name: "Mongoose ORM",
  icon: "https://raw.githubusercontent.com/github/explore/master/topics/mongoose/mongoose.png",
};
const vercel: TECHNOLOGIE = {
  name: "Vercel",
  icon: "https://www.jorgeagoiz.es/favicon.ico",
};
const npm: TECHNOLOGIE = {
  name: "NPM",
  icon: "https://cdn.iconscout.com/icon/free/png-256/npm-3-1175132.png",
};
const figma: TECHNOLOGIE = {
  name: "Figma",
  icon: "https://cdn.iconscout.com/icon/free/png-256/figma-3521426-2944870.png",
};
const jira: TECHNOLOGIE = {
  name: "Jira",
  icon: "https://cdn.iconscout.com/icon/free/png-256/jira-3628861-3030001.png",
};
const postman: TECHNOLOGIE = {
  name: "Postman",
  icon: "https://www.svgrepo.com/show/354202/postman-icon.svg",
};

const technologiesLink = {
  Front: [html, css, js, ts, react, reactQuery, redux, next],
  Back: [node, express, next, ts],
  DataBases: [postgresql, sequelize, prisma, sql, mongodb, mongoose],
  Others: [vercel, npm, figma, jira, postman],
  Used: [mongodb, mongoose],
};

export default technologiesLink;
