import React from 'react'
import { Image } from 'src/components/Edition/Image'
import { Text } from 'src/components/Edition/Text'
import { changeColorWhiteAndMain } from 'src/helpers/getBreakpoint'
import { useAppSelector } from 'src/hooks/useRedux'
import { IItemBodyBannerCard } from 'src/types/hosting_shareACar.type'
import { iDGenerator } from 'src/utils/idGenerator'

interface Props {
  item: IItemBodyBannerCard
}

const BodyBanner = ({ item }: Props) => {
  const data = useAppSelector((state) => state.data.data)
  return (
    <div
      className={`bg-[url(${
        data[item.img || '']
      })] object-cover w-full flex flex-start  bg-cover rounded-lg flex-col justify-between leading-[22.4px] pt-[38px] px-[54px] pb-[54px]`}
    >
      {' '}
      <Image
        id={`img_bodyBanner-shareACar`}
        className='relative object-cover lg:h-[250px] md:h-[320px]'
        src={data[item.img || '']}
        alt='hosting-shareAcar'
      />
      <div
        className='absolute lg:w-2/3 md:w-1/3 p-6 lg:bg-white sm:bg-black
      '
      >
        <Text
          id={`txt-bodyBaner-shareACar-title`}
          tag='h3'
          content={data[item.title || '']}
          className={`text-textMainColor w-1/2  lg:w-full text-[42px] font-medium tracking-tight leading-10 text-left `}
        />
        {/* <h3 className='text-textMainColor text-[42px] font-medium tracking-tight leading-10 text-left'>{item.title}</h3> */}
        <Text
          id={`txt-bodyBaner-shareACar-content`}
          tag='h3'
          content={data[item.content || '']}
          className={`text-textMainColor  text-ellipsis flex justify-start leading-[22.4px] mt-[30px] break-words w-1/3 lg:w-full  lg:text-start `}
        />
      </div>
      {/* <p className='text-textMainColor text-ellipsis flex justify-start leading-[22.4px] mt-[30px] break-words w-1/2 lg:w-full text-justify lg:text-start'>{item.content}</p> */}
    </div>
  )
}

export default BodyBanner
