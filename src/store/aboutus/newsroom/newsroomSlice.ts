import { PayloadAction, createSlice } from '@reduxjs/toolkit'
import { ISelectItemsBlog } from 'src/types/aboutUs/newsRoom'
import { DataBlogNewsRoom } from 'src/components/Blog/Blog'
import { DataHelpCUstomerNewsroom } from 'src/pages/NewsRoom/HelpCustomer/HelpCustomer'
import { ISelectItemsHelpCustomer } from 'src/types/aboutUs/newsRoom'
import { ISelectItemsHeader } from 'src/types/aboutUs/newsRoom'
import { DataHeaderNewsRoom } from 'src/pages/NewsRoom/HeaderNewsRoom/HeaderNewsRoom'
import { DataReadNewItem } from 'src/items/NewsRoom/DataNewsRoom'
import { ISelectItemsReadNews } from 'src/types/aboutUs/newsRoom'
import { ISelectItemsCarouselNewsRoom } from 'src/types/aboutUs/CarouselNewsRoom'
import { ItemCarouselNewsRoom_NewsRoom } from 'src/items/Carousel/Carouseltems'
import { ISelectItemsTitleCarouselNewsRoom } from 'src/types/aboutUs/CarouselNewsRoom'
import { DataTitleCarouselNR } from 'src/pages/NewsRoom/NewsRoom'
interface NewsRoomState {
  BlogNewsRoom: ISelectItemsBlog
  HelpCustomerNewsRoom: ISelectItemsHelpCustomer
  HeaderNewsRoom: ISelectItemsHeader
  ReadNewsRoom: ISelectItemsReadNews[]
  CarouselNewsRoom: ISelectItemsCarouselNewsRoom[]
  TitleCarouselNewsRoom: ISelectItemsTitleCarouselNewsRoom
}

const initialState: NewsRoomState = {
  BlogNewsRoom: DataBlogNewsRoom,
  HelpCustomerNewsRoom: DataHelpCUstomerNewsroom,
  HeaderNewsRoom: DataHeaderNewsRoom,
  ReadNewsRoom: DataReadNewItem,
  CarouselNewsRoom: ItemCarouselNewsRoom_NewsRoom,
  TitleCarouselNewsRoom: DataTitleCarouselNR
}

const NewsRoomSlice = createSlice({
  name: 'NewsRoom',
  initialState,
  reducers: {
    updateReadNewsRoom: (state, action: PayloadAction<ISelectItemsReadNews>) => {
      state.ReadNewsRoom.push(action.payload)
    },
    updateCaruouselNewsRoom: (state, action: PayloadAction<ISelectItemsCarouselNewsRoom>) => {
      state.CarouselNewsRoom.push(action.payload)
    },
    updateTitleCarouselNewsRoom: (state, action: PayloadAction<ISelectItemsTitleCarouselNewsRoom>) => {
      state.TitleCarouselNewsRoom = action.payload
    },
    updateBlogNewsRoom: (state, action: PayloadAction<ISelectItemsBlog>) => {
      state.BlogNewsRoom = action.payload
    },
    updateHeaderNewsRoom: (state, action: PayloadAction<ISelectItemsHeader>) => {
      state.HeaderNewsRoom = action.payload
    },
    updateHelpCustomerNewsroom: (state, action: PayloadAction<ISelectItemsHelpCustomer>) => {
      state.HeaderNewsRoom = action.payload
    }
  },
  extraReducers: (builder) => {}
})

export const {
  updateBlogNewsRoom,
  updateHeaderNewsRoom,
  updateHelpCustomerNewsroom,
  updateCaruouselNewsRoom,
  updateTitleCarouselNewsRoom,
  updateReadNewsRoom
} = NewsRoomSlice.actions
const NewsRoomReducer = NewsRoomSlice.reducer
export default NewsRoomReducer
