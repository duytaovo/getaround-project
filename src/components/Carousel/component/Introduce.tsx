import React from 'react'
import { Image } from 'src/components/Edition/Image'
import { Text } from 'src/components/Edition/Text'
import { useAppSelector } from 'src/hooks/useRedux'
import { IItemCarousel } from 'src/types/hosting_shareACar.type'

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
  prefix: string
  id: number
}

const Introduce = ({
  item,
  className,
  classNameContent = 'text-lg',
  classNameHeader = 'text-[#b3b3b3] text-sm leading-5',
  classNameTitle = 'text-[#b3b3b3] text-sm leading-5',
  classNameImage = 'rounded-sm object-contain ',
  prefix,
  id
}: Props) => {
  const data = useAppSelector((state) => state.data.data)

  return (
    <div className={`flex  flex-start ${className}`}>
      <div>
        <Image
          id={`${prefix}_imgCardCarousel_${id}`}
          className={`w-[410px] h-[290px] ${classNameImage}`}
          src={data[item?.img || '']}
          alt='hosting-shareAcar'
        />
        {/* <img src={data[item?.img || '']} alt='' className={`w-[410px] h-[290px] ${classNameImage}`} /> */}
      </div>
      <div className='flex justify-center flex-col h-[260px] w-fit m-[15px]  md:overflow-hidden p-6'>
        <Text
          id={`${prefix}_txtCardCarousel${id}`}
          tag='span'
          content={data[item?.header || '']}
          className={`flex justify-start leading-[13px] font-medium uppercase text-mainColor text-[11px] ${classNameHeader} `}
        />
        {/* <span
          className={`flex justify-start leading-[13px] font-medium uppercase text-mainColor text-[11px] ${classNameHeader} `}
        >
          
          {data[item?.header || '']}
        </span> */}
        <Text
          id={`${prefix}_txtCardCarouselTitle${id}`}
          tag='div'
          content={data[item?.title || '']}
          className={`font-medium text-black leading-[32px] text-[32px] ${classNameTitle} `}
        />
        {/* <div className={`font-medium text-black leading-[32px] text-[32px] ${classNameTitle} `}>{data[item?.title || '']}</div> */}
        <Text
          id={`${prefix}_txtCardCarouselContent${id}`}
          tag='p'
          content={data[item?.content || '']}
          className={`text-[#727272] flex flex-start align-left wrap font-medium flex-column leading-[22px] ${classNameContent}`}
        />
        {/* <p
          className={`text-[#727272] flex flex-start align-left wrap font-medium flex-column leading-[22px] ${classNameContent} `}
        >
          
          {data[item?.content || '']}
        </p> */}
      </div>
    </div>
  )
}

export default Introduce
