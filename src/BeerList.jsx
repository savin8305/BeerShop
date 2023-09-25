import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './styles/BeerList.css';
import BeerCard from './BeerCard';
import BeerPopup from './BeerPopup'; // Import the BeerPopup component

const BeerList = () => {
  const [beers, setBeers] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [popupBeer, setPopupBeer] = useState(null); // State for the pop-up beer

  const openPopup = (beer) => {
    setPopupBeer(beer);
  };

  const closePopup = () => {
    setPopupBeer(null);
  };

  useEffect(() => {
    axios
      .get('https://api.punkapi.com/v2/beers')
      .then((response) => {
        setBeers(response.data);
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
      });
  }, []);

  const filteredBeers = beers.filter((beer) =>
    beer.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="beer-list">
      <input
        type="text"
        placeholder="Search beers"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      {filteredBeers.map((beer) => (
        <BeerCard key={beer.id} beer={beer} openPopup={openPopup} />
      ))}

      {popupBeer && (
        <BeerPopup beer={popupBeer} closePopup={closePopup} /> // Render the pop-up component when pop-upBeer is not null
      )}
    </div>
  );
};

export default BeerList;
