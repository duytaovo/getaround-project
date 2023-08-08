import React from 'react'
import { IItemGetAroundYourBack } from 'src/types/hosting_shareACar.type'


type Props = {
    item:IItemGetAroundYourBack
}

const GetAroundYourBack = ({item}: Props) => {
  return (
    <div>
      <span className='text-mainColor text-sm font-medium flex justify-center mb-2'>{item.title}</span>
      <div className='text-[32px] font-medium tracking-tight leading-8 text-center mb-5'>{item.content}</div>
    </div>
  )
}

export default GetAroundYourBack
