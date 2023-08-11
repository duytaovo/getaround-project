import Slider from 'react-slick'
import 'slick-carousel/slick/slick-theme.css'
import 'slick-carousel/slick/slick.css'
import { IItemSlider } from 'src/types/hosting_shareACar.type'
import getBreakpoint from 'src/helpers/getBreakpoint'
import NextArrow from 'src/components/NextArrow'
import PrevArrow from 'src/components/PreArrow/PreArrow'
import CustomCardSlider from 'src/components/Card'
import CardSlider from './Card'
import { IItemSliderHostComunity } from 'src/types/hosting_comunity.type '

interface Props {
  numberItem?: number
  data: IItemSliderHostComunity[]
  className?: string
  isTitle?: boolean
  isContent?: boolean
  isLink?: boolean
  classNameContent?: string
  classNameImage?: string
  classNameURL?:string
  autoPlay?: boolean
  breakPoint: Array<number>
  breakPointScroll:Array<number>
}




export default function SliderHostComunity({
  numberItem,
  data,
  className,
  classNameContent,
  classNameImage,
  isContent,
  isLink,
  autoPlay,
  classNameURL,
  breakPoint,
  breakPointScroll
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
    <div className='bg-mainColor/20 rounded-md p-2 overflow-hidden object-cover h-[360px]'>
      <Slider {...settings}>
        {data?.map((item, index: number) => (
          <div
            key={index}
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
            <CardSlider
              classNameImage={classNameImage}
              isContent={isContent}
              item={item}
              isLink={isLink}
              classNameContent={classNameContent}
              className={className}
              classNameURL={classNameURL}
              id={index}
            />
          </div>
        ))}
      </Slider>
    </div>
  )
}
