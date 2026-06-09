import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="sv">
      <Head>
        <meta name="description" content="Johanna Todal — UX Designer & Web Developer" />
        <meta name="keywords" content="UX Designer, Web Developer, Figma, React, Portfolio, Johanna Todal" />
        
        {/* Google Analytics  */}
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX"></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-XXXXXXXXXX');
            `,
          }}
        />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}