import Head from 'next/head'
import Image from 'next/image'
import Header from '../components/homepage/header'
import Services from '../components/homepage/services'
import Expertise from '../components/homepage/expertise'
import Contact from '../components/homepage/contact'
import Footer from '../components/homepage/footer'


export default function Home() {
  return (
    <>
      <Head>
        <title>DRA</title>
        <meta content="DRA" property="og:title" key="og:title" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
    <Header />
    <Services />
    <Expertise />
    <Contact />
    <Footer />
    </>
  )
}