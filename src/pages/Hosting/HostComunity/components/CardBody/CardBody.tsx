import React from 'react'
import Button from 'src/components/Button'
import ArrowForwardIcon from '@mui/icons-material/ArrowForward'
import { Link } from 'react-router-dom'
import { IItemBodyBannerCard, IItemBodyRefer } from 'src/types/hosting_shareACar.type'
import { IItemCardBodyButton } from 'src/types/hosting_comunity.type '

interface PropsCardBodyImg {
  itemCardBodyImg: IItemBodyBannerCard
}
// w-[260px] h-[260px] lg:w-[350px] lg:h-[350px] xl:w-[300px] xl:h-[300px] md:w-auto
export const CardBodyImg = ({ itemCardBodyImg }: PropsCardBodyImg) => (
  <div className=' h-[260px] sm:h-[200px] text-black font-medium text-[20px] break-words hover:text-mainColor  bg-white flex items-center rounded-2xl border border-solid flex-col gap-3 justify-center leading-5 border-[#d2d2d2]'>
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

interface PropsCardBodyButton {
  item: IItemCardBodyButton
}
// w-[260px] h-[260px] xl:w-[300px] xl:h-[300px] lg:w-[350px] lg:h-[350px]
export const CardBodyButton = ({ item }: PropsCardBodyButton) => (
  <div className=' h-[260px] sm:h-[200px] text-mainColor  text-[20px] lg:text-[15px] break-words bg-white flex items-center  rounded-2xl border border-solid flex-col gap-3 justify-center leading-5 border-[#d2d2d2]'>
    <div className='ml-5'>{item.title}</div>
    <Button
      children={<span className='text-xl'>{item.infoButton}</span>}
      isNext={true}
      className='w-[200px] lg:w-[150px] hover:duration-500 duration-500 hover:transition-all  text-white h-[70px]  rounded-lg bg-[#3699d3] hover:bg-black  '
    ></Button>
  </div>
)

interface PropsCardBodyParnerDeal {
  itemCardBodyParnerDeal: IItemBodyBannerCard
}
export const CardBodyParnerDeal = ({ itemCardBodyParnerDeal }: PropsCardBodyParnerDeal) => (
  <div className='w-full h-[300px]   text-black font-medium text-[20px] break-words bg-white flex items-center rounded-2xl border border-solid flex-row justify-around px-10 leading-5 border-[#d2d2d2]'>
    <div className='w-1/2 mr-3 lg:w-1/3'>
      <img
        className='rounded-full border-solid border border-[#d2d2d2]'
        alt='cardImg'
        src={itemCardBodyParnerDeal.img}
      />
    </div>
    <div className='w-1/2 lg:w-2/3'>
      <strong className='text-[26px] font-medium leading-8 tracking-tight'>{itemCardBodyParnerDeal.title}</strong>
      <p className='py-5 text-base gap-y-3 tracking-tight leading-6 xl text-textCustomBgWhite font-medium'>{itemCardBodyParnerDeal.content}</p>
      <Button
        children={<span className='text-base'>{itemCardBodyParnerDeal.infoButton}</span>}
        isNext={true}
        className='w-[200px] hover:duration-500 duration-500 hover:transition-all  text-white h-[40px]  rounded-lg bg-[#3699d3] hover:bg-black  '
      ></Button>
    </div>
  </div>
)

interface PropsCardBodyReferFriend {
  itemCardBodyReferFriend: IItemBodyRefer
}
export const CardBodyReferFriend = ({ itemCardBodyReferFriend }: PropsCardBodyReferFriend) => (
  <div className='flex flex-col items-start justify-center w-full h-[300px]   text-black font-medium text-[20px] break-words bg-white rounded-2xl border border-solid  px-10 leading-5 border-[#d2d2d2]'>
    <strong className='text-[26px] font-medium leading-8 tracking-tight'>{itemCardBodyReferFriend.title}</strong>
    <p className='py-5 text-base gap-y-3 tracking-tight leading-6 text-textCustomBgWhite'>{itemCardBodyReferFriend.content}</p>
    <Link to={itemCardBodyReferFriend.to || ''} className='text-mainColor underline hover:text-black'>
      {itemCardBodyReferFriend.infoLink}
    </Link>
  </div>
)
