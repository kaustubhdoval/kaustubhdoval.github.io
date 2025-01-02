import React from "react";

import { useNavigate } from "react-router-dom";

import { Navbar } from "../../components/Navbar/Navbar";
import { Footer } from "../../components/Footer/Footer";

import styles from "./projectPages.module.css";

export const Ldo = () => {
  const navigate = useNavigate();

  return (
    <div className={styles.App}>
      <Navbar />
      <div className={styles.container}>
        <h1 className={styles.name}>Voltage Regulator</h1>
        <p className={styles.description}>
          Designed a Low Dropout (LDO) Voltage Regulator using Altium Designer
          capable of stepping down 6V - 4V input to a stable 3.3V 200mA output.
          <br />
          <br />
          Utilized a Feed Forward Capacitor to improve the stability of the
          output voltage.
          <br /> <br />
          <iframe
            src="https://personal-viewer.365.altium.com/client/index.html?feature=embed&source=0F074014-FAC9-4745-B517-E8560ACD504E&activeView=PCB"
            width="1280"
            height="720"
            style={{
              overflow: "hidden",
              border: "none",
              width: "100%",
              height: "720px",
            }}
            allowfullscreen="false"
            onload="window.top.scrollTo(0,0);"
          ></iframe>
          <h3 className={styles.caption}>PCB Design Embed</h3>
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
