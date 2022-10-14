import Link from "next/link";
import { PROJECT } from "../../utils/interfaces/interfaces";
import s from "../../styles/projectCard.module.css";

const ProjectCard: any = ({ props }: PROJECT, { lenguageOfPage }: any) => {
  return (
    <div className={s.divCard}>
      <h1 className={s.title}>{props.title}</h1>
      {props.deploy && (
        <Link href={props.deploy} passHref>
          <a target={"_blank"}>
            <button className={s.buttonDeploy}>DEPLOY</button>
          </a>
        </Link>
      )}
    </div>
  );
};

export default ProjectCard;
