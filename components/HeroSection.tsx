import React from 'react'

const HeroSection = () => {
  return (
    <div className='flex justify-center items-center flex-col mt-8'>
        <h1 className='text-center text-4xl md:text-5xl lg:text-6xl font-bold max-w-3xl'>Summarize Articles, Notes with <span className='text-[#0081B4] dark:text-[#62CDFF]'>BriefAI</span></h1>
        <p className="my-4 text-center text-base md:text-xl max-w-3xl">
            Simplify your reading with BriefAI, an open-source article summarizer that transforms lengthy articles into clear and concise summaries
        </p>
    </div>
  )
}

export default HeroSection