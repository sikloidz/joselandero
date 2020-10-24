import { extractCritical } from '@emotion/server';
import Document, { Html, Head, Main, NextScript } from 'next/document';

type DocumentProps = {
  ids: any[];
  css: any;
};

export default class MyDocument extends Document<DocumentProps> {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx);
    const page = ctx.renderPage();
    const styles = extractCritical(page.html);

    return { ...initialProps, ...page, ...styles };
  }

  render() {
    return (
      <Html lang="en">
        <Head>
          <style
            data-emotion-css={this.props.ids.join(' ')}
            dangerouslySetInnerHTML={{ __html: this.props.css }}
          />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}