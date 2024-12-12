import React from "react";
import styles from "./Experience.module.css";

const ExperienceColumn = ({
  href,
  imgPath,
  company,
  role,
  location,
  duration,
}) => {
  return (
    <a href={href} target="_blank" className={styles.biggerFish}>
      <div className={styles.bigboy}>
        <div className={styles.left}>
          <img className={styles.logo} src={imgPath} alt={company + " logo"} />
          <div className={styles.content}>
            <h1 className={styles.role}>{role}</h1>
            <h2 className={styles.company}>{company}</h2>
          </div>
        </div>
        <div className={styles.right}>
          <h2 className={styles.location}>{location}</h2>
          <h2 className={styles.duration}>{duration}</h2>
        </div>
      </div>
    </a>
  );
};

export default ExperienceColumn;
