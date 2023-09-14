import React, { useEffect } from 'react'
import HomeHeroSection from './home_hero_section/HomeHeroSection'
import Filter1OutlinedIcon from '@mui/icons-material/Filter1Outlined'
import Filter2OutlinedIcon from '@mui/icons-material/Filter2Outlined'
import Filter3OutlinedIcon from '@mui/icons-material/Filter3Outlined'
import CustomeStep from 'src/components/CustomeStep/CustomeStep'
import WrapperContent from 'src/components/WrapperContent/WrapperContent'
import Heading from 'src/components/Heading/Heading'
import CustomeCommonQuestions from 'src/components/CustomeCommonQuestions/CustomeCommonQuestions'
import CustomeSlider from '../../components/Slider/Slider'
import CustomeCarousel from 'src/components/Carousel/index'
import ConnectedCarSharing from 'src/components/ConnectedCarSharing/ConnectedCarSharing'
import { DataExploreHostingHome } from 'src/items/ExploreHosting/DataExploreHostingStyle'
import ExploreHosting from 'src/components/ExploreHosting/ExploreHosting'
import { useAppDispatch, useAppSelector } from 'src/hooks/useRedux'
import { Image } from 'src/components/Edition/Image'
import { _getData } from 'src/store/dataSlice'
import { Helmet } from 'react-helmet-async'
import SlideBookCar from './SlideBookCar/SlideBookCar'
import ItemBrand from './ItemBrand/ItemBrand'
import SlideLeftRightHome from './SlideLeftRightHome/SlideLeftRightHome'
import { useDispatch, useSelector } from 'react-redux'
import { RootState } from 'src/store/store'
import About_Area from './About_Area/About_Area'
import FaqQuestion from './FaqQuestion/FaqQuestion'
import RateTaxi from './RateTaxi/RateTaxi'
import FormBookTaxi from './FormBookTaxi/FormBookTaxi'
import { RightOutlined, LeftOutlined } from '@ant-design/icons'
import UpdateNews from './UpdateNews/UpdateNews'
type Props = {}

