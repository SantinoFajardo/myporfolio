import Link from "next/link";
import { PROJECT } from "../../utils/interfaces/interfaces";
import s from "../../styles/projectCard.module.css";
import { BsGithub } from "react-icons/bs";

const ProjectCard: any = ({ props }: PROJECT, { lenguageOfPage }: any) => {
  return (
    <div className={s.divCard}>
      <div className={s.head}>
        <h1 className={s.title}>{props.title}</h1>
      </div>
      <div className={s.divDeployRepo}>
        {props.deploy && (
          <Link href={props.deploy} passHref>
            <a target={"_blank"}>
              <button className={s.buttonDeploy}>DEPLOY</button>
            </a>
          </Link>
        )}
        <Link href={props.repository} passHref>
          <a target={"_blank"}>
            <BsGithub className={s.gitHubIcon} fontSize={"50px"} />
          </a>
        </Link>
      </div>
      <div className={s.leftRightDiv}>
        <div className={s.divLeft}>
          {props.video ? (
            <video
              loop
              muted={true}
              className={s.videoProject}
              width={"100%"}
              autoPlay
            >
              <source src={props.video} type="video/mp4" />
            </video>
          ) : (
            <img
              className={s.videoProject}
              width={"100%"}
              src={props.image}
              alt=""
            />
          )}
        </div>
        <div className={s.divRight}>
          <p className={s.description}>{props.descriptionEN}</p>
          <h3>TECHNOLOGIES:</h3>
          <div className={s.flexDivTechnologiesProjects}>
            {props.technologies.map((T: string, i: number) => (
              <div key={i}>
                <img width={"40px"} src={T} alt="" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
