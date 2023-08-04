import Slider from 'react-slick'
import 'slick-carousel/slick/slick-theme.css'
import 'slick-carousel/slick/slick.css'
import { IItemSlider } from 'src/types/utils.type'
import getBreakpoint from 'src/helpers/getBreakpoint'
import NextArrow from 'src/components/NextArrow'
import PrevArrow from 'src/components/PreArrow/PreArrow'
import CustomCardSlider from 'src/components/Card'
import CardSlider from './Card'

interface Props {
  numberItem: number
  numberItemScroll: number
  data: IItemSliderHostComunity[]
  className?: string
  isTitle?: boolean
  isContent?: boolean
  isLink?: boolean
  classNameContent?: string
  classNameImage?: string
  classNameURL?:string
  autoPlay?: boolean
}

export interface IItemSliderHostComunity {
  id:number
  img: string
  content: string
  url: string
}

export const itemSliderHostComunity: IItemSliderHostComunity[] = [
  {
    id:1,
    img: 'https://assets-global.website-files.com/5c19140f997c250869180aa0/642c5727f0b7763cbb82c314_onboardbonus.png',
    content: 'Getaround was featured on Crackle TV’s newest season of Going From Broke.',
    url: 'Watch free episode'
  },
  {
    id:2,
    img: 'https://assets-global.website-files.com/5c19140f997c250869180aa0/642c5727f0b7763cbb82c314_onboardbonus.png',
    content: 'Getaround was featured on Crackle TV’s newest season of Going From Broke.',
    url: 'Watch free episode'
  },
  {
    id:3,
    img: 'https://assets-global.website-files.com/5c19140f997c250869180aa0/642c5727f0b7763cbb82c314_onboardbonus.png',
    content: 'Getaround was featured on Crackle TV’s newest season of Going From Broke.',
    url: 'Watch free episode'
  },
  {
    id:4,
    img: 'https://assets-global.website-files.com/5c19140f997c250869180aa0/642c5727f0b7763cbb82c314_onboardbonus.png',
    content: 'Getaround was featured on Crackle TV’s newest season of Going From Broke.',
    url: 'Watch free episode'
  }
]

export default function SliderHostComunity({
  numberItem,
  numberItemScroll,
  data,
  className,
  classNameContent,
  classNameImage,
  isContent,
  isLink,
  autoPlay,
  classNameURL
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
            />
          </div>
        ))}
      </Slider>
    </div>
  )
}
