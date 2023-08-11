import React from 'react'
import { Text } from 'src/components/Edition/Text'
import { Image } from 'src/components/Edition/Image'
import { useAppSelector } from 'src/hooks/useRedux'
import { useDispatch, useSelector } from 'react-redux'
import { RootState } from 'src/store/store'
export const DataHeaderHostrefernal = {
  id: 'header_hosting_hostRefernal',
  headerTitle: 'Make even more',
  title: 'when you refer your friends',
  content:
    "You already know how powerful hosting can be. Time to share the love. Don't delay—this is a limited-time offer.",
  img: 'https://assets.website-files.com/581d2676fe18a07e43923cfc/63ec0f79defe6c3903d84ee4_ga-illustration-2.svg'
}
const HeaderhostRefernal = () => {
  const data = useAppSelector((state) => state.data)
  const { HeaderhostRefernal } = useSelector((state: RootState) => state.hostingReferral)
  return (
    <div className='flex justify-center px-[36px] sm:flex-col'>
      <div className='w-1/2  flex justify-center items-center sm:w-[100%]'>
        <div className='block'>
          <Text
            id='hosting-hostrefernal-header-headerTitle'
            tag='p'
            content={data[HeaderhostRefernal.headerTitle]}
            className='text-3xl text-black font-bold'
          ></Text>
          {/* <h2 className='text-3xl text-black font-bold'>
            <span className='text-mainColor'> Make even more</span> when you refer your friends
          </h2> */}
          <Text
            id='hosting-hostrefernal-header-content'
            tag='p'
            content={data[HeaderhostRefernal.content]}
            className='text-[#1e1e1e] font-normal mt-3'
          />
          {/* <p className='text-[#1e1e1e] font-normal mt-3'>
            You already know how powerful hosting can be. Time to share the love. Don't delay—this is a limited-time
            offer.
          </p> */}
        </div>
      </div>
      <div className='w-1/2 flex justify-center sm:w-[100%]'>
        <Image
          id='hosting-hostrefernal-header-img'
          className='object-contain h-[500px]'
          src={data[HeaderhostRefernal.img]}
          alt='Getaround Connect®'
        />
        {/* <img
          className='object-contain h-[500px]'
          src='https://assets.website-files.com/581d2676fe18a07e43923cfc/63ec0f79defe6c3903d84ee4_ga-illustration-2.svg'
          alt='ss'
        /> */}
      </div>{' '}
    </div>
  )
}

export default HeaderhostRefernal
