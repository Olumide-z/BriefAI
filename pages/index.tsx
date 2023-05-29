import Content from "@/components/Content"
import HeroSection from "@/components/HeroSection"
import Navbar from "@/components/Navbar"
import Head from "next/head"


export default function Home() {

  return (
    <>
      <Head>
        <title>BriefAI Summarizer</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta property="og:title" content="My page title" key="title" />
        <link rel="shortcut icon" href="brief.png"/>
      </Head>
      <Head>
        <meta property="og:title" content="My new title" key="title" />
      </Head>
      <Navbar/>
      <div className='backGround min-h-screen padding pt-20'>
        <HeroSection />
        <Content />
      </div>
    </>
  )
}
