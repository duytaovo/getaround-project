import React from 'react'
import { Text } from 'src/components/Edition/Text'
import { changeColorWhiteAndMain } from 'src/helpers/getBreakpoint'
import { IItemGetAroundYourBack } from 'src/types/hosting_shareACar.type'

type Props = {
  item: IItemGetAroundYourBack
}

const TopHostComunity = ({ item }: Props) => {
  return (
    <div>
      <div className='flex flex-col justify-center items-center text-center'>
        <Text
          id={`txt-topHost-Community-title`}
          tag='span'
          content={item.title || ''}
          className={`text-sm font-medium leading-4 text-center uppercase `}
        />
        {/* <span className='text-sm font-medium leading-4 text-center uppercase'>{item.title}</span> */}
        <Text
          id={`txt-topHost-Community-content`}
          tag='span'
          content={item.content || ''}
          className={`text-[58px] font-medium tracking-tight `}
        />
        {/* <span className='text-[58px] font-medium tracking-tight'>
          {changeColorWhiteAndMain(item?.content?.split(' '))}
        </span> */}
      </div>
    </div>
  )
}

export default TopHostComunity
