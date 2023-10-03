import React, { useState, useEffect } from 'react';
import styles from '../styles/Home.module.css';
import NeoCard from './neoCard'; // Import the NeoCard component

const InformationSection = () => {
  // Sample data for three information cards
  const [data, setData] = useState([
    {
      id: 1,
      image: 'https://apod.nasa.gov/apod/image/2310/Hourglass_HubblePathak_1080.jpg',
      description: "Do you see the hourglass shape -- or does it see you?  If you can picture it, the rings of MyCn 18 trace the outline of an hourglass -- although one with an unusual eye in its center.  Either way, the sands of time are running out for the central star of this hourglass-shaped planetary nebula. With its nuclear fuel exhausted, this brief, spectacular, closing phase of a Sun-like star's life occurs as its outer layers are ejected - its core becoming a cooling, fading white dwarf. In 1995, astronomers used the Hubble Space Telescope (HST) to make a series of images of planetary nebulae, including the one featured here.  Pictured, delicate rings of colorful glowing gas (nitrogen-red, hydrogen-green, and oxygen-blue) outline the tenuous walls of the hourglass. The unprecedented sharpness of the Hubble images has revealed surprising details of the nebula ejection process that are helping to resolve the outstanding mysteries of the complex shapes and symmetries of planetary nebulas like MyCn 18.",
    },
    {
      id: 2,
      image: 'image-url-3.jpg',
      description: 'This is the third card description. It can be long and collapsible.',
    },
  ]);

  // State to track expanded/collapsed descriptions
  const [expanded, setExpanded] = useState([]);

  // Function to toggle the description's expanded state
  const toggleDescription = (id) => {
    if (expanded.includes(id)) {
      setExpanded(expanded.filter((item) => item !== id)); // Collapse
    } else {
      setExpanded([...expanded, id]); // Expand
    }
  };

  useEffect(() => {
    // Function to fetch NASA data
    const fetchNASAData = async () => {
        try {
          const apiKey = '3b3GZ3QS1crBhahiaXRPI4oK558eKfb6IcRKPHTK';
  
          const response = await fetch(
            'https://api.nasa.gov/planetary/apod?api_key=3b3GZ3QS1crBhahiaXRPI4oK558eKfb6IcRKPHTK',
            {
              method: 'GET',
              headers: {
                'Authorization': `Bearer ${apiKey}`
              }
            }
          );
  
          if (response.ok) {
            const nasaData = await response.json();
            // Update the first card with NASA data
            const updatedData = [...data];
            updatedData[0] = {
              ...updatedData[0],
              image: nasaData.url,
              description: nasaData.explanation,
            };
            setData(updatedData);
          } else {
            console.error('Failed to fetch NASA data');
          }
        } catch (error) {
          console.error('Error fetching NASA data:', error);
        }
      };
  

    // Function to fetch NEO data
    const fetchNEOData = async () => {
      try {
        const response = await fetch(
          'https://api.nasa.gov/neo/rest/v1/feed?start_date=2015-09-07&end_date=2015-09-08&api_key=3b3GZ3QS1crBhahiaXRPI4oK558eKfb6IcRKPHTK',
          {
            method: 'GET',
          }
        );

        if (response.ok) {
          const neoData = await response.json();
          // Update the second card with NEO data
          const updatedData = [...data];
          updatedData[1] = {
            ...updatedData[1],
            description: JSON.stringify(neoData, null, 2),
          };
          setData(updatedData);
        } else {
          console.error('Failed to fetch NEO data');
        }
      } catch (error) {
        console.error('Error fetching NEO data:', error);
      }
    };

    fetchNASAData();
    fetchNEOData();
  }, []);

  return (

    <div>
<h1>
  How Nasa contribute to Opensource?
</h1>
          <div className={styles.infoSection}>

      {data.map((item) => (
        <div className={styles.infoCard} key={item.id}>
          {item.id === 2 ? (
            // Use the NeoCard component for the second card
            <NeoCard neoData={item.description} />
          ) : (
            <>
              <img src={item.image} alt={`Image ${item.id}`} />
              <div>
                <p>
                  {item.description.length > 100 && !expanded.includes(item.id)
                    ? `${item.description.slice(0, 100)}...`
                    : item.description}
                </p>
                {item.description.length > 100 && (
                  <button onClick={() => toggleDescription(item.id)}>
                    {expanded.includes(item.id) ? 'Read Less' : 'Read More'}
                  </button>
                )}
              </div>
            </>
          )}
        </div>
      ))}
    </div>
    </div>

  );
};

export default InformationSection;
