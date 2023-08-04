import { Icon, IconButton } from '@mui/material'
import { IItemCarousel } from 'src/types/utils.type'
import DriveEtaIcon from '@mui/icons-material/DriveEta'
import ArrowDropDownOutlinedIcon from '@mui/icons-material/ArrowDropDownOutlined'
import FaceOutlinedIcon from '@mui/icons-material/FaceOutlined';
import '../styles.css'
interface Props {
  item?: IItemCarousel
  className?: string
  classNameContent?: string
}

const Review = ({
  item,
  className,
  classNameContent = 'text-lg text-[#727272] flex flex-start align-left wrap flex-column leading-[22px]',
}: Props) => {
  return (
    <div className={`${className} bg-white mt-10 flex flex-col p-10 ml-10 rounded-2xl`}>
      <div className='rounded-lg '>
        <p className={`${classNameContent} w-[70%] text-ellipsis overflow-hidden break-words rounded-sm  relative bg-mainBackGroundColor text-white shadow-md p-4`}>
          {item?.content}
        </p>
      </div>
      {/* <span className='arrow-up'></span> */}
        <ArrowDropDownOutlinedIcon className=' bottom-0  translate-x-6 -translate-y-[25px] text-[#1c2635]' sx={{
          fontSize:"60px",

        }} />
        <div style={{ transform: 'translate(20px,-40px)' }} className='flex items-center gap-1 text-black'>
            {/* <FaceOutlinedIcon className='' sx={{
              fontSize:'50px',
              // width:'150px',
              
            }}/> */}
            <img src="https://assets-global.website-files.com/5c16e90c8f6920b098f834e5/62a8da05550d5c48e19f1f2f_Trevor_Hero.jpg" className='w-[67px] h-[67px] rounded-full' alt="" />
          <span className=''>My Name</span>
      </div>
    </div>
  )
}

export default Review
