import { PayloadAction, createSlice } from '@reduxjs/toolkit'

import { ISelectItemsExploreHosting, ISelectItemsImgExploreHosting } from 'src/types/HowItWork'
import { DataExploreHostingSafetyTrustText } from 'src/items/ExploreHosting/DataExploreHostingText'
import { DataProprietarySafetyTrust } from 'src/items/Proprietary/DataProprietary'
import { ISelectItemsProprietary } from 'src/types/HowItWork'

import { ISelectItemsSlideLeftRight, ISelectImglideLeftRight } from 'src/types/HowItWork'
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
  ImgSlideLeftRightST: ISelectImglideLeftRight
  ImgExploreST: ISelectItemsImgExploreHosting
}

const initialState: SafeTrustState = {
  ImgExploreST: {
    img: 'ImgExploreST'
  },
  ImgSlideLeftRightST: {
    img: 'ImgSlideLeftRightST',
    mainTitle: 'MainTirleLeftRightST'
  },
  ExploreST: {
    id: 'ExploreHosting_SafeTrust',
    mainTitle: 'mainTitle_Explore_SafeTrust',
    headerTitle: 'headerTitle_Explore_SafeTrust',
    Title: 'title_Explore_SafeTrust',

    Description: 'description_Explore_SafeTrust',
    Link: 'link_Explore_SafeTrust'
  },
  ProprietaryST: {
    id: 'Proprietary_safety-trust',
    headerTitle: 'headerTitle_Proprietary_ST',
    title: 'title_Proprietary_ST',
    description: 'description_Proprietary_ST',
    description2: 'description2_Proprietary_ST',
    span: 'span_Proprietary_ST',
    img: 'img_Proprietary_ST',
    Link: 'link_Proprietary_ST'
  },
  SlideLeftRightST: [
    {
      id: 'SlideLeftRight_SafeTrust_01',
      img: 'img1_SlideLeftRight_ST',
      label: 'label1_SlideLeftRight_ST',
      Linkto: 'linkTo1_SlideLeftRight_ST',
      Link: 'link1_SlideLeftRight_ST',
      contents: [`contents1_SlideLeftRight_ST`]
    },
    {
      id: 'SlideLeftRight_SafeTrust_02',
      img: 'img2_SlideLeftRight_ST',
      label: 'label2_SlideLeftRight_ST',
      Linkto: 'linkTo2_SlideLeftRight_ST',
      Link: 'lin2k_SlideLeftRight_ST',
      contents: [`contents2_SlideLeftRight_ST`]
    }
  ],
  BookUnlockCar: {
    id: 'BookUnlockCar',
    title: 'title_bookUnlockCar_ST',
    link: 'link_bookUnlockCar_ST'
  },
  HeaderST: {
    id: 'header_HowItWork_SafeTrust',
    headerTitle: 'headerTitle_header_ST',
    title: 'title_header_ST',
    content: 'content_header_ST',
    img: 'img_header_ST'
  },
  PowerFullST: {
    id: 'PowerFullSafeTrust',
    img: 'img_powerfull_ST',
    headerTitle: 'headerTitle_powerfull_ST',
    title: 'title_powerfull_ST',
    content: [
      {
        titleSpan: 'content_titlespan1__powerfull_ST',
        titleH2: 'content_titleh21_powerfull_ST'
      },
      {
        titleSpan: 'content_titlespan2__powerfull_ST',
        titleH2: 'content_titleh22_powerfull_ST'
      },
      {
        titleSpan: 'content_titlespan3__powerfull_ST',
        titleH2: 'content_titleh23_powerfull_ST'
      }
    ]
  }
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
    },
    updateImgSlideLeftRightST: (state, action: PayloadAction<ISelectImglideLeftRight>) => {
      state.ImgSlideLeftRightST = action.payload
    }
  },
  extraReducers: (builder) => {}
})

export const {
  updateExploreST,
  updateProprietaryST,
  updateSlideLeftRightST,
  updateBookUnlockCarST,
  updateHeaderST,
  updateImgSlideLeftRightST
} = SafeTrustSlice.actions
const SafeTrustReducer = SafeTrustSlice.reducer
export default SafeTrustReducer
