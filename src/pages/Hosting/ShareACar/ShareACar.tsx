import React from 'react'
import BodyTop from './components/BodyTop'
import ExploreHosting from 'src/components/ExploreHosting/ExploreHosting'
import { DataExploreHostingShareCar } from 'src/items/ExploreHosting/DataExploreHostingStyle'
import { DataExploreHostingShareCarText } from 'src/items/ExploreHosting/DataExploreHostingText'
import CustomForm from './components/CustomForm/CustomForm'
import CustomeStep from 'src/components/CustomeStep/CustomeStep'
import { CustomeStepItems } from 'src/items/CustomeStepItem/CustomeStepItem'
import TimeToLeaveOutlinedIcon from '@mui/icons-material/TimeToLeaveOutlined'
import LinkedCameraOutlinedIcon from '@mui/icons-material/LinkedCameraOutlined'
import FileDownloadOutlinedIcon from '@mui/icons-material/FileDownloadOutlined'
import CustomSlider from 'src/components/Slider'
import { ItemSlider } from 'src/items/SliderItem/Slider'
import ContentSlider from './components/ContentSlider/ContentSlider'
import { ItemContentSlider } from 'src/items/ShareACar/ShareACar'
import BodyBanner, { item } from './components/BodyBanner/BodyBanner'
import BodyCard, { item1, item2 } from './components/BodyCard/BodyCard'
import Support, { itemSupport } from './components/Support/Support'
import VerifiedOutlinedIcon from '@mui/icons-material/VerifiedOutlined'
import WrapperContent from 'src/components/WrapperContent/WrapperContent'
import CustomeCommonQuestions from 'src/components/CustomeCommonQuestions/CustomeCommonQuestions'
import { items } from 'src/items/CommonQuestionItems/CommonQuestionItems'
import Carousel_Review from '../../../components/Carousel/Carousel_Review'
import { ItemCarousel } from 'src/items/Carousel/Carouseltems'
import LocalOfferIcon from '@mui/icons-material/LocalOffer';

type Props = {}

