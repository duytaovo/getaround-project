import { Avatar, Card } from 'antd'
import { IItemSlider } from 'src/types/utils.type'

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
    <div>
      <img src={item?.img} alt='' className={classNameImage} />
    </div>
    <div>{isTitle == true && <div className={`${classNameTitle} items-center flex  `}>{item?.title}</div>}</div>
    {isContent == true && <div className={classNameContent}> {item?.content}</div>}
    {isTime == true && <div className={classNameTime}> {item?.time}</div>}
  </div>
)

export default CustomCardSlider
