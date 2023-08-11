import React from 'react'

import { Text } from 'src/components/Edition/Text'
import { Image } from 'src/components/Edition/Image'
import { useAppSelector } from 'src/hooks/useRedux'
import { useDispatch, useSelector } from 'react-redux'
import { RootState } from 'src/store/store'
export const DataHeaderAboutUs = [
  {
    id: 'Header_AboutUs_AboutUs',
    title: 'We empower people to carshare everywhere',
    arrayImg: [
      'https://assets-global.website-files.com/5c16e90c8f6920b098f834e5/6390f378577eec857f016f4e_The-Verge-New-2022.svg',
      'https://assets-global.website-files.com/5c16e90c8f6920b098f834e5/6390f3788372d0e324dafc8f_bloomberglogo.svg',
      'https://assets-global.website-files.com/5c16e90c8f6920b098f834e5/6390f378c864d13f8763bda2_forbes-logo.svg',
      'https://assets-global.website-files.com/5c16e90c8f6920b098f834e5/6390f268577eec6e9601550e_techcrunch%20logo.png',
      'https://assets-global.website-files.com/5c16e90c8f6920b098f834e5/6390f265fdc36f271a970fa2_newyorktimeslogo.png',
      'https://assets-global.website-files.com/5c16e90c8f6920b098f834e5/6390f26576664076cce83df7_nbclogo.png',
      'https://assets-global.website-files.com/5c16e90c8f6920b098f834e5/6390f26630e2fc922c59a4d1_HuffPost.svg.png'
    ]
  }
]
const HeaderSlide = () => {
  const { ExploreAboutUs, ConnectedCarSharingR, HeaderAboutUs } = useSelector((state: RootState) => state.AboutUs)
  const data = useAppSelector((state) => state.data)
  const dispatch = useDispatch()
  return (
    <div className='flex-col items-stretch mb-[104px] flex'>
      <div className='w-full  flex-col self-center items-stretch  flex relative'>
        <div
          className='h-[650px]   bg-scroll rounded-[22px] flex-col justify-end items-center p-9 flex'
          style={{
            backgroundImage: `linear-gradient(rgba(0, 0, 0, 0) 60%, #000 88%), url("https://assets-global.website-files.com/5c16e90c8f6920b098f834e5/63dc06aaf37c3ff0d68e82b2_about-us-header-img-1.jpg")`,
            gridRowGap: '40px',
            backgroundPosition: '0 0,50% 71%',
            backgroundSize: 'auto, auto 135%'
          }}
        >
          <h1 className='max-w-[22ch] text-center mx-auto text-mainColor tracking-[-.04em] m-0 pd-0 text-[47px] font-bold leading-[106%] sm:text-[35px] sm:leading-[100%] '>
            <Text
              id={data[HeaderAboutUs?.[0]?.title]}
              tag='span'
              content={data[HeaderAboutUs?.[0]?.title]}
              className='text-white font-normal '
            />
            {/* <span className='text-white font-normal '>{DataHeaderAboutUs?.[0]?.title}</span> */}
          </h1>
          <div
            className='w-full max-w-[1080px] bg-white rounded-2xl justify-between items-center mb-[-80px] p-[32px_60px] sm:p-[10px_20px]'
            style={{
              gridColumnGap: '26px',
              gridRowGap: '26px',
              gridTemplateColumns: '1fr 1fr 1fr 1fr',
              gridTemplateRows: 'auto auto',
              gridAutoColumns: '1fr',
              display: 'grid'
            }}
          >
            {HeaderAboutUs?.[0]?.arrayImg?.map((item, index) => (
              <Image
                id='img-idSliceAbouts'
                className='w-full max-h-[23px] max-w-[150px] object-contain flex-[0_auto] align-middle border-none inline-block border-0'
                src={data[HeaderAboutUs?.[0]?.arrayImg?.[index]]}
                style={{ filter: 'brightness(0%) grayscale()' }}
                alt='Getaround Connect®'
              />
              // <img
              //   className='w-full max-h-[23px] max-w-[150px] object-contain flex-[0_auto] align-middle border-none inline-block border-0'
              //   style={{ filter: 'brightness(0%) grayscale()' }}
              //   src={DataHeaderAboutUs?.[0]?.arrayImg?.[index]}
              //   alt=''
              // />
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default HeaderSlide
