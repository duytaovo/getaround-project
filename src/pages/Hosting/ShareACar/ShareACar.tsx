import BodyTop from './components/BodyTop'
import ExploreHosting from 'src/components/ExploreHosting/ExploreHosting'
import { DataExploreHostingShareCar } from 'src/items/ExploreHosting/DataExploreHostingStyle'
import CustomForm from './components/CustomForm/CustomForm'
import CustomeStep from 'src/components/CustomeStep/CustomeStep'
import TimeToLeaveOutlinedIcon from '@mui/icons-material/TimeToLeaveOutlined'
import LinkedCameraOutlinedIcon from '@mui/icons-material/LinkedCameraOutlined'
import FileDownloadOutlinedIcon from '@mui/icons-material/FileDownloadOutlined'
import CustomSlider from 'src/components/Slider'
import ContentSlider from './components/ContentSlider/ContentSlider'
import Support from './components/Support/Support'
import VerifiedOutlinedIcon from '@mui/icons-material/VerifiedOutlined'
import WrapperContent from 'src/components/WrapperContent/WrapperContent'
import CustomeCommonQuestions from 'src/components/CustomeCommonQuestions/CustomeCommonQuestions'
import LocalOfferIcon from '@mui/icons-material/LocalOffer'
import Carousel_Review_Comunity from '../HostComunity/components/Carousel/Carousel_Review'
import BodyBanner from './components/BodyBanner/BodyBanner'
import BodyCard from './components/BodyCard/BodyCard'
import { useAppDispatch, useAppSelector } from 'src/hooks/useRedux'
import GetAroundYourBack from './components/GetAroundYourBack/GetAroundYourBack'
import OurHost from './components/OurHost/OurHost'
import { Text } from 'src/components/Edition/Text'
import { Image } from 'src/components/Edition/Image'
import { _getData } from 'src/store/dataSlice'
import { Helmet } from 'react-helmet-async'

