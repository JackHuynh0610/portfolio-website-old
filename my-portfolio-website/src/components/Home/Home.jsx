import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import SplitTextJS from "split-text-js";
import "./Home.css";
import JackHuynh from "D:\\MyPortfolioWebsite\\my-portfolio-website\\src\\assets\\pictures\\photography\\Avatar_Cropped_Image.png";
import { useIntersection } from "react-use";

function Home() {
  //-----------------------For scroll animation-------------------------//
  // Refs for the elements
  const titleRef = useRef(null);

  // Calculate threshold value based on the browser width
  const browserWidth = window.innerWidth;
  let thresholdValue;
  browserWidth < 768 ? (thresholdValue = 0.1) : (thresholdValue = 0.6);

  // Intersection observer hooks
  const homeIntersection = useIntersection(titleRef, {
    root: null,
    rootMargin: "0px",
    y: 0,
    threshold: thresholdValue,
  });

  // Function to fadeIn element
  const fadeIn = (element) => {
    gsap.to(element, {
      opacity: 1,
      ease: "power4.out",
      duration: 1,
    });
  };

  // Function to fadeOut element
  const fadeOut = (element) => {
    gsap.to(element, {
      opacity: 0,
      ease: "power4.out",
      duration: 1,
    });
  };

  // Use useEffect to handle fadeIn and fadeOut animations based on scroll
  useEffect(() => {
    homeIntersection && homeIntersection.intersectionRatio < thresholdValue
      ? fadeOut(".title")
      : fadeIn(".title");
  }, [homeIntersection]);

  useEffect(() => {
    homeIntersection && homeIntersection.intersectionRatio < thresholdValue
      ? fadeOut(".profile-picture")
      : fadeIn(".profile-picture");
  }, [homeIntersection]);

  // Letter animation code
  useEffect(() => {
    const titles = gsap.utils.toArray(".traits");
    const tl = gsap.timeline({ repeat: -1 });

    titles.forEach((title) => {
      const splitTitle = new SplitTextJS(title);

      tl.from(
        splitTitle.chars,
        {
          opacity: 0,
          y: 20,
          rotateX: -90,
          stagger: 0.04,
        },
        "<"
      ).to(
        splitTitle.chars,
        {
          opacity: 0,
          y: -20,
          rotateX: 90,
          stagger: 0.04,
        },
        "<2.5"
      );
    });
  }, []);

  // Render your component
  return (
    <div className="home-page">
      <section className="title-section">
        <div ref={titleRef} className="title">
          <h1 className="name">Nghia Huynh</h1>
          <div className="word-container">
            <div className="text-wrapper">
              {/* Text content to be animated */}
              <p className="traits">Software Engineer</p>
              <p className="traits">Passionate Developer</p>
              <p className="traits">Enthusiastic</p>
              <p className="traits">Curious</p>
              <p className="traits">Creative</p>
            </div>
          </div>
        </div>
        <div className="profile-picture">
          <img src={JackHuynh} alt="Jack Huynh" />
        </div>
      </section>
    </div>
  );
}

export default Home;
