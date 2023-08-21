import React from 'react'
import HeaderSlide from 'src/pages/AboutUs/HeaderSlide/HeaderSlide'
import CustomeCard from 'src/components/CustomeCard/CustomeCard'
import { DataCustomeCard } from 'src/Data/DataCustomeCard'
import WrapperContent from 'src/components/WrapperContent/WrapperContent'
import ConnectedCarSharing from 'src/components/ConnectedCarSharing/ConnectedCarSharing'
import { DataConnectedCarSharingHome } from 'src/items/ConnectedCarSharing/DataConnectedCarSharing'
import ExploreHosting from 'src/components/ExploreHosting/ExploreHosting'
import { DataExploreHostingAboutUs } from 'src/items/ExploreHosting/DataExploreHostingStyle'
import Blog from 'src/components/Blog/Blog'
import Carousel_Review_Comunity from './Carousel/Carousel_Review'
import JoinTeam from './JoinTeam/JoinTeam'
import Banner from './Banner/Banner'
import { Text } from 'src/components/Edition/Text'
import { useAppSelector } from 'src/hooks/useRedux'
import { useDispatch, useSelector } from 'react-redux'
import { RootState } from 'src/store/store'
import { Helmet } from 'react-helmet-async'

const AboutUs = () => {
  const { ExploreAboutUs, ConnectedCarSharingR, CarouselNewsRoom, TitleCarouselAboutUs, ImgExploreAboutUs } =
    useSelector((state: RootState) => state.AboutUs)
  const data = useAppSelector((state) => state.data.data)
  const dispatch = useDispatch()
  return (
    <div className='w-full h-auto'>
      <Helmet>
        <title>About Us </title>
        <meta name='description' content='Trang về chúng tôi' />
      </Helmet>
      <HeaderSlide />
      <WrapperContent textAlign='center' title='' classname='flex flex-col'>
        <Banner />
      </WrapperContent>
      {/* <CustomeCard mainTitle={`WHAT WE'RE DOING`} DataCustomeCard={DataCustomeCard} /> */}

      <WrapperContent
        title="WE'RE SCALING OUR OPERATIONS TO SCALE OUR MISSION."
        textAlign='center'
        isBgTransparent={true}
      >
        <ConnectedCarSharing
          DataConnectedCarSharingHome={ConnectedCarSharingR}
          className={'flex-col items-stretch flex py-10 sm:py-3'}
        />
      </WrapperContent>

      <div className='mb-[60px] sm:mb-[30px]'>
        <div>
          <Text
            id={TitleCarouselAboutUs.headerTitle}
            tag='span'
            content={data[TitleCarouselAboutUs.headerTitle]}
            className='text-mainColor font-medium text-center uppercase leading-3 flex justify-center mb-2'
          />
          {/* <span className='text-mainColor font-medium text-center uppercase leading-3 flex justify-center mb-2'>
            OUR LATEST UPDATES
          </span> */}
          <Text
            id={TitleCarouselAboutUs.title}
            tag='h2'
            content={data[TitleCarouselAboutUs.title]}
            className=' flex text-[32px] text-center  justify-center mb-2'
          />
          {/* <h2 className=' flex text-[32px] text-center  justify-center mb-2'>News room: Press releases</h2> */}
        </div>
        <Carousel_Review_Comunity
          className='m-4'
          data={CarouselNewsRoom}
          numberItem={2}
          numberItemScroll={1}
          classNameContent='text-[#727171]'
        />
      </div>

      <Blog />

      <JoinTeam />

      <ExploreHosting
        img={ImgExploreAboutUs.img}
        DataExploreHostingStyle={DataExploreHostingAboutUs}
        DataExploreHostingText={ExploreAboutUs}
        isEx={false}
        className='flex-col items-center flex w-full mb-[66px]'
      />
    </div>
  )
}

export default AboutUs
