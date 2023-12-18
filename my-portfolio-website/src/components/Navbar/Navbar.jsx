import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { Link } from "react-scroll";
import homeLogo from "/MyPortfolioWebsite/my-portfolio-website/src/assets/icons/homeIcon.svg";
import aboutLogo from "/MyPortfolioWebsite/my-portfolio-website/src/assets/icons/infoIcon.svg";
import contactLogo from "/MyPortfolioWebsite/my-portfolio-website/src/assets/icons/mailIcon.svg";
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
            <Link
              to="home-page"
              spy={true}
              smooth={true}
              offset={-70} // Adjust this value as needed
              duration={500}
              className="home-link"
              onClick={closeMenu}
            >
              <img src={homeLogo} alt="homeLogo" className="homeLogo" />
            </Link>
          </li>
          <li>
            <Link
              to="about-page"
              spy={true}
              smooth={true}
              offset={-70} // Adjust this value as needed
              duration={500}
              className="about-link"
              onClick={closeMenu}
            >
              <img src={aboutLogo} alt="aboutLogo" className="aboutLogo" />
            </Link>
          </li>
          <li>
            <Link
              to="contact-section"
              spy={true}
              smooth={true}
              offset={-70} // Adjust this value as needed
              duration={500}
              className="contact-link"
              onClick={closeMenu}
            >
              <img
                src={contactLogo}
                alt="contactLogo"
                className="contactLogo"
              />
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Navbar;
