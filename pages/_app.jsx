import '../styles/globals.css';

import { TopZIndexContextProvider } from '../context/TopZIndexContext';

function MyApp({ Component, pageProps }) {
  return (
    <TopZIndexContextProvider>
      <Component {...pageProps} />
    </TopZIndexContextProvider>
  );
}

export default MyApp;
