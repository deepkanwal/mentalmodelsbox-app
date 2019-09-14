import React from 'react';
import App, { Container } from 'next/app';
import NProgress from 'nprogress';
import Router from 'next/router';
import Head from 'next/head';

import Header from '../components/Header.jsx';
import Footer from '../components/Footer.jsx';

NProgress.configure({
  showSpinner: false
});

Router.events.on('routeChangeStart', (url) => {
  NProgress.start();
});
Router.events.on('routeChangeComplete', () => NProgress.done());
Router.events.on('routeChangeError', () => NProgress.done());

export default class MyApp extends App {
  static async getInitialProps({ Component, router, ctx }) {
    let pageProps = {};
    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx);
    }
    return { pageProps };
  }

  render() {
    const { Component, pageProps } = this.props;
    const GA_TRACKING_ID = 'UA-135760051-1';
    return (
      <Container>
        <Head>
          <script async src={`https://www.googletagmanager.com/gtag/js?id=${GA_TRACKING_ID}`} />
          <script
            dangerouslySetInnerHTML={{
              __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${GA_TRACKING_ID}');
          `
            }}
          />

          <meta name='viewport' content='width=device-width, initial-scale=1' />

          <link rel='stylesheet' href='/static/bootstrap.min.css' />
          <link rel='stylesheet' href='/static/base.css' />
          <link rel='stylesheet' href='/static/nprogress.css' />
          <link
            rel='stylesheet'
            href='https://use.fontawesome.com/releases/v5.6.3/css/all.css'
            integrity='sha384-UHRtZLI+pbxtHCWp1t77Bi1L4ZtiqrqD80Kn4Z8NTSRyMA2Fd33n5dQ8lWUE00s/'
            crossOrigin='anonymous'
          />

          {/* Fonts */}
          <link href='https://fonts.googleapis.com/css?family=Asap:400,500' rel='stylesheet' />

          {/* Favicons */}
          <link rel='apple-touch-icon' sizes='57x57' href='/static/favicons/apple-icon-57x57.png' />
          <link rel='apple-touch-icon' sizes='60x60' href='/static/favicons/apple-icon-60x60.png' />
          <link rel='apple-touch-icon' sizes='72x72' href='/static/favicons/apple-icon-72x72.png' />
          <link rel='apple-touch-icon' sizes='76x76' href='/static/favicons/apple-icon-76x76.png' />
          <link
            rel='apple-touch-icon'
            sizes='114x114'
            href='/static/favicons/apple-icon-114x114.png'
          />
          <link
            rel='apple-touch-icon'
            sizes='120x120'
            href='/static/favicons/apple-icon-120x120.png'
          />
          <link
            rel='apple-touch-icon'
            sizes='144x144'
            href='/static/favicons/apple-icon-144x144.png'
          />
          <link
            rel='apple-touch-icon'
            sizes='152x152'
            href='/static/favicons/apple-icon-152x152.png'
          />
          <link
            rel='apple-touch-icon'
            sizes='180x180'
            href='/static/favicons/apple-icon-180x180.png'
          />
          <link
            rel='icon'
            type='image/png'
            sizes='192x192'
            href='/static/favicons/android-icon-192x192.png'
          />
          <link
            rel='icon'
            type='image/png'
            sizes='32x32'
            href='/static/favicons/favicon-32x32.png'
          />
          <link
            rel='icon'
            type='image/png'
            sizes='96x96'
            href='/static/favicons/favicon-96x96.png'
          />
          <link
            rel='icon'
            type='image/png'
            sizes='16x16'
            href='/static/favicons/favicon-16x16.png'
          />
          <link rel='manifest' href='/static/favicons/manifest.json' />
          <meta name='msapplication-TileColor' content='#ffffff' />
          <meta name='msapplication-TileImage' content='/static/favicons/ms-icon-144x144.png' />
          <meta name='theme-color' content='#ffffff' />
        </Head>
        <div className='app-component'>
          <Header />
          <Component {...pageProps} />
          <Footer />
        </div>
        <style jsx>
          {`
            .app-component {
              margin: 0 auto;
              max-width: 800px;
            }
          `}
        </style>
      </Container>
    );
  }
}
