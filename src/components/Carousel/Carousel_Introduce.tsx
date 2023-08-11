import Slider from 'react-slick'
import 'slick-carousel/slick/slick-theme.css'
import 'slick-carousel/slick/slick.css'
import NextArrow from '../NextArrow'
import PrevArrow from '../PreArrow/PreArrow'
import { IItemCarousel, IItemSlider } from 'src/types/hosting_shareACar.type'
import getBreakpoint from 'src/helpers/getBreakpoint'
import './styles.css'
import Introduce from './component/Introduce'

interface Props {
  numberItem?: number
  numberItemScroll?: number
  data?: IItemCarousel[]
  className?: string
  classNameTitle?: string
  classNameContent?: string
  classNameHeader?: string
  classNameImage?: string
  isCustomDot?: boolean
  prefix:string
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
  prefix
}: Props) {
  const breakpoints = getBreakpoint([1, 1, 2, 2, 3, 3])
  const settings = {
    speed: 1000,
    infinite: true,
    autoplay: true,
    slidesToShow: numberItem,
    autoplaySpeed: 5000,
    dots: true,
    // dotsClass: `${'custom-dots'}`,
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
          slidesToShow: 1,
          slidesToScroll: 1
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
                 w-full px-3 sm:w-full md:w-1/2 xl:w-1/3 2xl:w-1/3 sm:max-h-[600px]'
          >
            {' '}
            <Introduce
              item={item}
              classNameImage={classNameImage}
              classNameHeader={classNameHeader}
              classNameTitle={classNameTitle}
              classNameContent={classNameContent}
              className={className}
              id={index}
              prefix={prefix}
            />
          </div>
        ))}
      </Slider>
    </div>
  )
}
