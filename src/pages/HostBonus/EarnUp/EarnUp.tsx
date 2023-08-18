import React from 'react'
import { BulbOutlined } from '@ant-design/icons'
import { Text } from 'src/components/Edition/Text'
import { Image } from 'src/components/Edition/Image'
import { useAppSelector } from 'src/hooks/useRedux'
import { useDispatch, useSelector } from 'react-redux'
import { RootState } from 'src/store/store'
const EarnUp = () => {
  const data = useAppSelector((state) => state.data.data)
  const { EarnUp } = useSelector((state: RootState) => state.hostBonus)
  return (
    <div className='flex-col items-stretch mb-[104px] flex'>
      <div className='w-full max-w-[1272px] flex-col self-center items-stretch flex relative'>
        <div className='gap-x-[26px] flex-row w-full max-w-[1080px] mx-auto flex'>
          <div className='pr-[4%] relative w-full flex-col flex '>
            <Image
              id={EarnUp.img}
              className='rounded-[4%] max-w-full align-middle inline-block border-0 w-[80%] h-[80%]'
              src={data[EarnUp.img]}
              alt='UnlockCar Connect®'
            />
            {/* <img
              src='https://assets.website-files.com/581d2676fe18a07e43923cfc/630fd2151c4ca5e282b5c3c9_AdobeStock_332389191%201.jpg'
              className='rounded-[4%] max-w-full align-middle inline-block border-0 w-[80%] h-[80%]'
              alt=''
            /> */}
          </div>
          <div className='w-full flex-col flex relative'>
            <Text
              id={EarnUp.headerTitle}
              tag='div'
              content={data[EarnUp.headerTitle]}
              className='max-w-[30ch] text-mainColor uppercase mb-[24px] leading-[13px] text-[11px] font-bold'
            />
            {/* <div className='max-w-[30ch] text-mainColor uppercase mb-[24px] leading-[13px] text-[11px] font-bold'>
              the onboard bonus
            </div> */}
            <Text
              id={EarnUp.mainTitle}
              tag='div'
              content={data[EarnUp.mainTitle]}
              className='max-w-[30ch] text-white  mb-[24px] leading-[30px] text-[32px] font-normal'
            />
            {/* <div className='max-w-[30ch] text-white  mb-[24px] leading-[30px] text-[32px] font-normal'>
              Earn up to $1,200 for adding a new car
            </div> */}

            <Text
              id={EarnUp.content?.[0]}
              tag='div'
              content={data[EarnUp.content?.[0]]}
              className='max-w-[40ch] text-[#969696]  mb-[24px] leading-[25px] text-[15px] font-semibold'
            />

            <Text
              id={EarnUp.content?.[1]}
              tag='div'
              content={data[EarnUp.content?.[1]]}
              className='max-w-[40ch] text-white  mb-[24px] leading-[25px] text-[15px] font-normal'
            />
            <Text
              id={EarnUp.content?.[2]}
              tag='div'
              content={data[EarnUp.content?.[2]]}
              className='max-w-[70ch] text-white  mb-[24px] leading-[25px] text-[11px] font-normal'
            />

            <div className='max-w-[70ch] text-mainColor  mb-[24px] leading-[25px] text-[20px] font-normal items-center flex'>
              <BulbOutlined style={{ fontSize: '24px', color: '#08c' }} />{' '}
              <Text id={EarnUp.footer} tag='span' content={data[EarnUp.footer]} className='' />
            </div>
            <div className='max-w-[70ch] text-mainColor  mb-[24px] leading-[25px] text-[16px] font-normal items-center flex'>
              <BulbOutlined style={{ fontSize: '24px', color: '#08c', opacity: '0.7' }} />{' '}
              <Text id={EarnUp.footer2} tag='span' content={data[EarnUp.footer2]} className='' />
            </div>
            <div className='max-w-[70ch] text-mainColor  mb-[24px] leading-[25px] text-[12px] font-normal items-center flex'>
              <BulbOutlined style={{ fontSize: '24px', color: '#08c', opacity: '0.3' }} />{' '}
              <Text id={EarnUp.footer3} tag='span' content={data[EarnUp.footer3]} className='' />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default EarnUp
