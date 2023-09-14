import Slider from 'react-slick'
import 'slick-carousel/slick/slick-theme.css'
import 'slick-carousel/slick/slick.css'
import NextArrow from 'src/components/NextArrow/NextArrow'
import PrevArrow from 'src/components/PreArrow/PreArrow'
import { IItemSlider } from 'src/types/hosting_shareACar.type'

import getBreakpoint from 'src/helpers/getBreakpoint'
import CardSlide from 'src/pages/Home/CardSlide/CardSlide'
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
  breakPointScroll: Array<number>
  prefix?: string
  speed?: number
}
// breackPoint = {[1,1,2,2,3]}
export default function SlideBookCar({
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
  prefix,
  breakPoint,
  breakPointScroll,
  speed = 1000
}: Props) {
  const breakpoints = getBreakpoint([1, 1, 2, 2, 3, 3])
  const settings = {
    speed: speed,
    infinite: true,
    autoplay: autoPlay,
    slidesToShow: numberItem,
    autoplaySpeed: speed,
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
          <div className='col-md-6 col-lg-4'>
            <div className='service-list'>
              <div className='service-list_icon'>
                <img
                  src='https://png.pngtree.com/png-clipart/20210311/original/pngtree-woman-s-bag-icon-design-template-illustration-png-image_5997192.png'
                  alt='service Icon'
                  style={{ height: '30px', width: '30px' }}
                />
              </div>
              <div className='service-list_content'>
                <span className='service-list_text'>Available Now</span>
                <h3 className='service-list_title'>STANDARD TAXI</h3>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  )
}
