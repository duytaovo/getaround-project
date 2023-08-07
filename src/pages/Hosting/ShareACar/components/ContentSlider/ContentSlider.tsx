import React from 'react'
import {  changeColorBlackAndMain, changeColorWhiteAndMain } from 'src/helpers/getBreakpoint'
import { IItemContentSlider } from 'src/types/hoisting_shareACar.type'



interface Props {
    classNameHeader?:string
    classNameContent?:string
    classNameTitle?:string
    item:IItemContentSlider
}

const ContentSlider = ({classNameHeader,classNameTitle,classNameContent,item}: Props) => {
  const _title = item.title?.split(' ');

  return (
    <div>
      {/* <span className={`${classNameHeader} text-left flex justify-start text-base font-bold leading-3 mx-[24px] text-mainColor`}>EARN</span> */}
      <h2 className={` text-mainColor text-[52px] font-medium spacing tracking-tight	leading-[52px] text-left text-ellipsis ${classNameTitle}`}>{changeColorWhiteAndMain(_title)}</h2>
      <div>
        <p className={`${classNameContent} text-[#727272] text-justify flex flex-col flex-start leading-[22px] mt-7`}>
        {item.content}
        </p>
      </div>
    </div>
  )
}

export default ContentSlider
