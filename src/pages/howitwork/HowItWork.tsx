import HeaderHowItWord from './HeaderHowItWork'
import SlideHowItWork from 'src/pages/howitwork/SlideHowItWork/SlideHowItWork'
import ExploreHosting from 'src/components/ExploreHosting/ExploreHosting'
import { DataExploreHostingHome } from 'src/items/ExploreHosting/DataExploreHostingStyle'
import CustomeCard from 'src/components/CustomeCard/CustomeCard'
import { DataCustomeCard } from 'src/Data/DataCustomeCard'
import HearCommunity from './HearCommunity/HearCommunity'
import Proprietary from 'src/components/Proprietary/EventUnlock'
import WrapperContent from 'src/components/WrapperContent/WrapperContent'
import SlideLeftRight from 'src/components/SlideLeftRight/SlideLeftRight'
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
    customeSteps,
    titleimgSide
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
      <WrapperContent textAlign='center' title={data[titleimgSide.mainTitle]} classname='flex flex-col'>
        <Step />
      </WrapperContent>

      {/* <CustomeCard mainTitle={`WHAT WE'RE DOING`} DataCustomeCard={DataCustomeCard} /> */}
      {/* <CustomeCard mainTitle={`EARN EXTRA WITH BONUSES`} DataCustomeCard={DataCustomeCardHostBonus} /> */}

      <Proprietary Data={ProprietaryHowItWork} />
      <SlideLeftRight
        Data={SlideLeftRightHowItWork}
        img={data[ImgSlideLeftRight_HowItWork.img]}
        mainTitle={data[ImgSlideLeftRight_HowItWork.mainTitle]}
        idTitle={ImgSlideLeftRight_HowItWork.mainTitle}
        idimg={ImgSlideLeftRight_HowItWork.img}
      />
      <HearCommunity />
      <ExploreHosting
        img={ImgExploreHowItWork.img}
        DataExploreHostingStyle={DataExploreHostingHome}
        DataExploreHostingText={ExploreHowItWork}
        isEx={true}
        className='flex-col items-center flex w-full mb-[66px]'
      />
    </div>
  )
}

export default HowItWork
