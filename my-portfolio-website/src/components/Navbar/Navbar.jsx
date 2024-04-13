import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import homeLogo from "/MyPortfolioWebsite/my-portfolio-website/src/assets/icons/homeIcon.svg";
import aboutLogo from "/MyPortfolioWebsite/my-portfolio-website/src/assets/icons/infoIcon.svg";
import contactLogo from "/MyPortfolioWebsite/my-portfolio-website/src/assets/icons/mailIcon.svg";
import skillLogo from "/MyPortfolioWebsite/my-portfolio-website/src/assets/icons/skill.svg";

import "./Navbar.css";

function Navbar() {
  // State to track whether the mobile menu is visible or not
  const [menuVisible, setMenuVisible] = useState(false);

  // Function to toggle the mobile menu visibility
  const toggleMenu = () => {
    setMenuVisible(!menuVisible);
  };

  // Function to close the mobile menu
  const closeMenu = () => {
    setMenuVisible(false);
  };

  return (
    <div className="header">
      {/* Navigation bar */}
      <nav className="navbar">
        {/* Hamburger menu icon that toggles the mobile menu */}
        <div className="hamburger-menu" onClick={toggleMenu}>
          {menuVisible ? <FaTimes /> : <FaBars />}
        </div>

        {/* List of navigation links */}
        <ul className={`nav-menu ${menuVisible ? "show" : ""}`}>
          {/* Home link */}
          <li>
            <a href="#home-page" className="home-link" onClick={closeMenu}>
              <img src={homeLogo} alt="homeLogo" className="homeLogo" />
              <span>Home</span>
            </a>
          </li>

          {/* About link */}
          <li>
            <a href="#about-page" className="about-link" onClick={closeMenu}>
              <img src={aboutLogo} alt="aboutLogo" className="aboutLogo" />
              <span>About</span>
            </a>
          </li>

          {/* Skill link */}
          <li>
            <a href="#skill-page" className="skill-link" onClick={closeMenu}>
              <img src={skillLogo} alt="homeLogo" className="skillLogo" />
              <span>Skills</span>
            </a>
          </li>

          {/* Contact link */}
          <li>
            <a href="#contact-page" className="contact-link" onClick={closeMenu}>
              <img
                src={contactLogo}
                alt="contactLogo"
                className="contactLogo"
              />
              <span>Contact</span>
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Navbar;
