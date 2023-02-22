import Head from 'next/head';
import Navbar from '@/components/Navbar';
import '@/styles/globals.css';
import { Nunito } from '@next/font/google';
import { AuthContextProvider } from '@/context/AuthContext';
import Footer from '@/components/Footer';

const nunito = Nunito({
  subsets: ['latin'],
  variable: '--nunito-font',
  display: 'swap',
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
      <main className={`${nunito.variable} font-nunito`}>
        <AuthContextProvider>
          <Navbar />
          <Component {...pageProps} />
          <Footer />
        </AuthContextProvider>
      </main>
    </>
  );
};

export default App;
