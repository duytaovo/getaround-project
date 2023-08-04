import React from 'react'
import CustomeStep from 'src/components/CustomeStep/CustomeStep'
import Heading from 'src/components/Heading/Heading'
import WrapperContent from 'src/components/WrapperContent/WrapperContent'
import { thirdSecionData } from 'src/items/DriveWithUberSectionItems/ThirdSection/thirdSection'
import Filter1OutlinedIcon from '@mui/icons-material/Filter1Outlined'
import Filter2OutlinedIcon from '@mui/icons-material/Filter2Outlined'
import Filter3OutlinedIcon from '@mui/icons-material/Filter3Outlined'
import Filter4OutlinedIcon from '@mui/icons-material/Filter4Outlined'
import { CustomeStepItems } from 'src/items/CustomeStepItem/CustomeStepItem'
import Button from 'src/components/Button'
import { FifthSetionData } from 'src/items/DriveWithUberSectionItems/FifthSection/FifthSection'
import CustomeCommonQuestions from 'src/components/CustomeCommonQuestions/CustomeCommonQuestions'
import { items } from 'src/items/CommonQuestionItems/CommonQuestionItems'
import { SecondSection } from 'src/items/DriveWithUberSectionItems/SecondSection/SecondSection'

type Props = {}

const DriveWithUber = (props: Props) => {
  return (
    <div>
      <WrapperContent title='' classname='flex justify-between'>
        <div className='w-1/2 flex justify-center items-center'>
          <img
            className='w-[70%] '
            src='https://assets-global.website-files.com/5c16e90c8f6920b098f834e5/63f913e7a34806823acdff1a_ga-illustration-16.svg'
            alt='Second section image'
          />
        </div>
        <div className='w-1/2 text-black/90 my-auto'>
          <h1 className='leading-[33px] tracking-[0.8px] text-[28px]'>{SecondSection.title}</h1>
          {SecondSection?.paragraphs?.map((paragraph) => <p className='py-4 text-black/70 text-[14px]'>{paragraph}</p>)}
        </div>
      </WrapperContent>

      <WrapperContent title='' isBgTransparent>
        <Heading
          title='The perks of Getaround x Uber'
          fontSize={30}
          breakLineAt={6}
          className='pl-2'
          color='rgba(255,255,255,.9)'
        />
        <div className='grid grid-cols-4 grid-rows-1 gap-x-2 '>
          {thirdSecionData.map((item, index) => (
            <div key={index} className='py-2 grow text-ellipsis text-white/80 p-2 rounded-md bg-mainColor'>
              <p className='text-[20px] leading-[28px] min-h-[70px] flex justify-start'>{item.title}</p>
              <p className='text-[14px]'>{item.descriptions}</p>
            </div>
          ))}
        </div>
      </WrapperContent>

      <WrapperContent title='HOW IT WORKS' textAlign='center'>
        <Heading title="It's easy to drive with Uber" fontSize={30} breakLineAt={6} className='text-center' />
        <div className='flex justify-between'>
          <div className='w-1/2 flex justify-center items-center'>
            <img
              className='w-[70%] rounded-md'
              src='https://assets-global.website-files.com/5c16e90c8f6920b098f834e5/63cef76977f95804643dc7b4_howitworks-guest%20c-p-500.jpg'
              alt='img left...'
            />
          </div>
          <CustomeStep
            classname='w-1/2'
            icons={[<Filter1OutlinedIcon />, <Filter2OutlinedIcon />, <Filter3OutlinedIcon />]}
            items={CustomeStepItems}
          />
        </div>
      </WrapperContent>

      <WrapperContent title='Get started now' textAlign='center' fontSize={25} isBgTransparent>
        <div className='text-center flex items-center flex-col text-black/80'>
          <div className='py-10'>
            {FifthSetionData.map((sentence) => (
              <p className='leading-[22px] text-white/80 text-[15px]'>{sentence.sentence}</p>
            ))}
          </div>
          <div className='flex pt-4 text-white/80 '>
            <div className='bg-mainColor px-6 py-4 rounded-lg flex flex-col items-start'>
              <p className='uppercase leading-[13px] text-[11px]'>alreay an uber driver?</p>
              <Button className='text-[22px] underline' isNext>
                Log in with Uber
              </Button>
            </div>
            <div className='w-[20px]' />
            <div className='bg-black px-6 py-4 rounded-lg flex flex-col items-start justify-center'>
              <p className='uppercase leading-[13px] text-[11px]'>not an uber driver yet?</p>
              <Button className='text-[22px] underline' isNext>
                Sign up with Uber
              </Button>
            </div>
          </div>
        </div>
      </WrapperContent>

      <WrapperContent
        title='Need more info? Check out our FAQs'
        textAlign='left'
        titlePadding={164}
        classname='flex justify-center'
        isBgTransparent
      >
        <div className='w-[70%] mt-4'>
          <CustomeCommonQuestions titleClassName='text-white/90 text-bold text-[18px]' items={items} />
        </div>
      </WrapperContent>
    </div>
  )
}

export default DriveWithUber
