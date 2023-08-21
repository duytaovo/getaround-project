import React from 'react'
import Proprietary from 'src/components/Proprietary/EventUnlock'
import { DataProprietarySafetyTrust } from 'src/items/Proprietary/DataProprietary'
import ExploreHosting from 'src/components/ExploreHosting/ExploreHosting'
import { DataExploreHostingSafetyTrust } from 'src/items/ExploreHosting/DataExploreHostingStyle'
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
import { Helmet } from 'react-helmet-async'
const SafetyTrust = () => {
  const {
    ExploreST,
    SlideLeftRightST,
    BookUnlockCar,
    HeaderST,
    PowerFullST,
    ProprietaryST,
    ImgSlideLeftRightST,
    ImgExploreST,
    CustomeCardR,
    titleCustomeCardR
  } = useSelector((state: RootState) => state.safetrust)

  const dispatch = useDispatch()
  const data = useAppSelector((state) => state.data.data)

  return (
    <div className='w-full h-auto bg-mainBackGroundColor'>
      <Helmet>
        <title>SafetyTrust</title>
        <meta name='description' content='Cộng an toàn và tin cậy' />
      </Helmet>
      <WrapperContent textAlign='center' title='' classname='flex flex-col'>
        <HeaderSafeTrust />
      </WrapperContent>
      <CustomeCard mainTitle={titleCustomeCardR.mainTitle} DataCustomeCard={CustomeCardR} />
      <BookUnlocknearCar />

      <PowerfulVetting />
      <Proprietary Data={ProprietaryST} />
      <SlideLeftRight
        Data={SlideLeftRightST}
        img={data[ImgSlideLeftRightST.img]}
        mainTitle={data[ImgSlideLeftRightST.mainTitle]}
        idTitle={ImgSlideLeftRightST.mainTitle}
        idimg={ImgSlideLeftRightST.img}
      />

      <ExploreHosting
        img={ImgExploreST.img}
        DataExploreHostingStyle={DataExploreHostingSafetyTrust}
        DataExploreHostingText={ExploreST}
        isEx={false}
        className='flex-col items-center flex w-full mb-[66px]'
      />
    </div>
  )
}

export default SafetyTrust
