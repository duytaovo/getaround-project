import React from 'react'
import Button from 'src/components/Button'

type Props = {}

const Banner = (props: Props) => {
  return (
    <div className='bg-white  h-[425px] flex flex-col justify-center bg-bannerComunity bg-no-repeat object-fill '>
      <div className='max-w-[30ch] flex items-start ml-auto  flex-col mr-[50px]'>
        <strong className='text-[32px] font-medium tracking-tight leading-8'>The New Onboard Bonus</strong>
        <p className='py-5'>
          Earn up to $1200 for adding a new car depending on where you list it. Check our bonus programs for more
          details.
        </p>
        <Button
          children={<span className='text-xl'>Share A Car</span>}
          isNext={true}
          className='w-[200px] hover:duration-500 duration-500 hover:transition-all  text-black h-[70px]  rounded-lg bg-white hover:bg-mainColor  hover:text-white'
        ></Button>
      </div>
    </div>
  )
}

export default Banner
