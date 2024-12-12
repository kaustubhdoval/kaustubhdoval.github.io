import React from "react";

import styles from "./Footer.module.css";

export const Footer = () => {
  return (
    <section className={styles.container}>
      <h1 className={styles.credit}>Kaustubh Doval © 2024</h1>
      <div className={styles.social}>
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
    </section>
  );
};
