import { Avatar, Card } from 'antd'
import { Link } from 'react-router-dom'
import { Image } from 'src/components/Edition/Image'
import { Text } from 'src/components/Edition/Text'
import { changeColorWhiteAndMain } from 'src/helpers/getBreakpoint'
import { useAppSelector } from 'src/hooks/useRedux'
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
  id: number
}

const CardSlider = ({
  id,
  item,
  className,
  isContent = true,
  isLink = true,
  classNameContent = 'text-base leading-5 hover:text-mainColor px-4 py-2 duration:500 cursor-pointer transition-all',
  classNameURL = ' text-sm leading-5 text-mainColor hover:text-white px-4 py-2 duration:500 cursor-pointer transition-all',
  classNameImage = 'rounded-2xl object-contain w-[324px] h-[300px] mb-3'
}: Props) => {
  const data = useAppSelector((state) => state.data.data)
  return (
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
          id={`img_sliderTopComunity_${id}`}
          className={classNameImage}
          src={data[item?.img || '']}
          alt='Getaround Connect®'
        />
        {/* <img src={item?.img} alt='' className={classNameImage} /> */}
      </div>
      {isContent == true && (
        <Text
          id={`txt_cardSlider_community_content_${id}`}
          tag='p'
          content={data[item?.content || '']}
          className={`${classNameContent}`}
        />
      )}
      {/* {isContent == true && <div className={classNameContent}> {item?.content}</div>} */}
      {isLink == true && (
        <Text
          id={`txt_cardSlider_community_url_${id}`}
          tag='p'
          content={data[item?.url || '']}
          className={`${classNameURL}`}
        />
      )}
      {/* {isLink == true && (
      <div className={classNameURL}>
        <Link to={item?.url || ''}>{item?.url}</Link>
      </div>
    )} */}
    </div>
  )
}

export default CardSlider
