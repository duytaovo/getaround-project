import Slider from 'react-slick'
import 'slick-carousel/slick/slick-theme.css'
import 'slick-carousel/slick/slick.css'
import NextArrow from '../NextArrow'
import PrevArrow from '../PreArrow/PreArrow'
import { IItemCarousel, IItemSlider } from 'src/types/hosting_shareACar.type'
import getBreakpoint from 'src/helpers/getBreakpoint'
import './styles.css'
import Review from './component/Review'
import { Col, Row } from 'antd'
import { ReactNode } from 'react'
interface Props {
  numberItem: number
  numberItemScroll: number
  data: IItemCarousel[]
  className?: string
  classNameContent?: string
  classNameImage?: string
  isCustomDot?: boolean
  imgPerson?: string
  imgThumbnailRight?: string
  childrenImgPerson: ReactNode
}

export default function Carousel_Review({
  numberItem,
  numberItemScroll,
  data,
  className,
  classNameContent,
  classNameImage,
  imgThumbnailRight,
  childrenImgPerson
}: Props) {
  const breakpoints = getBreakpoint([1, 1, 2, 2, 3, 3])
  const settings = {
    speed: 500,
    infinite: true,
    autoplay: true,
    slidesToShow: numberItem,
    autoplaySpeed: 3000,
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
    <div className='flex justify-between'>
      <div className='w-1/2'>
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
      </div>
      <div className='w-1/2 flex flex-col justify-end'>
        <img
          src={`${
            imgThumbnailRight ||
            'https://assets-global.website-files.com/5c16e90c8f6920b098f834e5/63ea84651bd74658a3f37eac_ga-illustration-2.svg'
          }`}
          alt=''
          className={`${classNameImage} object-contain w-full ml-10 bg-white rounded-2xl`}
        />
      </div>
    </div>
  )
}
