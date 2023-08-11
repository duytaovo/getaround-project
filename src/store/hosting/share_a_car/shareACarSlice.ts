import { PayloadAction, createAsyncThunk, createSlice } from '@reduxjs/toolkit'
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
  wrapperTitle
} from 'src/items/ShareACarId/ShareACarId'
import { ISelectItemsExploreHosting } from 'src/types/HowItWork'
import { IBodyCommonQuestionImg, IBodyTop, IIWrapContentTitle, IItemBodyBannerCard, IItemCarousel, IItemContentSlider, IItemGetAroundYourBack, IItemSlider, IItemSupport } from 'src/types/hosting_shareACar.type'
import { payloadCreator } from 'src/utils/utils'

export const getShareACar = createAsyncThunk('shareACar/getShareACar', payloadCreator(''))

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
  commonQuestionImg: IBodyCommonQuestionImg
  exploreHosting: ISelectItemsExploreHosting
  exploreHosting_bottom: ISelectItemsExploreHosting
  ourHost: IItemGetAroundYourBack
  wrapperTitle:IIWrapContentTitle[]
  imgExploreHosting:string
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
  exploreHosting: DataExploreHostingShareCarText,
  exploreHosting_bottom:DataExploreHostingShareCarText_bottom,
  ourHost: itemOurHost,
  commonQuestionImg:itemCommonQuestionBody,
  imgExploreHosting:itemImgExploreHosting,
  wrapperTitle:wrapperTitle
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
