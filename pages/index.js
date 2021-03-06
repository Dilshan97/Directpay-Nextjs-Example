import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

export default function Home() {

  function startPayment() {
    DirectPayCardPayment.init({
      container: 'card_container', //<div id="card_container"></div>
      merchantId: 'xxxx', //your merchant_id
      amount: "100.00",
      refCode: "DP12345", //unique referance code form merchant
      currency: 'LKR',
      type: 'ONE_TIME_PAYMENT',
      customerEmail: 'abc@mail.com',
      customerMobile: '+94712345674',
      description: 'test products',  //product or service description
      debug: true,
      responseCallback: responseCallback,
      errorCallback: errorCallback,
      logo: 'https://test.com/directpay_logo.png',
      apiKey: 'xxxxxxxxxxx'
    });

    //response callback.
    function responseCallback(result) {
      console.log("successCallback-Client", result);
      alert(JSON.stringify(result));
    }

    //error callback
    function errorCallback(result) {
      console.log("successCallback-Client", result);
      alert(JSON.stringify(result));
    }
  }

  return (
    <div className={styles.container}>
      <Head>
        <title>Directpay | One Time Payment</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <div className={styles.grid}>
          <button onClick={startPayment}>Start Payment</button>
        </div>
        <div id="card_container"></div>
      </main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <span className={styles.logo}>
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
        </a>
      </footer>
    </div>
  )
}
