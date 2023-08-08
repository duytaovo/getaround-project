import { PayloadAction, createSlice } from '@reduxjs/toolkit'
import { ISelectItemsConnectHeader } from 'src/types/HowItWorkConnect'
import { DataHeaderConnect } from 'src/components/HowItWorkConnect/HeaderHIWC'
import { DataSliceHIWC } from 'src/items/SlideHIWC/DataSlideHIWC'
import { ISelectItemSlideHIWC } from 'src/types/HowItWorkConnect'
import { ISelectItemsHeaderkeyFeatures } from 'src/types/HowItWorkConnect'
import { DataHeaderKeyFeatures } from 'src/components/HowItWorkConnect/KeyFeature'
import { ISelectItemsBodykeyFeatures } from 'src/types/HowItWorkConnect'
import { DataKeyFeatureItem } from 'src/items/KeyFeatureItem/DataKeyFeatureItem'
interface ConnectHIWState {
  HeaderConnect: ISelectItemsConnectHeader
  SlideHIWC: ISelectItemSlideHIWC[]
  HeaderKeyFeatures: ISelectItemsHeaderkeyFeatures
  BodyKeyFeatures: ISelectItemsBodykeyFeatures[]
}

const initialState: ConnectHIWState = {
  HeaderConnect: DataHeaderConnect,
  SlideHIWC: DataSliceHIWC,
  HeaderKeyFeatures: DataHeaderKeyFeatures,
  BodyKeyFeatures: DataKeyFeatureItem
}

const ConnectHIWSlice = createSlice({
  name: 'HowItwork',
  initialState,
  reducers: {
    updateHeaderConnect: (state, action: PayloadAction<ISelectItemsConnectHeader>) => {
      state.HeaderConnect = action.payload
    },
    updateSliceHIWC: (state, action: PayloadAction<ISelectItemSlideHIWC>) => {
      state.SlideHIWC.push(action.payload)
    },
    updateHeaderKeyFeatures: (state, action: PayloadAction<ISelectItemsHeaderkeyFeatures>) => {
      state.HeaderKeyFeatures = action.payload
    },
    updateBodyKeyFeatures: (state, action: PayloadAction<ISelectItemsBodykeyFeatures>) => {
      state.BodyKeyFeatures.push(action.payload)
    }
  },
  extraReducers: (builder) => {}
})

export const { updateHeaderConnect, updateSliceHIWC, updateHeaderKeyFeatures } = ConnectHIWSlice.actions
const ConnectHIWReducer = ConnectHIWSlice.reducer
export default ConnectHIWReducer
