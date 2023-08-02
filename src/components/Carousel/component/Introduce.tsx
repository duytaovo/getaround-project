import React from 'react'
import { IItemCarousel } from 'src/types/utils.type'

interface Props {
  item?: IItemCarousel
  className?: string
  isTitle?: boolean
  isContent?: boolean
  isTime?: boolean
  classNameTitle?: string
  classNameContent?: string
  classNameHeader?: string
  classNameImage?: string
}

const Introduce = ({
  item,
  className,
  classNameContent = 'text-lg',
  classNameHeader = 'text-[#b3b3b3] text-sm leading-5',
  classNameTitle = 'text-[#b3b3b3] text-sm leading-5',
  classNameImage = 'rounded-sm object-contain '
}: Props) => {
  return (
    <div className={`${className} flex  flex-start`}>
      <div>
        <img src={item?.img} alt='' className={`${classNameImage} w-[410px] h-[290px] rounded-sm`}/>
      </div>
      <div className='flex  justify-around flex-col h-[260px] w-[444px] m-[15px]'>
        <span className={`${classNameHeader} flex justify-start leading-[13px] font-bold uppercase text-mainColor text-[11px]`}>{item?.header}</span>
        <div className={`${classNameTitle} font-bold text-black leading-[32px] text-[32px]`}>{item?.title}</div>
        <p className={`${classNameContent} text-[#727272] flex flex-start align-left wrap font-medium flex-column leading-[22px]`}>{item?.content}</p>
      </div>
    </div>
  )
}

export default Introduce
