import { PayloadAction, createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { ItemCarouselCommunity } from 'src/items/Carousel/Carouseltems'
import { items } from 'src/items/CommonQuestionItems/CommonQuestionItems'
import { CustomeStepItems } from 'src/items/CustomeStepItem/CustomeStepItem'
import { DataExploreHostingShareCarText } from 'src/items/ExploreHosting/DataExploreHostingText'
import {
  ItemBodyTop,
  ItemContentSlider,
  itemBanner,
  itemBodyCardBottom,
  itemBodyCardTop,
  itemGetAroundYourBack,
  itemOurHost
} from 'src/items/ShareACar/ShareACar'
import { ItemSliderShareCar } from 'src/items/SliderItem/Slider'
import { itemSupport } from 'src/pages/Hosting/ShareACar/components/Support/Support'
import { ISelectItemsExploreHosting } from 'src/types/HowItWork'
import { IBodyTop, IItemBodyBannerCard, IItemCarousel, IItemContentSlider, IItemGetAroundYourBack, IItemSlider, IItemSupport } from 'src/types/hosting_shareACar.type'
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
  getAroundYourBack:IItemGetAroundYourBack
  step:ICustomeStep[]
  commonQuestion:ICommonQuestion[]
  exploreHosting:ISelectItemsExploreHosting[]
  ourHost:IItemGetAroundYourBack
}

const initialState: ShareACarState = {
  bodyTop: ItemBodyTop,
  sliders: ItemSliderShareCar,
  contentSlider: ItemContentSlider,
  bodyBannerCard: itemBanner,
  bodyCardTop: itemBodyCardTop,
  bodyCardBottom: itemBodyCardBottom,
  carouselReview:ItemCarouselCommunity,
  getAroundYourBack:itemGetAroundYourBack,
  support:itemSupport,
  step:CustomeStepItems,
  commonQuestion:items,
  exploreHosting:DataExploreHostingShareCarText,
  ourHost:itemOurHost

}

const shareACarSlice = createSlice({
  name: 'shareACar',
  initialState,
  reducers: {
    updateBodyTop: (state, action: PayloadAction<IBodyTop>) => {
      state.bodyTop = action.payload;
    },
    addSlider: (state, action: PayloadAction<IItemSlider>) => {
      state.sliders.push(action.payload);
    },
    updateSlider: (state, action: PayloadAction<{ index: number; slider: IItemSlider }>) => {
      const { index, slider } = action.payload;
      state.sliders[index] = slider;
    },
  },
  extraReducers: (builder) => {}
})

export const {updateBodyTop,addSlider,updateSlider} = shareACarSlice.actions
const shareAcarReducer = shareACarSlice.reducer
export default shareAcarReducer
