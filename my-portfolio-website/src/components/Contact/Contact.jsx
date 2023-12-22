import React, { useEffect, useState, useRef } from "react";
import "./Contact.css";
import emailjs from "@emailjs/browser";
import Github from "D:\\MyPortfolioWebsite\\my-portfolio-website\\src\\assets\\icons\\github-mark-c791e9551fe4\\github-mark\\github-mark-white.svg";
import LinkedIn from "D:\\MyPortfolioWebsite\\my-portfolio-website\\src\\assets\\icons\\linkin.svg";

function Contact() {
  const [opacity, setOpacity] = useState(0);
  const [message, setMessage] = useState({ text: "", type: "" });
  const [formValues, setFormValues] = useState({
    user_name: "",
    user_email: "",
    message: "",
  });

  const handleIntersection = (entries) => {
    entries.forEach((entry) => {
      setOpacity(entry.isIntersecting ? 1 : 0);
    });
  };

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm("service_f3lsqdb", "template_ow78qcg", form.current, "1pG40r2lab3v-UqTw")
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
          setMessage({ text: "Error sending message", type: "error" });
          console.log(error.text);
        }
      );
  };

  useEffect(() => {
    const observer = new IntersectionObserver(handleIntersection, {
      threshold: 0.4,
    });
    observer.observe(document.getElementById("contact-page"));

    return () => observer.disconnect();
  }, []);

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
      <div className="form-container">
        <form className="form" ref={form} onSubmit={sendEmail}>
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
          <input type="submit" value="Send" />
        </form>
      </div>
      {message.text && (
        <div className={`message ${message.type}`} id="announce">
          {message.text}
        </div>
      )}
      <div className="connection-container">
        <a href="https://github.com/JackHuynh0610" target="_blank" rel="noopener noreferrer">
          <img src={Github} alt="git-hub icons" className="connection-icon" />
        </a>
        <a href="https://www.linkedin.com/in/nghiathuynh/" target="_blank" rel="noopener noreferrer">
          <img src={LinkedIn} alt="linkin icons" className="connection-icon" />
        </a>
      </div>
    </div>
  );
}

export default Contact;
