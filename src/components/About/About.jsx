import React from "react";
import "animate.css";
import styles from "./About.module.css";

export const About = () => {
  return (
    <section
      className={`animate__animated animate__fadeIn ${styles.container}`}
      id="about"
    >
      <h1 className={styles.title}>About</h1>
      <p className={styles.content}>
        Welcome to my portfolio! My name is Kaustubh Doval, I am an Electrical
        Engineering student at the University of Waterloo. I have experience in
        Web Development, writing embedded C and creating, testing and debugging
        PCBs. I have a deep interest in robotics and power electronics.
        <br />
        <br /> Feel Free to Reach Out!
      </p>
    </section>
  );
};
