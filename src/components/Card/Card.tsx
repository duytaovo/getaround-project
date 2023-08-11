import { Avatar, Card } from 'antd'
import { IItemSlider } from 'src/types/hosting_shareACar.type'
import { Image } from '../Edition/Image'
import { Text } from '../Edition/Text'
import { iDGenerator } from 'src/utils/idGenerator'
import { useAppSelector } from 'src/hooks/useRedux'

interface Props {
  item?: IItemSlider
  className?: string
  isTitle?: boolean
  isContent?: boolean
  isTime?: boolean
  classNameTitle?: string
  classNameContent?: string
  classNameTime?: string
  classNameImage?: string
  prefix?: string
  id?: number
}

const CustomCardSlider = ({
  item,
  className,
  isContent,
  isTitle,
  isTime,
  classNameContent = 'text-lg',
  classNameTime = ' text-sm leading-5',
  classNameTitle = ' text-sm leading-5',
  classNameImage = 'rounded-sm object-contain ',
  prefix,
  id
}: Props) => {
  const data = useAppSelector((state) => state.data)

  return (
    <div className={className}>
      <div className='w-full  flex justify-center'>
        <Image
          id={`${prefix}_img-card_slider_${id}`}
          className={classNameImage}
          src={data[item?.img || '']}
          alt='hosting-shareAcar'
        />
        {/* <img src={item?.img} alt='' className={classNameImage} /> */}
      </div>
      {/* <div> */}
      {isTitle == true && (
        <Text
          id={`${prefix}_txt-card_slider_title_${id}`}
          tag='div'
          content={data[item?.title || '']}
          className={`${classNameTitle} items-center flex `}
        />
      )}

      {isContent == true && (
        <Text
          id={`${prefix}_txt-card_slider_content_${id}`}
          tag='div'
          content={data[item?.content || '']}
          className={`${classNameContent} `}
        />
      )}
      {isTime == true && (
        <Text
          id={`${prefix}_txt-card_slider_time_${id}`}
          tag='div'
          content={data[item?.time || '']}
          className={`${classNameTime} `}
        />
      )}
      {/* </div> */}
      {/* <div>{isTitle == true && <div className={`${classNameTitle} items-center flex  `}>{item?.title}</div>}</div>
    {isContent == true && <div className={classNameContent}> {item?.content}</div>}
    {isTime == true && <div className={classNameTime}> {item?.time}</div>} */}
    </div>
  )
}

export default CustomCardSlider
