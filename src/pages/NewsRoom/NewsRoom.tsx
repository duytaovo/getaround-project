import HeaderNewsRoom from './HeaderNewsRoom/HeaderNewsRoom'
import Blog from 'src/components/Blog/Blog'
import HelpCustomer from './HelpCustomer/HelpCustomer'
import ReadNews from './ReadNews/ReadNews'
import Carousel_Review_Comunity from './Carousel/Carousel_Review'
import { Text } from 'src/components/Edition/Text'
import { useAppSelector } from 'src/hooks/useRedux'
import { useDispatch, useSelector } from 'react-redux'
import { RootState } from 'src/store/store'
import { Helmet } from 'react-helmet-async'

export const DataTitleCarouselNR = {
  headerTitle: 'NEWS FROM GETAROUND',
  title: 'Press releases',
  linkTo: '/'
}
export const NewsRoom = () => {
  const { CarouselNewsRoom, TitleCarouselNewsRoom } = useSelector((state: RootState) => state.newsroom)
  const data = useAppSelector((state) => state.data.data)
  const dispatch = useDispatch()
  return (
    <div className='w-full h-auto bg-mainBackGroundColor'>
      <Helmet>
        <title>NewsRoom</title>
        <meta name='description' content='Phòng tin tức mới' />
      </Helmet>
      <HeaderNewsRoom />
      <div className='mb-bottom'>
        <div>
          <Text
            id={TitleCarouselNewsRoom.headerTitle}
            tag='span'
            content={data[TitleCarouselNewsRoom.headerTitle]}
            className='text-mainColor font-medium text-center uppercase leading-3 flex justify-center mb-2'
          />
          {/* <span className='text-mainColor font-medium text-center uppercase leading-3 flex justify-center mb-2'>
            NEWS FROM GETAROUND
          </span> */}
          <Text
            id={TitleCarouselNewsRoom.title}
            tag='h2'
            content={data[TitleCarouselNewsRoom.title]}
            className=' flex text-[32px] text-center  justify-center mb-2'
          />
          {/* <h2 className=' flex text-[32px] text-center  justify-center mb-2'>Press releases</h2> */}
        </div>
        <Carousel_Review_Comunity
          className='m-4'
          data={CarouselNewsRoom}
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
