import Slider from 'react-slick'
import 'slick-carousel/slick/slick-theme.css'
import 'slick-carousel/slick/slick.css'
import NextArrow from '../NextArrow'
import PrevArrow from '../PreArrow/PreArrow'
import { IItemSlider } from 'src/types/hosting_shareACar.type'
import CustomCardSlider from '../Card'
import getBreakpoint from 'src/helpers/getBreakpoint'

interface Props {
  numberItem?: number
  numberItemScroll?: number
  classNameContainer?: string
  data?: IItemSlider[]
  className?: string
  isTitle?: boolean
  isContent?: boolean
  isTime?: boolean
  classNameTitle?: string
  classNameContent?: string
  classNameTime?: string
  classNameImage?: string
  autoPlay?: boolean

  breakPoint: Array<number>

  breakPoint:Array<number>
  breakPointScroll:Array<number>
}
// breackPoint = {[1,1,2,2,3]}
export default function CustomSlider({
  numberItem,
  data,
  className,
  classNameContent,
  classNameContainer,
  classNameImage,
  classNameTime,
  classNameTitle,
  isContent,
  isTime,
  isTitle,
  autoPlay,

  breakPoint,
  breakPointScroll,

}: Props) {
  const breakpoints = getBreakpoint([1, 1, 2, 2, 3, 3])
  const settings = {
    speed: 2000,
    infinite: true,
    autoplay: autoPlay,
    slidesToShow: numberItem,
    autoplaySpeed: 3000,
    nextArrow: <NextArrow breakpoints={breakpoints} />,
    prevArrow: <PrevArrow breakpoints={breakpoints} />,
    responsive: [
      {
        breakpoint: 640,
        settings: {
          slidesToShow: breakPoint[0],
          slidesToScroll: breakPointScroll[0]
        }
      },
      {
        breakpoint: 800,
        settings: {
          slidesToShow: breakPoint[1],
          slidesToScroll: breakPointScroll[1]
        }
      },
      {
        breakpoint: 1289,
        settings: {
          slidesToShow: breakPoint[2],
          slidesToScroll: breakPointScroll[2]
        }
      },
      {
        breakpoint: 1920,
        settings: {
          slidesToShow: breakPoint[3],
          slidesToScroll: breakPointScroll[3]
        }
      }
    ]
  }

  return (
    <div className={classNameContainer + ' ' + 'px-2'}>
      <Slider {...settings}>
        {data?.map((item, index: number) => (
          <div
            key={item.id}
            className='
                     h-36 w-full
                  px-3 sm:h-36
                  sm:w-full md:h-36
                  md:w-1/2 xl:h-36
                  xl:w-1/3 2xl:h-36
                  2xl:w-1/3 
                  '
          >
            {' '}
            <CustomCardSlider
              classNameImage={classNameImage}
              classNameTitle={classNameTitle}
              isContent={isContent}
              isTime={isTime}
              isTitle={isTitle}
              item={item}
              classNameContent={classNameContent}
              classNameTime={classNameTime}
              className={className}
            />
          </div>
        ))}
      </Slider>
    </div>
  )
}
