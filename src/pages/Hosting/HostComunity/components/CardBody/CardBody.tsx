import React from 'react'
import Button from 'src/components/Button'
import ArrowForwardIcon from '@mui/icons-material/ArrowForward'
import { Link } from 'react-router-dom'
import { IItemBodyBannerCard, IItemBodyRefer } from 'src/types/hosting_shareACar.type'
import { IItemCardBodyButton } from 'src/types/hosting_comunity.type '
import { Text } from 'src/components/Edition/Text'
import { Image } from 'src/components/Edition/Image'
import { useAppSelector } from 'src/hooks/useRedux'

interface PropsCardBodyImg {
  itemCardBodyImg: IItemBodyBannerCard
  id: number
}
// w-[260px] h-[260px] lg:w-[350px] lg:h-[350px] xl:w-[300px] xl:h-[300px] md:w-auto
export const CardBodyImg = ({ itemCardBodyImg, id }: PropsCardBodyImg) => {
  const data = useAppSelector((state) => state.data.data)

  return (
    <div className=' h-[260px] sm:h-[200px] text-black font-medium text-[20px] break-words hover:text-mainColor  bg-white flex items-center rounded-2xl border border-solid flex-col gap-3 justify-center leading-5 border-[#d2d2d2]'>
      <div className='flex'>
        <Text
          id={`txt_cardBodyImg_community_title_${id}`}
          tag='span'
          content={data[itemCardBodyImg.title || '']}
          // className={`${classNameContent} font-bold  `}
        />
        {/* <span>{itemCardBodyImg.title}</span> */}
        <span>
          <ArrowForwardIcon />
        </span>
      </div>
      <Image
        id={`img_cardBodyImg_shareACar_${id}`}
        className='w-[140px] h-[140px] rounded-full border-solid border border-[#d2d2d2]'
        src={data[itemCardBodyImg.img || '']}
        alt='hosting-community'
      />
      {/* <img
      className='w-[140px] h-[140px] rounded-full border-solid border border-[#d2d2d2]'
      alt='cardImg'
      src={itemCardBodyImg.img}
    /> */}
    </div>
  )
}

interface PropsCardBodyButton {
  item: IItemCardBodyButton
}
// w-[260px] h-[260px] xl:w-[300px] xl:h-[300px] lg:w-[350px] lg:h-[350px]
export const CardBodyButton = ({ item }: PropsCardBodyButton) => {
  const data = useAppSelector((state) => state.data.data)

  return (
    <div className=' h-[260px] sm:h-[200px] text-mainColor  text-[20px] lg:text-[15px] break-words bg-white flex items-center  rounded-2xl border border-solid flex-col gap-3 justify-center leading-5 border-[#d2d2d2]'>
      <Text id={`txt_cardBodyButton_community_title`} tag='div' content={data[item.title || '']} className={`ml-5 `} />{' '}
      {/* <div className='ml-5'>{item.title}</div> */}
      <Button
        children={
          <Text
            id={`txt_cardBodyButton_community_infoButton`}
            tag='span'
            content={data[item.infoButton || '']}
            className={`text-xl `}
          />
        }
        isNext={true}
        className='w-[200px] [&>*]:flex lg:w-[150px] hover:duration-500 duration-500 hover:transition-all  text-white h-[70px]  rounded-lg bg-[#3699d3] hover:bg-black  '
      ></Button>
    </div>
  )
}

interface PropsCardBodyParnerDeal {
  itemCardBodyParnerDeal: IItemBodyBannerCard
}
export const CardBodyParnerDeal = ({ itemCardBodyParnerDeal }: PropsCardBodyParnerDeal) => {
  const data = useAppSelector((state) => state.data.data)

  return (
    <div className='w-full h-[300px] text-black font-medium text-[20px] break-words bg-white flex items-center rounded-2xl border border-solid flex-row justify-around px-10 leading-5 border-[#d2d2d2]'>
      <div className='w-1/2 mr-3 lg:w-1/3'>
        <Image
          id={`img_cardBodyParner_shareACar`}
          className='rounded-full border-solid border border-[#d2d2d2]'
          src={data[itemCardBodyParnerDeal.img || '']}
          alt='hosting-community'
        />
        {/* <img
          className='rounded-full border-solid border border-[#d2d2d2]'
          alt='cardImg'
          src={itemCardBodyParnerDeal.img}
        /> */}
      </div>
      <div className='w-1/2 lg:w-2/3'>
        <Text
          id={`txt_CardBodyParner_community_title`}
          tag='strong'
          content={data[itemCardBodyParnerDeal.title || '']}
          className={`text-[26px] font-medium leading-8 tracking-tight `}
        />{' '}
        {/* <strong className='text-[26px] font-medium leading-8 tracking-tight'>{itemCardBodyParnerDeal.title}</strong> */}
        <Text
          id={`txt_CardBodyParner_community_content`}
          tag='strong'
          content={data[itemCardBodyParnerDeal.content || '']}
          className={`py-5 text-base gap-y-3 tracking-tight leading-6 xl text-textCustomBgWhite font-medium `}
        />{' '}
        {/* <p className='py-5 text-base gap-y-3 tracking-tight leading-6 xl text-textCustomBgWhite font-medium'>
          {itemCardBodyParnerDeal.content}
        </p> */}
        <Button
          children={
            <Text
              id={`txt_cardBodyButton_community_infoButton`}
              tag='span'
              content={data[itemCardBodyParnerDeal.infoButton || '']}
              className={`text-base `}
            />
          }
          isNext={true}
          className='w-[200px] [&>*]:flex hover:duration-500 duration-500 hover:transition-all  text-white h-[40px]  rounded-lg bg-[#3699d3] hover:bg-black  '
        ></Button>
      </div>
    </div>
  )
}

interface PropsCardBodyReferFriend {
  itemCardBodyReferFriend: IItemBodyRefer
}
export const CardBodyReferFriend = ({ itemCardBodyReferFriend }: PropsCardBodyReferFriend) => {
  const data = useAppSelector((state) => state.data.data)

  return (
    <div className='flex flex-col items-start justify-center w-full h-[300px]   text-black font-medium text-[20px] break-words bg-white rounded-2xl border border-solid  px-10 leading-5 border-[#d2d2d2]'>
      <Text
        id={`txt_CardBodyReferFrient_community_title`}
        tag='strong'
        content={data[itemCardBodyReferFriend.title || '']}
        className={`text-[26px] font-medium leading-8 tracking-tight`}
      />{' '}
      {/* <strong className='text-[26px] font-medium leading-8 tracking-tight'>{itemCardBodyReferFriend.title}</strong> */}
      <Text
        id={`txt_CardBodyReferFrient_community_content`}
        tag='p'
        content={data[itemCardBodyReferFriend.content || '']}
        className={`py-5 text-base gap-y-3 tracking-tight leading-6 text-textCustomBgWhite`}
      />{' '}
      {/* <p className='py-5 text-base gap-y-3 tracking-tight leading-6 text-textCustomBgWhite'>
        {itemCardBodyReferFriend.content}
      </p> */}
      <Text
        id={`txt_CardBodyReferFrient_community_content`}
        tag='a'
        content={data[itemCardBodyReferFriend.infoLink || '']}
        className={`text-mainColor underline hover:text-black`}
      />{' '}
      {/* <Link to={itemCardBodyReferFriend.to || ''} className='text-mainColor underline hover:text-black'>
        {itemCardBodyReferFriend.infoLink}
      </Link> */}
    </div>
  )
}
