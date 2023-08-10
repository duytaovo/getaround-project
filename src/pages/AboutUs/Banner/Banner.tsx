import React from 'react'
import { Text } from 'src/components/Edition/Text'
import { Image } from 'src/components/Edition/Image'
export const DataBannerAboutUs = {
  id: 'Banner_AboutUs_AboutUS',
  headerTitle: 'OUR MISSION',
  title:
    "We're helping consumers shift away from car ownership by giving them instant and convenient access to vehicles when they need them.",
  content:
    'Our peer-to-peer marketplace helps solve some of the most pressing challenges facing the world today, including environmental sustainability and access to economic opportunity.',
  img: 'https://assets-global.website-files.com/5c16e90c8f6920b098f834e5/63ec0b73b2f4fb34b18ddb8a_ga-illustration-8.svg'
}
const Banner = () => {
  return (
    <div className='flex justify-center sm:flex-col sm:px-3'>
      <div className='w-1/2 sm:w-full  flex justify-center items-center'>
        <div className='block '>
          <Text
            id='id-textHsw'
            tag='p'
            content={DataBannerAboutUs.headerTitle}
            className='uppercase text-mainColor font-bold mb-3'
          />
          {/* <p className='uppercase text-mainColor font-bold mb-3'>OUR MISSION</p> */}
          <Text
            id='id-textHs'
            tag='h2'
            content={DataBannerAboutUs.title}
            className='text-2xl sm:text-[15px] text-black sm:font-semibold'
          />
          {/* <h2 className='text-2xl sm:text-[15px] text-black sm:font-semibold'>
            We're helping consumers shift away from car ownership by giving them instant and convenient access to
            vehicles when they need them.
          </h2> */}
          <Text
            id='id-textHsw'
            tag='p'
            content={DataBannerAboutUs.content}
            className='text-[#808795] font-normal mt-3 sm:text-[12px]'
          />
          {/* <p className='text-[#808795] font-normal mt-3 sm:text-[12px]'>
            Our peer-to-peer marketplace helps solve some of the most pressing challenges facing the world today,
            including environmental sustainability and access to economic opportunity.
          </p> */}
        </div>
      </div>
      <div className='w-[30%] flex justify-center sm:w-full'>
        <Image
          id='img-idHBannerAboutUs'
          className='object-contain h-[500px] sm:h-[300px]'
          src='https://assets-global.website-files.com/5c16e90c8f6920b098f834e5/63ec0b73b2f4fb34b18ddb8a_ga-illustration-8.svg'
          alt='Getaround Connect®'
        />
        {/* <img
          className='object-contain h-[500px] sm:h-[300px]'
          src='https://assets-global.website-files.com/5c16e90c8f6920b098f834e5/63ec0b73b2f4fb34b18ddb8a_ga-illustration-8.svg'
          alt='ss'
        /> */}
      </div>{' '}
    </div>
  )
}

export default Banner
