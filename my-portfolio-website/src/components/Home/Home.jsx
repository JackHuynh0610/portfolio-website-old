import React, { useEffect, useState } from "react";
import gsap from "gsap";
import SplitTextJS from "split-text-js";
import "./Home.css";
import JackHuynh from "D:\\MyPortfolioWebsite\\my-portfolio-website\\src\\assets\\pictures\\photography\\Avatar_Cropped_Image.png";

function Home() {
  // State to manage opacity
  const [opacity, setOpacity] = useState(0);

  //letter animation code
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
      threshold: 0.5, // Adjust the threshold as needed
    });

    // Observe the target element
    observer.observe(document.getElementById("home-page"));

    // Cleanup the observer on component unmount
    return () => observer.disconnect();
  }, []);

  // Render your component
  return (
    <div className="home-page" id="home-page" style={{ opacity }}>
      <section className="title-section">
        <div className="home-title">
          <a href="#about-page" className="about-link-home">
            <h1 className="name">Nghia Huynh</h1>
          </a>
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
