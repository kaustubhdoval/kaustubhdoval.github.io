import React from "react";

import ProjectColumn from "./ProjectColumn";
import styles from "./Projects.module.css";

export const Projects = () => {
  return (
    <section className={styles.container} id="projects">
      <h1 className={styles.title}>Projects</h1>
      <ProjectColumn
        projectName="Spotify Media Controller"
        description="An ESP32 based Spotify controller that uses the Spotify API to control music being played from any device"
        btnName="Github"
        btnLink="google.com"
        color="#33471F"
      ></ProjectColumn>
      <ProjectColumn
        projectName="Water Quality Tester"
        description="An STM32 based device that utilizes three types of Sensors to evaluate water quality"
        btnName="Github"
        btnLink="google.com"
        color="#1E4448"
      ></ProjectColumn>
      <ProjectColumn
        projectName="Smart Switch Board"
        description="An ESP32 based device which uses 3 relays and an array of sensors to make a truly smart switch board"
        btnName="Learn More"
        btnLink="google.com"
        color="#4B3047"
      ></ProjectColumn>
      <ProjectColumn
        projectName="Motorized Roller Blinds"
        description="An Arduino based Motorized Roller Blinds system consisting of a Stepper Motor and Infrared Remote"
        btnName="Learn More"
        btnLink="google.com"
        color="#880718"
      ></ProjectColumn>
      <ProjectColumn
        projectName="Portfolio Website"
        description="This very website! made from scratch using ReactJS"
        btnName="Github"
        btnLink="google.com"
        color="#571367"
      ></ProjectColumn>
    </section>
  );
};
