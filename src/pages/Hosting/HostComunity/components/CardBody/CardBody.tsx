import React from 'react'
import Button from 'src/components/Button'
import ArrowForwardIcon from '@mui/icons-material/ArrowForward'
import { Link } from 'react-router-dom'
import { ICardBody } from 'src/types/hoisting.type'



export const CardBodyImg = ({title,img}:ICardBody) => (
  <div className='w-[260px] h-[260px] text-black font-medium text-[20px] break-words hover:text-mainColor  bg-white flex items-center rounded-2xl border border-solid flex-col gap-3 justify-center leading-5 border-[#d2d2d2]'>
    <div>
     {title}
      <span>
        <ArrowForwardIcon />
      </span>
    </div>

    <img
      className='w-[140px] h-[140px] rounded-full border-solid border border-[#d2d2d2]'
      alt='cardImg'
      src={img}
    />
  </div>
)

export const CardBodyButton = () => (
  <div className='w-[260px] h-[260px] text-mainColor font-medium text-[20px] break-words hover:text-black  bg-white flex items-center rounded-2xl border border-solid flex-col gap-3 justify-center leading-5 border-[#d2d2d2]'>
    <div>Login to view your host</div>
    <Button
      children={<span className='text-xl'>Share A Car</span>}
      isNext={true}
      className='w-[200px] hover:duration-500 duration-500 hover:transition-all  text-white h-[70px]  rounded-lg bg-[#3699d3] hover:bg-black  '
    ></Button>
  </div>
)

export const CardBodyParnerDeal = ({title,content}:ICardBody) => (
  <div className='w-full h-[300px]   text-black font-medium text-[20px] break-words bg-white flex items-center rounded-2xl border border-solid flex-row justify-around px-10 leading-5 border-[#d2d2d2]'>
    <div className='w-1/2'>
      <img
        className='rounded-full border-solid border border-[#d2d2d2] w-[231px] h-[231px]'
        alt='cardImg'
        src='https://assets-global.website-files.com/5c16e90c8f6920b098f834e5/63f39125b1910bf39b1880a3_ga-illustration-20.svg'
      />
    </div>
    <div className='w-1/2 '>
      <strong className='text-[26px] font-medium leading-8 tracking-tight'>{title}</strong>
      <p className='py-5 text-lg gap-y-3 tracking-tight leading-6 xl'>
        As a Getaround host, you get access to exclusive deals and discounts with our entire network of partners.
      </p>
      <Button
        children={<span className='text-base'>Explore Offers</span>}
        isNext={true}
        className='w-[200px] hover:duration-500 duration-500 hover:transition-all  text-white h-[40px]  rounded-lg bg-[#3699d3] hover:bg-black  '
      ></Button>
    </div>
  </div>
)

export const CardBodyReferFriend = () => (
  <div className='flex flex-col items-start justify-center w-full h-[300px]   text-black font-medium text-[20px] break-words bg-white rounded-2xl border border-solid  px-10 leading-5 border-[#d2d2d2]'>
      <strong className='text-[26px] font-medium leading-8 tracking-tight'>Refer a friend, earn money</strong>
      <p className='py-5 text-lg gap-y-3 tracking-tight leading-6'>
        Earn even more when you refer a friend to host on Getaround.
      </p>
      <Link to={'/'} className='text-mainColor underline hover:text-black'>
        Share your referral link
      </Link>
  </div>
)
