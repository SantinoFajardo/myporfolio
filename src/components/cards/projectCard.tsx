import Link from "next/link";
import { PROJECT } from "../../utils/interfaces/interfaces";
import s from "../../styles/projectCard.module.css";
import { BsGithub } from "react-icons/bs";

const ProjectCard: any = ({ props }: PROJECT, { lenguageOfPage }: any) => {
  return (
    <div className={s.divCard}>
      <div className={s.head}>
        <h1 className={s.title}>{props.title}</h1>
        <Link href={props.repository} passHref>
          <a target={"_blank"}>
            <BsGithub className={s.gitHubIcon} fontSize={"40px"} />
          </a>
        </Link>
      </div>
      {props.deploy && (
        <Link href={props.deploy} passHref>
          <a target={"_blank"}>
            <button className={s.buttonDeploy}>DEPLOY</button>
          </a>
        </Link>
      )}
      <div>
        {props.video ? (
          <video className={s.videoProject} width={"40%"} autoPlay>
            <source src={props.video} type="video/mp4" />
          </video>
        ) : (
          <img
            className={s.imageProject}
            width={"40%"}
            src={props.image}
            alt=""
          />
        )}
      </div>
    </div>
  );
};

export default ProjectCard;
