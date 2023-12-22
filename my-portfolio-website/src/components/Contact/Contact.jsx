import React, { useEffect, useState, useRef } from "react";
import "./Contact.css";
import emailjs from "@emailjs/browser";
import Github from "D:\\MyPortfolioWebsite\\my-portfolio-website\\src\\assets\\icons\\github-mark-c791e9551fe4\\github-mark\\github-mark-white.svg";
import LinkedIn from "D:\\MyPortfolioWebsite\\my-portfolio-website\\src\\assets\\icons\\linkin.svg";

import deco from "D:\\MyPortfolioWebsite\\my-portfolio-website\\src\\assets\\pictures\\background\\cat-1423_256.gif";
function Contact() {
  // State for controlling opacity
  const [opacity, setOpacity] = useState(0);

  // State for displaying messages (e.g., success or error messages)
  const [message, setMessage] = useState({ text: "", type: "" });

  // State for managing form input values
  const [formValues, setFormValues] = useState({
    user_name: "",
    user_email: "",
    message: "",
  });

  // Intersection Observer callback function
  const handleIntersection = (entries) => {
    entries.forEach((entry) => {
      setOpacity(entry.isIntersecting ? 1 : 0);
    });
  };

  // Ref for the form element
  const form = useRef();

  // Function to send email using Email.js
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_f3lsqdb",
        "template_ow78qcg",
        form.current,
        "1pG40r2lab3v-UqTw"
      )
      .then(
        (result) => {
          setMessage({ text: "Sent!", type: "success" });
          console.log(result.text);
          // Clear form fields on successful submission
          setFormValues({
            user_name: "",
            user_email: "",
            message: "",
          });
          // Hide the message after 5 seconds
          setTimeout(() => {
            setMessage({ text: "", type: "" });
          }, 5000);
        },
        (error) => {
          setMessage({
            text: "Error: Please try to resend or contact me through LinkedIn",
            type: "error",
          });
          console.log(error.text);
        }
      );
  };

  // Effect to observe the intersection of the contact section
  useEffect(() => {
    const observer = new IntersectionObserver(handleIntersection, {
      threshold: 0.2,
    });
    observer.observe(document.getElementById("contact-page"));

    return () => observer.disconnect();
  }, []);

  // Function to handle input changes in the form
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormValues({
      ...formValues,
      [name]: value,
    });
  };

  return (
    <div className="contact-page" id="contact-page" style={{ opacity }}>
      <div className="contact-line"></div>
      <h2 className="contact-title">Contact</h2>

      {/* Display success or error messages */}
      {message.text && (
        <div className={`message ${message.type}`} id="announce">
          {message.text}
        </div>
      )}

      {/* Form container */}
      <div className="form-container">
        <form className="form" ref={form} onSubmit={sendEmail}>
          {/* Form inputs */}
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            name="user_name"
            placeholder="your name"
            required
            value={formValues.user_name}
            onChange={handleInputChange}
          />
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            name="user_email"
            placeholder="your email"
            required
            value={formValues.user_email}
            onChange={handleInputChange}
          />
          <label htmlFor="message">Message:</label>
          <textarea
            id="message"
            name="message"
            rows="6"
            placeholder="what do you want to say?"
            required
            value={formValues.message}
            onChange={handleInputChange}
          />
          {/* Submit button */}
          <input type="submit" value="Send" />
        </form>
      </div>

      {/* Social media connections */}
      <div className="connection-container">
        <a
          href="https://github.com/JackHuynh0610"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={Github} alt="GitHub icons" className="connection-icon" />
        </a>
        <a
          href="https://www.linkedin.com/in/nghiathuynh/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            src={LinkedIn}
            alt="LinkedIn icons"
            className="connection-icon"
          />
        </a>
      </div>
      {/* deco the cat */}
      <div className="deco">
        <img src={deco} alt="cat"/>
      </div>
    </div>
  );
}

export default Contact;
