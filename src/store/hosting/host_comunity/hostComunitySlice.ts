import { createSlice } from '@reduxjs/toolkit'
import { ItemCarouselCommunity } from 'src/items/Carousel/Carouseltems'
import {
  DataExploreHostingShareCarText,
  DataExploreHostingShareCarText_Community,
  itemBannerCommunity,
  itemCardBodyButton,
  itemCardBodyImg,
  itemCardBodyParnerDeal,
  itemCardBodyReferFriend,
  itemImgExploreHosting,
  itemImgGettingStarted,
  itemLink,
  itemLinkNailTheBasic,
  itemOurHost,
  itemSliderHostComunity,
  itemTopGettingStarted,
  theNailBasicContent
} from 'src/items/ShareACarId/ShareACarId'
import { ISelectItemsExploreHosting } from 'src/types/HowItWork'
import {
  IItemBanner,
  IItemCardBodyButton,
  IItemLink,
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
  carouselCommunity: IItemCarousel[]
  exploreHosting: ISelectItemsExploreHosting
  ourHost: IItemGetAroundYourBack
  gettingStartedNailBasic: IItemNailTheBasic
  topGettingStarted: IItemTopGettingStarted
  imgGettingStarted: string
  imgExploreHosting: string
  cardBodyButton:IItemCardBodyButton

  itemLinkNailTheBasic:IItemNailTheBasic[]
  itemLink:IItemLink[]

}

const initialState: ShareACarState = {
  sliderHostComunity: itemSliderHostComunity,
  cardBodyImg: itemCardBodyImg,
  cardBodyParnerDeal: itemCardBodyParnerDeal,
  cardBodyReferFriend: itemCardBodyReferFriend,
  cardBodyButton: itemCardBodyButton,
  bannerCommunity: itemBannerCommunity,
  carouselCommunity: ItemCarouselCommunity,
  exploreHosting: DataExploreHostingShareCarText_Community,
  ourHost: itemOurHost,
  gettingStartedNailBasic: theNailBasicContent,
  topGettingStarted: itemTopGettingStarted,
  imgGettingStarted:itemImgGettingStarted,
  imgExploreHosting:itemImgExploreHosting,
  itemLinkNailTheBasic:itemLinkNailTheBasic,
  itemLink:itemLink

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
