import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  return (
    <>
      <script src="https://cdn.directpay.lk/dev/v1/directpayCardPayment.js?v=1"></script>
      <Component {...pageProps} />
    </>
  )
}

export default MyApp
