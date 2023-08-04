import React from 'react'
import Button from 'src/components/Button'
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

export const CardBodyImg: React.FC = () => (
  <div className='w-[260px] h-[260px] text-black font-medium text-[20px] break-words hover:text-mainColor  bg-white flex items-center rounded-2xl border border-solid flex-col gap-3 justify-center leading-5 border-[#d2d2d2]'>
    <div>Offer & Bonus
        <span>
            <ArrowForwardIcon/>
        </span>
    </div>
    
    <img
      className='w-[140px] h-[140px] rounded-full border-solid border border-[#d2d2d2]'
      alt='cardImg'
      src='https://assets-global.website-files.com/5c16e90c8f6920b098f834e5/63f39125b1910bf39b1880a3_ga-illustration-20.svg'
    />
  </div>
)

export const CardBodyButton: React.FC = () => (
  <div className='w-[260px] h-[260px] text-mainColor font-medium text-[20px] break-words hover:text-black  bg-white flex items-center rounded-2xl border border-solid flex-col gap-3 justify-center leading-5 border-[#d2d2d2]'>
    <div>Login to view your host</div>
    <Button
      children={<span className='text-xl'>Share A Car</span>}
      isNext={true}
      className='w-[200px] hover:duration-500 duration-500 hover:transition-all  text-white h-[70px]  rounded-lg bg-[#3699d3] hover:bg-black  '
    ></Button>
  </div>
)
