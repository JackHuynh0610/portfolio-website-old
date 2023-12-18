import "./About.css";
import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { useIntersection } from "react-use";

function About() {
  //-----------------------For scroll animation-------------------------//
  // Refs for the elements
  const titleRef = useRef(null);
  const thresholdValue = 0.6;
  // Intersection observer hooks
  const homeIntersection = useIntersection(titleRef, {
    root: null,
    rootMargin: "0px",
    y: 0,
    threshold: thresholdValue,
  });

  const fadeIn = (element) => {
    gsap.to(element, {
      opacity: 1,
      ease: "power4.out",
      duration: 1,
    });
  };

  const fadeOut = (element) => {
    gsap.to(element, {
      opacity: 0,
      ease: "power4.out",
      duration: 1,
    });
  };

  // Use useEffect to handle animations based on scroll
  useEffect(() => {
    homeIntersection && homeIntersection.intersectionRatio < thresholdValue
      ? fadeOut(".about-page")
      : fadeIn(".about-page");
  }, [homeIntersection]);

  return (
    <div ref={titleRef} className="about-page" id="about-page">
      <section className="about-section">
        <h2 className="about-title">About</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur
          inventore ducimus quisquam cum, ut neque, adipisci harum aspernatur,
          aliquid in reprehenderit atque. Similique blanditiis aliquam, modi
          placeat tempore exercitationem quidem.
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur
          inventore ducimus quisquam cum, ut neque, adipisci harum aspernatur,
          aliquid in reprehenderit atque. Similique blanditiis aliquam, modi
          placeat tempore exercitationem quidem.
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur
          inventore ducimus quisquam cum, ut neque, adipisci harum aspernatur,
          aliquid in reprehenderit atque. Similique blanditiis aliquam, modi
          placeat tempore exercitationem quidem.
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur
          inventore ducimus quisquam cum, ut neque, adipisci harum aspernatur,
          aliquid in reprehenderit atque. Similique blanditiis aliquam, modi
          placeat tempore exercitationem quidem.
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur
          inventore ducimus quisquam cum, ut neque, adipisci harum aspernatur,
          aliquid in reprehenderit atque. Similique blanditiis aliquam, modi
          placeat tempore exercitationem quidem.
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur
          inventore ducimus quisquam cum, ut neque, adipisci harum aspernatur,
          aliquid in reprehenderit atque. Similique blanditiis aliquam, modi
          placeat tempore exercitationem quidem.
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur
          inventore ducimus quisquam cum, ut neque, adipisci harum aspernatur,
          aliquid in reprehenderit atque. Similique blanditiis aliquam, modi
          placeat tempore exercitationem quidem.
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur
          inventore ducimus quisquam cum, ut neque, adipisci harum aspernatur,
          aliquid in reprehenderit atque. Similique blanditiis aliquam, modi
          placeat tempore exercitationem quidem.
        </p>
      </section>
    </div>
  );
}

export default About;
