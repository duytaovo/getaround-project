import { PayloadAction, createSlice } from '@reduxjs/toolkit'
import { ISelectItemsExploreHosting } from 'src/types/HowItWork'
import { DataExploreHostingHomeText } from 'src/items/ExploreHosting/DataExploreHostingText'
import { DataProprietaryHowItWork } from 'src/items/Proprietary/DataProprietary'
import { ISelectItemsProprietary } from 'src/types/HowItWork'
import { ISelectItemsHearCommunity } from 'src/types/HowItWork'
import { DataCommunity } from 'src/pages/howitwork/HearCommunity/HearCommunity'
import { ISelectItemsSlide } from 'src/types/HowItWork'
import { DataSlideHowItWork } from 'src/pages/howitwork/SlideHowItWork/SlideHowItWork'
import { ISelectItemsSlideLeftRight } from 'src/types/HowItWork'
import { DataSlideLeftRightHowItWork } from 'src/items/SlideLeftRight/DataSlideLeftRight'
import { useDispatch, useSelector } from 'react-redux'
import { RootState } from 'src/store/store'
import axios from 'axios'
interface HowItWorkState {
  ExploreHowItWork: ISelectItemsExploreHosting
  ProprietaryHowItWork: ISelectItemsProprietary
  HearCommunityHowItWork: ISelectItemsHearCommunity
  SlideHowItWorkR: ISelectItemsSlide
  SlideLeftRightHowItWork: ISelectItemsSlideLeftRight[]
}

const initialState: HowItWorkState = {
  ExploreHowItWork: {
    mainTitle: 'EXPLORE HOSTING',
    headerTitle: '',
    Title: 'Have a car? Start sharing',

    Description:
      "Become a Host and list your car on Getaround. You'll help your neighbors travel easier while making extra money each month.",
    Link: ''
  },
  ProprietaryHowItWork: {
    id: 'Proprietary_HowItWork',
    headerTitle: 'out proprietary hardware',
    title: 'Explore the power of Getaround Connect®',
    description:
      '  Getaround vehicles are powered by our proprietary Connect® technology. To make sharing a car as easy as owning one, we built the only hardware designed specifically for contactless, peer-to-peer car sharing. ',
    description2:
      ' allows you to find, book, and unlock cars directly from your phone, and avoid meeting up with anyone  throughout the process to exchange keys.',
    span: 'Getaround Connect®',
    img: 'https://assets-global.website-files.com/5c16e90c8f6920b098f834e5/639a1e9f44d6d5e62cda3fbb_iStock-1243633999%201.jpg',
    Link: '/'
  },
  HearCommunityHowItWork: {
    id: 'Community_HowItWork',
    title: 'Hear from the community',
    content: 'Stories from Getaround community members, in their own words.',
    link: '/'
  },
  SlideHowItWorkR: {
    id: 'Slide_HowItWork',
    mainTitle: 'Out mission',
    title: 'Chúng tôi kết nối những chiếc xe an toàn, tiện lợi với mọi người',
    img1: 'https://assets-global.website-files.com/5c16e90c8f6920b098f834e5/63cef76977f95804643dc7b4_howitworks-guest%20c.jpg',
    content1: 'Người chia sẻ xe hưởng lợi bằng việc tiếp cận linh hoạt đến một phương tiện xe hơi.',
    img2: 'https://assets-global.website-files.com/5c16e90c8f6920b098f834e5/63cef77225a91196b5c06fe7_howitworks-host-c.jpg',
    content2: 'Chủ xe hơi kiếm tiền từ những khoảng thời gian họ không lái xe dù sao.'
  },
  SlideLeftRightHowItWork: [
    {
      id: 'SlideLeftRight_HowItWork_01',
      img: 'https://assets-global.website-files.com/5c16e90c8f6920b098f834e5/63ec0cde6f148fb8b21d20e3_ga-illustration-7.svg',
      label: 'Trip insurance',
      Linkto: '',
      Link: 'Peace of mind by design.',
      contents: [
        ` Getaround trips include insurance for the length of your reservation. You shouldn't have to stress if something doesn't go according to plan.`
      ]
    },
    {
      id: 'SlideLeftRight_HowItWork_02',
      img: 'https://assets-global.website-files.com/5c16e90c8f6920b098f834e5/63ec0cde6f148fb8b21d20e3_ga-illustration-7.svg',
      label: 'Customer support',
      Linkto: '',
      Link: 'Help standing by, 24/7.',
      contents: [
        ` We're here to solve problems at any point of your trip, from the wee hours of the morning to late at night.`
      ]
    },
    {
      id: 'SlideLeftRight_HowItWork_03',
      img: 'https://assets-global.website-files.com/5c16e90c8f6920b098f834e5/63ec0cde6f148fb8b21d20e3_ga-illustration-7.svg',
      label: 'Wiggle room for changes',
      Linkto: '',
      Link: 'Flexible cancellations.',
      contents: [
        `Plans changed? Cancel within 1 hour of booking or more than 24 hours before the start of your trip, and you won't be charged any fees.`
      ]
    }
  ]
}

const HowItWorkSlice = createSlice({
  name: 'HowItwork',
  initialState,
  reducers: {
    updateExploreHIW: (state, action: PayloadAction<ISelectItemsExploreHosting>) => {
      state.ExploreHowItWork = action.payload
    },
    updateProprietaryHIW: (state, action: PayloadAction<ISelectItemsProprietary>) => {
      state.ProprietaryHowItWork = action.payload
    },
    updateCommunityHIW: (state, action: PayloadAction<ISelectItemsHearCommunity>) => {
      state.HearCommunityHowItWork = action.payload
    },
    updateSlideHIW: (state, action: PayloadAction<ISelectItemsSlide>) => {
      state.SlideHowItWorkR = action.payload
    },
    updateSlideLeftRightHIW: (state, action: PayloadAction<ISelectItemsSlideLeftRight>) => {
      state.SlideLeftRightHowItWork.push(action.payload)
    }
  },
  extraReducers: (builder) => {}
})

export const { updateExploreHIW, updateProprietaryHIW, updateCommunityHIW, updateSlideHIW, updateSlideLeftRightHIW } =
  HowItWorkSlice.actions
const HowItWorkReducer = HowItWorkSlice.reducer
export default HowItWorkReducer
