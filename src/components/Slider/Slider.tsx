import Slider from 'react-slick'
import 'slick-carousel/slick/slick-theme.css'
import 'slick-carousel/slick/slick.css'
import NextArrow from '../NextArrow'
import PrevArrow from '../PreArrow/PreArrow'
import { IItemSlider } from 'src/types/hosting_shareACar.type'
import CustomCardSlider from '../Card'
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
          <div className='col-md-6 col-xl-4'>
            <div className='testi-item  wow fadeInUp'>
              <p className='testi-item_text'>
                “Proactively synthesize schemas before foster like leveraged expertise user friendly business low before
                open.”
              </p>
              <div className='testi-item_wrapper'>
                <div className='testi-item_profile'>
                  <div className='testi-item_img'>
                    <img
                      src='https://inkythuatso.com/uploads/images/2022/08/anh-lai-xe-o-to-inkythuatso-09-15-56-00.jpg'
                      alt='Avatar'
                      style={{ width: '50px', height: '50px' }}
                    />
                  </div>
                  <div className='media-body'>
                    <h3 className='testi-item_name'>David Smith</h3>
                    <p className='testi-item_desig'>Head Of Growth</p>
                  </div>
                </div>
                <div className='testi-item_quote'>
                  {' '}
                  <img
                    src='https://inkythuatso.com/uploads/images/2022/08/anh-lai-xe-o-to-inkythuatso-09-15-56-00.jpg'
                    alt='Avatar'
                    style={{ width: '50px', height: '50px' }}
                  />
                </div>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  )
}
