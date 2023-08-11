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
  SlideHIWCR: ISelectItemSlideHIWC[]
  HeaderKeyFeatures: ISelectItemsHeaderkeyFeatures
  BodyKeyFeatures: ISelectItemsBodykeyFeatures[]
}

const initialState: ConnectHIWState = {
  HeaderConnect: {
    id: 'Header_HowItWork_Connect',
    imgLogo: 'imgLogo_header_Connnect',
    titleLogo: 'titleLogo_header_Connnect',
    mainTitleHeader: 'mainTitleHeader_header_Connnect',
    contentHeader: `content_header_Connnect`,
    imgContentHeader: 'imgContent_header_Connnect'
  },
  SlideHIWCR: [
    {
      id: 'SlideButton_HowItWork_Connect_01',
      nameButton: 'nameButton1_Slide_Connect',
      linkTo: 'linkto1_Slide_Connect'
    },
    {
      id: 'SlideButton_HowItWork_Connect_02',
      nameButton: 'nameButton2_Slide_Connect',
      linkTo: 'linkto2_Slide_Connect'
    }
  ],
  HeaderKeyFeatures: {
    id: 'HeaderKeyFeatures_HowItWork_Connect',
    title: 'title_HeaderkeyFeatures_Connect',
    mainTitle: 'maintitle_HeaderkeyFeatures_Connect',
    subTitle: 'subtitle_HeaderkeyFeatures_Connect'
  },
  BodyKeyFeatures: [
    {
      id: 'BodykeyFeatures_01',
      title: 'title1_BodyKeyFeatures_Connect',
      description: 'description1_BodyKeyFeatures_Connect',
      linkSecurity: 'linkSecurity1_BodyKeyFeatures_Connect',
      linkTo: 'linkTo1_BodyKeyFeatures_Connect'
    },
    {
      id: 'BodykeyFeatures_02',
      title: 'title2_BodyKeyFeatures_Connect',
      description: 'description2_BodyKeyFeatures_Connect',
      linkSecurity: 'linkSecurity2_BodyKeyFeatures_Connect',
      linkTo: 'linkTo2_BodyKeyFeatures_Connect'
    },
    {
      id: 'BodykeyFeatures_03',
      title: 'title3_BodyKeyFeatures_Connect',
      description: 'description3_BodyKeyFeatures_Connect',
      linkSecurity: 'linkSecurity3_BodyKeyFeatures_Connect',
      linkTo: 'linkTo3_BodyKeyFeatures_Connect'
    },
    {
      id: 'BodykeyFeatures_03',
      title: 'title3_BodyKeyFeatures_Connect',
      description: 'description3_BodyKeyFeatures_Connect',
      linkSecurity: 'linkSecurity3_BodyKeyFeatures_Connect',
      linkTo: 'linkTo3_BodyKeyFeatures_Connect'
    }
  ]
}

const ConnectHIWSlice = createSlice({
  name: 'ConnectHowItWork',
  initialState,
  reducers: {
    updateHeaderConnect: (state, action: PayloadAction<ISelectItemsConnectHeader>) => {
      state.HeaderConnect = action.payload
    },
    updateSliceHIWC: (state, action: PayloadAction<ISelectItemSlideHIWC>) => {
      state.SlideHIWCR.push(action.payload)
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
