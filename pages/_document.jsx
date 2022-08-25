import Document, { Head, Html, Main, NextScript } from 'next/document';

import renderStatic from '../shared/renderer';

export default class AppDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx);
    const { css, ids } = await renderStatic(initialProps.html);
    return {
      ...initialProps,
      styles: (
        <>
          {initialProps.styles}
          <style
            data-emotion={`css ${ids.join(' ')}`}
            dangerouslySetInnerHTML={{ __html: css }}
          />
        </>
      ),
    };
  }

  render() {
    return (
      <Html>
        <Head>
          <link
            href="https://fonts.googleapis.com/css2?family=Space+Mono:wght@400;700&display=swap"
            rel="stylesheet"
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
