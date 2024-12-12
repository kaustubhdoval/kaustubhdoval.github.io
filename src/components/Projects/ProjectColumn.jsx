import React from "react";
import styles from "./Projects.module.css";

const ProjectColumn = ({
  projectName,
  description,
  btnName,
  btnLink,
  color,
}) => {
  return (
    <div
      className={`${styles.bigboy} ${styles.hoverColor}`}
      style={{ "--hover-color": color }}
    >
      <h1 className={styles.name}>{projectName}</h1>
      <div className={styles.right}>
        <p className={styles.description}>{description}</p>
        <a href={btnLink} target="_blank" className={styles.btn}>
          {btnName}
        </a>
      </div>
    </div>
  );
};

export default ProjectColumn;
