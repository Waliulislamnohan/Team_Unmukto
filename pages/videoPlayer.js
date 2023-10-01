import React, { useState } from 'react';
import styles from '../styles/Home.module.css'
const VideoPlayer = () => {
  // Initialize the selected floor state
  const [selectedFloor, setSelectedFloor] = useState('Ground');

  // Define video links for each floor
  const videoLinks = {
    Ground: 'https://player.vimeo.com/video/869999310?badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479" frameborder="0" allow="autoplay; fullscreen; picture-in-picture' , // Replace with your Vimeo video ID
    Second: 'https://veed.io/view/45583a3f-a234-4e0d-b11a-4b608600a46b', // Replace with your Vimeo video ID
    Basement: 'https://videoapi-muybridge.vimeocdn.com/animated-thumbnails/image/42c18216-f93f-44d6-a5e0-b4ae1eb421c7.gif?ClientID=vimeo-core-prod&Date=1696169339&Signature=98b8fdb3cce46073bd0a382daa01d56083c7bc1b', // Replace with your Vimeo video ID
  };

  // Function to handle floor button clicks
  const handleFloorClick = (floor) => {
    setSelectedFloor(floor);
  };

  return (
    <div className={styles.container}>
        <div className={styles.navBar}>
        <button onClick={() => handleFloorClick('Ground')}>Ground Floor</button>
        <button onClick={() => handleFloorClick('Second')}>Second Floor</button>
        <button onClick={() => handleFloorClick('Basement')}>Basement</button>
      </div>
      <div className={styles.videoContainer}>

        <iframe
          title="Video Player"
          width = "100%"
          height="100%" 
          src={videoLinks[selectedFloor]}
          frameborder="0" 
          
          allowFullScreen
        >
            
        </iframe>


        

      </div>
    </div>
  );
};

export default VideoPlayer;