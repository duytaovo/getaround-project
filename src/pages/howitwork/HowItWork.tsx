import React, { useState } from 'react'
import HeaderHowItWord from './HeaderHowItWork'
import SlideHowItWork from 'src/pages/howitwork/SlideHowItWork/SlideHowItWork'
import ExploreHosting from 'src/components/ExploreHosting/ExploreHosting'
import { DataExploreHostingHome } from 'src/items/ExploreHosting/DataExploreHostingStyle'
import { DataExploreHostingHomeText } from 'src/items/ExploreHosting/DataExploreHostingText'
import CustomeCard from 'src/components/CustomeCard/CustomeCard'
import { DataCustomeCard } from 'src/Data/DataCustomeCard'
import { DataCustomeCardHostBonus } from 'src/Data/DataCustomeCard'
import HearCommunity from './HearCommunity/HearCommunity'
import Proprietary from 'src/components/Proprietary/EventUnlock'
import FormContact from 'src/components/FormContact/FormContact'
import { DataProprietaryHowItWork } from 'src/items/Proprietary/DataProprietary'
import Heading from 'src/components/Heading/Heading'
import WrapperContent from 'src/components/WrapperContent/WrapperContent'

import SlideLeftRight from 'src/components/SlideLeftRight/SlideLeftRight'
import { DataSlideLeftRightHowItWork } from 'src/items/SlideLeftRight/DataSlideLeftRight'
import { Link } from 'react-router-dom'
import Step from './Step/Step'
import { useDispatch, useSelector } from 'react-redux'
import { RootState } from 'src/store/store'
import { updateExploreHIW, updateProprietaryHIW } from 'src/store/howitwork/HowItWork/HowItWorkSlice'
import { ISelectItemsExploreHosting, ISelectItemsProprietary } from 'src/types/HowItWork'
import { useAppSelector } from 'src/hooks/useRedux'
const HowItWork = () => {
  const {
    ExploreHowItWork,
    ProprietaryHowItWork,
    HearCommunityHowItWork,
    SlideLeftRightHowItWork,
    SlideHowItWorkR,
    ImgExploreHowItWork,
    ImgSlideLeftRight_HowItWork,
    customeSteps
  } = useSelector((state: RootState) => state.howitwork)
  const data = useAppSelector((state) => state.data.data)
  const howitwork = useAppSelector((state) => state.howitwork)

  const dispatch = useDispatch()

  const handleExploreHIW = (newExploreHostring: ISelectItemsExploreHosting) => {
    dispatch(updateExploreHIW(newExploreHostring))
  }

  const handleAddSlider = (newProprietary: ISelectItemsProprietary) => {
    dispatch(updateProprietaryHIW(newProprietary))
  }

  return (
    <div className='w-full h-auto bg-mainBackGroundColor'>
      <HeaderHowItWord />
      <SlideHowItWork />
      <WrapperContent textAlign='center' title='DISCOVER HOW IT WORKS' classname='flex flex-col'>
        <Step />
      </WrapperContent>

      <CustomeCard mainTitle={`WHAT WE'RE DOING`} DataCustomeCard={DataCustomeCard} />
      {/* <CustomeCard mainTitle={`EARN EXTRA WITH BONUSES`} DataCustomeCard={DataCustomeCardHostBonus} /> */}

      <Proprietary Data={ProprietaryHowItWork} />
      <SlideLeftRight
        Data={SlideLeftRightHowItWork}
        img={data[ImgSlideLeftRight_HowItWork.img]}
        mainTitle={data[ImgSlideLeftRight_HowItWork.mainTitle]}
      />
      <HearCommunity />
      <ExploreHosting
        img={data[ImgExploreHowItWork.img]}
        DataExploreHostingStyle={DataExploreHostingHome}
        DataExploreHostingText={ExploreHowItWork}
        isEx={true}
        className='flex-col items-center flex w-full mb-[66px]'
      />
    </div>
  )
}

export default HowItWork
