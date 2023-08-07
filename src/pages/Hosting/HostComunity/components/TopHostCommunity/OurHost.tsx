import React from 'react'
import { changeColorWhiteAndMain } from 'src/helpers/getBreakpoint'
import { IItemGetAroundYourBack } from 'src/types/hosting_shareACar.type'

type Props = {
  item: IItemGetAroundYourBack
}

const TopHostComunity = ({ item }: Props) => {
  return (
    <div>
      <div className='flex flex-col justify-center items-center'>
        <span className='text-sm font-medium leading-4 text-center uppercase'>{item.title}</span>
        <span className='text-[58px] font-medium tracking-tight'>{changeColorWhiteAndMain(item?.content?.split(' '))}</span>
      </div>
    </div>
  )
}

export default TopHostComunity
