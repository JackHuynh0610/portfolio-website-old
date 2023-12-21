import "./About.css";
import React, { useEffect, useState } from "react";
import ImageSlider from "./aboutSubComponent/ImageSlider";
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
import Avatar from "D:\\MyPortfolioWebsite\\my-portfolio-website\\src\\assets\\pictures\\photography\\Avatar_Cropped_Image.png"


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
      threshold: 0.1, // Adjust the threshold as needed
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
    adventure12,
  ];

  return (
    <div className="about-page" id="about-page" style={{ opacity }}>
      <div className="line"></div>
      <section className="about-section">
        <h2 className="about-title">About</h2>

        <section className="introduction-section">
          <div className="content-wrapper">
          <img src={Avatar} className="avt" alt="Avatar" />
            <p className="introduction">
              Hello! I'm a dedicated Computer Science sophomore at Indiana
              University Bloomington. My passion for technology is fueled by a
              love for learning and curiosity. While the academic curriculum
              provides a solid foundation, my true enthusiasm comes from
              practical applications. I enjoy translating theoretical knowledge
              into real-world solutions through coding and development. My
              commitment to software engineering is evident in my early project
              involvements. I actively seek opportunities for hands-on
              experience, believing expertise comes from a blend of theory and
              practice. Excited by the fast-paced nature of technology, I'm
              eager to make meaningful contributions that reflect my passion and
              positively impact the community. Ready to embrace the field's
              constant evolution, I bring a mix of academic knowledge, hands-on
              experience, and a commitment to excellence.
            </p>
          </div>
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
      </section>
    </div>
  );
}

export default About;
