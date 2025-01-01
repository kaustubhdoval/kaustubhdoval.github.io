import React, { useEffect } from "react";

import styles from "./Experience.module.css";
import ExperienceColumn from "./ExperienceColumn";

import { getImageUrl } from "../../utils";

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add(styles.show);
    } else {
      entry.target.classList.remove(styles.show);
    }
  });
});

export const Experience = () => {
  useEffect(() => {
    const hiddenElements = document.querySelectorAll(`.${styles.hidden}`);
    hiddenElements.forEach((el) => observer.observe(el));

    // Cleanup the observer on unmount
    return () => observer.disconnect();
  }, []);

  return (
    <section className={`${styles.hidden} ${styles.container}`} id="experience">
      <h1 className={styles.title}>Experience</h1>
      <ExperienceColumn
        href="https://www.lntecc.com"
        imgPath={getImageUrl("logos/lnt.png")}
        company="Larsen and Toubro"
        role="Signalling & Telecom Intern"
        location="Faridabad, India"
        duration="Oct 2024 - Dec 2024"
      ></ExperienceColumn>

      {/* <ExperienceColumn
        href="https://www.uwarg.com"
        imgPath={getImageUrl("logos/warg.jpeg")}
        company="Waterloo Aerial Robotics Group"
        role="Electrical Subteam Member"
        location="Waterloo, ON"
        duration="Jan 2024 - Present"
      ></ExperienceColumn> */}

      <ExperienceColumn
        href="https://uwaterloo.ca"
        imgPath={getImageUrl("logos/uwaterloo.png")}
        company="University of Waterloo"
        role="Project Intern"
        location="Remote"
        duration="Jan 2024 - Apr 2024"
      ></ExperienceColumn>

      <ExperienceColumn
        href="https://www.grantthornton.in"
        imgPath={getImageUrl("logos/gt.jpg")}
        company="Grant Thornton Bharat LLP"
        role="Research Intern"
        location="Gurugram, India"
        duration="Jun 2022 - Jun 2022"
      ></ExperienceColumn>
    </section>
  );
};
