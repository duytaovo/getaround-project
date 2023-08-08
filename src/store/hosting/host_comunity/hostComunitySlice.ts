import { createSlice } from '@reduxjs/toolkit'
import { ItemCarouselCommunity } from 'src/items/Carousel/Carouseltems'
import { DataExploreHostingShareCarText } from 'src/items/ExploreHosting/DataExploreHostingText'
import {
  itemBannerCommunity,
  itemCardBodyImg,
  itemCardBodyParnerDeal,
  itemCardBodyReferFriend,
  itemOurHost,
  itemSliderHostComunity,
  itemTopGettingStarted,
  theNailBasicContent
} from 'src/items/ShareACar/ShareACar'
import { ISelectItemsExploreHosting } from 'src/types/HowItWork'
import {
  IItemBanner,
  IItemNailTheBasic,
  IItemSliderHostComunity,
  IItemTopGettingStarted
} from 'src/types/hosting_comunity.type '
import { IItemBodyBannerCard, IItemCarousel, IItemGetAroundYourBack } from 'src/types/hosting_shareACar.type'

interface ShareACarState {
  sliderHostComunity: IItemSliderHostComunity[]
  cardBodyImg: IItemBodyBannerCard
  cardBodyParnerDeal: IItemBodyBannerCard
  cardBodyReferFriend: IItemBodyBannerCard
  bannerCommunity: IItemBanner
  CarouselCommunity: IItemCarousel[]
  exploreHosting: ISelectItemsExploreHosting[]
  ourHost: IItemGetAroundYourBack
  gettingStartedNailBasic: IItemNailTheBasic
  topGettingStarted: IItemTopGettingStarted
}

const initialState: ShareACarState = {
  sliderHostComunity: itemSliderHostComunity,
  cardBodyImg: itemCardBodyImg,
  cardBodyParnerDeal: itemCardBodyParnerDeal,
  cardBodyReferFriend: itemCardBodyReferFriend,
  bannerCommunity: itemBannerCommunity,
  CarouselCommunity: ItemCarouselCommunity,
  exploreHosting: DataExploreHostingShareCarText,
  ourHost: itemOurHost,
  gettingStartedNailBasic: theNailBasicContent,
  topGettingStarted: itemTopGettingStarted
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
