import React from "react";

import styles from "./Experience.module.css";
import ExperienceColumn from "./ExperienceColumn";

export const Experience = () => {
  return (
    <section className={styles.container} id="experience">
      <h1 className={styles.title}>Experience</h1>
      <ExperienceColumn
        href="https://www.lntecc.com"
        imgPath="../../assets/logos/lnt.png"
        company="Larsen and Toubro"
        role="Signalling & Telecom Intern"
        location="Faridabad, India"
        duration="Oct 2024 - Dec 2024"
      ></ExperienceColumn>

      <ExperienceColumn
        href="https://www.uwarg.com"
        imgPath="../../assets/logos/warg.jpeg"
        company="Waterloo Aerial Robotics Group"
        role="Electrical Subteam Member"
        location="Waterloo, ON"
        duration="Jan 2024 - Present"
      ></ExperienceColumn>

      <ExperienceColumn
        href="https://uwaterloo.ca"
        imgPath="../../assets/logos/uwaterloo.png"
        company="University of Waterloo"
        role="Project Intern"
        location="Remote"
        duration="Jan 2024 - Apr 2024"
      ></ExperienceColumn>
    </section>
  );
};
