import React from 'react'
import Button from 'src/components/Button'
import { Text } from 'src/components/Edition/Text'
import { useAppSelector } from 'src/hooks/useRedux'
import { IItemBanner } from 'src/types/hosting_comunity.type '

interface PropsBanner {
  item: IItemBanner
}
const Banner = ({ item }: PropsBanner) => {
  const data = useAppSelector((state) => state.data.data)

  return (
    <div className='bg-white  h-[425px] flex flex-col justify-center bg-bannerComunity bg-no-repeat object-fill '>
      <div className='max-w-[30ch] md:max-w-full md:ml-5 flex items-start ml-auto  flex-col mr-[50px]'>
        <Text
          id={`txt_banner_community_title`}
          tag='strong'
          content={data[item.title || '']}
          className={`text-[32px] font-medium tracking-tight leading-8`}
        />
        {/* <strong className='text-[32px] font-medium tracking-tight leading-8'>{item.title}</strong> */}
        <Text id={`txt_banner_community_content`} tag='p' content={data[item.content || '']} className={`py-5`} />
        {/* <p className='py-5'>{item.content}</p> */}
        <Button
          children={
            <Text
              id={`txt_banner_community_infoButton`}
              tag='span'
              content={data[item.infoButton || '']}
              className={`text-xl`}
            />
          }
          isNext={true}
          className='w-[200px] [&>*]:flex hover:duration-500 duration-500 hover:transition-all  text-black h-[70px]  rounded-lg bg-white hover:bg-mainColor  hover:text-white'
        ></Button>
      </div>
    </div>
  )
}

export default Banner
