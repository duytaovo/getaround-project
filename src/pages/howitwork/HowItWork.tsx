import React from 'react'
import HeaderHowItWord from 'src/components/HowItWork/HeaderHowItWork'
import SlideHowItWork from 'src/components/HowItWork/SlideHowItWork/SlideHowItWork'
import Discover from 'src/components/HowItWork/Discover/Discover'
const HowItWork = () => {
  return (
    <div className='w-full h-auto bg-[#f9f8f8]'>
      <HeaderHowItWord />
      <SlideHowItWork />
      <Discover />
    </div>
  )
}

export default HowItWork
