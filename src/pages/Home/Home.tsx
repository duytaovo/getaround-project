import React from 'react'
import { CustomeStepItems } from 'src/items/CustomeStepItem/CustomeStepItem'
import { items } from 'src/items/CommonQuestionItems/CommonQuestionItems'
import { ItemSlider } from '../../items/SliderItem/Slider'
import { ItemCarousel } from 'src/items/Carousel/Carouseltems'
import CommonQuestionRightImg from 'src/assets/images/commonQuestionRight.svg'
import { DataConnectedCarSharingHome } from 'src/items/ConnectedCarSharing/DataConnectedCarSharing'
import { DataExploreHostingHomeText } from 'src/items/ExploreHosting/DataExploreHostingText'
import HomeHeroSection from './home_hero_section/HomeHeroSection'
import CustomeStep from 'src/components/CustomeStep/CustomeStep'
import WrapperContent from 'src/components/WrapperContent/WrapperContent'
import Heading from 'src/components/Heading/Heading'
import CustomeCommonQuestions from 'src/components/CustomeCommonQuestions/CustomeCommonQuestions'
import CustomeSlider from '../../components/Slider/Slider'
import { SmileOutlined, SolutionOutlined, UserOutlined } from '@ant-design/icons'
import CustomeCarousel from 'src/components/Carousel/index'
import ConnectedCarSharing from 'src/components/ConnectedCarSharing/ConnectedCarSharing'
import { DataExploreHostingHome } from 'src/items/ExploreHosting/DataExploreHostingStyle'
import ExploreHosting from 'src/components/ExploreHosting/ExploreHosting'
import { useAppSelector } from 'src/hooks/useRedux'
import { Image } from 'src/components/Edition/Image'

type Props = {}

