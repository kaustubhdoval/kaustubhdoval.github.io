import React from "react";
import { useNavigate } from "react-router-dom";

import { Navbar } from "../../components/Navbar/Navbar";
import { Footer } from "../../components/Footer/Footer";

import styles from "./projectPages.module.css";

export const SmartSwitchBoard = () => {
  const navigate = useNavigate();
  return (
    <div className={styles.App}>
      <Navbar />
      <div className={styles.container}>
        <h1 className={styles.name}>Smart Switch Board</h1>
        <p className={styles.description}>
          {" "}
          Conceptualized and Designed a ESP32 based Smart Switchboard. The final
          design was a product of multiple considerations ensuring ease of use
          and multiple possible integrations with the help of various sensors.
          The board houses LEDs to relay the status of the device and also
          include push buttons that ensure you can operate your lights even in
          the absence of an internet connection.
          <br />
          <br /> The board houses the following Sensors <br />{" "}
          <ul>
            <li>Light Sensor (LDR) </li>
            <li>Proximity Sensor (Passive IR: HC-SR501)</li>
            <li>Temperature Sensor (DHT22)</li>
          </ul>
          <br />
          <br /> TODO: Embed of PCB Design
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
