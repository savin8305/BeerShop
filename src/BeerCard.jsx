import React, { useState } from "react";
import "./styles/BeerCard.css";
import ImagePopup from "./ImagePopup"; // Import the ImagePopup component

const BeerCard = ({ beer }) => {
  const [imagePopupVisible, setImagePopupVisible] = useState(false);

  const openImagePopup = () => {
    setImagePopupVisible(true);
  };

  const closeImagePopup = () => {
    setImagePopupVisible(false);
  };

  const handleCardClick = () => {
    openImagePopup();
  };

  const handleImageClick = (e) => {
    e.stopPropagation(); // Prevent card click event propagation
    openImagePopup();
  };

  return (
    <div className="beer-card" onClick={handleCardClick}>
      <div className="beer-image" onClick={handleImageClick}>
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
        <p className="beer-description">{beer.description}</p>
      </div>
      {imagePopupVisible && (
        <ImagePopup beer={beer} closePopup={closeImagePopup} />
      )}
    </div>
  );
};

export default BeerCard;
