import React from 'react'
import { Text } from 'src/components/Edition/Text'
import { changeColorBlackAndMain, changeColorWhiteAndMain } from 'src/helpers/getBreakpoint'
import { useAppSelector } from 'src/hooks/useRedux'
import { IItemContentSlider } from 'src/types/hosting_shareACar.type'

interface Props {
  classNameHeader?: string
  classNameContent?: string
  classNameTitle?: string
  item: IItemContentSlider
}

const ContentSlider = ({ classNameHeader, classNameTitle, classNameContent, item }: Props) => {
  const _title = item.title?.split(' ')
  const data = useAppSelector((state) => state.data.data)

  return (
    <div>
      {/* <span className={`${classNameHeader} text-left mb-2 flex justify-start text-base font-medium leading-3  text-mainColor`}>{item.headerTitle}</span> */}
      <Text
        id={`txt-contentSlider-shareACar-headerTitle`}
        tag='span'
        content={data[item.headerTitle || '']}
        className={`${classNameHeader} text-left mb-2 flex justify-start text-base font-medium leading-3  text-mainColor `}
      />
      <Text
        id={`txt-contentSlider-shareACar-title`}
        tag='h2'
        content={data[item.title || '']}
        className={`${classNameTitle} text-mainColor text-[52px] font-medium spacing tracking-tight	leading-[52px] text-left text-ellipsis `}
      />
      {/* <h2 className={` text-mainColor text-[52px] font-medium spacing tracking-tight	leading-[52px] text-left text-ellipsis ${classNameTitle}`}>{changeColorWhiteAndMain(_title)}</h2> */}
      <div>
        <Text
          id={`txt-contentSlider-shareACar-content`}
          tag='p'
          content={data[item.content || '']}
          className={`${classNameContent} text-[#727272] text-justify flex flex-col flex-start leading-[22px] mt-7 md:mt-2 `}
        />
        {/* <p
          className={`${classNameContent} text-[#727272] text-justify flex flex-col flex-start leading-[22px] mt-7 md:mt-2`}
        >
          {item.content}
        </p> */}
      </div>
    </div>
  )
}

export default ContentSlider
