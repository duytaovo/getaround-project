import { Icon, IconButton } from '@mui/material'
import { IItemCarousel } from 'src/types/hosting_shareACar.type'
import DriveEtaIcon from '@mui/icons-material/DriveEta'
import ArrowDropDownOutlinedIcon from '@mui/icons-material/ArrowDropDownOutlined'
import FaceOutlinedIcon from '@mui/icons-material/FaceOutlined'
import '../styles.css'
import { ReactNode } from 'react'
import { Image } from 'src/components/Edition/Image'
import { Text } from 'src/components/Edition/Text'
interface Props {
  item?: IItemCarousel
  className?: string
  classNameContent?: string
}

const Review = ({
  item,
  className,
  classNameContent = 'text-lg text-[#727272] flex flex-start align-left wrap flex-column leading-[22px]'
}: Props) => {
  return (
    <div className={`${className}  mt-10 flex flex-col p-5 rounded-2xl`}>
      <div className='rounded-lg bg-white p-4 pr-0 shadow-md'>
        {/* <Image
          id={`'img-card_review'`}
          className={''}
          src={
            `${
              item?.img ||
              'https://assets-global.website-files.com/5c16e90c8f6920b098f834e5/6298f6676a63876851e1fac4_quote.svg'
            }` || ''
          }
          alt='hosting-shareAcar'
        /> */}
        <img
          src={`${
            item?.img ||
            'https://assets-global.website-files.com/5c16e90c8f6920b098f834e5/6298f6676a63876851e1fac4_quote.svg'
          }`}
          alt=''
        />
        {/* <Text
          id={`review-shareAcar-content`}
          tag='p'
          content={item?.content || ''}
          className={`${classNameContent} w-[70%] text-justify text-ellipsis overflow-hidden break-words rounded-lg  relative  text-[#727171] p-4`}
        /> */}
        <p
          className={`${classNameContent} w-[70%] text-justify text-ellipsis overflow-hidden break-words rounded-lg  relative  text-[#727171] p-4 `}
        >
          {item?.content}
        </p>
      </div>
      {/* <span className='arrow-up'></span> */}
      <ArrowDropDownOutlinedIcon
        className=' bottom-0  translate-x-6 -translate-y-[25px] text-white'
        sx={{
          fontSize: '60px'
        }}
      />
      <div style={{ transform: 'translate(20px,-40px)' }} className='flex items-center text-white'>
        {/* <FaceOutlinedIcon className='' sx={{
              fontSize:'50px',
              // width:'150px',
              
            }}/> */}
        {item?.childrenImgPersong}
        {/* <Text
          id={`review-shareAcar-name`}
          tag='span'
          content={item?.name || ''}
          className={`ml-2`}
        /> */}
        <span className='ml-2'>{item?.name || 'My name'}</span>
      </div>
    </div>
  )
}

export default Review
