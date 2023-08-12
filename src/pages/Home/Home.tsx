import React, { useEffect } from 'react'
import { CustomeStepItems } from 'src/items/CustomeStepItem/CustomeStepItem'
import { items } from 'src/items/CommonQuestionItems/CommonQuestionItems'
import { ItemSlider } from '../../items/SliderItem/Slider'
import { ItemCarousel } from 'src/items/Carousel/Carouseltems'
import CommonQuestionRightImg from 'src/assets/images/commonQuestionRight.svg'
import { DataConnectedCarSharingHome } from 'src/items/ConnectedCarSharing/DataConnectedCarSharing'
import { DataExploreHostingHomeText } from 'src/items/ExploreHosting/DataExploreHostingText'
import HomeHeroSection from './home_hero_section/HomeHeroSection'
import Filter1OutlinedIcon from '@mui/icons-material/Filter1Outlined'
import Filter2OutlinedIcon from '@mui/icons-material/Filter2Outlined'
import Filter3OutlinedIcon from '@mui/icons-material/Filter3Outlined'
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
import { useAppDispatch, useAppSelector } from 'src/hooks/useRedux'
import { Text } from 'src/components/Edition/Text'
import { iDGenerator } from 'src/utils/idGenerator'
import { Image } from 'src/components/Edition/Image'
import { _getData } from 'src/store/dataSlice'

type Props = {}

const Home = (props: Props) => {
  const homePageData = useAppSelector((state) => state.homePageData)
  const data = useAppSelector((state) => state.data.data)
  const dispatch = useAppDispatch()

  useEffect(() => {
    dispatch(_getData(''))
  }, [dispatch])

  return (
    <div className='overflow-x-hidden'>
      <HomeHeroSection
        title={data[homePageData.heroSection.title]}
        mainText={data[homePageData.heroSection.mainText]}
        startDateTimePikerTitle={data[homePageData.heroSection.startDateTimePikerTitle]}
        endDateTimePikerTitle={data[homePageData.heroSection.endDateTimePikerTitle]}
        buttonSearchText={data[homePageData.heroSection.buttonSearchText]}
        img={homePageData.heroSection.img}
        addressPlaceholder={homePageData.heroSection.addressPlaceholder}
        datePickerPlaceholder={homePageData.heroSection.datePickerPlaceholder}
        timePickerPlaceholder={homePageData.heroSection.timePickerPlaceholder}
      />

      <WrapperContent
        title={data[homePageData.perfectCarSliderSection.wrapperTitle]}
        textAlign='center'
        isBgTransparent={true}
        classname='w-full'
      >
        <div className='mx-auto pt-4'>
          <CustomeSlider
            breakPointScroll={[1, 1, 1, 1]}
            breakPoint={[2, 3, 3, 5]}
            classNameContainer='px-6 w-full'
            classNameTitle='text-center py-2 text-white/80 justify-center'
            className='bg-mainColor/20 flex flex-col items-center justify-center
             rounded-md overflow-hidden h-full p-1'
            classNameImage='rounded-md w-[100%] h-[100%] object-cover'
            numberItem={5}
            numberItemScroll={1}
            isTitle={true}
            data={homePageData.perfectCarSliderSection.itemsData}
          />
        </div>
      </WrapperContent>

      <section title='' className='my-14 w-[70%] lg:w-[80%] md:w-full h-fit mx-auto mb-bottom'>
        <CustomeCarousel.Carousel_Introduce
          classNameHeader='text-[11px] text-mainColor'
          classNameTitle='text-[32px] text-white/60 text-bold tracking-[-0.48px] leading-[34px] py-4 md:py-0 sm:text-md'
          classNameContent='leading-[22px] text-white/60 sm:text-sm  sm:w-fit'
          className='w-full flex justify-between bg-black p-2 bg-mainColor/20 rounded-md md:flex-col-reverse'
          classNameImage='w-1/2 rounded-md mx-auto'
          numberItem={1}
          numberItemScroll={1}
          data={homePageData.homeIntoduceCarouselSection.itemsData}
        />
      </section>

      <WrapperContent
        title={data[homePageData.sharingMaketPlaceSection.wrapperTitle]}
        textAlign='center'
        isBgTransparent={true}
        classname='z-[10] pt-4'
      >
        <ConnectedCarSharing DataConnectedCarSharingHome={homePageData.sharingMaketPlaceSection.itemsData} />
      </WrapperContent>

      <WrapperContent
        textAlign='center'
        title={data[homePageData.homeStepSection.wrapperTitle]}
        classname='flex flex-col'
      >
        <Heading
          title={data[homePageData.homeStepSection.heading]}
          breakLineAt={3}
          fontSize={30}
          className='text-center'
        />
        <div className='flex justify-center px-[36px] xl:flex-col-reverse'>
          <div className='w-1/2 flex justify-center xl:w-full'>
            {/* <img className='object-contain h-[500px]' src={homePageData.homeStepSection.img} alt='ss' /> */}
            <Image
              alt='Image thumb'
              id={iDGenerator('img')}
              src={homePageData.homeStepSection.img}
              className='object-contain h-[500px]'
            />
          </div>

          <CustomeStep
            classname='w-1/2 xl:w-full'
            icons={[<Filter1OutlinedIcon />, <Filter2OutlinedIcon />, <Filter3OutlinedIcon />]}
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
        title={data[homePageData.exploreHostingSection.wrapperTitle]}
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

      <WrapperContent title={data[homePageData.localFavouriteSection.wrapperTitle]} isBgTransparent textAlign='center'>
        <Heading
          title={data[homePageData.localFavouriteSection.heading]}
          fontSize={30}
          breakLineAt={4}
          className='text-center'
          color='rgba(255,255,255, .8)'
        />
        <div className='mx-auto pt-4 w-[60%] md:w-full'>
          <CustomeSlider
            breakPointScroll={[1, 3, 4, 5]}
            breakPoint={[2, 4, 4, 5]}
            numberItem={5}
            numberItemScroll={4}
            isTitle
            classNameContainer='px-4'
            classNameImage='w-[100px] h-[100px] rounded-full object-cover'
            className='flex flex-col justify-center items-center'
            classNameTitle='pt-3 text-white/80'
            data={homePageData.localFavouriteSection.itemsData}
          />
        </div>
      </WrapperContent>

      <WrapperContent title={data[homePageData.blogSilerSection.wrapperTitle]} isBgTransparent textAlign='center'>
        <Heading
          title={data[homePageData.blogSilerSection.heading]}
          fontSize={30}
          breakLineAt={6}
          className='text-center'
          color='rgba(255,255,255, .8)'
        />
        <div className='mx-auto w-full h-fit'>
          <CustomeSlider
            prefix='home'
            breakPointScroll={[1, 2, 2, 2]}
            breakPoint={[1, 2, 3, 3]}
            numberItem={3}
            numberItemScroll={1}
            classNameContainer='px-6'
            className='bg-mainColor/20 rounded-md p-2 overflow-hidden object-cover h-[360px]'
            classNameImage='rounded-md w-full h-[160px] object-cover'
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
        title={data[homePageData.qAndASection.wrapperTitle]}
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
            {/* <img width='50%' src={homePageData.qAndASection.img} alt='' /> */}
            <Image
              id={homePageData.qAndASection.img || 'xxx'}
              alt='image-thumb'
              src={homePageData.qAndASection.img ? data[homePageData.qAndASection.img] : ''}
              style={{
                width: '100%'
              }}
            />
          </div>
        </div>
      </WrapperContent>
    </div>
  )
}

export default Home
