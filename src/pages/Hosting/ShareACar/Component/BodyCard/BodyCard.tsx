import React, { ReactNode } from 'react'

interface IItem {
  title:string
  content:string
}

interface Props {
  icon?:ReactNode
  classNameTitle?:string
  classNameContent?:string
}

const item:IItem = {
  content:'Let our data figure out exactly how to price bookings, so you can maximize your earnings.',
  title:"Predictive pricing"
}

const BodyCard = ({icon,classNameTitle,classNameContent}: Props) => {
  return (
    <div className='bg-white rounded-2xl p-4'>
      {icon}
      <h2 className={`text-[32px] font-bold tracking-tight leading-8 text-left ${classNameTitle}`}>{item.title}</h2>
      <p className={`font-bold ${classNameContent}`}>{item.content}</p>
    </div>
  )
}

export default BodyCard
