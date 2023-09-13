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
export default function UpdateNews({
  numberItem,
  numberItemScroll,
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
    <div className={classNameContainer + ' ' + 'px-2'}>
      <Slider {...settings}>
        {data?.map((item, index: number) => (
          <div className='col-auto mx-auto' style={{ background: 'black', marginLeft: '20px' }}>
            <img
              src='https://otomydinhthc.com/app/uploads/2021/04/Tuyen-tho-sua-chua-o-to-thang-04-2021.jpg'
              alt=''
              style={{ width: '90%' }}
            />
            <div style={{ marginTop: '10px', width: '90%' }}>
              <p style={{ color: '#3699d3', fontSize: '15px' }} className='uppercase'>
                TRANSPORT SERVICE
              </p>
              <h2 style={{ fontSize: '28px' }} className=' hover:text-[#3699d3] cursor-pointer'>
                Tensive quality vectors life through strategis
              </h2>
              <div style={{ display: 'flex' }}>
                <p style={{ marginRight: '10px' }}>March 16, 2023</p>
                <p>by Admin</p>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  )
}
