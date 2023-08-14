import React, { ReactNode } from 'react'
import { Text } from 'src/components/Edition/Text'
import { changeColorBlackAndMain } from 'src/helpers/getBreakpoint'
import { useAppSelector } from 'src/hooks/useRedux'
import { IItemBodyBannerCard } from 'src/types/hosting_shareACar.type'

interface Props {
  icon?: ReactNode
  classNameTitle?: string
  classNameContent?: string
  item: IItemBodyBannerCard
  prefix: string
}

const BodyCard = ({ icon, classNameTitle, classNameContent, item, prefix }: Props) => {
  const data = useAppSelector((state) => state.data.data)

  return (
    <div className='bg-white rounded-2xl pt-[28px] px-[32px] pb-[32px] flex flex-col justify-between'>
      {icon}
      <div>
        <Text
          id={`${prefix}_txt-bodyCard-shareACar-title`}
          tag='h2'
          content={data[item.title || '']}
          className={`text-[28px] font-bold tracking-tight leading-8 text-left ${classNameTitle} `}
        />
        <Text
          id={`${prefix}_txt-bodyCard-shareACar-content`}
          tag='p'
          content={data[item.content || '']}
          className={`${classNameContent} font-bold  `}
        />
      </div>
      {/* <h2 className={`text-[28px] font-bold tracking-tight leading-8 text-left ${classNameTitle}`}>{changeColorBlackAndMain(item.title.split(' '))}</h2> */}
      {/* <p className={` ${classNameContent} font-bold 
      `}>{item.content}</p> */}
    </div>
  )
}

export default BodyCard
