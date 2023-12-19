import "./About.css";
import React, { useEffect, useState } from "react";
import ImageSlider from "./ImageSlider";
import gsap from "gsap";
import SplitTextJS from "split-text-js";

import adventure1 from "D:\\MyPortfolioWebsite\\my-portfolio-website\\src\\assets\\pictures\\memories\\ski_clubs_quality.jpg";
import adventure2 from "D:\\MyPortfolioWebsite\\my-portfolio-website\\src\\assets\\pictures\\memories\\prom.jpg";
import adventure3 from "D:\\MyPortfolioWebsite\\my-portfolio-website\\src\\assets\\pictures\\memories\\swimming_with_fish.jpg";
import adventure4 from "D:\\MyPortfolioWebsite\\my-portfolio-website\\src\\assets\\pictures\\memories\\house_Band_with_friends.jpg";
import adventure5 from "D:\\MyPortfolioWebsite\\my-portfolio-website\\src\\assets\\pictures\\photography\\sunset_over_horizon.jpg";
import adventure6 from "D:\\MyPortfolioWebsite\\my-portfolio-website\\src\\assets\\pictures\\photography\\horizon.jpg";
import adventure7 from "D:\\MyPortfolioWebsite\\my-portfolio-website\\src\\assets\\pictures\\photography\\vietnam_rail.jpg";
import adventure8 from "D:\\MyPortfolioWebsite\\my-portfolio-website\\src\\assets\\pictures\\memories\\dirtbike.jpg";
import adventure10 from "D:\\MyPortfolioWebsite\\my-portfolio-website\\src\\assets\\pictures\\photography\\vietnam_on_boat.jpg";
import adventure9 from "D:\\MyPortfolioWebsite\\my-portfolio-website\\src\\assets\\pictures\\memories\\mexico.jpg";
import adventure11 from "D:\\MyPortfolioWebsite\\my-portfolio-website\\src\\assets\\pictures\\photography\\halong_bay.jpg";
import adventure12 from "D:\\MyPortfolioWebsite\\my-portfolio-website\\src\\assets\\pictures\\memories\\tracer_sleeping.jpg";


import IU from "D:\\MyPortfolioWebsite\\my-portfolio-website\\src\\assets\\icons\\Indiana_Hoosiers_logo.svg.png";

function About() {
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
    observer.observe(document.getElementById("about-page"));

    // Cleanup the observer on component unmount
    return () => observer.disconnect();
  }, []);

  //letter animation code
  useEffect(() => {
    const titles = gsap.utils.toArray(".adventure-header");
    const tl = gsap.timeline({ repeat: -1 });

    titles.forEach((title) => {
      const splitTitle = new SplitTextJS(title);

      tl.from(
        splitTitle.chars,
        {
          opacity: 0,
          rotateX: -90,
        },
        "<"
      ).to(
        splitTitle.chars,
        {
          opacity: 0,
          rotateX: 90,
          stagger: 0.04,
        },
        "<2.5"
      );
    });
  }, []);

  const IMAGES = [
    adventure1,
    adventure3,
    adventure5,
    adventure10,
    adventure9,
    adventure2,
    adventure4,
    adventure6,
    adventure8,
    adventure7,
    adventure11,
    adventure12
  ];

  return (
    <div className="about-page" id="about-page" style={{ opacity }}>
      <div className="line"></div>
      <section className="about-section">
        <h2 className="about-title">About</h2>

        <section className="introduction">
          <div className="content-wrapper">
            <p className="introduction">
              Allow me to introduce myself, I am a dedicated and passionate
              individual currently pursuing a major in Computer Science at
              Indiana University Bloomington. My journey in the world of
              technology is characterized by a profound love for learning and an
              insatiable curiosity to solve diverse problems. As a sophomore, I
              have already demonstrated a strong commitment to the field of
              software engineering, where expertise is cultivated through a
              combination of academic rigor and hands-on experience. With a
              thirst for knowledge that propels my academic pursuits and a
              genuine enthusiasm for tackling challenges, I am eager to make
              meaningful contributions to the ever-evolving landscape of
              computer science.
            </p>
            <img src={IU} className="iu-svg" alt="Indiana University Logo" />
          </div>
        </section>

        <section className="skill">
          <div className="skill-container">
          <h2>Skill</h2>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Minus, nam
              consequatur iusto laudantium debitis ullam quaerat, voluptate culpa
              sint illum quibusdam accusantium molestiae! Consequatur ex animi
              nemo doloribus magnam voluptatem.
            </p>
            </div>
        </section>

        <section className="work-experience">
          <h2>Work Experience</h2>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Minus, nam
            consequatur iusto laudantium debitis ullam quaerat, voluptate culpa
            sint illum quibusdam accusantium molestiae! Consequatur ex animi
            nemo doloribus magnam voluptatem.
          </p>
        </section>
        
        <section className="project">
          <h2>Project</h2>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Minus, nam
            consequatur iusto laudantium debitis ullam quaerat, voluptate culpa
            sint illum quibusdam accusantium molestiae! Consequatur ex animi
            nemo doloribus magnam voluptatem.
          </p>
        </section>

        <section className="adventure">
          <div className="adventure-container">
            <div className="adventure-word-container">
              <div className="adventure-text-wrapper">
                {/* Text content to be animated */}
                <h1 className="sub-title">Little snippet of </h1>
                <h2 className="adventure-header">My Adventure</h2>
                <h2 className="adventure-header">My Story</h2>
                <h2 className="adventure-header">My Life</h2>
                <h2 className="adventure-header">My Memories</h2>
              </div>
            </div>
            <div className="image-slider-container-adventure">
              <ImageSlider images={IMAGES} />
            </div>
          </div>
        </section>

        <section className="hobbies">
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Minus, nam
            consequatur iusto laudantium debitis ullam quaerat, voluptate culpa
            sint illum quibusdam accusantium molestiae! Consequatur ex animi
            nemo doloribus magnam voluptatem.
          </p>
        </section>
      </section>
    </div>
  );
}

export default About;