const ShareACar = () => {
  const {
    bodyTop,
    bodyBottom,
    ourHost,
    commonQuestionImg,
    getAroundYourBack,
    step,
    exploreHosting,
    commonQuestion,
    bodyBannerCard,
    bodyCardBottom,
    bodyCardTop,
    carouselReview,
    contentSlider,
    sliders,
    support,
    wrapperTitle,
    imgExploreHosting,
    exploreHosting_bottom,
    commonQuestionBottom
  } = useAppSelector((state) => state.shareAcar)

  const data = useAppSelector((state) => state.data.data)

  const dispatch = useAppDispatch()

  return (
    <div className='pt-[84px]'>
      {/* start top */}
      <Helmet>
        <title>Share a car </title>
        <meta name='description' content='Trang chia sẻ xe' />
      </Helmet>
      <div className='mb-bottom transition-all duration-1000 delay-100'>
        <BodyTop prefix='top' item={bodyTop} />
      </div>
      {/* end top */}
      {/* start body 1 */}
      <div className='mb-[200px]'>
        <ExploreHosting
          img={imgExploreHosting.img_top}
          DataExploreHostingStyle={DataExploreHostingShareCar}
          DataExploreHostingText={exploreHosting}
          isEx={false}
          className={''}
        />
      </div>
      <div className='mb-bottom' id='getstarted'>
        <div className='flex items-center justify-between space-x-1 lg:bg-transparent flex-wrap lg:flex-col lg:space-y-3 flex-auto rounded-2xl '>
          <div className='w-[45%] p-4 h-full lg:w-full bg-white lg:bg-white  rounded-xl'>
            <CustomForm />
          </div>
          <div className='w-1/2 py-6 lg:w-full lg:bg-white rounded-xl text-white'>
            <CustomeStep
              classname='text-textCustom lg:text-black'
              textClassName='text-textCustom lg:text-black'
              items={step}
              titleClassName='text-textCustom lg:text-black'
              icons={[<TimeToLeaveOutlinedIcon />, <LinkedCameraOutlinedIcon />, <FileDownloadOutlinedIcon />]}
            />
          </div>
        </div>
      </div>
      {/* end body1 */}
      {/* start body 2 */}

      <div className=' rounded-2xl p-2  mb-bottom flex md:flex-col-reverse'>
        <div className='w-1/2 md:w-full md:flex md:justify-around md:mt-3'>
          <div className='w-[80%] '>
            <CustomSlider
              classNameImage='rounded-lg h-[160px] w-[400px] '
              classNameTitle='text-[25px] text-mainColor ml-2'
              classNameContent=' text-[25px] ml-2 text-textCustom'
              data={sliders}
              isTime
              classNameTime='text-mainColor ml-2 text-base mt-[19px]'
              isTitle={true}
              isContent={true}
              numberItem={1}
              numberItemScroll={1}
              className='flex-col-reverse'
              breakPoint={[1, 1, 1, 1]}
              breakPointScroll={[1, 1, 1, 1]}
              prefix={'sliderShareACar'}
            />
          </div>
        </div>
        <div className='w-1/2 md:w-full md:mb-2'>
          <ContentSlider item={contentSlider} classNameTitle='text-[48px]' classNameContent='text-textCustom' />
        </div>
      </div>
      {/* end body2 */}
      {/* start body banner */}

      <div className=' p-5 mb-bottom'>
        <GetAroundYourBack item={getAroundYourBack} />
        <div className='lg:flex lg:flex-col '>
          <div className='flex gap-10 mt-3 h-2/3 mb-5  lg:flex-col'>
            <div className='w-[70%]  lg:w-full  '>
              <BodyBanner item={bodyBannerCard} />
            </div>
            <div className='w-[30%] flex  lg:w-full  justify-between'>
              <BodyCard
                prefix='bodyCardTop'
                item={bodyCardTop}
                classNameTitle='py-2 text-black'
                classNameContent='text-black text-[15px]'
                icon={<VerifiedOutlinedIcon className=' text-mainColor leading-[22.4px] mb-4 ' />}
              />
            </div>
          </div>
          <div className='flex gap-10 mt-4 items-center lg:flex-col'>
            <div className='w-[70%] lg:w-full  h-max'>
              <Support item={support} />
              {/* <BodyBanner /> */}
            </div>
            <div className='w-[30%] lg:w-full  h-max'>
              <BodyCard
                prefix='bodyCardBottom'
                item={bodyCardBottom}
                classNameTitle='text-mainColor py-2'
                classNameContent='text-black/60 leading-[22.4px] text-bold  font-medium '
                icon={<LocalOfferIcon className='text-mainColor leading-[22.4px] mb-4' />}
              />
            </div>
          </div>
        </div>
      </div>
      {/* end body banner */}
      {/* start collapse 1 */}
      {/* <WrapperContent titlePadding={5} textAlign='left' title='Learn more about the benefits of Getaround'> */}
      <div className=' rounded-2xl mb-bottom'>
        <Text
          id={`txt-wrapperTitle-shareACar-01`}
          tag='h4'
          content={data[wrapperTitle[0].title] || ''}
          className={`text-[32px] font-medium tracking-tight leading-5 `}
        />
        {/* <h2 className='text-[32px] font-medium tracking-tight leading-5'>{wrapperTitle[0].title}</h2> */}
        <WrapperContent titlePadding={5} textAlign='left' title={''} isBgTransparent={true} fontSize={20}>
          <div className='flex md:flex-col'>
            <CustomeCommonQuestions
              titleClassName='text-white/90 text-bold text-[18px]'
              items={commonQuestion}
              className='w-1/2 md:w-full'
            />
            <div className='w-1/2 md:w-full md:mt-2 md:p-0 p-4 flex justify-center bg-white items-center  rounded-2xl ml-4 md:ml-0'>
              {/* <img width='50% md:lg' src={commonQuestionImg.img} alt='' /> */}
              <Image
                id={`img_commonQuestion-shareACar`}
                className='w-full md:lg object-contain  '
                src={data[commonQuestionImg.img || '']}
                alt='hosting-shareAcar'
              />
            </div>
          </div>
        </WrapperContent>
      </div>
      {/* </WrapperContent> */}
      {/* end collapse */}

      <div className='mb-bottom'>
        <ExploreHosting
          img={imgExploreHosting.img_bottom}
          DataExploreHostingStyle={DataExploreHostingShareCar}
          DataExploreHostingText={exploreHosting_bottom}
          isEx={false}
          className=''
        />
      </div>
      {/* start carousel review */}
      <div className='mb-bottom'>
        <div>
          <OurHost item={ourHost} />
        </div>
        <Carousel_Review_Comunity
          prefix='reviewComunity'
          className='m-4'
          data={carouselReview}
          numberItem={2}
          numberItemScroll={1}
          classNameContent='text-textCustomBgWhite'
        />
      </div>
      {/* end carousel review */}
      {/* start start hoisting increase income */}
      <div className='mb-bottom'>
        <BodyTop prefix='bottom' item={bodyBottom} className='flex-row-reverse ' />
      </div>
      {/* end start hoisting increase income */}

      {/* start collapse 2 */}
      {/* <WrapperContent titlePadding={5} textAlign='left' title='Learn more about the benefits of Getaround'> */}
      <div className='xl:flex xl:justify-center flex-col  rounded-2xl mb-bottom   text-black'>
        <Text
          id={`txt-wrapperTitle-shareACar-02`}
          tag='h2'
          content={data[wrapperTitle[1].title || '']}
          className={`flex  text-mainColor text-[26px] leading-8 `}
        />
        {/* <h2 className='flex  text-mainColor text-[26px] leading-8'>{wrapperTitle[1].title}</h2> */}
        <WrapperContent
          titlePadding={5}
          textAlign='left'
          title={''}
          isBgTransparent={true}
          fontSize={22}
          isUpperCase={false}
        >
          <div className='flex'>
            <CustomeCommonQuestions
              titleClassName='text-white/90 text-bold text-[18px]'
              items={commonQuestionBottom}
              className='w-full'
            />
          </div>
        </WrapperContent>
      </div>
      {/* </WrapperContent> */}
      {/* end collapse 2 */}
    </div>
  )
}

export default ShareACar
