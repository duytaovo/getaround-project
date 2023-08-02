import Slider from 'react-slick'
import 'slick-carousel/slick/slick-theme.css'
import 'slick-carousel/slick/slick.css'
import NextArrow from '../NextArrow'
import PrevArrow from '../PreArrow/PreArrow'
import { IItemCarousel, IItemSlider } from 'src/types/utils.type'
import getBreakpoint from 'src/helpers/getBreakpoint'
import './styles.css'
import Introduce from './component/Introduce'
import Review from './component/Review'
import { Col, Row } from 'antd'
interface Props {
  numberItem?: number
  numberItemScroll?: number
  data?: IItemCarousel[]
  className?: string
  isTitle?: boolean
  isContent?: boolean
  isTime?: boolean
  classNameTitle?: string
  classNameContent?: string
  classNameHeader?: string
  classNameImage?: string
  isCustomDot?: boolean
}

export default function Carousel_Introduce({
  numberItem,
  numberItemScroll,
  data,
  className,
  classNameContent,
  classNameImage,
  classNameHeader,
  classNameTitle,
  isContent,
  isTime,
  isTitle
}: Props) {
  const breakpoints = getBreakpoint([1, 1, 2, 2, 3, 3])
  const settings = {
    speed: 500,
    infinite: true,
    autoplay: true,
    slidesToShow: numberItem,
    autoplaySpeed: 2000,
    dots: true,
    dotsClass: `${'custom-dots'}`,
    nextArrow: <NextArrow breakpoints={breakpoints} />,
    prevArrow: <PrevArrow breakpoints={breakpoints} />,
    responsive: [
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 1289,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2
        }
      },
      {
        breakpoint: 1920,
        settings: {
          slidesToShow: numberItem,
          slidesToScroll: numberItemScroll
        }
      }
    ]
  }

  return (
    <div className=''>
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
            <Introduce item={item} classNameImage={classNameImage} classNameHeader={classNameHeader} classNameTitle={classNameTitle} classNameContent={classNameContent} className={className} />

          </div>
        ))}
      </Slider>
    </div>
  )
}