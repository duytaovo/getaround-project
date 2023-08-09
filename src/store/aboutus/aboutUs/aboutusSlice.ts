import { PayloadAction, createSlice } from '@reduxjs/toolkit'
import { ISelectItemsBlog } from 'src/types/aboutUs/newsRoom'
import { DataBlogAboutUs } from 'src/components/Blog/Blog'
import { ISelectItemsExploreHosting } from 'src/types/HowItWork'
import { DataExploreHostingAboutUsText } from 'src/items/ExploreHosting/DataExploreHostingText'
import { ISelectItemsCarouselNewsRoom } from 'src/types/aboutUs/CarouselNewsRoom'
import { ItemCarouselAboutUs_NewsRoom } from 'src/items/Carousel/Carouseltems'
import { ISelectItemsTitleCarouselNewsRoom } from 'src/types/aboutUs/CarouselNewsRoom'
import { DataTitleCarouselAboutUs } from 'src/pages/AboutUs/AboutUs'
import { ISelectItemsJoinTeamAboutUs, ISelectBannerAboutUs } from 'src/types/aboutUs/aboutus'
import { DataJoinTeamAboutUs } from 'src/pages/AboutUs/JoinTeam/JoinTeam'
import { DataBannerAboutUs } from 'src/pages/AboutUs/Banner/Banner'
import { DataConnectedCarSharingHome } from 'src/items/ConnectedCarSharing/DataConnectedCarSharing'
import { IConnectedCarSharing } from 'src/types/connectedCarSharing.type'
import { ISelectHeaderAboutUs } from 'src/types/aboutUs/aboutus'
import { DataHeaderAboutUs } from 'src/pages/AboutUs/HeaderSlide/HeaderSlide'
interface AboutUSState {
  BlogNewsRoom: ISelectItemsBlog
  ExploreAboutUs: ISelectItemsExploreHosting
  CarouselNewsRoom: ISelectItemsCarouselNewsRoom[]
  TitleCarouselAboutUs: ISelectItemsTitleCarouselNewsRoom
  JoinTeamAboutUs: ISelectItemsJoinTeamAboutUs
  BannerAboutUS: ISelectBannerAboutUs
  ConnectedCarSharing: IConnectedCarSharing[]
  HeaderAboutUs: ISelectHeaderAboutUs[]
}

const initialState: AboutUSState = {
  BlogNewsRoom: DataBlogAboutUs,
  ExploreAboutUs: DataExploreHostingAboutUsText,
  CarouselNewsRoom: ItemCarouselAboutUs_NewsRoom,
  TitleCarouselAboutUs: DataTitleCarouselAboutUs,
  JoinTeamAboutUs: DataJoinTeamAboutUs,
  BannerAboutUS: DataBannerAboutUs,
  ConnectedCarSharing: DataConnectedCarSharingHome,
  HeaderAboutUs: DataHeaderAboutUs
}

const AboutUSSlice = createSlice({
  name: 'AboutUs',
  initialState,
  reducers: {
    updateExploreAboutUs: (state, action: PayloadAction<ISelectItemsExploreHosting>) => {
      state.ExploreAboutUs = action.payload
    },
    updateCaruouselNewsRoom: (state, action: PayloadAction<ISelectItemsCarouselNewsRoom>) => {
      state.CarouselNewsRoom.push(action.payload)
    },
    updateTitleCarouselAboutUs: (state, action: PayloadAction<ISelectItemsTitleCarouselNewsRoom>) => {
      state.TitleCarouselAboutUs = action.payload
    },
    updateJoinTeamAboutUs: (state, action: PayloadAction<ISelectItemsJoinTeamAboutUs>) => {
      state.JoinTeamAboutUs = action.payload
    },
    updateBlogAboutUS: (state, action: PayloadAction<ISelectItemsBlog>) => {
      state.BlogNewsRoom = action.payload
    },
    updateBannerAboutUS: (state, action: PayloadAction<ISelectBannerAboutUs>) => {
      state.BannerAboutUS = action.payload
    },
    updateConnectAboutUs: (state, action: PayloadAction<IConnectedCarSharing>) => {
      state.ConnectedCarSharing.push(action.payload)
    },
    updateHeaderAboutUs: (state, action: PayloadAction<ISelectHeaderAboutUs>) => {
      state.HeaderAboutUs.push(action.payload)
    }
  },
  extraReducers: (builder) => {}
})

export const {
  updateBlogAboutUS,
  updateExploreAboutUs,
  updateTitleCarouselAboutUs,
  updateJoinTeamAboutUs,
  updateBannerAboutUS,
  updateConnectAboutUs,
  updateHeaderAboutUs
} = AboutUSSlice.actions
const AboutUSReducer = AboutUSSlice.reducer
export default AboutUSReducer
