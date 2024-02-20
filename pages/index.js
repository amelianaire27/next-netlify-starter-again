import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'
import CountdownTimer from 'CountdownTimer';

export default function Home() {
  const countDownDate = new Date("2024-05-07T12:00:00-07:00").getTime();
  return (
    <div className="container">
      <Head>
        <title>Countdown to Frankie's Return</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Header title="Frankie's Return to Portland!" />
      <h3>We'll be reunited in:</h3>
      <CountdownTimer targetDate={countDownDate} />
      </main>

      <Footer />
    </div>
  )
}
