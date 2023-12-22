import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import homeLogo from "/MyPortfolioWebsite/my-portfolio-website/src/assets/icons/homeIcon.svg";
import aboutLogo from "/MyPortfolioWebsite/my-portfolio-website/src/assets/icons/infoIcon.svg";
import contactLogo from "/MyPortfolioWebsite/my-portfolio-website/src/assets/icons/mailIcon.svg";
import skillLogo from "/MyPortfolioWebsite/my-portfolio-website/src/assets/icons/skill.svg"

import "./Navbar.css";

function Navbar() {
  const [menuVisible, setMenuVisible] = useState(false);

  const toggleMenu = () => {
    setMenuVisible(!menuVisible);
  };

  const closeMenu = () => {
    setMenuVisible(false);
  };

  return (
    <div className="header">
      <nav className="navbar">
        <div className="hamburger-menu" onClick={toggleMenu}>
          {menuVisible ? <FaTimes /> : <FaBars />}
        </div>
        <ul className={`nav-menu ${menuVisible ? "show" : ""}`}>
          <li>
            <a href="#home-page" className="home-link" onClick={closeMenu}>
              <img src={homeLogo} alt="homeLogo" className="homeLogo" />
            </a>
          </li>
          <li>
            <a href="#about-page" className="about-link" onClick={closeMenu}>
              <img src={aboutLogo} alt="aboutLogo" className="aboutLogo" />
            </a>
          </li>
          <li>
            <a href="#skill-page" className="skill-link" onClick={closeMenu}>
              <img src={skillLogo} alt="homeLogo" className="skillLogo" />
            </a>
          </li>
          <li>
            <a href="#contact-page" className="contact-link" onClick={closeMenu}>
              <img
                src={contactLogo}
                alt="contactLogo"
                className="contactLogo"
              />
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Navbar;
