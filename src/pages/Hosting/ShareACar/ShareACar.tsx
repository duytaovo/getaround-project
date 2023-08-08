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
import { useDispatch } from 'react-redux'
import { IBodyTop, IItemSlider } from 'src/types/hosting_shareACar.type'
import { addSlider, updateBodyTop, updateSlider } from 'src/store/hosting/share_a_car/shareACarSlice'
import { useAppSelector } from 'src/hooks/useRedux'
import GetAroundYourBack from './components/GetAroundYourBack/GetAroundYourBack'
import OurHost from './components/OurHost/OurHost'

const ShareACar = () => {
  const { bodyTop,ourHost,getAroundYourBack,step,exploreHosting,commonQuestion, bodyBannerCard, bodyCardBottom, bodyCardTop, carouselReview, contentSlider, sliders, support } =
  useAppSelector((state) => state.shareAcar)
  const dispatch = useDispatch()

  const handleBodyTopChange = (newBodyTop: IBodyTop) => {
    dispatch(updateBodyTop(newBodyTop))
  }

  const handleAddSlider = (newSlider: IItemSlider) => {
    dispatch(addSlider(newSlider))
  }

  const handleSliderChange = (index: number, newSlider: IItemSlider) => {
    dispatch(updateSlider({ index, slider: newSlider }))
  }

  return (
    <div className='pt-[84px]'>
      {/* start top */}
      <div className='mb-bottom transition-all duration-1000 delay-100'>
        <BodyTop item={bodyTop} />
      </div>
      {/* end top */}
      {/* start body 1 */}
      <div className='mb-[200px]'>
        <ExploreHosting
          img={
            'https://assets-global.website-files.com/5c16e90c8f6920b098f834e5/63c5b458858ce546324e6786_636056a89c0f36b634f4dc4e_AdobeStock_488832115%20copiar.jpg'
          }
          DataExploreHostingStyle={DataExploreHostingShareCar}
          DataExploreHostingText={exploreHosting}
          isEx={false}
          className={''}
        />
      </div>
      <div className='mb-bottom' id='getstarted'>
        <div className='flex items-center justify-between bg-white md:bg-transparent flex-wrap md:flex-col md:space-y-2 flex-auto rounded-2xl '>
          <div className='w-1/2 p-4 h-full md:w-full md:bg-white md:lg rounded-xl'>
            <CustomForm />
          </div>
          <div className='w-1/2 py-6 md:w-full md:bg-white'>
            <CustomeStep
              classname='text-white'
              items={step}
              icons={[<TimeToLeaveOutlinedIcon />, <LinkedCameraOutlinedIcon />, <FileDownloadOutlinedIcon />]}
            />
          </div>
        </div>
      </div>
      {/* end body1 */}
      {/* start body 2 */}

      <div className='  rounded-2xl p-2  mb-bottom flex md:flex-col-reverse'>
        <div className='w-1/2 md:w-full'>
          <div className='w-[70%] md:w-full'>
            <CustomSlider
              classNameImage='rounded-lg'
              classNameTitle='text-[25px] text-mainColor ml-2'
              classNameContent=' text-[25px] ml-2'
              data={sliders}
              isTime
              classNameTime='text-mainColor ml-2 text-base mt-[19px]'
              isTitle={true}
              isContent={true}
              numberItem={1}
              numberItemScroll={1}
              className='flex-col-reverse'
              breakPoint={[1,1,2,2]}
              breakPointScroll={[1,1,1,1]}
            />
          </div>
        </div>
        <div className='w-1/2 md:w-[60%]'>
          <ContentSlider item={contentSlider} classNameTitle='text-[48px]' classNameContent='text-white' />
        </div>
      </div>
      {/* end body2 */}
      {/* start body banner */}

      <div className=' p-5 mb-bottom'>
       <GetAroundYourBack item={getAroundYourBack}/>
        <div className='md:flex md:flex-col '>
          <div className='flex gap-10 mt-3 h-full mb-5  md:flex-col'>
            <div className='w-[70%] lg:w-1/2 md:w-full  '>
              <BodyBanner item={bodyBannerCard} />
            </div>
            <div className='w-[30%] lg:w-1/2 md:w-full h-full justify-between'>
              <BodyCard
                item={bodyCardTop}
                classNameTitle='py-2 text-black'
                classNameContent='text-black'
                icon={<VerifiedOutlinedIcon className=' text-mainColor leading-[22.4px] mb-4 ' />}
              />
            </div>
          </div>
          <div className='flex gap-10 mt-3 items-center '>
            <div className='w-[70%] md:w-full  h-max'>
              <Support item={support} />
              {/* <BodyBanner /> */}
            </div>
            <div className='w-[30%] md:w-full  h-max'>
              <BodyCard
                item={bodyCardBottom}
                classNameTitle='text-mainColor py-2'
                classNameContent='text-black'
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
        <h2 className='text-[32px] font-medium tracking-tight leading-5'>...and more</h2>
        <WrapperContent
          titlePadding={5}
          textAlign='left'
          title=''
          isBgTransparent={true}
          fontSize={12}
        >
          <div className='flex'>
            <CustomeCommonQuestions
              titleClassName='text-white/90 text-bold text-[18px]'
              items={commonQuestion}
              className='w-1/2'
            />
            <div className='w-1/2 p-4 flex justify-center items-center bg-white rounded-2xl ml-4'>
              <img
                width='50%'
                src={
                  'https://assets-global.website-files.com/5c16e90c8f6920b098f834e5/63ea84651bd74658a3f37eac_ga-illustration-2.svg'
                }
                alt=''
              />
            </div>
          </div>
        </WrapperContent>
      </div>
      {/* </WrapperContent> */}
      {/* end collapse */}

      <div className='mb-bottom'>
        <ExploreHosting
          img={
            'https://assets-global.website-files.com/5c16e90c8f6920b098f834e5/63c5b458858ce546324e6786_636056a89c0f36b634f4dc4e_AdobeStock_488832115%20copiar.jpg'
          }
          DataExploreHostingStyle={DataExploreHostingShareCar}
          DataExploreHostingText={exploreHosting}
          isEx={false}
          className=''
        />
      </div>
      {/* start carousel review */}
      <div className='mb-bottom'>
        <div>
         <OurHost item={ourHost}/>
        </div>
        <Carousel_Review_Comunity
          className='m-4'
          data={carouselReview}
          numberItem={2}
          numberItemScroll={1}
          classNameContent='text-[#727171]'
        />
      </div>
      {/* end carousel review */}
      {/* start start hoisting increase income */}
      <div className='mb-bottom'>
        <BodyTop item={bodyTop} className='flex-row-reverse ' />
      </div>
      {/* end start hoisting increase income */}

      {/* start collapse 2 */}
      {/* <WrapperContent titlePadding={5} textAlign='left' title='Learn more about the benefits of Getaround'> */}
      <div className=' w-[80%]   rounded-2xl mb-bottom   text-black'>
        <h2 className='flex justify-center text-mainColor text-[26px] leading-8'>...Need more info? Check out FAQs.</h2>
        <WrapperContent
          titlePadding={5}
          textAlign='left'
          title='Learn more about the benefits of Getaround'
          isBgTransparent={true}
          fontSize={12}
        >
          <div className='flex'>
            <CustomeCommonQuestions
              titleClassName='text-white/90 text-bold text-[18px]'
              items={commonQuestion}
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
