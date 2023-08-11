import React from 'react'
import { Text } from 'src/components/Edition/Text'
import { Image } from 'src/components/Edition/Image'
import { useAppSelector } from 'src/hooks/useRedux'
import { useDispatch, useSelector } from 'react-redux'
import { RootState } from 'src/store/store'
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
  const { ExploreAboutUs, ConnectedCarSharingR, BannerAboutUS } = useSelector((state: RootState) => state.AboutUs)
  const data = useAppSelector((state) => state.data)
  const dispatch = useDispatch()
  return (
    <div className='flex justify-center sm:flex-col sm:px-3'>
      <div className='w-1/2 sm:w-full  flex justify-center items-center'>
        <div className='block '>
          <Text
            id={data[BannerAboutUS.headertitle]}
            tag='p'
            content={data[BannerAboutUS.headertitle]}
            className='uppercase text-mainColor font-bold mb-3'
          />
          {/* <p className='uppercase text-mainColor font-bold mb-3'>OUR MISSION</p> */}
          <Text
            id={data[BannerAboutUS.title]}
            tag='h2'
            content={data[BannerAboutUS.title]}
            className='text-2xl sm:text-[15px] text-black sm:font-semibold'
          />
          {/* <h2 className='text-2xl sm:text-[15px] text-black sm:font-semibold'>
            We're helping consumers shift away from car ownership by giving them instant and convenient access to
            vehicles when they need them.
          </h2> */}
          <Text
            id={data[BannerAboutUS.content]}
            tag='p'
            content={data[BannerAboutUS.content]}
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
          id={data[BannerAboutUS.img]}
          className='object-contain h-[500px] sm:h-[300px]'
          src={data[BannerAboutUS.img]}
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