const Home = (props: Props) => {
  const homePageData = useAppSelector((state) => state.homePageData)
  const data = useAppSelector((state) => state.data.data)

  const dispatch = useAppDispatch()

  useEffect(() => {}, [dispatch])
  const {
    ExploreHowItWork,
    ProprietaryHowItWork,
    HearCommunityHowItWork,
    SlideLeftRightHowItWork,
    SlideHowItWorkR,
    ImgExploreHowItWork,
    ImgSlideLeftRight_HowItWork,
    customeSteps,
    titleimgSide
  } = useSelector((state: RootState) => state.howitwork)
  const data1 = useAppSelector((state) => state.data.data)
  const howitwork = useAppSelector((state) => state.howitwork)
  return (
    <div className=''>
      <Helmet>
        <title>Home </title>
        <meta name='description' content='Trang chủ tìm kiếm và đặt xe' />
      </Helmet>
      <HomeHeroSection
        title={homePageData.heroSection.title}
        mainText={homePageData.heroSection.mainText}
        startDateTimePikerTitle={homePageData.heroSection.startDateTimePikerTitle}
        endDateTimePikerTitle={homePageData.heroSection.endDateTimePikerTitle}
        buttonSearchText={homePageData.heroSection.buttonSearchText}
        img={homePageData.heroSection.img}
        addressPlaceholder={homePageData.heroSection.addressPlaceholder}
        datePickerPlaceholder={homePageData.heroSection.datePickerPlaceholder}
        timePickerPlaceholder={homePageData.heroSection.timePickerPlaceholder}
      />
      {/* <ConnectedCarSharing
        DataConnectedCarSharingHome={homePageData.ConnectedCarSharingR}
        className={'flex-col items-stretch flex py-10 sm:py-3'}
      /> */}
      <ItemBrand
        DataConnectedCarSharingHome={homePageData.ItemBrandR}
        className={'flex-col items-stretch flex py-10 sm:py-3'}
      />
      <SlideLeftRightHome
        Data={homePageData.SlideLeftRightHome}
        img={data[homePageData.ImgSlideLeftRight_Home.img]}
        mainTitle={data[ImgSlideLeftRight_HowItWork.mainTitle]}
        idTitle={ImgSlideLeftRight_HowItWork.mainTitle}
        idimg={ImgSlideLeftRight_HowItWork.img}
      />
      <About_Area />
      <div style={{ height: 'full', width: 'full' }}>
        <div className='container'>
          <div className='title-area text-center'>
            <span className='sub-title'>
              Choose Your Taxi<span className='double-line'></span>
            </span>
            <h2 className='sec-title'>Available Our Taxi</h2>
          </div>
          <div className='mx-auto w-full h-fit' style={{ marginBottom: '100px' }}>
            <SlideBookCar
              prefix='blogSlider'
              breakPointScroll={[1, 2, 2, 2]}
              breakPoint={[1, 2, 3, 3]}
              numberItem={3}
              numberItemScroll={1}
              classNameContainer='px-6'
              className='bg-white/75 rounded-md p-2 overflow-hidden object-cover h-[360px]'
              classNameImage='rounded-md w-full h-[160px] object-cover'
              classNameTitle='text-[14px] leading-[22px]  pt-6'
              classNameContent=' text-[24px] leading-[25px] break-words py-6'
              classNameTime='text-[14px] leading-[22px] '
              isContent={true}
              isTime={true}
              isTitle={true}
              data={homePageData.blogSilerSection.itemsData}
            />
          </div>
        </div>
      </div>
      {/* <WrapperContent
        title={homePageData.perfectCarSliderSection.wrapperTitle}
        textAlign='center'
        isBgTransparent={true}
        classname='w-full'
      >
        <div className='mx-auto pt-4'>
          <CustomeSlider
            breakPointScroll={[1, 1, 1, 1]}
            breakPoint={[2, 3, 3, 5]}
            classNameContainer='px-6'
            classNameTitle='text-center py-2 text-textMainColor justify-center font-semibold'
            className='bg-white rounded-md h-fit p-1 box-border'
            classNameImage='rounded-md h-[100px] object-cover w-full'
            numberItem={5}
            numberItemScroll={1}
            isTitle={true}
            data={homePageData.perfectCarSliderSection.itemsData}
            prefix='sliderHome'
            speed={1000}
          />
        </div>
      </WrapperContent>

      <section title='' className='my-14 w-[90%] lg:w-[90%] md:w-full h-fit mx-auto mb-bottom'>
        <CustomeCarousel.Carousel_Introduce
          classNameHeader='text-[11px] text-mainColor'
          classNameTitle='text-[32px] text-textMainColor text-bold tracking-[-0.48px] leading-[34px] py-4 md:py-0 sm:text-md'
          classNameContent='leading-[22px] text-textMainColor/70 font-normal sm:text-sm  sm:w-fit'
          className='w-full flex justify-between p-2 bg-white rounded-md md:flex-col-reverse'
          classNameImage='w-1/2 rounded-md mx-auto'
          numberItem={1}
          numberItemScroll={1}
          data={homePageData.homeIntoduceCarouselSection.itemsData}
          prefix='home'
        />
      </section> */}

      {/* <WrapperContent
        title={homePageData.sharingMaketPlaceSection.wrapperTitle}
        textAlign='center'
        isBgTransparent={true}
        classname='z-[10] pt-4'
      >
        <ConnectedCarSharing DataConnectedCarSharingHome={homePageData.sharingMaketPlaceSection.itemsData} />
      </WrapperContent> */}

      {/* <WrapperContent textAlign='center' title={homePageData.homeStepSection.wrapperTitle} classname='flex flex-col'>
        <Heading title={homePageData.homeStepSection.heading} breakLineAt={3} fontSize={30} className='text-center' />
        <div className='flex justify-center px-[36px] xl:px-[7px] xl:flex-col-reverse'>
          <div className='w-1/2 flex justify-center xl:w-full'>
          
            <Image
              alt='Image thumb'
              id={homePageData.homeStepSection.img}
              src={data[homePageData.homeStepSection.img]}
              className='object-contain h-[500px]'
            />
          </div>

          <CustomeStep
            classname='w-1/2 xl:w-full'
            icons={[<Filter1OutlinedIcon />, <Filter2OutlinedIcon />, <Filter3OutlinedIcon />]}
            textClassName='text-textMainColor/80'
            items={homePageData.homeStepSection.itemsData}
            titleClassName='text-mainColor'
          />
        </div>
      </WrapperContent> */}

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

      {/* <WrapperContent
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
      </WrapperContent> */}

      {/* <WrapperContent title={homePageData.localFavouriteSection.wrapperTitle} isBgTransparent textAlign='center'>
        <Heading
          title={homePageData.localFavouriteSection.heading}
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
            isTitle={true}
            classNameContainer='px-4'
            classNameImage='w-[100px] h-[100px] rounded-full object-cover'
            className='flex flex-col justify-center items-center'
            classNameTitle='pt-3 text-white/80'
            data={homePageData.localFavouriteSection.itemsData}
            prefix='home_localFavorite'
          />
        </div>
      </WrapperContent> */}

      {/* <WrapperContent title={homePageData.blogSilerSection.wrapperTitle} isBgTransparent textAlign='center'> */}
      <div style={{ width: '100%' }}>
        <div className=''>
          <div className='row justify-content-center justify-content-lg-between align-items-center'>
            <div className='col-lg-8'>
              <div className='title-area text-center text-lg-start'>
                <span className='sub-title'>Client’s Testimonial</span>
                <h2 className='sec-title'>Our Happy Client’s Review</h2>
              </div>
            </div>
            <div className='col-auto'>
              <div className='sec-btn'>
                <div className='icon-item'>
                  <button className='slick-arrow default'>
                    <LeftOutlined />
                  </button>
                  <button className='slick-arrow default'>
                    <RightOutlined />
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className='mx-auto w-full h-fit' style={{ marginBottom: '100px' }}>
            <CustomeSlider
              prefix='blogSlider'
              breakPointScroll={[1, 2, 2, 2]}
              breakPoint={[1, 2, 3, 3]}
              numberItem={3}
              numberItemScroll={1}
              classNameContainer='px-6'
              className='bg-white/75 rounded-md p-2 overflow-hidden object-cover h-[360px]'
              classNameImage='rounded-md w-full h-[160px] object-cover'
              classNameTitle='text-[14px] leading-[22px]  pt-6'
              classNameContent=' text-[24px] leading-[25px] break-words py-6'
              classNameTime='text-[14px] leading-[22px] '
              isContent={true}
              isTime={true}
              isTitle={true}
              data={homePageData.blogSilerSection.itemsData}
            />
          </div>
        </div>
      </div>
      {/* </WrapperContent> */}

      <FaqQuestion />
      <div style={{ height: 'full', width: 'full' }}>
        <div className='container'>
          <div className='title-area text-center'>
            <span className='sub-title'>
              Our Taxi<span className='double-line'></span>
            </span>
            <h2 className='sec-title text-capitalize' style={{ color: '#3699d3' }}>
              Choose Our Taxi Collection
            </h2>
          </div>
          <div className='nav tab-menu4 style2' id='tab-menu4' role='tablist'>
            <button
              className='active'
              id='nav-one-tab'
              data-bs-toggle='tab'
              data-bs-target='#nav-one'
              type='button'
              role='tab'
              aria-controls='nav-one'
              aria-selected='true'
              style={{ color: 'black' }}
            >
              Town Taxi
            </button>
            <button
              className=''
              id='nav-two-tab'
              data-bs-toggle='tab'
              data-bs-target='#nav-two'
              type='button'
              role='tab'
              aria-controls='nav-two'
              aria-selected='false'
            >
              Limousine Taxi
            </button>
            <button
              className=''
              id='nav-three-tab'
              data-bs-toggle='tab'
              data-bs-target='#nav-three'
              type='button'
              role='tab'
              aria-controls='nav-three'
              aria-selected='false'
              style={{ color: 'black' }}
            >
              Hybrid Taxi
            </button>
          </div>
          <RateTaxi
            prefix='blogSlider'
            breakPointScroll={[1, 2, 2, 2]}
            breakPoint={[1, 2, 3, 3]}
            numberItem={3}
            numberItemScroll={1}
            classNameContainer='px-6'
            className='bg-white/75 rounded-md p-2 overflow-hidden object-cover h-[360px]'
            classNameImage='rounded-md w-full h-[160px] object-cover'
            classNameTitle='text-[14px] leading-[22px]  pt-6'
            classNameContent=' text-[24px] leading-[25px] break-words py-6'
            classNameTime='text-[14px] leading-[22px] '
            isContent={true}
            isTime={true}
            isTitle={true}
            data={homePageData.blogSilerSection.itemsData}
          />
        </div>
      </div>
      <FormBookTaxi />
      <div style={{ height: 'full', width: 'full' }}>
        <div className='container'>
          <div className='title-area text-center'>
            <span className='sub-title'>
              LATEST NEWS UPDATES<span className='double-line'></span>
            </span>
            <h2 className='sec-title'>Our Company News</h2>
          </div>
          <div className='mx-auto w-full h-fit' style={{ marginBottom: '100px' }}>
            <UpdateNews
              prefix='blogSlider'
              breakPointScroll={[1, 2, 2, 2]}
              breakPoint={[1, 2, 3, 3]}
              numberItem={2}
              numberItemScroll={1}
              classNameContainer='px-6'
              className='bg-white/75 rounded-md p-2 overflow-hidden object-cover h-[360px]'
              classNameImage='rounded-md w-full h-[160px] object-cover'
              classNameTitle='text-[14px] leading-[22px]  pt-6'
              classNameContent=' text-[24px] leading-[25px] break-words py-6'
              classNameTime='text-[14px] leading-[22px] '
              isContent={true}
              isTime={true}
              isTitle={true}
              data={homePageData.blogSilerSection.itemsData}
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home
