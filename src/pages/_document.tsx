import type { DocumentContext, DocumentInitialProps } from 'next/document'
import Document, { Head, Html, Main, NextScript } from 'next/document'
export default class MyDocument extends Document {
  static async getInitialProps(
    ctx: DocumentContext
  ): Promise<DocumentInitialProps> {
    const initialProps = await Document.getInitialProps(ctx)
    return { ...initialProps }
  }

  render() {
    return (
      <Html lang="ja">
        <Head>
          <meta charSet="utf-8" />
          <link rel="icon" href="/favicon.ico" />
          <meta property="og:title" content="芸工祭2022 告知サイト" />
          <meta property="og:url" content="https://geikousai-ncu.com" />
          <meta property="og:type" content="website" />
          <meta
            property="og:description"
            content="名古屋市立大学芸術工学部の大学祭、芸工祭2022『GOOOON』の告知HPです。2年ぶりの対面開催！みんなで楽しもう！！！"
          />
          <meta property="og:site_name" content="芸工祭2022 告知サイト" />
          <meta
            property="og:image"
            content="https://geikousai-ncu.com/images/geikousai-thumbnail.png"
          />
          <meta
            name="keywords"
            content="芸工祭,芸工祭2022,名古屋市,芸術工学,名古屋市立大学,GOOOON,ぐーん,グーン,ゴーオン"
          />
          <meta
            name="description"
            content="名古屋市立大学芸術工学部の大学祭、芸工祭2022『GOOOON』の告知HPです。2年ぶりの対面開催！みんなで楽しもう！！！"
          />

          <meta name="twitter:card" content="summary" />
          <meta name="twitter:title" content="芸工祭2022 告知サイト" />
          <meta
            name="twitter:description"
            content="名古屋市立大学芸術工学部の大学祭、芸工祭2022『GOOOON』の告知HPです。2年ぶりの対面開催！みんなで楽しもう！！！"
          />
          <meta
            name="twitter:image"
            content="https://geikousai-ncu.com/images/geikousai-thumbnail.png"
          />
        </Head>

        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}
