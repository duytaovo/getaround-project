import CustomeStep from 'src/components/CustomeStep/CustomeStep'
import Heading from 'src/components/Heading/Heading'
import WrapperContent from 'src/components/WrapperContent/WrapperContent'
import { thirdSecionData } from 'src/items/DriveWithUberSectionItems/ThirdSection/thirdSection'
import Filter1OutlinedIcon from '@mui/icons-material/Filter1Outlined'
import Filter2OutlinedIcon from '@mui/icons-material/Filter2Outlined'
import Filter3OutlinedIcon from '@mui/icons-material/Filter3Outlined'
import { CustomeStepItems } from 'src/items/CustomeStepItem/CustomeStepItem'
import Button from 'src/components/Button'
import CustomeCommonQuestions from 'src/components/CustomeCommonQuestions/CustomeCommonQuestions'
import { items } from 'src/items/CommonQuestionItems/CommonQuestionItems'
import ExploreHosting from 'src/components/ExploreHosting/ExploreHosting'
import { DataExploreHostingDriveWithUber } from 'src/items/ExploreHosting/DataExploreHostingStyle'
import { FirstSectionData } from 'src/items/DriveWithUberSectionItems/FirstSection/FirstSection'
import { SecondSection } from 'src/items/DriveWithUberSectionItems/SecondSection/SecondSection'
import { DataExploreHostingHomeText } from 'src/items/ExploreHosting/DataExploreHostingText'
import { FifthSetionData } from 'src/items/DriveWithUberSectionItems/FifthSection/FifthSection'
import { useAppSelector } from 'src/hooks/useRedux'
import { useState, useEffect } from 'react'
import { Text } from 'src/components/Edition/Text'
import { Image } from 'src/components/Edition/Image'
import { iDGenerator } from 'src/utils/idGenerator'

type Props = {}

