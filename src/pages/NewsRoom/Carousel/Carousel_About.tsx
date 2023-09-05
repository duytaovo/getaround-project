import { Icon, IconButton } from '@mui/material'
import { IItemCarousel } from 'src/types/aboutUs/aboutus'
import DriveEtaIcon from '@mui/icons-material/DriveEta'
import ArrowDropDownOutlinedIcon from '@mui/icons-material/ArrowDropDownOutlined'
import FaceOutlinedIcon from '@mui/icons-material/FaceOutlined'
import { Text } from 'src/components/Edition/Text'
import { ISelectItemsCarouselNewsRoom } from 'src/types/aboutUs/CarouselNewsRoom'
import { Image } from 'src/components/Edition/Image'
import { useAppSelector } from 'src/hooks/useRedux'
import { useDispatch, useSelector } from 'react-redux'
import { RootState } from 'src/store/store'
import '../styles.css'
import { ReactNode } from 'react'
interface Props {
  item: ISelectItemsCarouselNewsRoom
  className?: string
  classNameContent?: string
}
import { Link } from 'react-router-dom'
const Carousel_About = ({
  item,
  className,
  classNameContent = 'text-lg text-[#727272] flex flex-start align-left wrap flex-column leading-[22px]'
}: Props) => {
  const { CarouselNewsRoom, TitleCarouselNewsRoom } = useSelector((state: RootState) => state.newsroom)
  const data = useAppSelector((state) => state.data.data)
  const dispatch = useDispatch()
  return (
    <div className={`${className} `}>
      <div className='w-auto h-auto bg-white rounded-2xl'>
        <div className='block px-8 py-10'>
          <Text
            id={item.title}
            tag='h2'
            content={data[item.title] || ''}
            className='text-[10px] font-normal text-[#000000] my-4'
          />
          {/* <h2 className='text-[10px] font-normal text-[#000000] my-4'>{item?.date}</h2> */}
          <Text
            id={item.description}
            tag='h3'
            content={data[item.description] || ''}
            className='text-[14px] font-sans text-[#727272] my-4'
          />
          {/* <h3 className='text-[14px] font-sans text-[#727272] my-4'>{item?.description}</h3> */}
          <Text
            id={item.link}
            tag='h3'
            content={data[item.link] || 'Xem thêm...'}
            className='text-[14px] font-semibold text-mainColor mt-3 underline hover:no-underline hover:text-black duration-100'
          />
          {/* <Link
            to={data[item.linkto]}
            className='text-[14px] font-semibold text-mainColor mt-3 underline hover:no-underline hover:text-black duration-100'
          >
            Read more
          </Link> */}
        </div>
      </div>
    </div>
  )
}

export default Carousel_About
