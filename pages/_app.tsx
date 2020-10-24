import { Fragment } from 'react';
import Head from 'next/head';
import { GlobalStyles as TailwindPreflight } from 'twin.macro';

function MyApp({ Component, pageProps }) {
  return (
    <Fragment>
      <Head>
        <title>Jose Landero</title>
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin=""
        />
        <link
          rel="preload"
          as="style"
          href="https://fonts.googleapis.com/css2?family=Roboto+Mono:wght@400;700&display=swap"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Roboto+Mono:wght@400;700&display=swap"
          rel="stylesheet"
        />
      </Head>
      <TailwindPreflight />
      <Component {...pageProps} />
    </Fragment>
  );
}

export default MyApp;
