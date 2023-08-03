import React from 'react'
import HeaderHowItWord from 'src/components/HowItWork/HeaderHowItWork'
import SlideHowItWork from 'src/components/HowItWork/SlideHowItWork/SlideHowItWork'
import ConnectedCarSharing from 'src/components/ConnectedCarSharing/ConnectedCarSharing'
import { DataConnectedCarSharingHome } from 'src/Data/DataConnectedCarSharing'
import ExploreHosting from 'src/components/ExploreHosting/ExploreHosting'
import { DataExploreHostingHome } from 'src/Data/DataExploreHostingStyle'
import { DataExploreHostingShareCar } from 'src/Data/DataExploreHostingStyle'
import { DataExploreHostingHomeText, DataExploreHostingShareCarText } from 'src/Data/DataExploreHostingText'
import CustomeCard from 'src/components/CustomeCard/CustomeCard'
import { DataCustomeCard } from 'src/Data/DataCustomeCard'
import { DataCustomeCardHostBonus } from 'src/Data/DataCustomeCard'
import HearCommunity from 'src/components/HowItWork/HearCommunity/HearCommunity'
import Proprietary from 'src/components/Proprietary/EventUnlock'
import FormContact from 'src/components/FormContact/FormContact'
import { DataProprietary } from 'src/Data/DataProprietary'
const HowItWork = () => {
  return (
    <div className='w-full h-auto bg-[#f9f8f8]'>
      <HeaderHowItWord />
      <SlideHowItWork />
      <ConnectedCarSharing DataConnectedCarSharingHome={DataConnectedCarSharingHome} />
      <ExploreHosting
        img={
          'https://assets-global.website-files.com/5c16e90c8f6920b098f834e5/63c5b458858ce546324e6786_636056a89c0f36b634f4dc4e_AdobeStock_488832115%20copiar.jpg'
        }
        DataExploreHostingStyle={DataExploreHostingHome}
        DataExploreHostingText={DataExploreHostingHomeText}
        isEx={true}
      />
      <ExploreHosting
        img={
          'https://assets-global.website-files.com/5c16e90c8f6920b098f834e5/6324f5891e795a0a4cf1c346_AdobeStock_488832115.jpg'
        }
        DataExploreHostingStyle={DataExploreHostingShareCar}
        DataExploreHostingText={DataExploreHostingShareCarText}
        isEx={false}
      />
      <CustomeCard mainTitle={`WHAT WE'RE DOING`} DataCustomeCard={DataCustomeCard} />
      <CustomeCard mainTitle={`EARN EXTRA WITH BONUSES`} DataCustomeCard={DataCustomeCardHostBonus} />
      <HearCommunity />
      <Proprietary Data={DataProprietary} />
      <FormContact
        titleForm={'Refer a friend'}
        titleInput={'Input your information to get your referral link or submit a referee.'}
      />
      <FormContact
        titleForm={'Track your Referrals'}
        titleInput={'Input your information to see your referral progress!'}
      />
    </div>
  )
}

export default HowItWork
