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
import { useAppSelector } from 'src/hooks/useRedux'
import { RootState } from 'src/store/store'
const SafetyTrust = () => {
  const {
    ExploreST,
    SlideLeftRightST,
    BookUnlockCar,
    HeaderST,
    PowerFullST,
    ProprietaryST,
    ImgSlideLeftRightST,
    ImgExploreST
  } = useSelector((state: RootState) => state.safetrust)

  const dispatch = useDispatch()
  const data = useAppSelector((state) => state.data.data)
  console.log(data[ImgSlideLeftRightST.img])
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
        img={data[ImgSlideLeftRightST.img]}
        mainTitle={data[ImgSlideLeftRightST.mainTitle]}
      />

      <ExploreHosting
        img={data[ImgExploreST.img]}
        DataExploreHostingStyle={DataExploreHostingSafetyTrust}
        DataExploreHostingText={ExploreST}
        isEx={false}
        className='flex-col items-center flex w-full mb-[66px]'
      />
    </div>
  )
}

export default SafetyTrust
