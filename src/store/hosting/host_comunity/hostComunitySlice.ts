import { createSlice } from '@reduxjs/toolkit'
import { ItemCarouselCommunity } from 'src/items/Carousel/Carouseltems'
import {
  DataExploreHostingShareCarText_Community,
  itemBannerCommunity,
  itemCardBodyButton,
  itemCardBodyImg,
  itemCardBodyImg2,
  itemCardBodyImg3,
  itemCardBodyParnerDeal,
  itemCardBodyReferFriend,
  itemImgExploreHosting,
  itemImgGettingStarted,
  itemLink,
  itemLinkNailTheBasic,
  itemOurHost,
  itemOurHostCommunity,
  itemSliderHostComunity,
  itemTopGettingStarted,
  itemTopHostComunity,
  itemsCommonQuestionCommunity,
  theNailBasicContent
} from 'src/items/ShareACarId/ShareACarId'
import { ISelectItemsExploreHosting, ISelectItemsImgExploreHosting } from 'src/types/HowItWork'
import {
  IItemBanner,
  IItemCardBodyButton,
  IItemLink,
  IItemNailTheBasic,
  IItemSliderHostComunity,
  IItemTopGettingStarted
} from 'src/types/hosting_comunity.type '
import { IItemBodyBannerCard, IItemCarousel, IItemGetAroundYourBack } from 'src/types/hosting_shareACar.type'
interface ICommonQuestion {
  key: string
  label: string
  contents: string[]
}

interface ShareACarState {
  sliderHostComunity: IItemSliderHostComunity[]
  cardBodyImg1: IItemBodyBannerCard
  cardBodyImg2: IItemBodyBannerCard
  cardBodyImg3: IItemBodyBannerCard
  cardBodyParnerDeal: IItemBodyBannerCard
  cardBodyReferFriend: IItemBodyBannerCard
  bannerCommunity: IItemBanner
  carouselCommunity: IItemCarousel[]
  exploreHosting: ISelectItemsExploreHosting
  ourHost: IItemGetAroundYourBack
  gettingStartedNailBasic: IItemNailTheBasic
  topGettingStarted: IItemTopGettingStarted
  imgGettingStarted: string
  imgExploreHosting: ISelectItemsImgExploreHosting
  cardBodyButton: IItemCardBodyButton
  commonQuestion: ICommonQuestion[]
  itemLinkNailTheBasic: IItemNailTheBasic[]
  itemLink: IItemLink[]
  topHostCommunity: IItemGetAroundYourBack
}

const initialState: ShareACarState = {
  sliderHostComunity: itemSliderHostComunity,
  cardBodyImg1: itemCardBodyImg,
  cardBodyImg2: itemCardBodyImg2,
  cardBodyImg3: itemCardBodyImg3,
  cardBodyParnerDeal: itemCardBodyParnerDeal,
  cardBodyReferFriend: itemCardBodyReferFriend,
  cardBodyButton: itemCardBodyButton,
  bannerCommunity: itemBannerCommunity,
  carouselCommunity: ItemCarouselCommunity,
  exploreHosting: DataExploreHostingShareCarText_Community,
  ourHost: itemOurHostCommunity,
  gettingStartedNailBasic: theNailBasicContent,
  topGettingStarted: itemTopGettingStarted,
  imgGettingStarted: itemImgGettingStarted,
  imgExploreHosting: {
    img: 'ImgExploreHostingCom'
  },
  itemLinkNailTheBasic: itemLinkNailTheBasic,
  itemLink: itemLink,
  commonQuestion: itemsCommonQuestionCommunity,
  topHostCommunity: itemTopHostComunity
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
