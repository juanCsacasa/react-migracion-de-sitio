import React from 'react';
import formatDate from '../../utils/format-date.js';
import { interactionsCategories } from '../../config.js'; 

const { going, interested, favorites } = interactionsCategories; 

const Card = ({ title, image, date, address, city, state, price, interaction, id, category }) => {
  return (
      <li className="gallery__card">
        <img src={image} alt={title} />
        <div className="gallery__text">
          <div className="event__info">
            <h3>{title}</h3>
            <p className="date">{formatDate(new Date(date))}.</p>
            <p>
              {address} • {city}, {state}.
            </p>
            <strong>{price}</strong>
          </div>
          <div className="interactions-container" data-id={id}>
            <div className="going-and-interested" data-id={id}>
              <button className="going" data-id={id} data-interaction={going} data-template={going}>
                Going!
              </button>
              <button className="interested" data-id={id} data-interaction={interested} data-template={interested} >
                Interested
              </button>
              <button className="heart" data-id={id} data-interaction={favorites}></button>
            </div>
          </div>
        </div>
      </li>
  );
};

export { Card };
