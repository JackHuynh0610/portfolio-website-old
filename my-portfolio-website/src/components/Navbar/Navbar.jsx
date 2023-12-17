// Navbar.js
import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

// Importing custom icons for the navbar
import homeLogo from "/MyPortfolioWebsite/my-portfolio-website/src/assets/icons/homeIcon.svg";
import aboutLogo from "/MyPortfolioWebsite/my-portfolio-website/src/assets/icons/infoIcon.svg";
import contactLogo from "/MyPortfolioWebsite/my-portfolio-website/src/assets/icons/mailIcon.svg";

// Importing the styles for the Navbar component
import "./Navbar.css";

// Navbar component definition
function Navbar() {
  // State to track the visibility of the mobile menu
  const [menuVisible, setMenuVisible] = useState(false);

  // Function to toggle the mobile menu visibility
  const toggleMenu = () => {
    setMenuVisible(!menuVisible);
  };

  // JSX structure for the Navbar component
  return (
    <div className="header">
      <nav className="navbar">
        {/* Hamburger menu icon */}
        <div className="hamburger-menu" onClick={toggleMenu}>
          {menuVisible ? <FaTimes /> : <FaBars />}
        </div>

        {/* Navigation menu */}
        <ul className={`nav-menu ${menuVisible ? "show" : ""}`}>
          {/* Home link */}
          <li>
            <a href="/" className="home-link">
              <img src={homeLogo} alt="homeLogo" className="homeLogo" />
            </a>
          </li>

          {/* About link */}
          <li>
            <a href="/" className="about-link">
              <img src={aboutLogo} alt="aboutLogo" className="aboutLogo" />
            </a>
          </li>

          {/* Contact link */}
          <li>
            <a href="/" className="contact-link">
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

// Exporting the Navbar component
export default Navbar;
