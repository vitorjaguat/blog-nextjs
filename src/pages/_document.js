import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
  return (
    <Html lang='en'>
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
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