const ShareACar = (props: Props) => {

  return (
    <div className='pt-[84px]'>
      {/* start top */}
      <div className='mb-bottom transition-all duration-1000 delay-100' >
        <BodyTop
          img='https://assets-global.website-files.com/5c16e90c8f6920b098f834e5/63ec0cc59fa56f9bb02ee62f_ga-illustration-13.svg'
          content="
      When you list your car, you're earning money while helping others navigate your city. It's a win-win, and your next big opportunity.
      "
          header='Turn your car
      into extra money'
        />
      </div>
      {/* end top */}
      {/* start body 1 */}
      <div className='mb-bottom'>
        <ExploreHosting
          img={
            'https://assets-global.website-files.com/5c16e90c8f6920b098f834e5/63c5b458858ce546324e6786_636056a89c0f36b634f4dc4e_AdobeStock_488832115%20copiar.jpg'
          }
          DataExploreHostingStyle={DataExploreHostingShareCar}
          DataExploreHostingText={DataExploreHostingShareCarText}
          isEx={false}
        />
      </div>
      <div className='mb-bottom' id='getstarted'>
        <div className='flex items-center justify-between flex-auto rounded-2xl bg-white '>
          <div className='flex-1 p-4'>
            <CustomForm />
          </div>
          <div className='flex-1 py-6 '>
            <CustomeStep
              classname='text-white'
              items={CustomeStepItems}
              icons={[<TimeToLeaveOutlinedIcon />, <LinkedCameraOutlinedIcon />, <FileDownloadOutlinedIcon />]}
            />
          </div>
        </div>
      </div>
      {/* end body1 */}
      {/* start body 2 */}

      <div className='  rounded-2xl p-2  mb-bottom flex'>
        <div className='w-[50%]'>
          <div className='w-[70%]'>
            <CustomSlider
              classNameImage='rounded-lg'
              classNameTitle='text-[25px] text-mainColor ml-2'
              classNameContent=' text-[25px] ml-2'
              data={ItemSlider}
              isTitle={true}
              isContent={true}
              numberItem={1}
              numberItemScroll={1}
              className='flex-col-reverse'
            />
          </div>
        </div>
        <div className=''>
          <ContentSlider item={ItemContentSlider} classNameTitle='text-[48px]' classNameContent='text-white'/>
        </div>
      </div>
      {/* end body2 */}
      {/* start body banner */}

      <div className=' p-5 mb-bottom'>
        <span className='text-mainColor text-sm font-medium flex justify-center mb-2'>PERKS OF HOSTING</span>
        <div className='text-[32px] font-medium tracking-tight leading-8 text-center mb-5'>Getaround has your back</div>
        <div>
          <div className='flex gap-10 mt-3 h-full mb-5'>
            <div className='w-[70%] '>
              <BodyBanner item={item}/>
            </div>
            <div className='w-[30%] h-full justify-between'>
              <BodyCard
              item={item1}
                classNameTitle='py-2 text-black'
                classNameContent='text-black'
                icon={<VerifiedOutlinedIcon className=' text-mainColor leading-[22.4px] mb-4 ' />}
              />
            </div>
          </div>
          <div className='flex gap-10 mt-3 items-center'>
            <div className='w-[70%] h-max'>
              <Support item={itemSupport}/>
              {/* <BodyBanner /> */}
            </div>
            <div className='w-[30%] h-max'>
              <BodyCard
              item={item2}
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
      <div className='bg-white flex items-center justify-between rounded-2xl mb-bottom'>
        <h2>...And More</h2>
        <div className='w-1/2'>
          <CustomeCommonQuestions items={items} className='' />
        </div>
        <div className='w-1/2'>
          <img
            src='https://assets-global.website-files.com/5c16e90c8f6920b098f834e5/63ea84651bd74658a3f37eac_ga-illustration-2.svg'
            className='w-[300px] h-[300px]'
          />
        </div>
      </div>
      {/* </WrapperContent> */}
      {/* end collapse */}

      <div className='mb-bottom'>
        <ExploreHosting
          img={
            'https://assets-global.website-files.com/5c16e90c8f6920b098f834e5/63c5b458858ce546324e6786_636056a89c0f36b634f4dc4e_AdobeStock_488832115%20copiar.jpg'
          }
          DataExploreHostingStyle={DataExploreHostingShareCar}
          DataExploreHostingText={DataExploreHostingShareCarText}
          isEx={false}
        />
      </div>
      {/* start carousel review */}
      <div className='mb-bottom'>
        <div>
          <span className='text-mainColor font-medium text-center uppercase leading-3 flex justify-center mb-2'>
            COMUNITY
          </span>
          <h2 className=' flex text-[32px] text-center  justify-center mb-2'>
            Our hosts have earned a total of $370M to date
          </h2>
        </div>
        <Carousel_Review className='' classNameImage='h-[305px] flex flex-col flex-end' numberItem={1} numberItemScroll={1} data={ItemCarousel} />
      </div>
      {/* end carousel review */}
      {/* start start hoisting increase income */}
      <div className='mb-bottom' >
        <BodyTop
          img='https://assets-global.website-files.com/5c16e90c8f6920b098f834e5/63ec0cc59fa56f9bb02ee62f_ga-illustration-13.svg'
          content="
      When you list your car, you're earning money while helping others navigate your city. It's a win-win, and your next big opportunity.
      "
          header='Turn your car
      into extra money'
          className='flex-row-reverse'
        />
      </div>
      {/* end start hoisting increase income */}

      {/* start collapse 2 */}
      {/* <WrapperContent titlePadding={5} textAlign='left' title='Learn more about the benefits of Getaround'> */}
      <div className='bg-white flex flex-col  justify-start rounded-2xl mb-bottom w-full text-black'>
        <h2 className='flex justify-center text-mainColor text-[26px] leading-8'>...Need more info? Check out FAQs.</h2>
        <CustomeCommonQuestions items={items} className='text-white' />
      </div>
      {/* </WrapperContent> */}
      {/* end collapse 2 */}
    </div>
  )
}

export default ShareACar
