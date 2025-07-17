import React from "react";
import { useNavigate } from "react-router-dom";

import { Navbar } from "../../components/Navbar/Navbar";
import { Footer } from "../../components/Footer/Footer";

import { getImageUrl } from "../../utils";

import styles from "./projectPages.module.css";

export const SpotifyPlayer = () => {
  const navigate = useNavigate();
  return (
    <div className={styles.App}>
      <Navbar />
      <div className={styles.container}>
        <h1 className={styles.name}>Spotify Media Controller</h1>
        <p className={styles.description}>
          Designed and Developed a ESP32 based Spotify Media Controller using
          the Spotify Web API.
          <br />
          <br />
          Features
          <li>
            1.3 inch OLED Display (SH1106) to display song and artist name along
            with showing the song progress.{" "}
          </li>
          <li>Rotary Encoder to change Volume</li>
          <li>Buttons to change tracks and play/pause the music</li>
          <br />
          <img
            className={styles.imageFr}
            src={getImageUrl("projectAssets/spotify.webp")}
            alt=""
          />
          <h3 className={styles.caption}> Project built on a protoboard </h3>
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
