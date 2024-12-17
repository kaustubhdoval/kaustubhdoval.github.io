import React, { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";

import styles from "./Navbar.module.css";

export const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const handleNavigation = (section) => {
    // Close mobile menu
    setMenuOpen(false);

    // If not on home page, navigate to home first
    if (location.pathname !== "/") {
      navigate("/", { state: { scrollTo: section } });
    } else {
      // If already on home page, scroll to section
      const element = document.getElementById(section);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  return (
    <nav className={styles.navbar}>
      <a href="/" className={styles.title}>
        Kaustubh
      </a>

      <div className={styles.menu}>
        <img
          className={styles.menuBtn}
          src={
            menuOpen ? "/assets/nav/menuClose.png" : "/assets/nav/menuIcon.png"
          }
          alt="menu-btn"
          onClick={() => setMenuOpen(!menuOpen)}
        />

        <ul
          className={`${styles.menuItems} ${menuOpen && styles.menuOpen}`}
          onClick={() => setMenuOpen(false)}
        >
          <li>
            <button
              onClick={() => handleNavigation("about")}
              className={styles.navButton}
            >
              About
            </button>
          </li>
          <li>
            <button
              onClick={() => handleNavigation("experience")}
              className={styles.navButton}
            >
              Experience
            </button>
          </li>
          <li>
            <button
              onClick={() => handleNavigation("projects")}
              className={styles.navButton}
            >
              Projects
            </button>
          </li>
        </ul>
      </div>
    </nav>
  );
};
