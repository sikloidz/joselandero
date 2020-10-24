import { Fragment } from 'react';
import Head from 'next/head';
import { GlobalStyles as TailwindPreflight } from 'twin.macro';

function MyApp({ Component, pageProps }) {
  return (
    <Fragment>
      <Head>
        <title>Jose Landero</title>
        <link
          href="https://fonts.googleapis.com/css2?family=Roboto+Mono:wght@400;700"
          rel="stylesheet"
        />
      </Head>
      <TailwindPreflight />
      <Component {...pageProps} />
    </Fragment>
  );
}

export default MyApp;
