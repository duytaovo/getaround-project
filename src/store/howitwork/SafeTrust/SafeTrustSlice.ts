import { PayloadAction, createSlice } from '@reduxjs/toolkit'

import { ISelectItemsExploreHosting } from 'src/types/HowItWork'
import { DataExploreHostingSafetyTrustText } from 'src/items/ExploreHosting/DataExploreHostingText'
import { DataProprietarySafetyTrust } from 'src/items/Proprietary/DataProprietary'
import { ISelectItemsProprietary } from 'src/types/HowItWork'

import { ISelectItemsSlideLeftRight } from 'src/types/HowItWork'
import { DataSlideLeftRightSafetyTrust } from 'src/items/SlideLeftRight/DataSlideLeftRight'
import { ISelectBookUnlockCar } from 'src/types/SafeTrust'
import { DataBookUnlockCar } from 'src/pages/SafetyTrust/BookUnlocknearCar/BookUnlocknearCar'
import { ISelectItemsHeaderHostRefernal } from 'src/types/hostRefernal/hostRefernal'
import { DataHeaderST } from 'src/pages/SafetyTrust/HeaderSafeTrust'
import { ISelectPowerFull } from 'src/types/SafeTrust'
import { DataPowerFullSafeTrust } from 'src/pages/SafetyTrust/PowerfulVetting/PowerfulVetting'
interface SafeTrustState {
  ExploreST: ISelectItemsExploreHosting
  ProprietaryST: ISelectItemsProprietary
  SlideLeftRightST: ISelectItemsSlideLeftRight[]
  BookUnlockCar: ISelectBookUnlockCar
  HeaderST: ISelectItemsHeaderHostRefernal
  PowerFullST: ISelectPowerFull
}

const initialState: SafeTrustState = {
  ExploreST: DataExploreHostingSafetyTrustText,
  ProprietaryST: DataProprietarySafetyTrust,
  SlideLeftRightST: DataSlideLeftRightSafetyTrust,
  BookUnlockCar: DataBookUnlockCar,
  HeaderST: DataHeaderST,
  PowerFullST: DataPowerFullSafeTrust
}

const SafeTrustSlice = createSlice({
  name: 'SafeTrust',
  initialState,
  reducers: {
    updateExploreST: (state, action: PayloadAction<ISelectItemsExploreHosting>) => {
      state.ExploreST = action.payload
    },
    updateProprietaryST: (state, action: PayloadAction<ISelectItemsProprietary>) => {
      state.ProprietaryST = action.payload
    },

    updateSlideLeftRightST: (state, action: PayloadAction<ISelectItemsSlideLeftRight>) => {
      state.SlideLeftRightST.push(action.payload)
    },
    updateBookUnlockCarST: (state, action: PayloadAction<ISelectBookUnlockCar>) => {
      state.BookUnlockCar = action.payload
    },
    updateHeaderST: (state, action: PayloadAction<ISelectItemsHeaderHostRefernal>) => {
      state.HeaderST = action.payload
    },
    updatePowerST: (state, action: PayloadAction<ISelectPowerFull>) => {
      state.PowerFullST = action.payload
    }
  },
  extraReducers: (builder) => {}
})

export const { updateExploreST, updateProprietaryST, updateSlideLeftRightST, updateBookUnlockCarST, updateHeaderST } =
  SafeTrustSlice.actions
const SafeTrustReducer = SafeTrustSlice.reducer
export default SafeTrustReducer
