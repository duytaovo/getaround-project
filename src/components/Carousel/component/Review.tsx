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
    <div className={`${className} mt-10 flex flex-col p-10 ml-10 rounded-sm`}>
      <div className=''>
        <p className={`${classNameContent} w-[70%] text-ellipsis overflow-hidden break-words rounded-sm  relative bg-white shadow-md p-4`}>
          {item?.content}
        </p>
      </div>
      {/* <span className='arrow-up'></span> */}
        <ArrowDropDownOutlinedIcon className=' bottom-0  translate-x-6 -translate-y-[23px] text-blue-200' sx={{
          fontSize:"60px",

        }} />
        <div style={{ transform: 'translate(20px,-40px)' }} className='flex items-center gap-1'>
            <FaceOutlinedIcon className='' sx={{
              // fontSize:'50px',
              // width:'150px'

            }}/>
          <span className=''>Name</span>
      </div>
    </div>
  )
}

export default Review
