import { PayloadAction, createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import shareACarApi from 'src/apis/hosting/share_a_car.api'
import { ItemCarouselCommunity } from 'src/items/Carousel/Carouseltems'

import {
  CustomeStepItems,
  DataExploreHostingShareCarText,
  DataExploreHostingShareCarText_bottom,
  ItemBodyTop,
  ItemContentSlider,
  ItemSliderShareCar,
  itemBanner,
  itemBodyCardBottom,
  itemBodyCardTop,
  itemCommonQuestionBody,
  itemGetAroundYourBack,
  itemImgExploreHosting,
  itemOurHost,
  itemSupport,
  items,
  itemsBottom,
  wrapperTitle
} from 'src/items/ShareACarId/ShareACarId'
import { ISelectItemsExploreHosting, ISelectItemsImgExploreHosting } from 'src/types/HowItWork'
import {
  IBodyCommonQuestionImg,
  IBodyTop,
  IIWrapContentTitle,
  IItemBodyBannerCard,
  IItemCarousel,
  IItemContentSlider,
  IItemGetAroundYourBack,
  IItemSlider,
  IItemSupport
} from 'src/types/hosting_shareACar.type'
import { payloadCreator } from 'src/utils/utils'

export const getShareACar = createAsyncThunk('shareACar/getShareACar', payloadCreator(''))
export const updateText = createAsyncThunk('shareACar/updateText', payloadCreator(shareACarApi.updateText))
export const updateImage = createAsyncThunk('shareACar/updateImage', payloadCreator(shareACarApi.uploadImage))

interface ICustomeStep {
  title: string
  images?: string[]
  subTitle: string
}

interface ICommonQuestion {
  key: string
  label: string
  contents: string[]
}

interface ShareACarState {
  bodyTop: IBodyTop
  sliders: IItemSlider[]
  contentSlider: IItemContentSlider
  bodyBannerCard: IItemBodyBannerCard
  bodyCardTop: IItemBodyBannerCard
  bodyCardBottom: IItemBodyBannerCard
  carouselReview: IItemCarousel[]
  support: IItemSupport
  getAroundYourBack: IItemGetAroundYourBack
  step: ICustomeStep[]
  commonQuestion: ICommonQuestion[]
  commonQuestionBottom: ICommonQuestion[]
  commonQuestionImg: IBodyCommonQuestionImg
  exploreHosting: ISelectItemsExploreHosting
  exploreHosting_bottom: ISelectItemsExploreHosting
  ourHost: IItemGetAroundYourBack
  wrapperTitle: IIWrapContentTitle[]
  imgExploreHosting: ISelectItemsImgExploreHosting
}

const initialState: ShareACarState = {
  bodyTop: ItemBodyTop,
  sliders: ItemSliderShareCar,
  contentSlider: ItemContentSlider,
  bodyBannerCard: itemBanner,
  bodyCardTop: itemBodyCardTop,
  bodyCardBottom: itemBodyCardBottom,
  carouselReview: ItemCarouselCommunity,
  getAroundYourBack: itemGetAroundYourBack,
  support: itemSupport,
  step: CustomeStepItems,
  commonQuestion: items,
  commonQuestionBottom: itemsBottom,
  exploreHosting: DataExploreHostingShareCarText,
  exploreHosting_bottom: DataExploreHostingShareCarText_bottom,
  ourHost: itemOurHost,
  commonQuestionImg: itemCommonQuestionBody,
  imgExploreHosting: {
    img: 'ImgExploreShareACar'
  },
  wrapperTitle: wrapperTitle
}

const shareACarSlice = createSlice({
  name: 'shareACar',
  initialState,
  reducers: {
    updateBodyTop: (state, action: PayloadAction<IBodyTop>) => {
      state.bodyTop = action.payload
    },
    addSlider: (state, action: PayloadAction<IItemSlider>) => {
      state.sliders.push(action.payload)
    },
    updateSlider: (state, action: PayloadAction<{ index: number; slider: IItemSlider }>) => {
      const { index, slider } = action.payload
      state.sliders[index] = slider
    }
  },
  extraReducers: (builder) => {}
})

export const { updateBodyTop, addSlider, updateSlider } = shareACarSlice.actions
const shareAcarReducer = shareACarSlice.reducer
export default shareAcarReducer
