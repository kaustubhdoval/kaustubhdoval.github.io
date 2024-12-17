import React from "react";

import styles from "./Home.module.css";
import { Projects } from "../components/Projects/ProjectList";
import { Navbar } from "../components/Navbar/Navbar";
import { Footer } from "../components/Footer/Footer";

export const ProjectPage = () => {
  return (
    <div className={styles.App}>
      <Navbar />
      <h1 className={styles.title}>All Projects</h1>
      <Projects header="" onlyFavs={false} />
      <Footer />
    </div>
  );
};
