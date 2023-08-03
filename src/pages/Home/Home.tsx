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
            classNameTitle='text-center font-bold py-2 text-black/60'
            numberItem={4}
            numberItemScroll={1}
            isTitle={true}
            classNameImage='rounded-md w-[100%]'
            data={ItemSlider}
          />
        </div>
      </WrapperContent>

      {/* <WrapperContent title=''>
        <CustomeCarousel.Carousel_Introduce data={ItemCarousel} numberItem={1} numberItemScroll={1} />
      </WrapperContent> */}

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

      <WrapperContent titlePadding={5} textAlign='left' title='Learn more about the benefits of Getaround'>
        <div>
          <CustomeCommonQuestions items={items} className='w-1/2 p-4' />
        </div>
      </WrapperContent>
    </div>
  )
}

export default Home
