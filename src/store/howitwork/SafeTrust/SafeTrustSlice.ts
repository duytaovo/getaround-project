import { PayloadAction, createSlice } from '@reduxjs/toolkit'

import { ISelectItemsExploreHosting } from 'src/types/HowItWork'
import { DataExploreHostingSafetyTrustText } from 'src/items/ExploreHosting/DataExploreHostingText'
import { DataProprietarySafetyTrust } from 'src/items/Proprietary/DataProprietary'
import { ISelectItemsProprietary } from 'src/types/HowItWork'

import { ISelectItemsSlideLeftRight } from 'src/types/HowItWork'
import { DataSlideLeftRightSafetyTrust } from 'src/items/SlideLeftRight/DataSlideLeftRight'
import { ISelectBookUnlockCar } from 'src/types/SafeTrust'
import { DataBookUnlockCar } from 'src/pages/SafetyTrust/BookUnlocknearCar/BookUnlocknearCar'
interface SafeTrustState {
  ExploreHowItWork: ISelectItemsExploreHosting[]
  ProprietaryHowItWork: ISelectItemsProprietary[]
  SlideLeftRightHowItWork: ISelectItemsSlideLeftRight[]
  // BookUnlockCar:ISelectBookUnlockCar
}

const initialState: SafeTrustState = {
  ExploreHowItWork: DataExploreHostingSafetyTrustText,
  ProprietaryHowItWork: DataProprietarySafetyTrust,
  SlideLeftRightHowItWork: DataSlideLeftRightSafetyTrust
  // BookUnlockCar: DataBookUnlockCar
}

const SafeTrustSlice = createSlice({
  name: 'HowItwork',
  initialState,
  reducers: {
    updateExploreST: (state, action: PayloadAction<ISelectItemsExploreHosting>) => {
      state.ExploreHowItWork.push(action.payload)
    },
    updateProprietaryST: (state, action: PayloadAction<ISelectItemsProprietary>) => {
      state.ProprietaryHowItWork.push(action.payload)
    },

    updateSlideLeftRightST: (state, action: PayloadAction<ISelectItemsSlideLeftRight>) => {
      state.SlideLeftRightHowItWork.push(action.payload)
    }
  },
  extraReducers: (builder) => {}
})

export const { updateExploreST, updateProprietaryST, updateSlideLeftRightST } = SafeTrustSlice.actions
const SafeTrustReducer = SafeTrustSlice.reducer
export default SafeTrustReducer
