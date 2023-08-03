import React from 'react'
import HomeHeroSection from './home_hero_section/HomeHeroSection'
import CustomeStep from 'src/components/CustomeStep/CustomeStep'
import WrapperContent from 'src/components/WrapperContent/WrapperContent'
import { CustomeStepItems } from 'src/items/CustomeStepItem/CustomeStepItem'
import Heading from 'src/components/Heading/Heading'
import CustomeCommonQuestions from 'src/components/CustomeCommonQuestions/CustomeCommonQuestions'
import { items } from 'src/items/CommonQuestionItems/CommonQuestionItems'
import { LoadingOutlined, SmileOutlined, SolutionOutlined, UserOutlined } from '@ant-design/icons'

type Props = {}

const Home = (props: Props) => {
  return (
    <div>
      <HomeHeroSection />

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
            icons={[<UserOutlined />, <SmileOutlined />, <SolutionOutlined />]}
            classname='w-1/2'
            items={CustomeStepItems}
          />
        </div>
      </WrapperContent>
      {/* End hero section */}

      <WrapperContent titlePadding={4} textAlign='left' title='Learn more about the benefits of Getaround'>
        <div>
          <CustomeCommonQuestions items={items} className='w-1/2 p-4' />
        </div>
      </WrapperContent>
    </div>
  )
}

export default Home
