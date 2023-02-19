import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
  return (
    <Html lang='en'>
      <Head>
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <body>
        <img
          src='https://thumbs.dreamstime.com/b/touchscreen-technology-icon-145272266.jpg'
          alt='n'
          style={{ display: 'none' }}
        />
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
