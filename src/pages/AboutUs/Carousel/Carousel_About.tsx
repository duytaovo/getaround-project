import { Icon, IconButton } from '@mui/material'
import { IItemCarousel } from 'src/types/aboutUs/aboutus'
import { Text } from 'src/components/Edition/Text'
import { Image } from 'src/components/Edition/Image'
import DriveEtaIcon from '@mui/icons-material/DriveEta'
import ArrowDropDownOutlinedIcon from '@mui/icons-material/ArrowDropDownOutlined'
import FaceOutlinedIcon from '@mui/icons-material/FaceOutlined'
import '../styles.css'
import { ReactNode } from 'react'
import { useAppSelector } from 'src/hooks/useRedux'
import { useDispatch, useSelector } from 'react-redux'
import { RootState } from 'src/store/store'

import { Link } from 'react-router-dom'
interface Props {
  item: IItemCarousel
  className?: string
  classNameContent?: string
}
const Carousel_About = ({
  item,
  className,
  classNameContent = 'text-lg text-[#727272] flex flex-start align-left wrap flex-column leading-[22px]'
}: Props) => {
  const { ExploreAboutUs, ConnectedCarSharingR, CarouselNewsRoom, TitleCarouselAboutUs } = useSelector(
    (state: RootState) => state.AboutUs
  )
  const data = useAppSelector((state) => state.data)
  const dispatch = useDispatch()
  return (
    <div className={`${className} `}>
      <div className='w-auto h-auto bg-white rounded-2xl'>
        <div className='block px-8 py-10'>
          <Text
            id={data[item.title]}
            tag='h1'
            content={data[item.title] || ''}
            className='text-black text-[20px] font-semibold'
          />
          {/* <h1 className='text-black text-[20px] font-semibold'>
            Getaround Announces Restructuring Plan to Reduce Costs and Streamline Operations
          </h1> */}
          <Text
            id={data[item.date]}
            tag='h2'
            content={data[item.date] || ''}
            className='text-[10px] font-normal text-[#000000] my-4'
          />
          {/* <h2 className='text-[10px] font-normal text-[#000000] my-4'>February 22, 2023</h2> */}
          <Text
            id={data[item.description]}
            tag='h3'
            content={data[item.description] || ''}
            className='text-[14px] font-sans text-[#727272] my-4'
          />
          {/* <h3 className='text-[14px] font-sans text-[#727272] my-4'>
            roactive actions will optimize Getaround's cost tructure in response to near-term macroeconomic ncertainty,
            while maintaining focus on innovation and ustainable, profitable growth stimates cost savings of $25 million
            - $30 million on nnualized run-rate basis
          </h3> */}
          <Link
            to={data[item.linkTo]}
            className='text-[14px] font-semibold text-mainColor mt-3 underline hover:no-underline hover:text-black duration-100'
          >
            Read more
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Carousel_About
