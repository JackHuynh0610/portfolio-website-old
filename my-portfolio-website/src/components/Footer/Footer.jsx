// Footer.js
import React from 'react';
import './Footer.css';
import Github from "D:\\MyPortfolioWebsite\\my-portfolio-website\\src\\assets\\icons\\github-mark-c791e9551fe4\\github-mark\\github-mark-white.svg";
import LinkedIn from "D:\\MyPortfolioWebsite\\my-portfolio-website\\src\\assets\\icons\\linkin.svg";


function Footer() {
  return (
    <footer className="footer-container">
      <div className="footer-content">
        <p>&copy; 2023 Your Website Name. All rights reserved.</p>
        <div className="social-icons">
          <a href="https://github.com/JackHuynh0610" target="_blank" rel="noopener noreferrer">
            <img src={Github} alt="GitHub" />
          </a>
          <a href="https://www.linkedin.com/in/nghiathuynh/" target="_blank" rel="noopener noreferrer">
            <img src={LinkedIn} alt="LinkedIn" />
          </a>
          {/* Add more social media icons as needed */}
        </div>
      </div>
    </footer>
  );
}

export default Footer;