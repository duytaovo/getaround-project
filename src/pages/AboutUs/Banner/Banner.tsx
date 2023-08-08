import React from 'react'

export const DataBannerAboutUs = {
  headerTitle: 'OUR MISSION',
  title:
    "We're helping consumers shift away from car ownership by giving them instant and convenient access to vehicles when they need them.",
  content:
    'Our peer-to-peer marketplace helps solve some of the most pressing challenges facing the world today, including environmental sustainability and access to economic opportunity.',
  img: 'https://assets-global.website-files.com/5c16e90c8f6920b098f834e5/63ec0b73b2f4fb34b18ddb8a_ga-illustration-8.svg'
}
const Banner = () => {
  return (
    <div className='flex justify-center '>
      <div className='w-1/2  flex justify-center items-center'>
        <div className='block '>
          <p className='uppercase text-mainColor font-bold mb-3'>OUR MISSION</p>
          <h2 className='text-2xl text-black font-medium'>
            We're helping consumers shift away from car ownership by giving them instant and convenient access to
            vehicles when they need them.
          </h2>

          <p className='text-[#808795] font-normal mt-3'>
            Our peer-to-peer marketplace helps solve some of the most pressing challenges facing the world today,
            including environmental sustainability and access to economic opportunity.
          </p>
        </div>
      </div>
      <div className='w-[30%] flex justify-center'>
        <img
          className='object-contain h-[500px]'
          src='https://assets-global.website-files.com/5c16e90c8f6920b098f834e5/63ec0b73b2f4fb34b18ddb8a_ga-illustration-8.svg'
          alt='ss'
        />
      </div>{' '}
    </div>
  )
}

export default Banner
