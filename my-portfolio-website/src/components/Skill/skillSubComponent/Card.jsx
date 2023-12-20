import React from 'react';
import './Card.css';

function Card(props) {
  return (
    <div className="card">
        <section>
          <header>
            <h2 className='card-title'>{props.title}</h2>
          </header>
        </section>
        <div className="info">
          {props.icons &&
            props.icons.map((icon, index) => (
              <div key={index} className="icon-container">
                 <img className='icon' src={icon} alt={`icon-${index}`} />
              </div>
            ))}
        </div>
    </div>
  );
}

export default Card;