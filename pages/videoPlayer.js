import React, { useState } from 'react';
import styles from '../styles/Home.module.css'
const VideoPlayer = () => {
  // Initialize the selected floor state
  const [selectedFloor, setSelectedFloor] = useState('Ground');

  // Define video links for each floor
  const videoLinks = {
    Ground: 'https://www.youtube.com/embed/P6zX_R8-olM?si=CIFb_BUQ1KC9JIVz&amp;controls=0',
    Second: 'https://www.youtube.com/embed/Z7Pn4PQjVI4?si=8MFrM_zXzYOt26fb&amp;controls=0',
    Basement: 'https://videoapi-muybridge.vimeocdn.com/animated-thumbnails/image/42c18216-f93f-44d6-a5e0-b4ae1eb421c7.gif?ClientID=vimeo-core-prod&Date=1696169339&Signature=98b8fdb3cce46073bd0a382daa01d56083c7bc1b', // Replace with your Vimeo video ID
  };

  // Function to handle floor button clicks
  const handleFloorClick = (floor) => {
    setSelectedFloor(floor);
  };

  return (
    <div className={styles.container}>

      <div className={styles.navBar}>
        <button className={styles.navBtn} onClick={() => handleFloorClick('Ground')}>Ground Floor</button>
        <button  className={styles.navBtn} onClick={() => handleFloorClick('Second')}>Second Floor</button>
        <button  className={styles.navBtn} onClick={() => handleFloorClick('Basement')}>Basement</button>
      </div>

      <div className={styles.videoContainer}>

        <iframe
          title="Video Player"
          width = "100%"
          height="50%" 
          src={videoLinks[selectedFloor]}
          frameBorder="0" 
          allowFullScreen
          autoPlay
        ></iframe>

       
        

      </div>
    </div>
  );
};

export default VideoPlayer;