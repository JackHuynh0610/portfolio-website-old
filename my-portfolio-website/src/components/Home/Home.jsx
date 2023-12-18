import React, { useEffect } from "react";
import gsap from "gsap";
import SplitTextJS from "split-text-js";
import "./Home.css";
import JackHuynh from 'D:\\MyPortfolioWebsite\\my-portfolio-website\\src\\assets\\pictures\\photography\\Avatar_Cropped_Image.png'

function Home() {
  useEffect(() => {
    // Get all paragraphs inside the text-wrapper
    const titles = gsap.utils.toArray(".traits");

    // Create a GSAP timeline with repeat set to -1 for continuous animation
    const tl = gsap.timeline({ repeat: -1 });

    // Loop through each title and apply animation
    titles.forEach((title) => {
      // Use SplitTextJS to break each character into separate elements
      const splitTitle = new SplitTextJS(title);

      // Animation to reveal characters from top with opacity
      tl.from(
        splitTitle.chars,
        {
          opacity: 0,
          y: 20,
          rotateX: -90,
          stagger: 0.04,
        },
        "<"
      )
        // Animation to hide characters by moving them up with opacity
        .to(
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
  }); 

  
  return (
    <div className="home-page">
      <section className="title-section">
        <div className="title">
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
          {/* Displaying a profile picture */}
          <img src={JackHuynh} alt="Jack Huynh" />
        </div>
      </section>
    </div>
  );
}

export default Home;
