import React from 'react';
import './styles/BeerPopup.css';

const BeerPopup = ({ beer, closePopup }) => {
  return (
    <div className="beer-popup" onClick={closePopup}>
      <div
        className="beer-popup-content"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="beer-image-container">
          <img src={beer.image_url} alt={beer.name} />
        </div>
        <div className="beer-details">
          <h2>{beer.name}</h2>
          <p>{beer.tagline}</p>
          <div className="beer-info">
            <div className="info-item">
              <span>ABV:</span> {beer.abv}%
            </div>
            <div className="info-item">
              <span>IBU:</span> {beer.ibu}
            </div>
          </div>
          <div className="beer-description">
            <p>{beer.description}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BeerPopup;
