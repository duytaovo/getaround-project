import React, { useState } from 'react'
import HeaderHowItWord from 'src/components/HowItWork/HeaderHowItWork'
import SlideHowItWork from 'src/components/HowItWork/SlideHowItWork/SlideHowItWork'
import ConnectedCarSharing from 'src/components/ConnectedCarSharing/ConnectedCarSharing'
import { DataConnectedCarSharingHome } from 'src/items/ConnectedCarSharing/DataConnectedCarSharing'
import ExploreHosting from 'src/components/ExploreHosting/ExploreHosting'
import { DataExploreHostingHome } from 'src/items/ExploreHosting/DataExploreHostingStyle'
import { DataExploreHostingShareCar } from 'src/items/ExploreHosting/DataExploreHostingStyle'
import {
  DataExploreHostingHomeText,
  DataExploreHostingShareCarText
} from 'src/items/ExploreHosting/DataExploreHostingText'
import CustomeCard from 'src/components/CustomeCard/CustomeCard'
import { DataCustomeCard } from 'src/Data/DataCustomeCard'
import { DataCustomeCardHostBonus } from 'src/Data/DataCustomeCard'
import HearCommunity from 'src/components/HowItWork/HearCommunity/HearCommunity'
import Proprietary from 'src/components/Proprietary/EventUnlock'
import FormContact from 'src/components/FormContact/FormContact'
import { DataProprietary } from 'src/items/Proprietary/DataProprietary'
import Heading from 'src/components/Heading/Heading'
import WrapperContent from 'src/components/WrapperContent/WrapperContent'
import CustomeStep from 'src/components/CustomeStep/CustomeStep'
import { CustomeStepItems, CustomeStepItemsHowItWork } from 'src/items/CustomeStepItem/CustomeStepItem'
import {
  LoadingOutlined,
  SmileOutlined,
  SolutionOutlined,
  UserOutlined,
  MobileOutlined,
  CarOutlined,
  RiseOutlined
} from '@ant-design/icons'
const HowItWork = () => {
  const [step, setStep] = useState(false)
  console.log(step)
  return (
    <div className='w-full h-auto bg-mainBackGroundColor'>
      <HeaderHowItWord />
      <SlideHowItWork />
      <WrapperContent textAlign='center' title='DISCOVER HOW IT WORKS' classname='flex flex-col'>
        <div className='justify-center items-center flex relative'>
          <a
            data-w-tab='Tab 1'
            className='bg-[rgba(0,0,0,)] items-center no-underline tracking-[-0.03em] px-0 text-[24px] font-bold flex align-top cursor-pointer text-left text-[#222] p-[9px_30px] relative max-w-[100%] touch-manipulation duration-[0.3s] ease-[ease] delay-0 transition-[color]'
            style={{ gridColumnGap: '14px', outline: 'none' }}
            id='w-tabs-0-data-w-tab-0'
            href='#bookingtab'
            role='tab'
            aria-controls='bookingtab'
            aria-selected='true'
          >
            <h3
              data-w-id='19b49919-2a64-d52b-9a28-bb8f08bfcea8'
              className='text-mainColor my-0 text-[24px] font-bold text-left leading-[105%]'
            >
              Booking a car
            </h3>
            <div className='w-[30px] h-[30px] bg-[#3699d3] p-[6px] rounded-l-[30px]'></div>
          </a>
          <a
            data-w-tab='Tab 1'
            className='bg-[rgba(0,0,0,)] items-center no-underline tracking-[-0.03em] px-0 text-[24px] font-bold flex align-top cursor-pointer text-left text-[#222] p-[9px_30px] relative max-w-[100%] touch-manipulation duration-[0.3s] ease-[ease] delay-0 transition-[color]'
            style={{ gridColumnGap: '14px', outline: 'none' }}
            id='w-tabs-0-data-w-tab-0'
            href='#bookingtab'
            role='tab'
            aria-controls='bookingtab'
            aria-selected='true'
          >
            <div className='w-[30px] h-[30px] bg-[#3699d3] p-[6px] rounded-r-[30px] '>
              <div
                onClick={() => {
                  setStep(!step)
                }}
                className={`bg-white w-full h-full rounded-full  left-[1px]`}
                style={{
                  transform:
                    'translate3d(-150%, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)',
                  transformStyle: 'preserve-3d'
                }}
              ></div>
            </div>
            <h3
              data-w-id='19b49919-2a64-d52b-9a28-bb8f08bfcea8'
              className='text-black my-0 text-[24px] font-bold text-left leading-[105%]'
            >
              Sharing a car
            </h3>
          </a>
        </div>
        <div className='flex justify-center px-[36px] '>
          {/* Begin image portion */}
          <div className='w-1/2 flex justify-center'>
            <img
              className='object-contain h-[500px]'
              src='https://assets-global.website-files.com/5c16e90c8f6920b098f834e5/63c5b4afd9423e2cac7f6cde_how-it-works-image%20copiar-p-500.jpg'
              alt='ss'
            />
          </div>
          {/* End image portion */}
          <CustomeStep
            icons={[<MobileOutlined />, <CarOutlined />, <RiseOutlined />]}
            classname='w-1/2'
            items={CustomeStepItemsHowItWork}
          />
        </div>
      </WrapperContent>
      {/* <ConnectedCarSharing DataConnectedCarSharingHome={DataConnectedCarSharingHome} /> */}

      {/* <ExploreHosting
        img={
          'https://assets-global.website-files.com/5c16e90c8f6920b098f834e5/6324f5891e795a0a4cf1c346_AdobeStock_488832115.jpg'
        }
        DataExploreHostingStyle={DataExploreHostingShareCar}
        DataExploreHostingText={DataExploreHostingShareCarText}
        isEx={false}
      /> */}
      <CustomeCard mainTitle={`WHAT WE'RE DOING`} DataCustomeCard={DataCustomeCard} />
      {/* <CustomeCard mainTitle={`EARN EXTRA WITH BONUSES`} DataCustomeCard={DataCustomeCardHostBonus} /> */}

      <Proprietary Data={DataProprietary} />
      <HearCommunity />
      <ExploreHosting
        img={
          'https://assets-global.website-files.com/5c16e90c8f6920b098f834e5/63c5b458858ce546324e6786_636056a89c0f36b634f4dc4e_AdobeStock_488832115%20copiar.jpg'
        }
        DataExploreHostingStyle={DataExploreHostingHome}
        DataExploreHostingText={DataExploreHostingHomeText}
        isEx={true}
      />

      {/* <FormContact
        titleForm={'Refer a friend'}
        titleInput={'Input your information to get your referral link or submit a referee.'}
      />
      <FormContact
        titleForm={'Track your Referrals'}
        titleInput={'Input your information to see your referral progress!'}
      /> */}
    </div>
  )
}

export default HowItWork
