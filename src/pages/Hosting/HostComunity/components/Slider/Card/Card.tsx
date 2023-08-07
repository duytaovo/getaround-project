import { Avatar, Card } from 'antd'
import { Link } from 'react-router-dom'
import { changeColorWhiteAndMain } from 'src/helpers/getBreakpoint'
import { IItemSliderHostComunity } from 'src/types/hoisting_comunity.type '

interface Props {
  item?: IItemSliderHostComunity
  className?: string
  isContent?: boolean
  isLink?: boolean
  classNameTitle?: string
  classNameContent?: string
  classNameURL?: string
  classNameImage?: string
}

const CardSlider = ({
  item,
  className,
  isContent = true,
  isLink = true,
  classNameContent = 'text-base leading-5 hover:text-mainColor px-4 py-2 duration:500 cursor-pointer transition-all',
  classNameURL = ' text-sm leading-5 text-mainColor hover:text-white px-4 py-2 duration:500 cursor-pointer transition-all',
  classNameImage = 'rounded-2xl object-contain w-[324px] h-[300px] mb-3'
}: Props) => (
  <div className={className}>
    <div>
      <img src={item?.img} alt='' className={classNameImage} />
    </div>
    {isContent == true && <div className={classNameContent}> {item?.content}</div>}
    {isLink == true && (
      <div className={classNameURL}>
        <Link to={item?.url || ''}>
          {item?.url}
        </Link>
      </div>
    )}
  </div>
)

export default CardSlider
