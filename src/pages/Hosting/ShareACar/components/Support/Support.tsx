import React from 'react'
import { changeColorBlackAndMain, changeColorWhiteAndMain } from 'src/helpers/getBreakpoint'
import { IItemSupport } from 'src/types/hosting_shareACar.type'



interface Props {
  item:IItemSupport
}

export const itemSupport:IItemSupport = {
  title:"24/7 support, prioritized for hosts.",
  contentLeft:"Don't hesitate to contact us if you ever have a problem.",
  contentRight:"  Dedicated account managers for power hosts. As you grow your fleet, you'll get more personalized support from a Getaround team member assigned to you."
}

const Support = ({item}: Props) => {
  return (
    <div className='flex items-center justify-between bg-white text-black rounded-2xl pt-[28px] px-[32px] pb-[36px] lg:flex-col'>
      <div className='flex items-center justify-between w-2/3 lg:w-full'>
        <div>
          <img
            src='https://assets-global.website-files.com/5c16e90c8f6920b098f834e5/6328bdb541c77f294bfb6e1e_aboutga-247-support-p-500.png'
            alt=''
            className='w-[200px] h-[124px] rounded-full'
          />
        </div>
        <div className='p-3'>
          <h4 className='text-mainColor text-[24px] font-medium tracking-tight leading-7 text-left'>{changeColorBlackAndMain(item.title.split(' '))}</h4>
          <p className='font-medium leading-[22.4px] '>{item.contentLeft}</p>
        </div>
      </div>
      <div className='flex-1'>
        <p className='#727272 rounded-2xl flex flex-start leading-[22.4px] text-ellipsis text-justify mt-6'>
        {item.contentRight}
        </p>
      </div>
    </div>
  )
}

export default Support
