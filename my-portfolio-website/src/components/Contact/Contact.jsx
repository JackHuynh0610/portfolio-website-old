import React, { useEffect, useState } from "react";
import "./Contact.css"

import Github from "D:\\MyPortfolioWebsite\\my-portfolio-website\\src\\assets\\icons\\github-mark-c791e9551fe4\\github-mark\\github-mark-white.svg";
import LinkedIn from "D:\\MyPortfolioWebsite\\my-portfolio-website\\src\\assets\\icons\\linkin.svg";
function Contact() {
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
      threshold: 0.4, // Adjust the threshold as needed
    });
    // Observe the target element
    observer.observe(document.getElementById("contact-page"));

    // Cleanup the observer on component unmount
    return () => observer.disconnect();
  }, []);

  return (
    <div className="contact-page" id="contact-page" style={{ opacity }}>
        <div className="contact-line"></div>
        <h2 className="contact-title">Contact</h2>
        <div className="form-container">
            <form className="form">
                <label htmlFor="name">Name:</label>
                <input type="text" id="name" name="name" placeholder="your name"required/>
                <label htmlFor="email">Email:</label>
                <input type="email" id="email" name="email" placeholder="your email" required/>
                <label htmlFor="message">Message:</label>
                <textarea id="message" name="message" rows="6" placeholder="what do you want to say?" required/>
                <input type="submit" value="Send"/>
            </form>
        </div>
        <div className="connection-container">
            <a
                href="https://github.com/JackHuynh0610"
                target="_blank"
                rel="noopener noreferrer"
                ><img src={Github} alt="git-hub icons" className="connection-icon"/></a>
                <a
                href="https://www.linkedin.com/in/nghiathuynh/"
                target="_blank"
                rel="noopener noreferrer"
                ><img src={LinkedIn} alt="linkin icons" className="connection-icon"/></a>
            </div>
        </div>
  );
}

export default Contact;
