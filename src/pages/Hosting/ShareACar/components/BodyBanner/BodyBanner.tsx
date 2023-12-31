import React from 'react'
import { Image } from 'src/components/Edition/Image'
import { Text } from 'src/components/Edition/Text'
import { changeColorWhiteAndMain } from 'src/helpers/getBreakpoint'
import { useAppSelector } from 'src/hooks/useRedux'
import { IItemBodyBannerCard } from 'src/types/hosting_shareACar.type'

interface Props {
  item: IItemBodyBannerCard
}

const BodyBanner = ({ item }: Props) => {
  const data = useAppSelector((state) => state.data.data)
  return (
    <div
      className={`bg-shareACar py-2 object-cover w-full flex flex-start  bg-cover rounded-lg flex-col justify-between leading-[22.4px] `}
    >
      {' '}
      {/* <Image
        id={`img_bodyBanner-shareACar`}
        className='relative object-cover md:h-[320px] rounded-2xl'
        src={data[item.img || '']}
        alt='hosting-shareAcar'
      /> */}
      {/* <div
        className=' lg:w-2/3 md:w-1/3 p-6
      '
      > */}
      <Text
        id={`txt-bodyBaner-shareACar-title`}
        tag='h3'
        content={data[item.title || '']}
        className={`text-textMainColor ml-3 w-1/2  lg:w-full text-[42px] font-medium tracking-tight leading-10 text-left `}
      />
      {/* <h3 className='text-textMainColor text-[42px] font-medium tracking-tight leading-10 text-left'>{item.title}</h3> */}
      <Text
        id={`txt-bodyBaner-shareACar-content`}
        tag='h3'
        content={data[item.content || '']}
        className={`text-textMainColor ml-3  text-ellipsis flex  leading-[22.4px] mt-[30px] break-words w-1/2 lg:w-full  lg:text-start `}
      />
      {/* </div> */}
      {/* <p className='text-textMainColor text-ellipsis flex justify-start leading-[22.4px] mt-[30px] break-words w-1/2 lg:w-full text-justify lg:text-start'>{item.content}</p> */}
    </div>
  )
}

export default BodyBanner
