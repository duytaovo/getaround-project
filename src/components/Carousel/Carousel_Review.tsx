import Slider from 'react-slick'
import 'slick-carousel/slick/slick-theme.css'
import 'slick-carousel/slick/slick.css'
import NextArrow from '../NextArrow'
import PrevArrow from '../PreArrow/PreArrow'
import { IItemCarousel, IItemSlider } from 'src/types/utils.type'
import getBreakpoint from 'src/helpers/getBreakpoint'
import './styles.css'
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

export default function Carousel_Review({
  numberItem,
  numberItemScroll,
  data,
  className,
  classNameContent,
  classNameImage
}: Props) {
  const breakpoints = getBreakpoint([1, 1, 2, 2, 3, 3])
  const settings = {
    speed: 500,
    infinite: true,
    autoplay: true,
    slidesToShow: numberItem,
    autoplaySpeed: 2000,
    dots: true,
    // dotsClass:`${'custom-dots'}`,
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
      <Row>
        <Col span={12}>
          <Slider {...settings}>
            {data?.map((item, index: number) => (
              <div
                key={item.id}
                className='
               
                  '
              >
                {' '}
                <Review item={item} classNameContent={classNameContent} className={className} />
              </div>
            ))}
          </Slider>
        </Col>
        <Col span={12}>
          <img
            src='https://assets-global.website-files.com/5c16e90c8f6920b098f834e5/63ea84651bd74658a3f37eac_ga-illustration-2.svg'
            alt=''
            className={`object-contain w-[347px] h-[400px] ${classNameImage}`}
          />
        </Col>
      </Row>
    </div>
  )
}
