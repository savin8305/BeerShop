import React, { useEffect, useState } from 'react';
import './styles/ImagePopup.css';

const ImagePopup = ({ beer, closePopup }) => {
  const [scrollY, setScrollY] = useState(0);

  const handleScroll = () => {
    setScrollY(window.scrollY);
  };

  const handleClickOutside = (e) => {
    const popupContent = document.querySelector('.image-popup-content');
    if (popupContent && !popupContent.contains(e.target)) {
      closePopup();
    }
  };

  useEffect(() => {
    document.body.style.overflow = 'hidden'; // Prevent background scroll
    document.addEventListener('mousedown', handleClickOutside);
    window.addEventListener('scroll', handleScroll);

    return () => {
      document.body.style.overflow = 'auto'; // Restore background scroll
      document.removeEventListener('mousedown', handleClickOutside);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const handleImageMouseMove = (event) => {
    const x = event.nativeEvent.offsetX;
    const y = event.nativeEvent.offsetY;
    const centerX = event.target.clientWidth / 2;
    const centerY = event.target.clientHeight / 2;
    const deltaX = centerX - x;
    const deltaY = centerY - y;
    event.target.style.transform = `perspective(1000px) rotateX(${
      deltaY / 105
    }deg) rotateY(${deltaX / 105}deg) translateZ(20px)`;
    event.target.style.transitionDuration = '0.3s';
    event.target.style.transform += 'translateZ(90px)';
    event.target.style.textShadow = `${x}px ${y}px 0 rgb(255,255,255), ${
      x * -1
    }px ${y}px 0 rgb(255,200,255), ${y}px ${x * -1}px 0 rgb(255,75,155), ${y}px ${x}px 0 rgb(45,125,55)`;
  };

  const handleImageMouseLeave = (event) => {
    event.target.style.transform = 'none';
    event.target.style.textShadow = 'none';
  };

  return (
    <div className="image-popup">
      <div id="popup-content" className="image-popup-content">
        <img
          src={beer.image_url}
          alt={beer.name}
          onMouseMove={handleImageMouseMove}
          onMouseLeave={handleImageMouseLeave}
        />
      </div>
    </div>
  );
};

export default ImagePopup;
