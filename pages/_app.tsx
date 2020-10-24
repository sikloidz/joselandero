import { Fragment } from 'react';
import Head from 'next/head';
import { GlobalStyles as TailwindPreflight, css, theme } from 'twin.macro';
import { Global } from '@emotion/core';

function MyApp({ Component, pageProps }) {
  return (
    <Fragment>
      <Head>
        <title>Jose Landero</title>
        <link
          href="https://fonts.googleapis.com/css2?family=Roboto+Mono:wght@400;700&display=swap"
          rel="stylesheet"
        />
      </Head>
      <TailwindPreflight />
      <Global
        styles={css`
          body {
            background: ${theme`colors.gray.900`};
            font-family: 'Roboto Mono';
          }
        `}
      />
      <Component {...pageProps} />
    </Fragment>
  );
}

export default MyApp;
