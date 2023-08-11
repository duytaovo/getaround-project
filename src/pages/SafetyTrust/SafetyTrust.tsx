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
import HeaderSafeTrust from './HeaderSafeTrust'
import { useDispatch, useSelector } from 'react-redux'
import { RootState } from 'src/store/store'
const SafetyTrust = () => {
  const { ExploreST, SlideLeftRightST, BookUnlockCar, HeaderST, PowerFullST, ProprietaryST } = useSelector(
    (state: RootState) => state.safetrust
  )
  return (
    <div className='w-full h-auto bg-mainBackGroundColor'>
      <WrapperContent textAlign='center' title='' classname='flex flex-col'>
        <HeaderSafeTrust />
      </WrapperContent>
      <CustomeCard mainTitle={`For Guests`} DataCustomeCard={DataCustomeCardSafetyTrust} />
      <BookUnlocknearCar />

      <PowerfulVetting />
      <Proprietary Data={ProprietaryST} />
      <SlideLeftRight
        Data={SlideLeftRightST}
        img='https://assets-global.website-files.com/5c16e90c8f6920b098f834e5/63ea9fc9c0cafb2053ba37ac_ga-illustration-19.svg'
        mainTitle=''
      />

      <ExploreHosting
        img={
          'https://assets-global.website-files.com/5c16e90c8f6920b098f834e5/63c5b458858ce546324e6786_636056a89c0f36b634f4dc4e_AdobeStock_488832115%20copiar.jpg'
        }
        DataExploreHostingStyle={DataExploreHostingSafetyTrust}
        DataExploreHostingText={ExploreST}
        isEx={false}
        className='flex-col items-center flex w-full mb-[66px]'
      />
    </div>
  )
}

export default SafetyTrust
