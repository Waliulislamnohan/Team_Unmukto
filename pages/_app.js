import '../styles/globals.css'
import { config } from '@fortawesome/fontawesome-svg-core';
import '@fortawesome/fontawesome-svg-core/styles.css';  // Import the CSS
config.autoAddCss = false;  // Tell Font Awesome to skip adding the CSS automatically since it's being imported above
import { library } from '@fortawesome/fontawesome-svg-core';
import { faVrCardboard } from '@fortawesome/free-solid-svg-icons';

library.add(faVrCardboard);
function MyApp({ Component, pageProps }) {
	return <Component {...pageProps} />
}

export default MyApp
