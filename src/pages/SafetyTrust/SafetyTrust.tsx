import React from 'react'
import Proprietary from 'src/components/Proprietary/EventUnlock'
import { DataProprietarySafetyTrust } from 'src/items/Proprietary/DataProprietary'
import ExploreHosting from 'src/components/ExploreHosting/ExploreHosting'
import { DataExploreHostingSafetyTrust } from 'src/items/ExploreHosting/DataExploreHostingStyle'
import { DataExploreHostingSafetyTrustText } from 'src/items/ExploreHosting/DataExploreHostingText'
import CustomeCard from 'src/components/CustomeCard/CustomeCard'
import { DataCustomeCardSafetyTrust } from 'src/Data/DataCustomeCard'
import WrapperContent from 'src/components/WrapperContent/WrapperContent'
import SlideLeftRight from 'src/components/SlideLeftRight/SlideLeftRight'
import { DataSlideLeftRightSafetyTrust } from 'src/items/SlideLeftRight/DataSlideLeftRight'
import BookUnlocknearCar from './BookUnlocknearCar/BookUnlocknearCar'
import PowerfulVetting from './PowerfulVetting/PowerfulVetting'
const SafetyTrust = () => {
  return (
    <div className='w-full h-auto bg-mainBackGroundColor'>
      <WrapperContent textAlign='center' title='' classname='flex flex-col'>
        <div className='justify-center items-center flex relative'></div>
        <div className='flex justify-center px-[36px] '>
          <div className='w-1/2  flex justify-center items-center'>
            <div className='block'>
              <h2 className='text-4xl text-black font-bold'>
                <span className='text-mainColor'> Safety and trust</span> at every level
              </h2>

              <p className='text-[#1e1e1e] font-normal mt-3'>
                Getaround prioritizes the safety and security of its community members by implementing proactive safety
                measures, verifying identities, maintaining insurance coverage, and using advanced technology to prevent
                fraud. Additionally, Getaround has a dedicated team available 24/7 to investigate any safety or security
                concerns.
              </p>
            </div>
          </div>
          <div className='w-1/2 flex justify-center'>
            <img
              className='object-contain h-[500px]'
              src='https://assets-global.website-files.com/5c16e90c8f6920b098f834e5/641a1bcc9cff2052158af235_ga-illustration-6.svg'
              alt='ss'
            />
          </div>{' '}
        </div>
      </WrapperContent>
      <CustomeCard mainTitle={`For Guests`} DataCustomeCard={DataCustomeCardSafetyTrust} />
      <BookUnlocknearCar />

      <PowerfulVetting />
      <Proprietary Data={DataProprietarySafetyTrust} />
      <SlideLeftRight
        Data={DataSlideLeftRightSafetyTrust}
        img='https://assets-global.website-files.com/5c16e90c8f6920b098f834e5/63ea9fc9c0cafb2053ba37ac_ga-illustration-19.svg'
        mainTitle=''
      />

      <ExploreHosting
        img={
          'https://assets-global.website-files.com/5c16e90c8f6920b098f834e5/63c5b458858ce546324e6786_636056a89c0f36b634f4dc4e_AdobeStock_488832115%20copiar.jpg'
        }
        DataExploreHostingStyle={DataExploreHostingSafetyTrust}
        DataExploreHostingText={DataExploreHostingSafetyTrustText}
        isEx={false}
        className='flex-col items-center flex w-full mb-[66px]'
      />
    </div>
  )
}

export default SafetyTrust
