import '../styles/globals.css'
import Layout from '../components/Layout'
import NoSSR from '../components/NoSSR'
import Script from 'next/script'

function MyApp({ Component, pageProps }) {
  return (
    <>
    <Script id='analytics_manager' strategy="lazyOnload" src={`https://www.googletagmanager.com/gtag/js?id=G-Y3BJJ485CZ`} />

    <Script id='track_visitors' strategy="lazyOnload">
        {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-Y3BJJ485CZ', {
            page_path: window.location.pathname,
            });
        `}
    </Script>
    
    <NoSSR>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </NoSSR>
    </>
  )
}

export default MyApp
