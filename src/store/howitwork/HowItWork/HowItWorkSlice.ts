import { PayloadAction, createSlice } from '@reduxjs/toolkit'

import { ISelectItemsExploreHosting } from 'src/types/HowItWork'
import { DataExploreHostingHomeText } from 'src/items/ExploreHosting/DataExploreHostingText'
import { DataProprietaryHowItWork } from 'src/items/Proprietary/DataProprietary'
import { ISelectItemsProprietary } from 'src/types/HowItWork'
import { ISelectItemsHearCommunity } from 'src/types/HowItWork'
import { DataCommunity } from 'src/pages/howitwork/HearCommunity/HearCommunity'
import { ISelectItemsSlide } from 'src/types/HowItWork'
import { DataSlideHowItWork } from 'src/pages/howitwork/SlideHowItWork/SlideHowItWork'
import { ISelectItemsSlideLeftRight } from 'src/types/HowItWork'
import { DataSlideLeftRightHowItWork } from 'src/items/SlideLeftRight/DataSlideLeftRight'
interface HowItWorkState {
  ExploreHowItWork: ISelectItemsExploreHosting[]
  ProprietaryHowItWork: ISelectItemsProprietary[]
  HearCommunityHowItWork: ISelectItemsHearCommunity
  SlideHowItWork: ISelectItemsSlide
  SlideLeftRightHowItWork: ISelectItemsSlideLeftRight[]
}

const initialState: HowItWorkState = {
  ExploreHowItWork: DataExploreHostingHomeText,
  ProprietaryHowItWork: DataProprietaryHowItWork,
  HearCommunityHowItWork: DataCommunity,
  SlideHowItWork: DataSlideHowItWork,
  SlideLeftRightHowItWork: DataSlideLeftRightHowItWork
}

const HowItWorkSlice = createSlice({
  name: 'HowItwork',
  initialState,
  reducers: {
    updateExploreHIW: (state, action: PayloadAction<ISelectItemsExploreHosting>) => {
      state.ExploreHowItWork.push(action.payload)
    },
    updateProprietaryHIW: (state, action: PayloadAction<ISelectItemsProprietary>) => {
      state.ProprietaryHowItWork.push(action.payload)
    },
    updateCommunityHIW: (state, action: PayloadAction<ISelectItemsHearCommunity>) => {
      state.HearCommunityHowItWork = action.payload
    },
    updateSlideHIW: (state, action: PayloadAction<ISelectItemsSlide>) => {
      state.SlideHowItWork = action.payload
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
