import React, { ReactNode } from 'react'
import { Text } from 'src/components/Edition/Text'
import { changeColorBlackAndMain } from 'src/helpers/getBreakpoint'
import { IItemBodyBannerCard } from 'src/types/hosting_shareACar.type'
import { iDGenerator } from 'src/utils/idGenerator'


interface Props {
  icon?:ReactNode
  classNameTitle?:string
  classNameContent?:string
  item:IItemBodyBannerCard
}



const BodyCard = ({icon,classNameTitle,classNameContent,item}: Props) => {
  return (
    <div className='bg-white rounded-2xl pt-[28px] px-[32px] pb-[32px]'>
      {icon}
      <Text
        id={`txt-bodyCard-shareACar-title`}
        tag='h2'
        content={item.title|| ''}
        className={`text-[28px] font-bold tracking-tight leading-8 text-left ${classNameTitle} `}
      />
      <Text
        id={`txt-bodyCard-shareACar-content`}
        tag='p'
        content={item.content|| ''}
        className={`${classNameContent} font-bold  `}
      />
      {/* <h2 className={`text-[28px] font-bold tracking-tight leading-8 text-left ${classNameTitle}`}>{changeColorBlackAndMain(item.title.split(' '))}</h2> */}
      {/* <p className={` ${classNameContent} font-bold 
      `}>{item.content}</p> */}
    </div>
  )
}

export default BodyCard
