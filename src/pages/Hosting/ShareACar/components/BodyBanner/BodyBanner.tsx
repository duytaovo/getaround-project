import React from 'react'
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
    <div className='bg-shareACar object-cover flex flex-start bg-cover rounded-lg flex-col justify-between leading-[22.4px] pt-[38px] px-[54px] pb-[54px]'>
      <Text
        id={`txt-bodyBaner-shareACar-title`}
        tag='h3'
        content={data[item.title || '']}
        className={`text-textMainColor text-[42px] font-medium tracking-tight leading-10 text-left `}
      />
      {/* <h3 className='text-textMainColor text-[42px] font-medium tracking-tight leading-10 text-left'>{item.title}</h3> */}
      <Text
        id={`txt-bodyBaner-shareACar-content`}
        tag='h3'
        content={data[item.content || '']}
        className={`text-textMainColor text-ellipsis flex justify-start leading-[22.4px] mt-[30px] break-words w-1/2 lg:w-full text-justify lg:text-start `}
      />
      {/* <p className='text-textMainColor text-ellipsis flex justify-start leading-[22.4px] mt-[30px] break-words w-1/2 lg:w-full text-justify lg:text-start'>{item.content}</p> */}
    </div>
  )
}

export default BodyBanner
