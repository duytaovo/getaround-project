import React from 'react'


export interface IItem {
  title?:string
  content?:string
}
interface Props {
    classNameHeader?:string
    classNameContent?:string
    classNameTitle?:string
    item:IItem
}

const ContentSlider = ({classNameHeader,classNameTitle,classNameContent,item}: Props) => {
  return (
    <div>
      {/* <span className={`${classNameHeader} text-left flex justify-start text-base font-bold leading-3 mx-[24px] text-mainColor`}>EARN</span> */}
      <h2 className={`${classNameTitle} text-mainColor text-[52px] font-bold spacing tracking-tight	leading-[52px] text-left text-ellipsis`}>{item.title}</h2>
      <div>
        <p className={`${classNameContent} text-[#727272] flex flex-col flex-start leading-[22px] mt-7`}>
        {item.content}
        </p>
      </div>
    </div>
  )
}

export default ContentSlider
