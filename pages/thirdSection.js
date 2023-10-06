import React from 'react';
import styles from '../styles/Home.module.css'

const ThirdSection = () => {
    return(
        <div className={styles.ThirdSection}>
             <iframe src="https://eyes.nasa.gov/apps/earth/#/" width="80%" height="800" frameBorder="0"></iframe>
             <iframe src="https://exoplanets.nasa.gov/eyes-on-exoplanets/?destinations=/alien-worlds/strange-new-worlds/#/planet/Kepler-22_b/" width="80%" height="800" frameBorder="0"></iframe>
        </div>
    )
}

export default ThirdSection;