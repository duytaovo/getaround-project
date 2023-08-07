import { createSlice } from '@reduxjs/toolkit'
import { ItemCarouselCommunity } from 'src/items/Carousel/Carouseltems'
import {
  itemBannerCommunity,
  itemCardBodyImg,
  itemCardBodyParnerDeal,
  itemCardBodyReferFriend,
  itemGettingStarted,
  itemSliderHostComunity
} from 'src/items/ShareACar/ShareACar'
import { IItemBanner, IItemGettingStarted, IItemSliderHostComunity } from 'src/types/hoisting_comunity.type '
import { IItemBodyBannerCard, IItemCarousel } from 'src/types/hoisting_shareACar.type'

interface ShareACarState {
  sliderHostComunity:IItemSliderHostComunity[]
  cardBodyImg:IItemBodyBannerCard
  cardBodyParnerDeal:IItemBodyBannerCard
  cardBodyReferFriend:IItemBodyBannerCard
  gettingStarted:IItemGettingStarted
  bannerCommunity:IItemBanner
  CarouselCommunity:IItemCarousel[]
}

const initialState: ShareACarState = {
  sliderHostComunity:itemSliderHostComunity,
  cardBodyImg:itemCardBodyImg,
  cardBodyParnerDeal:itemCardBodyParnerDeal,
  cardBodyReferFriend:itemCardBodyReferFriend,
  gettingStarted:itemGettingStarted,
  bannerCommunity:itemBannerCommunity,
  CarouselCommunity:ItemCarouselCommunity
}

const communitySlice = createSlice({
  name: 'community',
  initialState,
  reducers: {
    // updateBodyTop: (state, action: PayloadAction<IBodyTop>) => {
    //   state.bodyTop = action.payload;
    // },
    // addSlider: (state, action: PayloadAction<IItemSlider>) => {
    //   state.sliders.push(action.payload);
    // },
    // updateSlider: (state, action: PayloadAction<{ index: number; slider: IItemSlider }>) => {
    //   const { index, slider } = action.payload;
    //   state.sliders[index] = slider;
    // },
  },
  extraReducers: (builder) => {}
})

// export const {updateBodyTop,addSlider,updateSlider} = shareACarSlice.actions
const communityReducer = communitySlice.reducer
export default communityReducer
