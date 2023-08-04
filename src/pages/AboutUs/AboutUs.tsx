import React from 'react'
import HeaderSlide from 'src/pages/AboutUs/HeaderSlide/HeaderSlide'
import CustomeCard from 'src/components/CustomeCard/CustomeCard'
import { DataCustomeCard } from 'src/Data/DataCustomeCard'
import WrapperContent from 'src/components/WrapperContent/WrapperContent'
import ConnectedCarSharing from 'src/components/ConnectedCarSharing/ConnectedCarSharing'
import { DataConnectedCarSharingHome } from 'src/items/ConnectedCarSharing/DataConnectedCarSharing'
import ExploreHosting from 'src/components/ExploreHosting/ExploreHosting'
import { DataExploreHostingAboutUs } from 'src/items/ExploreHosting/DataExploreHostingStyle'
import { DataExploreHostingAboutUsText } from 'src/items/ExploreHosting/DataExploreHostingText'
const AboutUs = () => {
  return (
    <div className='w-full h-auto bg-mainBackGroundColor'>
      <HeaderSlide />
      <CustomeCard mainTitle={`WHAT WE'RE DOING`} DataCustomeCard={DataCustomeCard} />
      <WrapperContent
        title="WE'RE SCALING OUR OPERATIONS TO SCALE OUR MISSION."
        textAlign='center'
        isBgTransparent={true}
      >
        <ConnectedCarSharing DataConnectedCarSharingHome={DataConnectedCarSharingHome} />
      </WrapperContent>
      <ExploreHosting
        img={
          'https://assets-global.website-files.com/5c16e90c8f6920b098f834e5/63979f2e27eb83339d24e451_AdobeStock_488832115.jpg'
        }
        DataExploreHostingStyle={DataExploreHostingAboutUs}
        DataExploreHostingText={DataExploreHostingAboutUsText}
        isEx={false}
        className='flex-col items-center flex w-full mb-[66px]'
      />
    </div>
  )
}

export default AboutUs
