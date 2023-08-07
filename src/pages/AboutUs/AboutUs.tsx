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
const AboutUs = () => {
  return (
    <div className='w-full h-auto bg-mainBackGroundColor'>
      <HeaderSlide />
      <WrapperContent textAlign='center' title='' classname='flex flex-col'>
        <div className='flex justify-center '>
          <div className='w-1/2  flex justify-center items-center'>
            <div className='block '>
              <p className='uppercase text-mainColor font-bold mb-3'>OUR MISSION</p>
              <h2 className='text-2xl text-black font-medium'>
                We're helping consumers shift away from car ownership by giving them instant and convenient access to
                vehicles when they need them.
              </h2>

              <p className='text-[#808795] font-normal mt-3'>
                Our peer-to-peer marketplace helps solve some of the most pressing challenges facing the world today,
                including environmental sustainability and access to economic opportunity.
              </p>
            </div>
          </div>
          <div className='w-[30%] flex justify-center'>
            <img
              className='object-contain h-[500px]'
              src='https://assets-global.website-files.com/5c16e90c8f6920b098f834e5/63ec0b73b2f4fb34b18ddb8a_ga-illustration-8.svg'
              alt='ss'
            />
          </div>{' '}
        </div>
      </WrapperContent>
      <CustomeCard mainTitle={`WHAT WE'RE DOING`} DataCustomeCard={DataCustomeCard} />
      <section title='' className='my-14 w-[70%] mx-auto'>
        <CustomeCarousel.Carousel_Introduce
          classNameHeader='text-[11px] text-mainColor'
          classNameTitle='text-[32px] text-white/60 text-bold tracking-[-0.48px] leading-[34px] py-4'
          classNameContent='leading-[22px] text-white/60'
          className='w-full flex justify-between bg-black p-2 bg-mainColor/20 rounded-md'
          classNameImage='w-1/2 rounded-md'
          data={ItemCarouselAboutUS}
          numberItem={1}
          numberItemScroll={1}
        />
      </section>
      <WrapperContent
        title="WE'RE SCALING OUR OPERATIONS TO SCALE OUR MISSION."
        textAlign='center'
        isBgTransparent={true}
      >
        <ConnectedCarSharing DataConnectedCarSharingHome={DataConnectedCarSharingHome} />
      </WrapperContent>

      <div className='mb-bottom'>
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

      <div className='flex justify-center bg-[#e9eaeb] rounded-2xl mb-10'>
        <div className='w-1/2  flex items-center'>
          <div className='block '>
            <p className='uppercase text-mainColor font-bold mb-3 text-3xl mt-10'>Join the Getaround team </p>

            <p className='text-[#808795] font-normal mt-3'>
              Want to work with us? Come join the team focused on empowering people to carshare everywhere. Explore open
              roles at Getaround.
            </p>
            <Button
              className='bg-black border hover:duration-500 duration-500 hover:transition-all  text-white  border-none hover:bg-mainColor rounded-full items-center w-[135px] h-[40px] text-sm font-bold leading-5 px-0 mt-8'
              children={<span>See open roles</span>}
            />
          </div>
        </div>
        <div className='w-[35%] flex justify-center'>
          <img
            className='object-contain h-[500px]'
            src='https://assets-global.website-files.com/5c16e90c8f6920b098f834e5/63ea9fc9c0cafb2053ba37ac_ga-illustration-19.svg'
            alt='ss'
          />
        </div>{' '}
      </div>

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
