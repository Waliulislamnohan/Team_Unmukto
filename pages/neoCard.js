// NeoCard.js
import React from 'react';

const NeoCard = ({ neoData }) => {
  if (!neoData) {
    // Handle the case where neoData is not defined or null
    return(
      <div>
      <img src="https://i.ibb.co/4YBKRxt/astroieds.webp" alt="Image 2" />
      <div>
        <h3>Element Count: </h3>
        <h3>NASA JPL URL: </h3>
        <h3>Absolute Magnitude: </h3>
        <h3>Orbit body: </h3>
      </div>
    </div>
    );
  }

  return (
    <div>
      <img src="https://i.ibb.co/4YBKRxt/astroieds.webp" alt="Image 2" />
      <div>
        <h3>Element Count: {neoData.element_count}</h3>
        <h3>NASA JPL URL: {neoData.nasa_jpl_url}</h3>
        <h3>Absolute Magnitude: {neoData.absolute_magnitude_h}</h3>
        <h3>Orbit body: </h3>
      </div>
    </div>
  );
};

export default NeoCard;
