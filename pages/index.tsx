import Navbar from "@/components/Navbar"
import Head from "next/head"
import React, {useEffect, useState} from 'react'


export default function Home() {
  const [darkMode, setDarkMode] = useState<boolean | undefined>(undefined)

  useEffect(() => {
    if(darkMode){
        localStorage.setItem('darkMode', 'true');
        window.document.documentElement.classList.add('dark')
    }else if (darkMode === false) {
        localStorage.setItem('darkMode', 'false');
        window.document.documentElement.classList.remove('dark')
    }else{
        setDarkMode(localStorage.getItem('darkMode') === 'true');
    }
}, [darkMode])

  return (
    <>
      <Head>
        <title>BriefAI Summarizer</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta property="og:title" content="My page title" key="title" />
      </Head>
      <Head>
        <meta property="og:title" content="My new title" key="title" />
      </Head>
      <Navbar darkMode={darkMode} setDarkMode={setDarkMode}/>
      <div className={`${darkMode === true ? 'dark' : 'light'} backGround h-screen padding pt-20`}>
        hello
      </div>
    </>
  )
}
