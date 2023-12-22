import "./Skill.css";
import React, { useEffect, useState } from "react";
import Card from "./skillSubComponent/Card";

// Importing icons and images
import JavaIcon from "D:\\MyPortfolioWebsite\\my-portfolio-website\\src\\assets\\icons\\java.png";
import C from "D:\\MyPortfolioWebsite\\my-portfolio-website\\src\\assets\\icons\\C.svg";
import Python from "D:\\MyPortfolioWebsite\\my-portfolio-website\\src\\assets\\icons\\python.png";
import HTML from "D:\\MyPortfolioWebsite\\my-portfolio-website\\src\\assets\\icons\\html.png";
import CSS from "D:\\MyPortfolioWebsite\\my-portfolio-website\\src\\assets\\icons\\css-3.png";
import JS from "D:\\MyPortfolioWebsite\\my-portfolio-website\\src\\assets\\icons\\icons8-javascript.svg";

import Mongo from "D:\\MyPortfolioWebsite\\my-portfolio-website\\src\\assets\\icons\\icons8-mongodb.svg";
import MySQL from "D:\\MyPortfolioWebsite\\my-portfolio-website\\src\\assets\\icons\\icons8-mysql.svg";

import NodeJS from "D:\\MyPortfolioWebsite\\my-portfolio-website\\src\\assets\\icons\\nodeJs.svg";
import ReactLogo from "D:\\MyPortfolioWebsite\\my-portfolio-website\\src\\assets\\icons\\physics.png";
import Spring from "D:\\MyPortfolioWebsite\\my-portfolio-website\\src\\assets\\icons\\springboot.svg";
import Git from "D:\\MyPortfolioWebsite\\my-portfolio-website\\src\\assets\\icons\\icons8-git.svg";
import Github from "D:\\MyPortfolioWebsite\\my-portfolio-website\\src\\assets\\icons\\github-mark-c791e9551fe4\\github-mark\\github-mark-white.svg";

import RayMarch from "D:\\MyPortfolioWebsite\\my-portfolio-website\\src\\assets\\pictures\\background\\cute-hd-background-cream-design-vector\\rayMarch.png";
import RayCast from "D:\\MyPortfolioWebsite\\my-portfolio-website\\src\\assets\\pictures\\background\\cute-hd-background-cream-design-vector\\raycast.png";

function Skill() {
  // State to manage opacity
  const [opacity, setOpacity] = useState(0);

  // Intersection Observer callback function
  const handleIntersection = (entries) => {
    entries.forEach((entry) => {
      // If the target element is in the viewport, set opacity to 1, else set it to 0
      setOpacity(entry.isIntersecting ? 1 : 0);
    });
  };

  useEffect(() => {
    // Create an IntersectionObserver
    const observer = new IntersectionObserver(handleIntersection, {
      threshold: 0.2, // Adjust the threshold as needed
    });

    // Observe the target element
    observer.observe(document.getElementById("skill-page"));

    // Cleanup the observer on component unmount
    return () => observer.disconnect();
  }, []);

  // Arrays for different skill categories
  const language = [JavaIcon, C, Python, HTML, CSS, JS];
  const database = [Mongo, MySQL];
  const tools = [NodeJS, ReactLogo, Spring, Git, Github];

  return (
    /* Skill page container */
    <div className="skill-page" id="skill-page" style={{ opacity }}>
      {/* Horizontal line */}
      <div className="skill-line"></div>

      {/* Skill title */}
      <h2 className="skill-title">Skills</h2>

      {/* Container for skill cards */}
      <div className="card-container">
        {/* Card for Languages */}
        <Card title="Languages" icons={language} />

        {/* Card for Databases */}
        <Card title="Databases" icons={database} />

        {/* Card for Tools */}
        <Card title="Tools" icons={tools} />
      </div>

      {/* Project section */}
      <section className="project-section">
        {/* Project title */}
        <h3 className="project-title">Projects</h3>

        {/* Container for projects */}
        <div className="project-container">
          {/* Project 1: RayMarching */}
          <div className="project1">
            <h3>RayMarching</h3>
            <div className="ray-card" id="raymarch">
              <a
                href="https://github.com/JackHuynh0610/RayMarching"
                target="_blank"
                rel="noopener noreferrer"
              >
                {/* Image for RayMarching project */}
                <img src={RayMarch} alt="ray-marching-picture" />
                <p className="guide-text">Click thumbnail to learn more</p>
              </a>
            </div>
          </div>

          {/* Project 2: RayCasting-3D */}
          <div className="project2">
            <h3>RayCasting-3D</h3>
            <div className="ray-card" id="raycast">
              <a
                href="https://github.com/JackHuynh0610/RayCasting-3D"
                target="_blank"
                rel="noopener noreferrer"
              >
                {/* Image for RayCasting-3D project */}
                <img src={RayCast} alt="ray-casting-picture" />
                <p className="guide-text">Click thumbnail to learn more</p>
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Skill;
