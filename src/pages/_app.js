import Head from 'next/head';
import Navbar from '@/components/Navbar';
import '@/styles/globals.css';
import { Nunito } from '@next/font/google';

const nunito = Nunito({
  subsets: ['latin'],
});

const App = ({ Component, pageProps }) => {
  return (
    <>
      <Head>
        <title>notes on technology</title>
        <meta
          name='description'
          content='Personal notes on technology from a humanized point of view'
        />

        <meta property='og:title' content='notes on technology' />
        <meta name='twitter:card' content='summary'></meta>
        <meta name='twitter:creator' content='@jaguattt'></meta>
        <meta
          property='og:image'
          content='https://thumbs.dreamstime.com/b/touchscreen-technology-icon-145272266.jpg'
        />
        <meta
          property='og:url'
          content='https://blog-nextjs-4wgijzy5v-vitorbutkus.vercel.app/'
        />
        <meta
          property='og:description'
          content='Personal notes on technology from a humanized point of view'
        />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <img
        src='https://thumbs.dreamstime.com/b/touchscreen-technology-icon-145272266.jpg'
        alt='n'
        style={{ display: 'none' }}
      />
      <div className={nunito.className}>
        <Navbar />
        <Component {...pageProps} />
      </div>
    </>
  );
};

export default App;
