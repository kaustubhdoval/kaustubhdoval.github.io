import React from "react";
import { useNavigate } from "react-router-dom";

import { Navbar } from "../../components/Navbar/Navbar";
import { Footer } from "../../components/Footer/Footer";

import { getImageUrl } from "../../utils";
import styles from "./projectPages.module.css";

export const PostureBuddy = () => {
  const navigate = useNavigate();

  return (
    <div className={styles.App}>
      <Navbar />
      <div className={styles.container}>
        <h1 className={styles.name}>Posture Buddy</h1>
        <p className={styles.description}>
          Wrote a Python Script to detect bad posture using OpenCV and
          Mediapipe. I used the Mediapipe Pose model to detect the human body
          and reliably assign landmarks to the body parts. The script detects
          bad posture by checking the angle between the shoulders, hips, and
          neck.
          <br />
          <br />
          I used a Raspberry Pi Micro 2 along with a Camera Module to capture
          footage of the user. I then streamed the camera footage to my laptop
          using TCP - the Python script takes in this stream and then processes
          it.
          <br />
          <img
            className={styles.imageFr}
            src={getImageUrl("projectAssets/posture-pi.jpg")}
            alt=""
          />
          <h3 className={styles.caption}> Raspberry Pi + Camera Module </h3>
          <br /> <br />
          <a
            href="https://github.com/kaustubhdoval/posture-buddy"
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
