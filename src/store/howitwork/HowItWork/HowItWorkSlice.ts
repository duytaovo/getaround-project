import { PayloadAction, createSlice } from '@reduxjs/toolkit'
import { ItemCarouselCommunity } from 'src/items/Carousel/Carouseltems'
import {
  ItemBodyTop,
  ItemContentSlider,
  itemBanner,
  itemBodyCardBottom,
  itemBodyCardTop
} from 'src/items/ShareACar/ShareACar'
import { ItemSliderShareCar } from 'src/items/SliderItem/Slider'
import { itemSupport } from 'src/pages/Hosting/ShareACar/components/Support/Support'
import {
  IBodyTop,
  IItemBodyBannerCard,
  IItemCarousel,
  IItemContentSlider,
  IItemSlider,
  IItemSupport
} from 'src/types/hoisting_shareACar.type'

interface ShareACarState {
  bodyTop: IBodyTop
  sliders: IItemSlider[]
  contentSlider: IItemContentSlider
  bodyBannerCard: IItemBodyBannerCard
  bodyCardTop: IItemBodyBannerCard
  bodyCardBottom: IItemBodyBannerCard
  carouselReview: IItemCarousel[]
  support: IItemSupport
}

const initialState: ShareACarState = {
  bodyTop: ItemBodyTop,
  sliders: ItemSliderShareCar,
  contentSlider: ItemContentSlider,
  bodyBannerCard: itemBanner,
  bodyCardTop: itemBodyCardTop,
  bodyCardBottom: itemBodyCardBottom,
  carouselReview: ItemCarouselCommunity,
  support: itemSupport
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
