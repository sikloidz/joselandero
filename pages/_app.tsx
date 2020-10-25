import { Fragment } from 'react';
import Head from 'next/head';
import { Global } from '@emotion/core';
import { GlobalStyles as TailwindPreflight, theme, css } from 'twin.macro';

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
      <Global
        styles={css`
          body {
            background-color: ${theme`colors.gray.900`};
            font-family: 'Roboto Mono';
          }
        `}
      />
      <Component {...pageProps} />
    </Fragment>
  );
}

export default MyApp;
