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
  BlogNewsRoom: {
    id: 'Blog_AboutUS_NewsRoom',
    img: 'https://assets-global.website-files.com/5c16e90c8f6920b098f834e5/63dc05d87b4b95cb44c4ef9f_getaroundblog%20Grande.jpeg',
    headerTitle: 'THE GETAROUND BLOG',
    mainTitle: 'Discover the Getaround blog',
    content:
      ' Explore the collection of stories, news, and other resources for hosts, guests, and partners throughout the  Getaround carsharing community.',
    linkTo: '/'
  },
  HelpCustomerNewsRoom: {
    id: 'helpCustomer_AboutUs_NewsRoom',
    title: ` We're helping consumers shift away from car ownership.`,
    linkTo: `/`,
    nameButton: 'Down the media kit for logos, media assets, and more.',
    img: 'https://assets-global.website-files.com/5c16e90c8f6920b098f834e5/63ec0b73b2f4fb34b18ddb8a_ga-illustration-8.svg'
  },
  HeaderNewsRoom: {
    id: 'header_AboutUs_NewsRoom',
    img: 'https://assets-global.website-files.com/5c16e90c8f6920b098f834e5/63c98c83e7bffe6581cd4811_AdobeStock_516425442%202%20compress.jpg',
    title: 'Explore Getaround in the news',
    content: 'Welcome to our press room. Find our latest press releases and new media coverage of our company.',
    titleButton: 'For media inquiries,',
    email: 'please contact us at press@getaround.com.'
  },
  ReadNewsRoom: [
    {
      id: 'readNews_AboutUs_NewsRoom_1',
      day: 'Jan 5, 2023',
      title: 'Car Sharing: What You Need To Know - Kelley Blue Book',
      link: '/'
    },
    {
      id: 'readNews_AboutUs_NewsRoom_2',
      day: 'Dec 16, 2022',
      title: 'Why This Company Went Public In a Bear Market - TheStreet',
      link: '/'
    },
    {
      id: 'readNews_AboutUs_NewsRoom_3',
      day: 'Dec 8, 2022',
      title: 'Sam Zaid —On Leadership Styles, Decision-Making, Going Public via SPAC at $1.2 Billion Value - Vunela',
      link: '/'
    }
  ],
  CarouselNewsRoom: [
    {
      id: 1,
      title: 'Getaround Reaffirms Commitment as the True Open Carsharing   Marketplace with New Onboarding Incentives',
      date: 'April 28, 2023',
      description: `Following recent news of industry competitor's plans to shut down access to third-party vendors including CarSync, Getaround is ramping up its onboarding incentives`,
      linkto: '/'
    },
    {
      id: 2,
      title: `Getaround Reveals Earth Day Plans to Support Guests' Wallets and The Planet`,
      date: 'April 13, 2023',
      description: `Industry pioneer and world's first connected carsharing
      marketplace is offering new U.S. guests up to $100 in
      savings`,
      linkto: '/'
    },
    {
      id: 3,
      title: `Getaround Acquires HyreCar Assets
      to Accelerate Profitability Path and
      Fortify Worldwide Gig Carsharing
      Leadership Position`,
      date: 'May 11, 2023',
      description: `Getaround anticipates that the acquisition will
      contribute up to $75 million of run-rate annualized
      Gross Booking Value and positive Adjusted EBITDA,
      accelerating its path to profitability
      Transaction is expected to be synergistic as Getaround
      expands its global market footprint`,
      linkto: '/'
    },
    {
      id: 4,
      title: `Getaround Acquires HyreCar Assets
      to Accelerate Profitability Path and
      Fortify Worldwide Gig Carsharing
      Leadership Position`,
      date: 'May 11, 2023',
      description: ``,
      linkto: '/'
    }
  ],
  TitleCarouselNewsRoom: {
    headerTitle: 'NEWS FROM GETAROUND',
    title: 'Press releases',
    linkTo: '/'
  }
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
