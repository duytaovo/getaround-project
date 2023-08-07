import { Icon, IconButton } from '@mui/material'
import { IItemCarousel } from 'src/types/hoisting_shareACar.type'
import DriveEtaIcon from '@mui/icons-material/DriveEta'
import ArrowDropDownOutlinedIcon from '@mui/icons-material/ArrowDropDownOutlined'
import FaceOutlinedIcon from '@mui/icons-material/FaceOutlined'
import '../styles.css'
import { ReactNode } from 'react'
interface Props {
  item?: IItemCarousel
  className?: string
  classNameContent?: string
}
import { Link } from 'react-router-dom'
const Carousel_About = ({
  item,
  className,
  classNameContent = 'text-lg text-[#727272] flex flex-start align-left wrap flex-column leading-[22px]'
}: Props) => {
  return (
    <div className={`${className} `}>
      <div className='w-auto h-auto bg-white rounded-2xl'>
        <div className='block px-8 py-10'>
          <h1 className='text-black text-[20px] font-semibold'>
            Getaround Announces Restructuring Plan to Reduce Costs and Streamline Operations
          </h1>
          <h2 className='text-[10px] font-normal text-[#000000] my-4'>February 22, 2023</h2>
          <h3 className='text-[14px] font-sans text-[#727272] my-4'>
            roactive actions will optimize Getaround's cost tructure in response to near-term macroeconomic ncertainty,
            while maintaining focus on innovation and ustainable, profitable growth stimates cost savings of $25 million
            - $30 million on nnualized run-rate basis
          </h3>
          <Link
            to='/'
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
