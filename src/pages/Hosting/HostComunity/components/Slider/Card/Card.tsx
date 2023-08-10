import { Avatar, Card } from 'antd'
import { Link } from 'react-router-dom'
import { Image } from 'src/components/Edition/Image'
import { Text } from 'src/components/Edition/Text'
import { changeColorWhiteAndMain } from 'src/helpers/getBreakpoint'
import { IItemSliderHostComunity } from 'src/types/hosting_comunity.type '

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
      {/* <Image
        id={`'img-cardSlider_community'`}
        className={classNameImage}
        src={item?.img || ''}
        alt='hosting-shareAcar'
        style={{}}
      /> */}
      <Image
        id='img-idHIWCLogo'
        className={classNameImage}
        src={item?.img || ''}
        alt='Getaround Connect®'
      />
      {/* <img src={item?.img} alt='' className={classNameImage} /> */}
    </div>
    {isContent == true && (
      <Text
        id={`txt-cardSlider_community-content}`}
        tag='p'
        content={item?.content || ''}
        className={`${classNameContent}`}
      />
    )}
    {/* {isContent == true && <div className={classNameContent}> {item?.content}</div>} */}
    {isLink == true && (
      <Text id={`txt-cardSlider_community-url}`} tag='p' content={item?.url || ''} className={`${classNameURL}`} />
    )}
    {/* {isLink == true && (
      <div className={classNameURL}>
        <Link to={item?.url || ''}>{item?.url}</Link>
      </div>
    )} */}
  </div>
)

export default CardSlider
