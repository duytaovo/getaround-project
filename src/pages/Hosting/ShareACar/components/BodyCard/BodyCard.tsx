import React, { ReactNode } from 'react'
import { changeColorBlackAndMain } from 'src/helpers/getBreakpoint'

interface IItem {
  title:string
  content:string
}

interface Props {
  icon?:ReactNode
  classNameTitle?:string
  classNameContent?:string
  item:IItem
}

export const item1:IItem = {
  content:'Rest easy knowing that you are covered whenever your car is in a trip booked on Getaround.',
  title:"Insurance on every trip"
}

export const item2:IItem = {
  content:'Let our data figure out exactly how to price bookings, so you can maximize your earnings.',
  title:"Predictive pricing"
}

const BodyCard = ({icon,classNameTitle,classNameContent,item}: Props) => {
  return (
    <div className='bg-white rounded-2xl pt-[28px] px-[32px] pb-[32px]'>
      {icon}
      <h2 className={`text-[32px] font-bold tracking-tight leading-8 text-left ${classNameTitle}`}>{changeColorBlackAndMain(item.title.split(' '))}</h2>
      <p className={` ${classNameContent} font-bold break-words
      `}>{item.content}</p>
    </div>
  )
}

export default BodyCard
