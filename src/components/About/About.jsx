import React, { useEffect } from "react";
import styles from "./About.module.css";

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add(styles.show);
    } else {
      entry.target.classList.remove(styles.show);
    }
  });
});

export const About = () => {
  useEffect(() => {
    const hiddenElements = document.querySelectorAll(`.${styles.hidden}`);
    hiddenElements.forEach((el) => observer.observe(el));

    // Cleanup the observer on unmount
    return () => observer.disconnect();
  }, []);

  return (
    <section className={`${styles.hidden} ${styles.container}`} id="about">
      <h1 className={styles.title}>About</h1>
      <p className={styles.content}>
        Welcome to my portfolio! My name is Kaustubh Doval, I am an Electrical
        Engineering student at the University of Waterloo. I have experience in
        Web Development, writing embedded C and creating, testing and debugging
        PCBs. I have a deep interest in robotics and power electronics.
        <br />
        <br /> Feel Free to Reach Out!
      </p>
    </section>
  );
};
