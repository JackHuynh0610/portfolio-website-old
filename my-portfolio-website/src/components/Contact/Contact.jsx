import React, { useEffect, useState } from "react";


import "./Contact.css"
function Contact() {
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
      observer.observe(document.getElementById("contact-page"));
  
      // Cleanup the observer on component unmount
      return () => observer.disconnect();
    }, []);

  return (
    <div className="contact-page" id="contact-page" style={{ opacity }}>
        <div className="contact-line"></div>
        <h2 className="contact-title">Contact</h2>
    </div>
  );
}

export default Contact;
