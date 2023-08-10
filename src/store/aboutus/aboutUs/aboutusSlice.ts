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
  BlogNewsRoom: {
    id: 'Blog_AboutUS_AboutUs',
    img: 'https://assets-global.website-files.com/5c16e90c8f6920b098f834e5/63dc05d87b4b95cb44c4ef9f_getaroundblog%20Grande.jpeg',
    headerTitle: 'THE GETAROUND BLOG',
    mainTitle: 'Discover the Getaround blog',
    content:
      ' Explore the collection of stories, news, and other resources for hosts, guests, and partners throughout the  Getaround carsharing community.',
    linkTo: '/'
  },
  ExploreAboutUs: {
    id: 'ExploreHosting_AboutUs_AboutUs',
    mainTitle: '',
    headerTitle: 'Book  Unlock  and Drive nearby cars',
    Title: 'Book a car ',

    Description: 'Have a car to share?',
    Link: '/'
  },
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
      to Accelerate Profitability `,
      date: 'May 11, 2023',
      description: ``,
      linkto: '/'
    }
  ],
  TitleCarouselAboutUs: {
    id: 'Carousel_Title_AboutUs_AboutUs',
    headerTitle: 'OUR LATEST UPDATES',
    title: 'News room: Press releases',
    linkTo: ''
  },
  JoinTeamAboutUs: {
    id: 'JoinTeam_AboutUS_AboutUs',
    title: 'Join the Getaround team',
    img: 'https://assets-global.website-files.com/5c16e90c8f6920b098f834e5/63ea9fc9c0cafb2053ba37ac_ga-illustration-19.svg',
    content:
      'Want to work with us? Come join the team focused on empowering people to carshare everywhere. Explore open roles at Getaround.',
    linkTo: '/'
  },
  BannerAboutUS: {
    id: 'Banner_AboutUs_AboutUS',

    title:
      "We're helping consumers shift away from car ownership by giving them instant and convenient access to vehicles when they need them.",
    content:
      'Our peer-to-peer marketplace helps solve some of the most pressing challenges facing the world today, including environmental sustainability and access to economic opportunity.',
    img: 'https://assets-global.website-files.com/5c16e90c8f6920b098f834e5/63ec0b73b2f4fb34b18ddb8a_ga-illustration-8.svg'
  },
  ConnectedCarSharing: [
    {
      id: 'Connected_AboutUs_AboutUs',
      total: '1.7M',
      title: 'Worldwide guests'
    },
    {
      id: 'Connected_AboutUs_AboutUs',
      total: '6M',
      title: 'Trips taken'
    },
    {
      id: 'Connected_AboutUs_AboutUs',
      total: '1,000+',
      title: 'Cities covered'
    },
    {
      id: 'Connected_AboutUs_AboutUs',
      total: '8',
      title: 'Countries'
    }
  ],
  HeaderAboutUs: [
    {
      id: 'Header_AboutUs_AboutUs',
      title: 'We empower people to carshare everywhere',
      arrayImg: [
        'https://assets-global.website-files.com/5c16e90c8f6920b098f834e5/6390f378577eec857f016f4e_The-Verge-New-2022.svg',
        'https://assets-global.website-files.com/5c16e90c8f6920b098f834e5/6390f3788372d0e324dafc8f_bloomberglogo.svg',
        'https://assets-global.website-files.com/5c16e90c8f6920b098f834e5/6390f378c864d13f8763bda2_forbes-logo.svg',
        'https://assets-global.website-files.com/5c16e90c8f6920b098f834e5/6390f268577eec6e9601550e_techcrunch%20logo.png',
        'https://assets-global.website-files.com/5c16e90c8f6920b098f834e5/6390f265fdc36f271a970fa2_newyorktimeslogo.png',
        'https://assets-global.website-files.com/5c16e90c8f6920b098f834e5/6390f26576664076cce83df7_nbclogo.png',
        'https://assets-global.website-files.com/5c16e90c8f6920b098f834e5/6390f26630e2fc922c59a4d1_HuffPost.svg.png'
      ]
    }
  ]
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
