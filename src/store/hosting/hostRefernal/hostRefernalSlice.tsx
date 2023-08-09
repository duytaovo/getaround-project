import { PayloadAction, createSlice } from '@reduxjs/toolkit'

import { ISelectItemsExploreHosting } from 'src/types/HowItWork'
import { DataExploreHostingHostRefernalText } from 'src/items/ExploreHosting/DataExploreHostingText'
import { ISelectItemsSlideLeftRight } from 'src/types/HowItWork'
import { DataSlideLeftRightHostRefernal } from 'src/items/SlideLeftRight/DataSlideLeftRight'
import { ISelectItemsHeaderHostRefernal } from 'src/types/hostRefernal/hostRefernal'
import { DataHeaderHostrefernal } from 'src/pages/HostRefernal/HeaderhostRefernal'
import { ICustomeSteps } from 'src/types/customeSteps.type'
import { CustomeStepItemHostRefernal } from 'src/items/CustomeStepItem/CustomeStepItem'
import { ISelectItemsImgCustomeSteps } from 'src/types/hostRefernal/hostRefernal'
import { DataImgCustomeStepHostRF } from 'src/pages/HostRefernal/HostRefernal'
import { ICommonQuestions } from 'src/types/commonQuestion.type'
import { DataitemsHostRefernal } from 'src/items/CommonQuestionItems/CommonQuestionItems'
interface hostRefernalState {
  ExplorehostRefernal: ISelectItemsExploreHosting[]
  SlideLeftRighthostRefernal: ISelectItemsSlideLeftRight[]
  HeaderhostRefernal: ISelectItemsHeaderHostRefernal
  customeSteps: ICustomeSteps[]
  imgcustomeSteps: ISelectItemsImgCustomeSteps
  QuestionhostRefernal: ICommonQuestions[]
}

const initialState: hostRefernalState = {
  ExplorehostRefernal: DataExploreHostingHostRefernalText,
  SlideLeftRighthostRefernal: DataSlideLeftRightHostRefernal,
  HeaderhostRefernal: DataHeaderHostrefernal,
  customeSteps: CustomeStepItemHostRefernal,
  imgcustomeSteps: DataImgCustomeStepHostRF,
  QuestionhostRefernal: DataitemsHostRefernal
}

const hostRefernalSlice = createSlice({
  name: 'hostRefernal',
  initialState,
  reducers: {
    updateExploreHostRefernal: (state, action: PayloadAction<ISelectItemsExploreHosting>) => {
      state.ExplorehostRefernal.push(action.payload)
    },
    updateSlideLeftRightHostRefernal: (state, action: PayloadAction<ISelectItemsSlideLeftRight>) => {
      state.SlideLeftRighthostRefernal.push(action.payload)
    },
    updateHeaderHostRefernal: (state, action: PayloadAction<ISelectItemsHeaderHostRefernal>) => {
      state.HeaderhostRefernal = action.payload
    },
    updateCustomeStepsHostRefernal: (state, action: PayloadAction<ISelectItemsSlideLeftRight>) => {
      state.SlideLeftRighthostRefernal.push(action.payload)
    },
    updateImgCustomeStepsHostRefernal: (state, action: PayloadAction<ISelectItemsImgCustomeSteps>) => {
      state.imgcustomeSteps = action.payload
    },
    updateQuestionHostRefernal: (state, action: PayloadAction<ICommonQuestions>) => {
      state.QuestionhostRefernal.push(action.payload)
    }
  },
  extraReducers: (builder) => {}
})

export const {
  updateExploreHostRefernal,
  updateHeaderHostRefernal,
  updateSlideLeftRightHostRefernal,
  updateCustomeStepsHostRefernal,
  updateImgCustomeStepsHostRefernal,
  updateQuestionHostRefernal
} = hostRefernalSlice.actions
const hostRefernalReducer = hostRefernalSlice.reducer
export default hostRefernalReducer
