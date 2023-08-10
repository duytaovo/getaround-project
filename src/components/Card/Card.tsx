import { Avatar, Card } from 'antd'
import { IItemSlider } from 'src/types/hosting_shareACar.type'
import { Image } from '../Edition/Image'
import { Text } from '../Edition/Text'
import { iDGenerator } from 'src/utils/idGenerator'

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
  classNameImage = 'rounded-sm object-contain '
}: Props) => (
  <div className={className}>
    <div className='w-full h-[70%] flex justify-center'>
      <Image id={`'img-card_slider'`}  className={classNameImage} src={item?.img || ''} alt='hosting-shareAcar' />
      {/* <img src={item?.img} alt='' className={classNameImage} /> */}
    </div>
      {/* <div> */}
        {isTitle == true && (
          <Text
            id={`txt-card_slider_title`} 
            tag='div'
            content={item?.title || ''}
            className={`${classNameTitle} items-center flex `}
          />
        )}

        {isContent == true && (
          <Text id={`txt-card_slider_content`}  tag='div' content={item?.content || ''} className={`${classNameContent} `} />
        )}
        {isTime == true && 
          <Text id={`txt-card_slider_time`}  tag='div' content={item?.time || ''} className={`${classNameTime} `} />
        }
      {/* </div> */}
    {/* <div>{isTitle == true && <div className={`${classNameTitle} items-center flex  `}>{item?.title}</div>}</div>
    {isContent == true && <div className={classNameContent}> {item?.content}</div>}
    {isTime == true && <div className={classNameTime}> {item?.time}</div>} */}
  </div>
)

export default CustomCardSlider
