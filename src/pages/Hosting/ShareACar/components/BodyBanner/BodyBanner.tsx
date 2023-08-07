import React from 'react'
import { changeColorWhiteAndMain } from 'src/helpers/getBreakpoint'

interface IItem {
  title: string
  content: string
}

interface Props {
  item: IItem
}

export const item: IItem = {
  title: 'Digital key platform',
  content:
    'Experience a seamless, hands-off, and secure experience. Getaround Connect® hardware lets guests unlock your car from the app, and gives you data about the usage and location of your vehicle.'
}
const BodyBanner = ({item}: Props) => {
  return (
    <div className='bg-shareACar flex flex-start bg-cover rounded-lg flex-col justify-between leading-[22.4px] pt-[38px] px-[54px] pb-[54px]'>
      <h3 className='text-textMainColor text-[42px] font-bold tracking-tight leading-10 text-left'>{changeColorWhiteAndMain(item.title.split(' '))}</h3>
      <p className='text-textMainColor text-ellipsis flex justify-start leading-[22.4px] mt-[30px] break-words w-1/2 text-justify'>{item.content}</p>
    </div>
  )
}

export default BodyBanner
