import React from 'react'
import HeaderSlide from 'src/pages/AboutUs/HeaderSlide/HeaderSlide'
import CustomeCard from 'src/components/CustomeCard/CustomeCard'
import { DataCustomeCard } from 'src/Data/DataCustomeCard'
import WrapperContent from 'src/components/WrapperContent/WrapperContent'
import ConnectedCarSharing from 'src/components/ConnectedCarSharing/ConnectedCarSharing'
import { DataConnectedCarSharingHome } from 'src/items/ConnectedCarSharing/DataConnectedCarSharing'
import ExploreHosting from 'src/components/ExploreHosting/ExploreHosting'
import { DataExploreHostingAboutUs } from 'src/items/ExploreHosting/DataExploreHostingStyle'
import { DataExploreHostingAboutUsText } from 'src/items/ExploreHosting/DataExploreHostingText'
import CustomeCarousel from 'src/components/Carousel/index'
import { ItemCarouselAboutUS } from 'src/items/Carousel/Carouseltems'
import Button from 'src/components/Button'
import { Link } from 'react-router-dom'
import Blog from 'src/components/Blog/Blog'
import Carousel_Review_Comunity from './Carousel/Carousel_Review'
import { ItemCarousel, ItemCarouselAboutUs_NewsRoom } from 'src/items/Carousel/Carouseltems'
import JoinTeam from './JoinTeam/JoinTeam'
import Banner from './Banner/Banner'
export const DataTitleCarouselAboutUs = {
  headerTitle: 'OUR LATEST UPDATES',
  title: 'News room: Press releases',
  linkTo: ''
}
const AboutUs = () => {
  return (
    <div className='w-full h-auto bg-mainBackGroundColor'>
      <HeaderSlide />
      <WrapperContent textAlign='center' title='' classname='flex flex-col'>
        <Banner />
      </WrapperContent>
      <CustomeCard mainTitle={`WHAT WE'RE DOING`} DataCustomeCard={DataCustomeCard} />

      <WrapperContent
        title="WE'RE SCALING OUR OPERATIONS TO SCALE OUR MISSION."
        textAlign='center'
        isBgTransparent={true}
      >
        <ConnectedCarSharing
          DataConnectedCarSharingHome={DataConnectedCarSharingHome}
          className={'flex-col items-stretch flex py-10'}
        />
      </WrapperContent>

      <div className='mb-[60px]'>
        <div>
          <span className='text-mainColor font-medium text-center uppercase leading-3 flex justify-center mb-2'>
            OUR LATEST UPDATES
          </span>
          <h2 className=' flex text-[32px] text-center  justify-center mb-2'>News room: Press releases</h2>
        </div>
        <Carousel_Review_Comunity
          className='m-4'
          data={ItemCarouselAboutUs_NewsRoom}
          numberItem={2}
          numberItemScroll={1}
          classNameContent='text-[#727171]'
        />
      </div>

      <Blog />

      <JoinTeam />

      <ExploreHosting
        img={
          'https://assets-global.website-files.com/5c16e90c8f6920b098f834e5/63979f2e27eb83339d24e451_AdobeStock_488832115.jpg'
        }
        DataExploreHostingStyle={DataExploreHostingAboutUs}
        DataExploreHostingText={DataExploreHostingAboutUsText}
        isEx={false}
        className='flex-col items-center flex w-full mb-[66px]'
      />
    </div>
  )
}

export default AboutUs
