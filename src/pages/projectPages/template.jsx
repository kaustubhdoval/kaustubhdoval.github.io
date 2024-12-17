import React from "react";
import { useNavigate } from "react-router-dom";

import { Navbar } from "../../components/Navbar/Navbar";
import { Footer } from "../../components/Footer/Footer";

import styles from "./projectPages.module.css";

export const template = () => {
  const navigate = useNavigate();

  return (
    <div className={styles.App}>
      <Navbar />
      <div className={styles.container}>
        <h1 className={styles.name}>PROJECT NAME</h1>
        <p className={styles.description}>
          PROJECT DESCRIPTION
          <br /> <br />
          <a
            href="https://github.com/kaustubhdoval/ESP-Spotify-Player"
            target="_blank"
            className={styles.githubBtn}
          >
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
