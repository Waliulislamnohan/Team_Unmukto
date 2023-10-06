import React, { useState } from 'react';
import styles from '../styles/Home.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import YouTube from 'react-youtube';


const VideoPlayer = () => {
  // Initialize the selected floor state
  const [selectedFloor, setSelectedFloor] = useState('Gallary');

  // Define video links for each floor
  const videoLinks = {
    Gallary: 'AOsowBSEIBw',
    Earth: '2OBR26GsgwE',
    Mission: '_FRvO7_BABw',
    Space: '6VIhzP1_mfM'
  };

  const imageLinks = {
    Ground: '',
  };

  // Function to handle floor button clicks
  const handleFloorClick = (floor) => {
    setSelectedFloor(floor);
  };

  const opts = {
    height: '100%',
    width: '100%',
    playerVars: {
      mute: 1,
      autoplay: 1, // Autoplay the video
      loop: 1, // Loop the video
      controls: 0, // Hide video controls
      showinfo: 0, // Hide video title and other info
      rel: 0,
      volume: 0, // Disable related videos at the end
    },
  };

  return (
    <div >
      <div className={styles.navBar}>
        <div className={styles.firstTitle}>
          <span>Express your idea to Unmukto meuseum </span>
        </div>
        <button
          className={styles.navBtn}
          onClick={() => handleFloorClick('Earth')}
        >
          Earth observatory floor
        </button>
        <button
          className={styles.navBtn}
          onClick={() => handleFloorClick('Mission')}
        >
          Mission observatory floor
        </button>
        <button
          className={styles.navBtn}
          onClick={() => handleFloorClick('Space')}
        > 
          Space observatory floor
        </button>
      </div>

      <div>
        <YouTube
        className={styles.videoContainer}
          videoId={videoLinks[selectedFloor]}
          opts={opts}
          onReady={(event) => {

            event.target.playVideo(); // Autoplay the video
          }}
        />
      </div>

       <div>
        
       </div> 

    </div>
  );
};

export default VideoPlayer;