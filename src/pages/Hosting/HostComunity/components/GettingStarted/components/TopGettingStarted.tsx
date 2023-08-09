import React from 'react'
import { IItemTopGettingStarted } from 'src/types/hosting_comunity.type '

type Props = {
    item:IItemTopGettingStarted
}

const TopGettingStarted = ({item}: Props) => {
  return (
    <div>
      <div className='mb-mbGettingStarted gap-10'>
        <span className='text-mainColor lg:text-center lg:mb-2  text-[11px] font-medium leading-3 text-center uppercase mb-mbGettingStarted'>
        {item.topHeader}
        </span>
        <strong className='flex text-textSizeHostingTitle font-medium tracking-tight  leading-8 text-left mb-mbGettingStarted mt-[29px]'>
          {item.title}
        </strong>
        <p className='text-textCustom text-base flex flex-start leading-[22.4px] line-clamp-3 text-ellipsis'>{item.content}</p>
      </div>
    </div>
  )
}

export default TopGettingStarted
