import { Fragment } from 'react';
import Head from 'next/head';

import '../styles/app.css';

function MyApp({ Component, pageProps }) {
  return (
    <Fragment>
      <Head>
        <title>Jose Landero</title>
        <link
          href="https://fonts.googleapis.com/css2?family=Roboto+Mono:wght@300;400;700"
          rel="stylesheet"
        />
      </Head>
      <Component {...pageProps} />
    </Fragment>
  );
}

export default MyApp;
