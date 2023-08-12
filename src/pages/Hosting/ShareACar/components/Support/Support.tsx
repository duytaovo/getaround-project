import React from 'react'
import { Image } from 'src/components/Edition/Image'
import { Text } from 'src/components/Edition/Text'
import { changeColorBlackAndMain, changeColorWhiteAndMain } from 'src/helpers/getBreakpoint'
import { useAppSelector } from 'src/hooks/useRedux'
import { IItemSupport } from 'src/types/hosting_shareACar.type'
import { iDGenerator } from 'src/utils/idGenerator'

interface Props {
  item: IItemSupport
}

const Support = ({ item }: Props) => {
  const data = useAppSelector((state) => state.data.data)

  return (
    <div className='flex items-center justify-between bg-white text-black rounded-2xl pt-[28px] px-[32px] pb-[36px] lg:flex-col'>
      <div className='flex items-center justify-between w-2/3 lg:w-full'>
        <div>
          <Image
            id={`support_shareACar-img`}
            className={'w-[200px] h-[124px] rounded-full'}
            src={data[item?.img || '']}
            alt='hosting-shareAcar'
          />
          {/* <img src={item.img} alt='' className='w-[200px] h-[124px] rounded-full' /> */}
        </div>
        <div className='p-3 '>
          <Text
            id={`support_shareACar-title`}
            tag='h4'
            content={data[item.title || '']}
            className={`text-mainColor text-[24px] font-medium tracking-tight leading-7 text-left `}
          />
          {/* <h4 className='text-mainColor text-[24px] font-medium tracking-tight leading-7 text-left'>{changeColorBlackAndMain(item.title.split(' '))}</h4> */}
          <Text
            id={`support_shareACar-contentLeft`}
            tag='p'
            content={data[item.contentLeft || '']}
            className={`font-medium leading-[22.4px] mt-2 text-black/90 `}
          />
          {/* <p className='font-medium leading-[22.4px] mt-2 text-black/90 '>{item.contentLeft}</p> */}
        </div>
      </div>
      <div className='flex-1'>
        <Text
          id={`support_shareACar-Right`}
          tag='p'
          content={data[item.contentRight || '']}
          className={`text-black/60 rounded-2xl flex flex-start leading-[22.4px] text-ellipsis text-justify mt-6 `}
        />
        {/* <p className='text-black/60 rounded-2xl flex flex-start leading-[22.4px] text-ellipsis text-justify mt-6'>
          {item.contentRight}
        </p> */}
      </div>
    </div>
  )
}

export default Support
