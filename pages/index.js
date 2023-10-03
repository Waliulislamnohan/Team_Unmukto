import Head from 'next/head'
import styles from '../styles/Home.module.css'
import VideoPlayer from './videoPlayer'
import InformationSection from './info';
import ThirdSection from './thirdSection';
export default function Home() {
	return (
		<div className={styles.container}>
		<VideoPlayer />
		<InformationSection />
		<ThirdSection />
		</div>
	)
}
