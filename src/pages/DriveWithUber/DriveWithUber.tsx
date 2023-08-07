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
import ExploreHosting from 'src/components/ExploreHosting/ExploreHosting'
import { DataExploreHostingDriveWithUber } from 'src/items/ExploreHosting/DataExploreHostingStyle'
import { DataExploreHostingHomeText } from 'src/items/ExploreHosting/DataExploreHostingText'
import { FirstSectionData } from 'src/items/DriveWithUberSectionItems/FirstSection/FirstSection'
type Props = {}

const DriveWithUber = (props: Props) => {
  return (
    <div>
      <WrapperContent title='' classname='flex' isBgTransparent>
        <div className='bg-black w-2/3 py-10 pl-12 pr-[10%] rounded-lg text-justify'>
          <div className='flex'>
            {FirstSectionData?.logos?.map((logo, index) => (
              <p
                contentEditable
                className='first:text-mainColor first:border-r-2  first:border-white text-[20px] pr-2 last:pl-2'
                key={index}
              >
                {logo}
              </p>
            ))}
          </div>
          <div className='py-8 text-[36px] leading-[38px]'>
            {FirstSectionData?.titles?.map((title, index) => (
              <p className='last:text-mainColor' key={index}>
                {title}
              </p>
            ))}
          </div>
          <div>
            {FirstSectionData?.paragraphs?.map((paragraph, index) => (
              <p className='py-2' key={index}>
                {paragraph}
              </p>
            ))}
          </div>
          <div className='flex items-center pt-2'>
            <Button className='bg-mainColor py-2 px-4 rounded-md' isNext>
              Get started now
            </Button>
            <a>Share you car with Uber</a>
          </div>
        </div>
        <div className='w-1/3 relative'>
          <div
            className='absolute left-[-20%] top-[8%] rounded-lg right-0 bottom-[10%] bg-cover bg-center bg-red-400'
            style={{
              backgroundImage:
                'url(https://assets-global.website-files.com/5c16e90c8f6920b098f834e5/63d82ff7ba27e7ee16cce7de_dwuguest1tiny.jpeg)'
            }}
          />
        </div>
      </WrapperContent>

      <WrapperContent title='' classname='flex justify-between'>
        <div className='w-1/2 flex justify-center items-center'>
          <img
            className='w-[70%] '
            src='https://assets-global.website-files.com/5c16e90c8f6920b098f834e5/63f913e7a34806823acdff1a_ga-illustration-16.svg'
            alt='Second section image'
          />
        </div>
        <div className='w-1/2 text-black/90 my-auto text-justify'>
          <h1 className='leading-[33px] tracking-[0.8px] text-[28px]'>{SecondSection.title}</h1>
          {SecondSection?.paragraphs?.map((paragraph) => (
            <p className='py-4 pr-10 text-black/70 text-[14px]'>{paragraph}</p>
          ))}
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
            <div key={index} className='py-2 grow text-ellipsis text-white/80 p-2 rounded-md bg-mainColor text-justify'>
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
            textClassName='text-justify pr-10'
            classname='w-1/2'
            icons={[<Filter1OutlinedIcon />, <Filter2OutlinedIcon />, <Filter3OutlinedIcon />]}
            items={CustomeStepItems}
          />
        </div>
      </WrapperContent>

      <WrapperContent title='Get started now' textAlign='center' fontSize={25} isBgTransparent>
        <div className='text-center flex items-center flex-col text-black/80'>
          <div className='py-10'>
            {FifthSetionData.map((sentence, index) => (
              <p key={index} className='leading-[22px] text-white/80 text-[15px]'>
                {sentence.sentence}
              </p>
            ))}
          </div>
          <div className='flex pt-4 text-white/80 '>
            <div className='bg-mainColor px-6 py-4 rounded-lg flex flex-col items-start'>
              <p className='uppercase leading-[13px] text-[11px]'>alreay an uber driver?</p>
              <Button contentEditable className='text-[22px] underline' isNext>
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

      <WrapperContent title='' isBgTransparent>
        <ExploreHosting
          className=''
          isEx={true}
          DataExploreHostingStyle={DataExploreHostingDriveWithUber}
          DataExploreHostingText={DataExploreHostingHomeText}
          img='https://assets-global.website-files.com/5c16e90c8f6920b098f834e5/6324f5891e795a0a4cf1c346_AdobeStock_488832115-p-1080.jpg'
        />
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
