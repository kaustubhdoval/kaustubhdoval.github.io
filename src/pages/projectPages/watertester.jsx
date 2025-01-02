import React from "react";
import { useNavigate } from "react-router-dom";

import { Navbar } from "../../components/Navbar/Navbar";
import { Footer } from "../../components/Footer/Footer";

import { getImageUrl } from "../../utils";

import styles from "./projectPages.module.css";

export const WaterTester = () => {
  const navigate = useNavigate();
  return (
    <div className={styles.App}>
      <Navbar />
      <div className={styles.container}>
        <h1 className={styles.name}>Water Quality Tester</h1>
        <p className={styles.description}>
          {" "}
          Designed and developed a STM32 based Water Quality Tester using 3
          Sensors (Total Dissolved Solids (TDS) Sensor, pH Sensor and a
          Turbidity Sensor) to effectively evaluate the consumability of a water
          sample.
          <img
            className={styles.imageFr}
            src={getImageUrl("projectAssets/water-schematic.png")}
            alt=""
          />
          <h3 className={styles.caption}> Circuit Schematic </h3>
          <br /> <br />
          Components
          <ul>
            <li>STM32F401 Nucleo Board</li>
            <li>TDS Sensor</li>
            <li>pH Sensor</li>
            <li>Turbidity Sensor</li>
          </ul>
          <br />
          <img
            className={styles.imageFr}
            src={getImageUrl("projectAssets/water-cad.png")}
            alt=""
          />
          <h3 className={styles.caption}> CAD Visualization of the Tester </h3>
          <br /> TODO: Embed Design Document <br />
          <br /> <br />
          <a
            href="https://git.uwaterloo.ca/kdoval/ece198_001_58"
            target="_blank"
            className={styles.githubBtn}
          >
            <img
              height="24"
              width="24"
              src="https://cdn.simpleicons.org/gitlab"
            />
            Gitlab
          </a>
        </p>
        <button
          onClick={() => {
            navigate("/projects");
          }}
          className={styles.allBtn}
          role="button"
        >
          All Projects
        </button>
      </div>
      <Footer />
    </div>
  );
};
