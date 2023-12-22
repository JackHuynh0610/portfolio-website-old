import React from "react";
import "./Card.css";

function Card(props) {
  return (
    /* Card container */
    <div className="card">
      {/* Header section */}
      <section>
        <header>
          {/* Card title */}
          <h2 className="card-title">{props.title}</h2>
        </header>
      </section>
      {/* Info section */}
      <div className="info">
        {/* Check if icons are provided and map them */}
        {props.icons &&
          props.icons.map((icon, index) => (
            /* Icon container */
            <div key={index} className="icon-container">
              {/* Icon image */}
              <img className="icon" src={icon} alt={`icon-${index}`} />
            </div>
          ))}
      </div>
    </div>
  );
}

export default Card;
