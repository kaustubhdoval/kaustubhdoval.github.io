import React from "react";
import styles from "./Home.module.css";

import { Navbar } from "../components/Navbar/Navbar";
import { Hero } from "../components/Hero/Hero";
import { About } from "../components/About/About";
import { Experience } from "../components/Experience/Experience";
import { Projects } from "../components/Projects/ProjectList";
import { Footer } from "../components/Footer/Footer";

export const Home = () => {
  return (
    <div className={styles.App}>
      <Navbar />
      <Hero />
      <About />
      <Experience />
      <Projects />
      <Footer />
    </div>
  );
};
