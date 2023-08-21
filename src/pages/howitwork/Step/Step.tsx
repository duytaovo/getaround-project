import React, { useState } from 'react'
import CustomeStep from 'src/components/CustomeStep/CustomeStep'
import {
  CustomeStepItems,
  CustomeStepItemsHowItWork1,
  CustomeStepItemsHowItWork2
} from 'src/items/CustomeStepItem/CustomeStepItem'
import { MobileOutlined, CarOutlined, RiseOutlined, DollarOutlined, WalletOutlined } from '@ant-design/icons'
import { useDispatch, useSelector } from 'react-redux'
import { useAppSelector } from 'src/hooks/useRedux'
import { RootState } from 'src/store/store'
import { Link } from 'react-router-dom'
import { Text } from 'src/components/Edition/Text'
import { Image } from 'src/components/Edition/Image'
const Step = () => {
  const {
    ExploreHowItWork,
    ProprietaryHowItWork,
    HearCommunityHowItWork,
    SlideLeftRightHowItWork,
    SlideHowItWorkR,
    customeSteps,
    customeSteps2,
    titleimgSide,
    headerTitles
  } = useSelector((state: RootState) => state.howitwork)
  const data = useAppSelector((state) => state.data.data)
  const [step, setStep] = useState(true)
  return (
    <div>
      <div className='justify-center items-center flex relative'>
        <Link
          data-w-tab='Tab 1'
          className='bg-[rgba(0,0,0,)] items-center no-underline tracking-[-0.03em] px-0 text-[24px] font-bold flex align-top cursor-pointer text-left text-[#222] p-[9px_30px] relative max-w-[100%] touch-manipulation duration-[0.3s] ease-[ease] delay-0 transition-[color]'
          style={{ gridColumnGap: '14px', outline: 'none' }}
          id='w-tabs-0-data-w-tab-0'
          to='#bookingtab'
          role='tab'
          aria-controls='bookingtab'
          aria-selected='true'
        >
          <Text
            id={`ttStepHIWDX`}
            tag='h3'
            content={data[headerTitles.HeaderTitle1] || 's'}
            className='text-mainColor my-0 text-[24px] font-bold text-left leading-[105%] sm:leading-[50%] sm:text-[15px] sm:font-medium'
          />
          {/* <h3
            data-w-id='19b49919-2a64-d52b-9a28-bb8f08bfcea8'
            className='text-mainColor my-0 text-[24px] font-bold text-left leading-[105%] sm:leading-[50%] sm:text-[15px] sm:font-medium'
          >
            Đặt xe
          </h3> */}
          <div className='w-[30px] h-[30px] bg-[#3699d3] p-[6px] rounded-l-[30px]'></div>
        </Link>
        <Link
          data-w-tab='Tab 1'
          className='bg-[rgba(0,0,0,)] items-center no-underline tracking-[-0.03em] px-0 text-[24px] font-bold flex align-top cursor-pointer text-left text-[#222] p-[9px_30px] relative max-w-[100%] touch-manipulation duration-[0.3s] ease-[ease] delay-0 transition-[color]'
          style={{ gridColumnGap: '14px', outline: 'none' }}
          id='w-tabs-0-data-w-tab-0'
          to='#bookingtab'
          role='tab'
          aria-controls='bookingtab'
          aria-selected='true'
        >
          <div className='w-[30px] h-[30px] bg-[#3699d3] p-[6px] rounded-r-[30px] '>
            <div
              onClick={() => {
                setStep(!step)
              }}
              className={`bg-white w-full h-full rounded-full right-[-10px] duration-[0.6s]`}
              style={{
                transform: step
                  ? 'translate3d(-150%, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)'
                  : 'translate3d(0%, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)',
                transformStyle: 'preserve-3d'
              }}
            ></div>
          </div>
          <Text
            id={`ttStepHIWTX`}
            tag='h3'
            content={data[headerTitles.HeaderTitle2] || 'Thue xe'}
            data-w-id='19b49919-2a64-d52b-9a28-bb8f08bfcea8'
            className='text-black my-0 text-[24px] font-bold text-left leading-[105%] sm:leading-[50%] sm:text-[15px] sm:font-medium'
          />
          {/* <h3
            data-w-id='19b49919-2a64-d52b-9a28-bb8f08bfcea8'
            className='text-black my-0 text-[24px] font-bold text-left leading-[105%] sm:leading-[50%] sm:text-[15px] sm:font-medium'
          >
            Thuê xe
          </h3> */}
        </Link>
      </div>
      <div className='flex justify-center px-[36px] sm:flex-col'>
        {/* Begin image portion */}

        {/* End image portion */}
        {step === true ? (
          <>
            <div className='w-1/2 flex justify-center sm:w-full'>
              <Image
                id={titleimgSide.imgSlide1 || ''}
                className='object-contain h-[500px]'
                src={data[titleimgSide.imgSlide1] || ''}
                alt='Getaround Connect®'
              />
              {/* <img
                className='object-contain h-[500px]'
                src='https://assets-global.website-files.com/5c16e90c8f6920b098f834e5/63c5b4afd9423e2cac7f6cde_how-it-works-image%20copiar-p-500.jpg'
                alt='ss'
              /> */}
            </div>{' '}
            <CustomeStep
              icons={[<MobileOutlined />, <CarOutlined />, <RiseOutlined />]}
              classname='w-1/2 sm:w-full'
              items={customeSteps}
            />
          </>
        ) : (
          <>
            <div className='w-1/2 flex justify-center'>
              <Image
                id={titleimgSide.imgSlide2}
                className='object-contain h-[500px]'
                src={data[titleimgSide.imgSlide2] || ''}
                alt='Getaround Connect®'
              />
              {/* <img
                className='object-contain h-[500px]'
                src='https://assets-global.website-files.com/5c16e90c8f6920b098f834e5/63ec0b73b2f4fb34b18ddb8a_ga-illustration-8.svg'
                alt='ss'
              /> */}
            </div>
            <CustomeStep
              icons={[<CarOutlined />, <WalletOutlined />, <WalletOutlined />, <DollarOutlined />]}
              classname='w-1/2'
              items={customeSteps2}
            />
          </>
        )}
      </div>
    </div>
  )
}

export default Step
