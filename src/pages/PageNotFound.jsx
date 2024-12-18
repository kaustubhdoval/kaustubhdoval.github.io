import React from "react";

import { Navbar } from "../components/Navbar/Navbar";
import { Footer } from "../components/Footer/Footer";

import styles from "./PageNotFound.module.css";

export const PageNotFound = () => {
  return (
    <div className={styles.App}>
      <Navbar />
      <div className={styles.container}>
        <img src="../../assets/404.jpg" alt="" />
        <div>
          <h1 className={styles.title}> Error 404</h1>
          <h3 className={styles.caption}>Page Not Found</h3>
        </div>
      </div>
      <Footer />
    </div>
  );
};
