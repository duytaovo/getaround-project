import React from 'react'
import { changeColorWhiteAndMain } from 'src/helpers/getBreakpoint'
import { IItemBodyBannerCard } from 'src/types/hosting_shareACar.type'



interface Props {
  item: IItemBodyBannerCard
}


const BodyBanner = ({item}: Props) => {
  return (
    <div className='bg-shareACar object-cover flex flex-start bg-cover rounded-lg flex-col justify-between leading-[22.4px] pt-[38px] px-[54px] pb-[54px]'>
      <h3 className='text-textMainColor text-[42px] font-bold tracking-tight leading-10 text-left'>{changeColorWhiteAndMain(item.title.split(' '))}</h3>
      <p className='text-textMainColor text-ellipsis flex justify-start leading-[22.4px] mt-[30px] break-words w-1/2 lg:w-full text-justify lg:text-start'>{item.content}</p>
    </div>
  )
}

export default BodyBanner