const Home = (props: Props) => {
  const homePageData = useAppSelector((state) => state.homePageData)
  // console.log(homePageData)
  return (
    <div className='overflow-x-hidden'>
      <HomeHeroSection
        title={homePageData.heroSection.title}
        img={homePageData.heroSection.img}
        addressPlaceholder={homePageData.heroSection.addressPlaceholder}
        buttonSearchText={homePageData.heroSection.buttonSearchText}
        mainText={homePageData.heroSection.mainText}
        datePickerPlaceholder={homePageData.heroSection.datePickerPlaceholder}
        endDateTimePikerTitle={homePageData.heroSection.endDateTimePikerTitle}
        startDateTimePikerTitle={homePageData.heroSection.startDateTimePikerTitle}
        timePickerPlaceholder={homePageData.heroSection.timePickerPlaceholder}
      />

      <WrapperContent
        title={homePageData.perfectCarSliderSection.wrapperTitle}
        textAlign='center'
        isBgTransparent={true}
      >
        <div className='w-[70%] mx-auto pt-4'>
          <CustomeSlider
            classNameTitle='text-center py-2 text-white/80 justify-center'
            className='bg-mainColor/20 flex flex-col items-center justify-center
             rounded-md overflow-hidden h-full p-1'
            classNameImage='rounded-md w-[100%] h-[100%] object-cover'
            numberItem={4}
            numberItemScroll={1}
            isTitle={true}
            data={homePageData.perfectCarSliderSection.itemsData}
          />
        </div>
      </WrapperContent>

      <section title='' className='my-14 w-[70%] mx-auto mb-bottom'>
        <CustomeCarousel.Carousel_Introduce
          classNameHeader='text-[11px] text-mainColor'
          classNameTitle='text-[32px] text-white/60 text-bold tracking-[-0.48px] leading-[34px] py-4'
          classNameContent='leading-[22px] text-white/60'
          className='w-full flex justify-between bg-black p-2 bg-mainColor/20 rounded-md'
          classNameImage='w-1/2 rounded-md'
          numberItem={1}
          numberItemScroll={1}
          data={homePageData.homeIntoduceCarouselSection}
        />
      </section>

      <WrapperContent
        title={homePageData.sharingMaketPlaceSection.wrapperTitle}
        textAlign='center'
        isBgTransparent={true}
      >
        <ConnectedCarSharing DataConnectedCarSharingHome={homePageData.sharingMaketPlaceSection.itemsData} />
      </WrapperContent>

      <WrapperContent textAlign='center' title={homePageData.homeStepSection.wrapperTitle} classname='flex flex-col'>
        <Heading title={homePageData.homeStepSection.heading} breakLineAt={3} fontSize={30} className='text-center' />
        <div className='flex justify-center px-[36px] xl:flex-col-reverse'>
          <div className='w-1/2 flex justify-center xl:w-full'>
            {/* <img className='object-contain h-[500px]' src={homePageData.homeStepSection.img} alt='ss' /> */}
            <Image id='img-id' className='object-contain h-[500px]' src={homePageData.homeStepSection.img} alt='ss' />
          </div>

          <CustomeStep
            icons={[<UserOutlined />, <SolutionOutlined />, <SmileOutlined />]}
            classname='w-1/2 xl:w-full'
            textClassName='text-justify'
            items={homePageData.homeStepSection.itemsData}
          />
        </div>
      </WrapperContent>

      {/* <WrapperContent title='TESTIMONIALS' textAlign='center' classname='flex flex-col' isBgTransparent>
        <Heading title='Hear from our guests' breakLineAt={4} fontSize={30} className='text-center' />
        <div className=''>
          <div className='bg-red-500 w-1/2'>
            <CustomeCarousel.Carousel_Review
              classNameImage='hidden'
              className='bg-white/80'
              classNameContent='bg-mainColor w-[200px]'
              data={ItemCarousel}
              numberItem={1}
              numberItemScroll={1}
            />
          </div>
          <div>sadhsakj</div>
        </div>
      </WrapperContent> */}

      <WrapperContent
        title={homePageData.exploreHostingSection.wrapperTitle}
        textAlign='center'
        classname='pt-4'
        isBgTransparent
      >
        <ExploreHosting
          DataExploreHostingStyle={DataExploreHostingHome}
          DataExploreHostingText={homePageData.exploreHostingSection.itemData}
          img={homePageData.exploreHostingSection.img}
          className='flex-col items-center flex w-full'
        />
      </WrapperContent>
      {/* <h1 contentEditable={true}>content test</h1> */}

      <WrapperContent title={homePageData.localFavouriteSection.wrapperTitle} isBgTransparent textAlign='center'>
        <Heading
          title={homePageData.localFavouriteSection.heading}
          fontSize={30}
          breakLineAt={4}
          className='text-center'
          color='rgba(255,255,255, .8)'
        />
        <div className='mx-auto pt-4 w-[60%] md:w-full'>
          <CustomeSlider
            numberItem={5}
            numberItemScroll={4}
            isTitle
            classNameImage='w-[100px] h-[100px] rounded-full object-cover'
            className='flex flex-col justify-center items-center'
            classNameTitle='pt-3 text-white/80'
            data={homePageData.localFavouriteSection.itemsData}
          />
        </div>
      </WrapperContent>

      <WrapperContent title={homePageData.blogSilerSection.wrapperTitle} isBgTransparent textAlign='center'>
        <Heading
          title={homePageData.blogSilerSection.heading}
          fontSize={30}
          breakLineAt={6}
          className='text-center'
          color='rgba(255,255,255, .8)'
        />
        <div className='mx-auto w-full h-fit'>
          <CustomeSlider
            numberItem={3}
            numberItemScroll={1}
            className='bg-mainColor/20 rounded-md h-fit p-2 overflow-hidden object-cover'
            classNameImage='rounded-md w-full'
            classNameTitle='text-[14px] leading-[22px] text-white/40 pt-6'
            classNameContent='text-white/90 text-[24px] leading-[25px] break-words py-6'
            classNameTime='text-[14px] leading-[22px] text-white/40'
            isContent
            isTime
            isTitle
            data={homePageData.blogSilerSection.itemsData}
          />
        </div>
      </WrapperContent>

      <WrapperContent
        titlePadding={5}
        textAlign='left'
        title={homePageData.qAndASection.wrapperTitle}
        isBgTransparent={true}
        fontSize={12}
      >
        <div className='flex xl:flex-col'>
          <CustomeCommonQuestions
            titleClassName='text-white/90 text-bold text-[18px]'
            items={homePageData.qAndASection.itemsData}
            className='w-1/2 xl:w-full'
            paddingRightSingleCommonQuestion={10}
          />
          <div className='w-1/2 p-4 flex justify-center items-center xl:w-full'>
            <img width='50%' src={homePageData.qAndASection.img} alt='' />
          </div>
        </div>
      </WrapperContent>
    </div>
  )
}

export default Home
