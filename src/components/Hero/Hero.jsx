import React from "react";

import DynamicIconCloud from "./DynamicIconCloud";
import styles from "./Hero.module.css";

export const Hero = () => {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <p className={styles.description}>Hello There 👋 </p>
        <h1 className={styles.title}>I'm Kaustubh</h1>
        <p className={styles.description}>
          ECE Student at the University of Waterloo
        </p>
        <div className={styles.contact}>
          <a href="https://www.linkedin.com/in/kaustubhdoval/" target="_blank">
            <img
              height="28"
              width="28"
              src="https://cdn.simpleicons.org/linkedin/white"
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
