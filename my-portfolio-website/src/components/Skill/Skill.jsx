import "./Skill.css"
import React, { useEffect, useState } from "react";
import Card from "./skillSubComponent/Card";

import JavaIcon from "D:\\MyPortfolioWebsite\\my-portfolio-website\\src\\assets\\icons\\java.png"
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
      threshold: 0.3, // Adjust the threshold as needed
    });

    // Observe the target element
    observer.observe(document.getElementById("skill-page"));

    // Cleanup the observer on component unmount
    return () => observer.disconnect();
  }, []);

    const language = [JavaIcon, C, Python, HTML, CSS, JS];
    const database = [Mongo, MySQL];
    const tools = [NodeJS, ReactLogo, Spring, Git, Github];

    return (  

        <div className="skill-page" id="skill-page" style={{ opacity }}>
            <div className="skill-line"></div>
            <h2 className="skill-title">Skills</h2>
            <div className="card-container">
                <Card title="Language" icons={language}/>
                <Card title="Database" icons={database}/>
                <Card title="Tools" icons={tools}/>
            </div>
            <section>

            </section>
        </div>

    );
}

export default Skill;

