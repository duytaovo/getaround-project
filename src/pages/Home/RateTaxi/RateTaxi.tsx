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
export default function RateTaxi({
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
          <div className='col-auto'>
            <div className='taxi-item'>
              <div className='taxi-item_img'>
                <img
                  src='https://vcdn-vnexpress.vnecdn.net/2020/07/01/Volvo-XC40-1-3708-1593572980.jpg'
                  alt='service image'
                  style={{ width: '200px', height: '150px' }}
                />
              </div>
              <h3 className='taxi-item_title'>
                <a href='taxi-details.html'>BMW X6 2030</a>
              </h3>
              <p className='taxi-item_subtitle'>$0.88/km</p>
              <div className='taxi-item_feature'>
                <span>
                  <img src='assets/img/icon/taxi_f_2_1.svg' alt='' />
                  Passengers
                </span>
                <span className='taxi-item_info'>4</span>
              </div>
              <div className='taxi-item_feature'>
                <span>
                  <img src='assets/img/icon/taxi_f_2_2.svg' alt='' />
                  Luggage's:
                </span>
                <span className='taxi-item_info'>2</span>
              </div>
              <div className='taxi-item_feature'>
                <span>
                  <img src='assets/img/icon/taxi_f_2_3.svg' alt='' />
                  Base Rate:
                </span>
                <span className='taxi-item_info'>$10.50</span>
              </div>

              <div className='taxi-item_feature'>
                <span>
                  <img src='assets/img/icon/taxi_f_2_4.svg' alt='' />
                  Air Conditioner:
                </span>
                <span className='taxi-item_info'>yes</span>
              </div>
              <a href='taxi-details.html' className='th-btn fw-btn'>
                book Now Taxi<i className='fa-regular fa-arrow-right ms-2'></i>
              </a>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  )
}
