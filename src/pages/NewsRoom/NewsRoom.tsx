import React from 'react'
import HeaderNewsRoom from './HeaderNewsRoom/HeaderNewsRoom'
import Blog from 'src/components/Blog/Blog'
import HelpCustomer from './HelpCustomer/HelpCustomer'
import ReadNews from './ReadNews/ReadNews'
import Carousel_Review_Comunity from './Carousel/Carousel_Review'
import { ItemCarousel, ItemCarouselAboutUs_NewsRoom } from 'src/items/Carousel/Carouseltems'
import { Text } from 'src/components/Edition/Text'
import { Image } from 'src/components/Edition/Image'
import { iDGenerator } from 'src/utils/idGenerator'
export const DataTitleCarouselNR = {
  headerTitle: 'NEWS FROM GETAROUND',
  title: 'Press releases',
  linkTo: '/'
}
export const NewsRoom = () => {
  return (
    <div className='w-full h-auto bg-mainBackGroundColor'>
      <HeaderNewsRoom />
      <div className='mb-bottom'>
        <div>
          <Text
            id='headerTitlelSlideNewsRoom'
            tag='span'
            content={DataTitleCarouselNR.headerTitle}
            className='text-mainColor font-medium text-center uppercase leading-3 flex justify-center mb-2'
          />
          {/* <span className='text-mainColor font-medium text-center uppercase leading-3 flex justify-center mb-2'>
            NEWS FROM GETAROUND
          </span> */}
          <Text
            id='TitlelSlideNewsRoom'
            tag='h2'
            content={DataTitleCarouselNR.title}
            className=' flex text-[32px] text-center  justify-center mb-2'
          />
          {/* <h2 className=' flex text-[32px] text-center  justify-center mb-2'>Press releases</h2> */}
        </div>
        <Carousel_Review_Comunity
          className='m-4'
          data={ItemCarouselAboutUs_NewsRoom}
          numberItem={3}
          numberItemScroll={1}
          classNameContent='text-[#727171]'
        />
        <h2 className='text-center mt-8 text-mainColor underline hover:no-underline hover:text-black duration-300 font-semibold cursor-pointer'>
          See more
        </h2>
      </div>
      <HelpCustomer />
      <ReadNews />
      <Blog />
    </div>
  )
}

export default NewsRoom
