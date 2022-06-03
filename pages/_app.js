import '../styles/globals.css'
import Script from 'next/script'

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Script src="https://cdn.directpay.lk/dev/v1/directpayCardPayment.js?v=1"></Script>
      <Component {...pageProps} />
    </>
  )
}

export default MyApp
