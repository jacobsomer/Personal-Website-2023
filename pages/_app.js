import '../styles/globals.css';
import { Raleway } from '@next/font/google';
import { Analytics } from '@vercel/analytics/react';

const raleway = Raleway({
  weight: '500'
});

function MyApp({ Component, pageProps }) {
  return (
    <>
      <main className={raleway.className}>
        <Component {...pageProps} />
      </main>
      <Analytics />
    </>
  );
}

export default MyApp;
