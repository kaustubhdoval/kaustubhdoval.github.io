import React from "react";

import "animate.css";

import DynamicIconCloud from "./DynamicIconCloud";
import styles from "./Hero.module.css";

export const Hero = () => {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <p
          className={`animate__animated animate__fadeIn animate__faster	 ${styles.description}`}
        >
          Hello There 👋{" "}
        </p>
        <h1
          className={`animate__animated animate__fadeIn animate__fast ${styles.title}`}
        >
          I'm <b>Kaustubh</b>
        </h1>
        <p
          className={`animate__animated animate__fadeIn animate__delay-1s ${styles.description}`}
        >
          ECE Student at the University of Waterloo
        </p>
        <div
          className={`animate__animated animate__fadeInLeft animate__delay-1s ${styles.contact}`}
        >
          <a href="https://www.linkedin.com/in/kaustubhdoval/" target="_blank">
            <img
              height="28"
              width="28"
              src="https://cdn.simpleicons.org/logmein/white"
            />
          </a>
          <a href="https://github.com/kaustubhdoval" target="_blank">
            <img
              height="28"
              width="28"
              src="https://cdn.simpleicons.org/github/white"
            />
          </a>
          <a href="mailto:kaustubhdoval@gmail.com">
            <img
              height="28"
              width="28"
              src="https://cdn.simpleicons.org/mailboxdotorg/white"
            />
          </a>
        </div>
      </div>
      <div className={styles.heroImg}>
        <DynamicIconCloud />
      </div>
    </section>
  );
};
