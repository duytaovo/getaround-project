import React from 'react'
import HomeHeroSection from './home_hero_section/HomeHeroSection'
import CustomeStep from 'src/components/CustomeStep/CustomeStep'
import WrapperContent from 'src/components/WrapperContent/WrapperContent'
import { CustomeStepItems } from 'src/items/CustomeStepItem/CustomeStepItem'
import Heading from 'src/components/Heading/Heading'
import CustomeCommonQuestions from 'src/components/CustomeCommonQuestions/CustomeCommonQuestions'
import { items } from 'src/items/CommonQuestionItems/CommonQuestionItems'
import { SmileOutlined, SolutionOutlined, UserOutlined } from '@ant-design/icons'
import CustomeSlider from '../../components/Slider/Slider'
import { ItemSlider } from '../../items/SliderItem/Slider'
import CustomeCarousel from 'src/components/Carousel/index'
import { ItemCarousel } from 'src/items/Carousel/Carouseltems'
import CommonQuestionRightImg from 'src/assets/images/commonQuestionRight.svg'
import ConnectedCarSharing from 'src/components/ConnectedCarSharing/ConnectedCarSharing'
import { DataConnectedCarSharingHome } from 'src/items/ConnectedCarSharing/DataConnectedCarSharing'
import ExploreHosting from 'src/components/ExploreHosting/ExploreHosting'
import { DataExploreHostingHome } from 'src/items/ExploreHosting/DataExploreHostingStyle'
import { DataExploreHostingShareCarText } from 'src/items/ExploreHosting/DataExploreHostingText'

type Props = {}

const Home = (props: Props) => {
  return (
    <div>
      <HomeHeroSection />

      <WrapperContent
        title='The perfect car for your trip is just around the corner'
        textAlign='center'
        isBgTransparent={true}
      >
        <div className='w-[70%] mx-auto pt-4'>
          <CustomeSlider
            classNameTitle='text-center py-2 text-white/80 justify-center'
            className='bg-mainColor/20 flex flex-col items-center justify-center p-2 rounded-md'
            numberItem={4}
            numberItemScroll={1}
            isTitle={true}
            classNameImage='rounded-md w-[100%]'
            data={ItemSlider}
          />
        </div>
      </WrapperContent>

      <section title='' className='my-14 w-[70%] mx-auto'>
        <CustomeCarousel.Carousel_Introduce
          classNameHeader='text-[11px] text-mainColor'
          classNameTitle='text-[32px] text-white/60 text-bold tracking-[-0.48px] leading-[34px] py-4'
          classNameContent='leading-[22px] text-white/60'
          className='w-full flex justify-between bg-black p-2 bg-mainColor/20 rounded-md'
          classNameImage='w-1/2 rounded-md'
          data={ItemCarousel}
          numberItem={1}
          numberItemScroll={1}
        />
      </section>

      <WrapperContent
        title="The World's First 🌐 Connected Car Sharing Marketplace"
        textAlign='center'
        isBgTransparent={true}
      >
        <ConnectedCarSharing DataConnectedCarSharingHome={DataConnectedCarSharingHome} />
      </WrapperContent>

      {/* Begin hero section */}
      <WrapperContent textAlign='center' title='How it works' classname='flex flex-col'>
        <Heading title='Find your drive in 3 easy steps' breakLineAt={3} fontSize={30} className='text-center' />
        <div className='flex justify-center px-[36px] '>
          {/* Begin image portion */}
          <div className='w-1/2 flex justify-center'>
            <img
              className='object-contain h-[500px]'
              src='https://assets-global.website-files.com/5c16e90c8f6920b098f834e5/63c5b4afd9423e2cac7f6cde_how-it-works-image%20copiar-p-500.jpg'
              alt='ss'
            />
          </div>
          {/* End image portion */}
          <CustomeStep
            icons={[<UserOutlined />, <SolutionOutlined />, <SmileOutlined />]}
            classname='w-1/2'
            items={CustomeStepItems}
          />
        </div>
      </WrapperContent>
      {/* End hero section */}

      {/* <WrapperContent title='TESTIMONIALS' textAlign='center' classname='flex flex-col'>
        <Heading title='Hear from our guests' breakLineAt={4} fontSize={30} className='text-center' />
        <div className='flex justify-between'>
          <div className='w-1/2'>
            <CustomeCarousel.Carousel_Review data={ItemCarousel} numberItem={3} numberItemScroll={1} />
          </div>
          <div></div>
        </div>
      </WrapperContent> */}

      <WrapperContent title=''>
        <ExploreHosting
          isEx={true}
          DataExploreHostingStyle={DataExploreHostingHome}
          DataExploreHostingText={DataExploreHostingShareCarText}
          img='https://assets-global.website-files.com/5c16e90c8f6920b098f834e5/63c5b458858ce546324e6786_636056a89c0f36b634f4dc4e_AdobeStock_488832115%20copiar.jpg'
        />
      </WrapperContent>

      <WrapperContent title='CARS IN YOUR CITY' isBgTransparent textAlign='center'>
        <Heading title='Local favorites near you' fontSize={30} breakLineAt={4} className='text-center' />
        <div className='mx-auto pt-4 w-[60%]'>
          <CustomeSlider
            data={ItemSlider}
            numberItem={5}
            numberItemScroll={4}
            isTitle
            classNameImage='w-[100px] h-[100px] rounded-full object-cover	'
            className='flex flex-col justify-center items-center'
          />
        </div>
      </WrapperContent>

      <WrapperContent title='THE GETAROUND BLOG' isBgTransparent textAlign='center'>
        <Heading title='The Road Ahead: Discover our Blog' fontSize={30} breakLineAt={6} className='text-center' />
        <div className='mx-auto w-full h-fit  '>
          <CustomeSlider
            data={ItemSlider}
            numberItem={3}
            numberItemScroll={1}
            className='bg-mainColor/20 rounded-md p-2 overflow-hidden flex flex-col'
            classNameImage='rounded-md w-full'
            classNameTitle='text-[14px] leading-[22px] text-white/40'
            classNameContent='text-white/90 text-[24px] leading-[25px] break-words'
            classNameTime='text-[14px] leading-[22px] text-white/40'
            isContent
            isTime
            isTitle
          />
        </div>
      </WrapperContent>

      <WrapperContent
        titlePadding={5}
        textAlign='left'
        title='Learn more about the benefits of Getaround'
        isBgTransparent={true}
        fontSize={12}
      >
        <div className='flex'>
          <CustomeCommonQuestions items={items} className='w-1/2 p-4' />
          <div className='w-1/2 p-4 flex justify-center items-center'>
            <img width='50%' src={CommonQuestionRightImg} alt='' />
          </div>
        </div>
      </WrapperContent>
    </div>
  )
}

export default Home
