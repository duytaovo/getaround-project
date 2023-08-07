import React from 'react'
import Button from 'src/components/Button'
import ArrowForwardIcon from '@mui/icons-material/ArrowForward'
import { Link } from 'react-router-dom'
import { IItemBodyBannerCard } from 'src/types/hoisting_shareACar.type'

interface PropsCardBodyImg {
  itemCardBodyImg:IItemBodyBannerCard
}

export const CardBodyImg = ({itemCardBodyImg}:PropsCardBodyImg) => (
  <div className='w-[260px] h-[260px] text-black font-medium text-[20px] break-words hover:text-mainColor  bg-white flex items-center rounded-2xl border border-solid flex-col gap-3 justify-center leading-5 border-[#d2d2d2]'>
    <div>
     {itemCardBodyImg.title}
      <span>
        <ArrowForwardIcon />
      </span>
    </div>

    <img
      className='w-[140px] h-[140px] rounded-full border-solid border border-[#d2d2d2]'
      alt='cardImg'
      src={itemCardBodyImg.img}
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

interface PropsCardBodyParnerDeal {
  itemCardBodyParnerDeal:IItemBodyBannerCard
}
export const CardBodyParnerDeal = ({itemCardBodyParnerDeal}:PropsCardBodyParnerDeal) => (
  <div className='w-full h-[300px]   text-black font-medium text-[20px] break-words bg-white flex items-center rounded-2xl border border-solid flex-row justify-around px-10 leading-5 border-[#d2d2d2]'>
    <div className='w-1/2'>
      <img
        className='rounded-full border-solid border border-[#d2d2d2] w-[231px] h-[231px]'
        alt='cardImg'
        src={itemCardBodyParnerDeal.img}
      />
    </div>
    <div className='w-1/2 '>
      <strong className='text-[26px] font-medium leading-8 tracking-tight'>{itemCardBodyParnerDeal.title}</strong>
      <p className='py-5 text-lg gap-y-3 tracking-tight leading-6 xl'>
        {itemCardBodyParnerDeal.content}
      </p>
      <Button
        children={<span className='text-base'>Explore Offers</span>}
        isNext={true}
        className='w-[200px] hover:duration-500 duration-500 hover:transition-all  text-white h-[40px]  rounded-lg bg-[#3699d3] hover:bg-black  '
      ></Button>
    </div>
  </div>
)

interface PropsCardBodyReferFriend {
  itemCardBodyReferFriend:IItemBodyBannerCard
}
export const CardBodyReferFriend = ({itemCardBodyReferFriend}:PropsCardBodyReferFriend) => (
  <div className='flex flex-col items-start justify-center w-full h-[300px]   text-black font-medium text-[20px] break-words bg-white rounded-2xl border border-solid  px-10 leading-5 border-[#d2d2d2]'>
      <strong className='text-[26px] font-medium leading-8 tracking-tight'>{itemCardBodyReferFriend.title}</strong>
      <p className='py-5 text-lg gap-y-3 tracking-tight leading-6'>
        {itemCardBodyReferFriend.content}
      </p>
      <Link to={'/'} className='text-mainColor underline hover:text-black'>
        Share your referral link
      </Link>
  </div>
)