const DriveWithUber = (props: Props) => {
  const {
    heroSection,
    introduceSection,
    perksSection,
    driveStepsSection,
    getStatedSection,
    driveWithUberExploreHosting,
    diriveQAndASection
  } = useAppSelector((state) => state.driveWithUberData)
  const data = useAppSelector((state) => state.data)
  return (
    <div>
      <WrapperContent title='' classname='flex' isBgTransparent>
        <div className='bg-black w-2/3 py-10 pl-12 pr-[10%] text-justify md:pl-4 sm:w-full rounded-[20px]'>
          <div className='flex'>
            {heroSection?.logos?.map((logo, index) => (
              // <p
              //   className='first:text-mainColor first:border-r-2  first:border-white text-[20px] pr-2 last:pl-2 '
              //   key={index}
              // >
              //   {logo}
              // </p>
              <Text
                id={logo}
                content={data[logo]}
                tag='p'
                className='first:text-mainColor first:border-r-2  first:border-white text-[20px] pr-2 last:pl-2'
              />
            ))}
          </div>
          <div className='py-8 text-[36px] leading-[38px] sm:text-left'>
            {heroSection?.titles?.map((title, index) => (
              // <p className='last:text-mainColor' key={index}>
              //   {title}
              // </p>
              <Text id={title} tag='p' content={data[title]} />
            ))}
          </div>
          <div>
            {heroSection?.paragraphs?.map((paragraph, index) => (
              // <p className='py-2 md:text-[14px]' key={index}>
              //   {paragraph}
              // </p>
              <Text tag='p' id={paragraph} content={data[paragraph]} />
            ))}
          </div>
          <div className='flex items-center pt-2'>
            <Button className='bg-mainColor py-2 px-4 mr-4 rounded-md [&>*]:flex' isNext>
              {/* {heroSection.buttonTitle} */}
              <Text id={heroSection.buttonTitle} tag='span' content={data[heroSection.buttonTitle]} />
            </Button>
            {/* <a> */}
            {/* {heroSection.link} */}
            <Text id={heroSection.link} tag='a' content={data[heroSection.link]} />
            {/* </a> */}
          </div>
        </div>
        <div className='w-1/3 relative sm:hidden'>
          <div className='absolute left-[-20%] top-[8%] rounded-lg right-0 bottom-[10%] bg-cover bg-center'>
            <Image
              id={heroSection.img}
              src={data[heroSection.img]}
              alt='Image thumb'
              className='w-full h-full object-cover rounded-[20px]'
            />
          </div>
        </div>
      </WrapperContent>

      <WrapperContent title='' classname='flex justify-between sm:flex-col-reverse min-h-[40%'>
        <div className='w-1/2 flex justify-center items-center sm:w-full'>
          {/* <img className='w-[70%] ' src={introduceSection.img} alt='Second section image' /> */}
          <Image
            alt='image_thumb'
            id={introduceSection.img}
            src={data[introduceSection.img]}
            className='w-[90%] overflow-hidden rounded-[20px]'
          />
        </div>
        <div className='w-1/2 text-black/90 my-auto text-justify sm:w-full'>
          {/* <h1 className='leading-[33px] tracking-[0.8px] font-bold text-[28px] xl:text-left md:pr-[40px] sm:px-10'>
            {introduceSection.title}
          </h1> */}
          <Text
            tag='h1'
            content={data[introduceSection.title]}
            id={introduceSection.title}
            className='leading-[33px] tracking-[0.8px] font-bold text-[28px] xl:text-left md:pr-[40px] sm:px-10'
          />
          {introduceSection?.paragraphs?.map((paragraph, index) => (
            // <p className='py-4 pr-10 text-black/70 text-[14px] sm:px-10' key={index}>
            //   {paragraph}
            // </p>
            <Text
              id={paragraph}
              content={data[paragraph]}
              className='py-4 pr-10 text-black/70 text-[14px] sm:px-10'
              tag='p'
            />
          ))}
        </div>
      </WrapperContent>

      <WrapperContent title='' isBgTransparent>
        <Heading
          title={data[perksSection.headingTitle]}
          fontSize={28}
          breakLineAt={6}
          className='pl-2 leading-[28px]'
          color='rgba(255,255,255,.9)'
        />
        <div className='grid grid-cols-4 grid-rows-1 gap-x-2 sm:grid-cols-1 sm:gap-y-2'>
          {perksSection?.itemsData?.map((item, index) => (
            <div key={index} className='py-2 grow text-ellipsis text-white/80 p-2 rounded-md bg-mainColor text-justify'>
              {/* <p className='text-[20px] leading-[28px] min-h-[70px] flex justify-start md:text-left'>{item.title}</p> */}
              <Text
                id={item.title}
                tag='p'
                content={data[item.title]}
                className='text-[20px] leading-[28px] min-h-[70px] flex justify-start md:text-left'
              />
              {/* <p className='text-[14px] md:text-left'>{item.descriptions}</p> */}
              <Text
                id={item.descriptions}
                tag='p'
                content={data[item.descriptions]}
                className='text-[14px] md:text-left'
              />
            </div>
          ))}
        </div>
      </WrapperContent>

      <WrapperContent title={data[driveStepsSection.wrapperTitle]} textAlign='center'>
        <Heading
          title={data[driveStepsSection.headingTitle]}
          fontSize={28}
          breakLineAt={6}
          className='text-center leading-[28px]'
        />
        <div className='flex justify-between sm:flex-col-reverse'>
          <div className='w-1/2 flex justify-center items-center sm:w-full'>
            {/* <img className='w-[70%] rounded-md' src={driveStepsSection.img} alt='img left...' /> */}
            <Image
              id={driveStepsSection.img}
              alt='image-thumb'
              src={data[driveStepsSection.img]}
              className='rounded-[20px] w-[90%]'
            />
          </div>
          <CustomeStep
            textClassName='text-justify pr-10'
            classname='w-1/2 sm:w-full'
            icons={[<Filter1OutlinedIcon />, <Filter2OutlinedIcon />, <Filter3OutlinedIcon />]}
            items={driveStepsSection.itemsData}
          />
        </div>
      </WrapperContent>

      <WrapperContent title={data[getStatedSection.wrapperContent]} textAlign='center' fontSize={25} isBgTransparent>
        <div className='text-center flex items-center flex-col text-black/80'>
          <div className='py-10'>
            {getStatedSection.contents?.map((sentence, index) => (
              // <p key={index} className='leading-[22px] text-white/80 text-[15px]'>
              //   {sentence}
              // </p>
              <Text key={iDGenerator('txt')} id={sentence} tag='p' content={data[sentence]} className='' />
            ))}
          </div>
          <div className='flex pt-4 text-white/80 sm:flex-col'>
            {getStatedSection.buttonTitle?.map((button, index) => (
              <div
                key={index}
                className='first:bg-mainColor first:mr-4 last:bg-black px-6 py-4 rounded-lg flex flex-col items-start  sm:mb-3'
              >
                {/* <p className='uppercase leading-[13px] text-[11px]'>{button.subTitle}</p> */}
                <Text id={button.subTitle} tag='p' content={data[button.subTitle]} className='' />
                <Button className='text-[22px] underline [&>*]:flex' isNext>
                  {/* {button.title} */}
                  <Text id={button.title} tag='span' content={data[button.title]} className='' />
                </Button>
              </div>
            ))}
          </div>
        </div>
      </WrapperContent>

      <WrapperContent title='explore hosting' isUpperCase textAlign='center' classname='mt-4' isBgTransparent>
        <ExploreHosting
          className=''
          isEx={false}
          DataExploreHostingStyle={DataExploreHostingDriveWithUber}
          DataExploreHostingText={driveWithUberExploreHosting.itemData}
          img={driveWithUberExploreHosting.img}
        />
      </WrapperContent>

      <WrapperContent
        title={data[diriveQAndASection.wrapperTitle]}
        textAlign='left'
        titlePadding={164}
        classname='flex justify-center'
        isBgTransparent
      >
        <div className='w-[70%] mt-4'>
          <CustomeCommonQuestions
            paddingRightSingleCommonQuestion={10}
            titleClassName='text-white/90 text-bold text-[18px]'
            items={diriveQAndASection.itemsData}
          />
        </div>
      </WrapperContent>
    </div>
  )
}

export default DriveWithUber
