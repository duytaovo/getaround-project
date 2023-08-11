import React from 'react'
import { Text } from 'src/components/Edition/Text'
import { Image } from 'src/components/Edition/Image'
import { useDispatch, useSelector } from 'react-redux'
import { RootState } from 'src/store/store'
export const DataHeaderST = {
  id: 'header_HowItWork_SafeTrust',
  headerTitle: 'Safety and trust',
  title: ' at every level',
  content:
    'Getaround prioritizes the safety and security of its community members by implementing proactive safety  measures, verifying identities, maintaining insurance coverage, and using advanced technology to prevent fraud. Additionally, Getaround has a dedicated team available 24/7 to investigate any safety or security  concerns.',
  img: 'https://assets-global.website-files.com/5c16e90c8f6920b098f834e5/641a1bcc9cff2052158af235_ga-illustration-6.svg'
}
const HeaderSafeTrust = () => {
  const { ExploreST, SlideLeftRightST, BookUnlockCar, HeaderST, PowerFullST, ProprietaryST } = useSelector(
    (state: RootState) => state.safetrust
  )
  return (
    <div>
      <div className='flex justify-center px-[36px] sm:flex-col'>
        <div className='w-1/2 flex justify-center sm:w-[100%]'>
          <Image
            id='imgHEaderST'
            className='object-contain h-[500px]'
            src={HeaderST?.img || ''}
            alt='Getaround Connect®'
          />
          {/* <img
            className='object-contain h-[500px]'
            src='https://assets-global.website-files.com/5c16e90c8f6920b098f834e5/641a1bcc9cff2052158af235_ga-illustration-6.svg'
            alt='ss'
          /> */}
        </div>{' '}
        <div className='w-1/2  flex justify-center items-center sm:w-[100%]'>
          <div className='block'>
            <div>
              <Text
                id='textHeader_HeaderTitleST'
                tag='span'
                content={HeaderST.headerTitle || ''}
                className='text-mainColor text-4xl  font-bold'
              />{' '}
              <Text
                id='textHeader_TitleST'
                tag='h2'
                content={HeaderST.title || ''}
                className='text-4xl text-black font-bold'
              />
            </div>
            <Text
              id='textHeader_contentST'
              tag='p'
              content={DataHeaderST.content}
              className='text-[#1e1e1e] font-normal mt-3'
            />
            {/* <p className='text-[#1e1e1e] font-normal mt-3'>
              Getaround prioritizes the safety and security of its community members by implementing proactive safety
              measures, verifying identities, maintaining insurance coverage, and using advanced technology to prevent
              fraud. Additionally, Getaround has a dedicated team available 24/7 to investigate any safety or security
              concerns.
            </p> */}
          </div>
        </div>
      </div>
    </div>
  )
}

export default HeaderSafeTrust
