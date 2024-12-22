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
  const handleNavigation = useNavigate();

  const handleClick = (e) => {
    if (inWebsite) {
      e.preventDefault();
      handleNavigation("/projects/" + btnLink);
    }
  };

  return (
    <div
      className={`${styles.bigboy} ${styles.hoverColor}`}
      style={{ "--hover-color": color }}
    >
      <h1 className={styles.name}>{projectName}</h1>
      <div className={styles.right}>
        <p className={styles.description}>{description}</p>
        <a
          onClick={handleClick}
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
