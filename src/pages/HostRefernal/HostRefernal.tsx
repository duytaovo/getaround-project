import React from 'react'
import ExploreHosting from 'src/components/ExploreHosting/ExploreHosting'
import { DataExploreHostingHostRefernal } from 'src/items/ExploreHosting/DataExploreHostingStyle'
import { DataExploreHostingHostRefernalText } from 'src/items/ExploreHosting/DataExploreHostingText'
import FormContact from 'src/components/FormContact/FormContact'
import CustomeCard from 'src/components/CustomeCard/CustomeCard'
import { DataCustomeCardHostRefernal } from 'src/Data/DataCustomeCard'
import WrapperContent from 'src/components/WrapperContent/WrapperContent'
import CustomeCommonQuestions from 'src/components/CustomeCommonQuestions/CustomeCommonQuestions'
import { DataitemsHostRefernal } from 'src/items/CommonQuestionItems/CommonQuestionItems'
import { Link } from 'react-router-dom'
import SlideLeftRight from 'src/components/SlideLeftRight/SlideLeftRight'
import { DataSlideLeftRightHostRefernal } from 'src/items/SlideLeftRight/DataSlideLeftRight'
import CustomeStep from 'src/components/CustomeStep/CustomeStep'
import HeaderhostRefernal from './HeaderhostRefernal'
import {
  CustomeStepItems,
  CustomeStepItemsHowItWork1,
  CustomeStepItemHostRefernal
} from 'src/items/CustomeStepItem/CustomeStepItem'
import { useDispatch, useSelector } from 'react-redux'
import { RootState } from 'src/store/store'
import { MobileOutlined, CarOutlined, RiseOutlined, DollarOutlined, WalletOutlined } from '@ant-design/icons'
export const DataImgCustomeStepHostRF = {
  img: 'https://assets.website-files.com/581d2676fe18a07e43923cfc/63dc1685bdd5eaa356d17f23_6306804d1f0ca670cfa33eb5_iStock-688453812%202.jpg',
  title: 'Make it happen in seconds'
}
const HostRefernal = () => {
  const { ExplorehostRefernal, customeSteps } = useSelector((state: RootState) => state.hostingReferral)
  console.log(ExplorehostRefernal)
  const dispatch = useDispatch()

  // const handleExploreHIW = (newExploreHostring: ISelectItemsExploreHosting) => {
  //   dispatch(updateExploreHIW(newExploreHostring))
  // }

  return (
    <div className='w-full h-auto bg-mainBackGroundColor'>
      <WrapperContent textAlign='center' title='' classname='flex flex-col'>
        <HeaderhostRefernal />
      </WrapperContent>
      <CustomeCard mainTitle={`When you refer a friend`} DataCustomeCard={DataCustomeCardHostRefernal} />
      <WrapperContent textAlign='center' title='HOW IT WORKS' classname='flex flex-col'>
        <div className='justify-center items-center flex relative'>
          <div className='flex justify-center px-[36px] sm:flex-col'>
            <div className='w-1/2 md:w-[65%] sm:w-[100%]'>
              <p className='text-black text-2xl mb-3 font-semibold'>Make it happen in seconds</p>
              <CustomeStep
                icons={[<CarOutlined />, <WalletOutlined />, <DollarOutlined />]}
                classname='w-full'
                items={customeSteps}
              />
            </div>
            {/* <div className='w-1/2 flex justify-center rounded-[16px] items-center'> */}
            <img
              className='object-cover w-[310px] md:w-[230px] min-h-[260px] md:min-h-[400px] mb-auto mx-auto  rounded-[16px]'
              src='https://assets.website-files.com/581d2676fe18a07e43923cfc/63dc1685bdd5eaa356d17f23_6306804d1f0ca670cfa33eb5_iStock-688453812%202.jpg'
              alt='ss'
            />
            {/* </div> */}
          </div>
        </div>
      </WrapperContent>
      <FormContact
        titleForm={'Refer a friend'}
        titleInput={'Input your information to get your referral link or submit a referee.'}
      />
      <SlideLeftRight
        Data={DataSlideLeftRightHostRefernal}
        img='https://assets.website-files.com/581d2676fe18a07e43923cfc/63ec0f939fa56f180d2f1b7b_ga-illustration-6.svg'
        mainTitle=''
      />
      <FormContact
        titleForm={'Track your Referrals'}
        titleInput={'Input your information to see your referral progress!'}
      />{' '}
      *
      <ExploreHosting
        img={
          'https://assets-global.website-files.com/5c16e90c8f6920b098f834e5/6324f5891e795a0a4cf1c346_AdobeStock_488832115.jpg'
        }
        DataExploreHostingStyle={DataExploreHostingHostRefernal}
        DataExploreHostingText={ExplorehostRefernal}
        isEx={false}
        className='flex-col items-center flex w-full mb-[120px]'
      />
      <WrapperContent titlePadding={8} textAlign='left' title='Need more info? Check out FAQs.'>
        <div>
          <CustomeCommonQuestions items={DataitemsHostRefernal} className='w-full p-4' />
        </div>
      </WrapperContent>
    </div>
  )
}

export default HostRefernal
