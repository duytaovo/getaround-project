import { PayloadAction, createSlice } from '@reduxjs/toolkit'
import { ISelectItemsExploreHosting, ISelectItemsImgExploreHosting } from 'src/types/HowItWork'
import { DataExploreHostingHomeText } from 'src/items/ExploreHosting/DataExploreHostingText'
import { DataProprietaryHowItWork } from 'src/items/Proprietary/DataProprietary'
import { ISelectItemsProprietary } from 'src/types/HowItWork'
import { ISelectItemsHearCommunity } from 'src/types/HowItWork'
import { DataCommunity } from 'src/pages/howitwork/HearCommunity/HearCommunity'
import { ISelectItemsSlide } from 'src/types/HowItWork'
import { DataSlideHowItWork } from 'src/pages/howitwork/SlideHowItWork/SlideHowItWork'
import { ISelectItemsSlideLeftRight, ISelectImglideLeftRight } from 'src/types/HowItWork'
import { DataSlideLeftRightHowItWork } from 'src/items/SlideLeftRight/DataSlideLeftRight'
import { useDispatch, useSelector } from 'react-redux'
import { RootState } from 'src/store/store'
import axios from 'axios'
import { ICustomeSteps } from 'src/types/customeSteps.type'
import { ISelectHeaderHIW, ISelectmainTitleStepHIW, ISelectHeaderTitleStepHIWs } from 'src/types/HowItWork'
interface HowItWorkState {
  ExploreHowItWork: ISelectItemsExploreHosting
  ProprietaryHowItWork: ISelectItemsProprietary
  HearCommunityHowItWork: ISelectItemsHearCommunity
  SlideHowItWorkR: ISelectItemsSlide
  SlideLeftRightHowItWork: ISelectItemsSlideLeftRight[]
  ImgSlideLeftRight_HowItWork: ISelectImglideLeftRight
  ImgExploreHowItWork: ISelectItemsImgExploreHosting
  customeSteps: ICustomeSteps[]
  customeSteps2: ICustomeSteps[]
  HeaderHIW: ISelectHeaderHIW
  titleimgSide: ISelectmainTitleStepHIW
  headerTitles: ISelectHeaderTitleStepHIWs
}

const initialState: HowItWorkState = {
  headerTitles: {
    HeaderTitle1: 'ttStepHIWDX',
    HeaderTitle2: 'ttStepHIWTX'
  },
  titleimgSide: {
    mainTitle: 'mainTitleSlideStepHIW',
    imgSlide1: 'img1SlideHIW',
    imgSlide2: 'img2SlideHIW'
  },
  customeSteps: [
    {
      title: 'title4_customeSteps',

      subTitle: 'subtitle4_customeSteps'
    },
    {
      title: 'title5_customeSteps',

      subTitle: 'subtitle5_customeSteps'
    },
    {
      title: 'title6_customeSteps',

      subTitle: 'subtitle6_customeSteps'
    }
  ],
  customeSteps2: [
    {
      title: 'title7_customeSteps',

      subTitle: 'subtitle7_customeSteps'
    },
    {
      title: 'title8_customeSteps',

      subTitle: 'subtitle8_customeSteps'
    },
    {
      title: 'title9_customeSteps',

      subTitle: 'subtitle9_customeSteps'
    },
    {
      title: 'title10_customeSteps',

      subTitle: 'subtitle10_customeSteps'
    }
  ],
  ImgExploreHowItWork: {
    img: 'ImgExploreHowItWork'
  },
  ImgSlideLeftRight_HowItWork: {
    img: 'ImgSlideLeftRight_HowITWork',
    mainTitle: 'MainTirleLeftRight_HowITWork'
  },
  ExploreHowItWork: {
    mainTitle: 'mainTitle_Explore_HowItWork',
    headerTitle: 'headerTitle_Explore_HowItWork',
    Title: 'title_Explore_HowItWork',

    Description: 'description_Explore_HowItWork',
    Link: 'link_Explore_HowItWork'
  },
  ProprietaryHowItWork: {
    id: 'Proprietary_HowItWork',
    headerTitle: 'headerTitle_Propritary_HowItWork',
    title: 'headerTitle_Propritary_HowItWork',
    description: 'description_Propritary_HowItWork',
    description2: 'description2_Propritary_HowItWork',
    span: 'span_Propritary_HowItWork',
    img: 'img_Propritary_HowItWork',
    Link: 'link_Propritary_HowItWork'
  },
  HearCommunityHowItWork: {
    id: 'Community_HowItWork',
    title: 'title_HearCommunity_HowItWork',
    content: 'content_HearCommunity_HowItWork',
    link: 'link_HearCommunity_HowItWork'
  },
  SlideHowItWorkR: {
    id: 'Slide_HowItWork',
    mainTitle: 'mainTitle_Slide_HowItWork',
    title: 'title_Slide_HowItWork',
    img1: 'img1_Slide_HowItWork',
    content1: 'content1_Slide_HowItWork',
    img2: 'img2_Slide_HowItWork',
    content2: 'content2_Slide_HowItWork'
  },
  SlideLeftRightHowItWork: [
    {
      id: 'SlideLeftRight_HowItWork_01',
      img: 'img1_SlideLeftRight_HowItWork',
      label: 'label1_SlideLeftRight_HowItWork',
      Linkto: 'linkto1_SlideLeftRight_HowItWork',
      Link: 'link_SlideLeftRight_HowItWork',
      contents: [`contents1_SlideLeftRight_HowItWork`]
    },
    {
      id: 'SlideLeftRight_HowItWork_02',
      img: 'img2_SlideLeftRight_HowItWork',
      label: 'label2_SlideLeftRight_HowItWork',
      Linkto: 'linkto2_SlideLeftRight_HowItWork',
      Link: 'link2_SlideLeftRight_HowItWork',
      contents: [`contents2_SlideLeftRight_HowItWork`]
    },
    {
      id: 'SlideLeftRight_HowItWork_03',
      img: 'img3_SlideLeftRight_HowItWork',
      label: 'label3_SlideLeftRight_HowItWork',
      Linkto: 'linkto3_SlideLeftRight_HowItWork',
      Link: 'link3_SlideLeftRight_HowItWork',
      contents: [`contents3_SlideLeftRight_HowItWork`]
    }
  ],
  HeaderHIW: {
    img: 'imgHeader_HIW',
    mainTitle: 'mainTitleHeader_HIW'
  }
}

const HowItWorkSlice = createSlice({
  name: 'HowItwork',
  initialState,
  reducers: {
    updateExploreHIW: (state, action: PayloadAction<ISelectItemsExploreHosting>) => {
      state.ExploreHowItWork = action.payload
    },
    updateProprietaryHIW: (state, action: PayloadAction<ISelectItemsProprietary>) => {
      state.ProprietaryHowItWork = action.payload
    },
    updateCommunityHIW: (state, action: PayloadAction<ISelectItemsHearCommunity>) => {
      state.HearCommunityHowItWork = action.payload
    },
    updateSlideHIW: (state, action: PayloadAction<ISelectItemsSlide>) => {
      state.SlideHowItWorkR = action.payload
    },
    updateSlideLeftRightHIW: (state, action: PayloadAction<ISelectItemsSlideLeftRight>) => {
      state.SlideLeftRightHowItWork.push(action.payload)
    }
  },
  extraReducers: (builder) => {}
})

export const { updateExploreHIW, updateProprietaryHIW, updateCommunityHIW, updateSlideHIW, updateSlideLeftRightHIW } =
  HowItWorkSlice.actions
const HowItWorkReducer = HowItWorkSlice.reducer
export default HowItWorkReducer
