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
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <div className={nunito.className}>
        <Navbar />
        <Component {...pageProps} />
      </div>
    </>
  );
};

export default App;
