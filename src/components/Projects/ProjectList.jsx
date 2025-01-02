import React from "react";

import ProjectColumn from "./ProjectColumn";
import styles from "./Projects.module.css";

export const Projects = ({ header = "Projects", onlyFavs = true }) => {
  return (
    <section className={styles.container} id="projects">
      <h1 className={styles.title}>{header}</h1>
      <ProjectColumn
        projectName="Spotify Media Controller"
        description="An ESP32 based Spotify controller that uses the Spotify API to control music being played from any device"
        btnName="Learn More"
        btnLink="spotify-controller"
        color="#33471F"
        inWebsite="true"
      ></ProjectColumn>
      <ProjectColumn
        projectName="Water Quality Tester"
        description="An STM32 based device that utilizes three types of Sensors to evaluate water quality"
        btnName="Learn More"
        btnLink="water-quality-tester"
        color="#1E4448"
        inWebsite="true"
      ></ProjectColumn>
      <ProjectColumn
        projectName="Smart Switch Board"
        description="An ESP32 based device which uses 3 relays and an array of sensors to make a truly smart switch board"
        btnName="Learn More"
        btnLink="smart-switch"
        color="#4B3047"
        inWebsite="true"
      ></ProjectColumn>
      <ProjectColumn
        projectName="Portfolio Website"
        description="This very website! made from scratch using ReactJS, HTML and CSS"
        btnName="Github"
        btnLink="https://github.com/kaustubhdoval/kaustubhdoval.github.io"
        color="#571367"
      ></ProjectColumn>
      {/* FOR NON FAVOURITE PROJECTS - TO BE ONLY DISPLAYED ON /projects page */}
      {!onlyFavs && (
        <>
          <ProjectColumn
            projectName="Voltage Regulator"
            description="Designed a Low Droupout Voltage Regulator using Altium Designer"
            btnName="Learn More"
            btnLink="voltage-regulator"
            color="#E4A03A"
            inWebsite="true"
          ></ProjectColumn>
          <ProjectColumn
            projectName="Motorized Roller Blinds"
            description="An Arduino based Motorized Roller Blinds system consisting of a Stepper Motor and Infrared Remote"
            btnName="Learn More"
            btnLink="rolling-blinds"
            color="#880718"
            inWebsite="true"
          ></ProjectColumn>
        </>
      )}
    </section>
  );
};
