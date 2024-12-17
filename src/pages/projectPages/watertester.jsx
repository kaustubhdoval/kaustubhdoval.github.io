import React from "react";
import { useNavigate } from "react-router-dom";

import { Navbar } from "../../components/Navbar/Navbar";
import { Footer } from "../../components/Footer/Footer";

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
          sample. <br />
          <br /> Embedded below is a Design Document for the same. <br />
          <br />
          <br /> TODO: Embed PDF Document
          <br /> <br />
          <a href="#" target="_blank" className={styles.githubBtn}>
            <img
              height="24"
              width="24"
              src="https://cdn.simpleicons.org/github/white"
            />
            Github
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
