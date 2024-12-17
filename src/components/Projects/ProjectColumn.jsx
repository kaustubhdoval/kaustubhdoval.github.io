import React from "react";
import styles from "./Projects.module.css";

import { useNavigate } from "react-router-dom";

const ProjectColumn = ({
  projectName,
  description,
  btnName,
  btnLink,
  color,
  inWebsite = false,
}) => {
  const navigate = useNavigate();

  return (
    <div
      className={`${styles.bigboy} ${styles.hoverColor}`}
      style={{ "--hover-color": color }}
    >
      <h1 className={styles.name}>{projectName}</h1>
      <div className={styles.right}>
        <p className={styles.description}>{description}</p>
        <a
          onClick={(e) => {
            if (inWebsite) {
              e.preventDefault();
              navigate("/projects/" + btnLink);
            }
          }}
          href={!inWebsite ? btnLink : undefined}
          target={!inWebsite ? "_blank" : undefined}
          className={styles.btn}
        >
          {btnName}
        </a>
      </div>
    </div>
  );
};

export default ProjectColumn;
