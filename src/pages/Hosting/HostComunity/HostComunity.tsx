import React from 'react'
import SliderHostComunity, { itemSliderHostComunity } from './components/Slider/Slider'
import { changeColorWhiteAndMain } from 'src/helpers/getBreakpoint'
import CardBody from './components/CardBody'
import GettingStarted from './components/GettingStarted/GettingStarted'

type Props = {}

const HostCominity = (props: Props) => {
  const text = 'Featured news & updates'
  return (
    <div className=''>
      {/* start slider */}
      <div className='bg-black mb-bottom'>
        <div className='flex flex-col justify-center items-center'>
          <span className='text-sm font-medium leading-4 text-center uppercase'>HOST COMMUNITY</span>
          <span className='text-[58px] font-medium tracking-tight'>{changeColorWhiteAndMain(text.split(' '))}</span>
        </div>
        <SliderHostComunity numberItem={3} numberItemScroll={3} data={itemSliderHostComunity} />
      </div>
      {/* end slider */}
      {/* start card */}
      <div className='mb-bottom flex gap-3'>
        <CardBody.CardBodyImg />
        <CardBody.CardBodyImg />
        <CardBody.CardBodyImg />
        <CardBody.CardBodyButton />
      </div>
      {/* end card */}

      {/* start area scroll */}
      <div className='flex justify-between items-center gap-5 mb-bottom'>
        <div className='w-1/2 bg-white rounded-md'>
          <img
            src='https://assets-global.website-files.com/5c16e90c8f6920b098f834e5/63ec0b73b2f4fb34b18ddb8a_ga-illustration-8.svg'
            alt=''
          />
        </div>
        <div className='w-1/2 gap-y-4'>
        <GettingStarted/>
        </div>
      </div>
      {/* end area scroll */}
    </div>
  )
}

export default HostCominity
