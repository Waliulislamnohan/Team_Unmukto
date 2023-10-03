// NeoCard.js
import React from 'react';

const NeoCard = ({ neoData }) => {
  // Parse the NEO data


  return (
    <div>
      <img src="https://i.ibb.co/4YBKRxt/astroieds.webp" alt="Image 2" />
      <div>
        <h3>Element Count: {neoData.element_count}</h3>
        <h3>NASA JPL URL: {neoData.nasa_jpl_url}</h3>
        <h3>Absolute Magnitude (H): {neoData.absolute_magnitude_h}</h3>
        <h3>Orbit body: </h3>

      </div>
    </div>
  );
};

export default NeoCard;
