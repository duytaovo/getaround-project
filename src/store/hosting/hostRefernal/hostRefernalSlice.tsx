import { PayloadAction, createSlice } from '@reduxjs/toolkit'

import { ISelectItemsExploreHosting } from 'src/types/HowItWork'
import { DataExploreHostingHostRefernalText } from 'src/items/ExploreHosting/DataExploreHostingText'
import { ISelectItemsSlideLeftRight } from 'src/types/HowItWork'
import { DataSlideLeftRightHostRefernal } from 'src/items/SlideLeftRight/DataSlideLeftRight'
import { ISelectItemsHeaderHostRefernal } from 'src/types/hostRefernal/hostRefernal'
import { DataHeaderHostrefernal } from 'src/pages/HostRefernal/HeaderhostRefernal'
import { ICustomeSteps } from 'src/types/customeSteps.type'
import { CustomeStepItemHostRefernal } from 'src/items/CustomeStepItem/CustomeStepItem'
import { ISelectItemsImgCustomeSteps } from 'src/types/hostRefernal/hostRefernal'
import { DataImgCustomeStepHostRF } from 'src/pages/HostRefernal/HostRefernal'
import { ICommonQuestions } from 'src/types/commonQuestion.type'
import { DataitemsHostRefernal } from 'src/items/CommonQuestionItems/CommonQuestionItems'
interface hostRefernalState {
  ExplorehostRefernal: ISelectItemsExploreHosting
  SlideLeftRighthostRefernal: ISelectItemsSlideLeftRight[]
  HeaderhostRefernal: ISelectItemsHeaderHostRefernal
  customeSteps: ICustomeSteps[]
  imgcustomeSteps: ISelectItemsImgCustomeSteps
  QuestionhostRefernal: ICommonQuestions[]
}

const initialState: hostRefernalState = {
  ExplorehostRefernal: {
    id: 'ExploreHosting_hostRefernal',
    mainTitle: '',
    headerTitle: 'OTHER HOST BONUSES',
    Title: 'Explore more bonuses',

    Description:
      "Referrals aren't the only way to make extra money as a Getaround Host. Explore more ways to earn more.",
    Link: '/'
  },
  SlideLeftRighthostRefernal: [
    {
      id: 'SlideLeftRight_hostRefernal_01',
      img: 'https://assets-global.website-files.com/5c16e90c8f6920b098f834e5/63ec0cde6f148fb8b21d20e3_ga-illustration-7.svg',
      label: 'The details',
      Linkto: '/',
      Link: 'Referrals must be made with your custom referral link on this page',
      contents: [
        `not with the link you'll find in the Getaround app. If you don't want to share the link directly with a friend, you can submit their information through the form above.`,

        `With each host you refer, you can earn a maximum of a $1000 referral bonus. Refer more friends or family to earn more. All referred Hosts must list cars that meet Getaround's standard vehicle eligibility requirements`
      ]
    }
  ],
  HeaderhostRefernal: {
    id: 'header_hosting_hostRefernal',
    headerTitle: 'Make even more',
    title: 'when you refer your friends',
    content:
      "You already know how powerful hosting can be. Time to share the love. Don't delay—this is a limited-time offer.",
    img: 'https://assets.website-files.com/581d2676fe18a07e43923cfc/63ec0f79defe6c3903d84ee4_ga-illustration-2.svg'
  },
  customeSteps: [
    {
      title: 'Think of friends to refer',

      subTitle: "You've got this. Who do you know with a car that  might like to list it?"
    },
    {
      title: 'Copy your custom referral link',
      subTitle: `Generate your link in the tool on this page. Share it with your friends via email or text. Make sure to use your link, since it's the only way for us to credit you for referrals.`
    },
    {
      title: 'Follow up with your friends',
      subTitle:
        "Don't stop with just sending the link. Talk to your friends, share the Host handbook, and see how you can help them get started."
    }
  ],
  imgcustomeSteps: {
    id: 'ImgCustomeSteps_HostRF',
    img: 'https://assets.website-files.com/581d2676fe18a07e43923cfc/63dc1685bdd5eaa356d17f23_6306804d1f0ca670cfa33eb5_iStock-688453812%202.jpg',
    title: 'Make it happen in seconds'
  },
  QuestionhostRefernal: [
    {
      key: '1',
      label: 'When and how will I receive my referral bonus?',
      contents: [
        'Initial $200',
        "‍When: After your referral's first vehicle goes live for bookings",
        'How: Earnings adjustment in your account',
        '‍Revenue sharing (25% of the referral"s first 60 days of earnings)',
        `‍When: 60 days after the referral's first vehicle goes live for bookings`,
        'How: Earnings adjustment in your account'
      ]
    },
    {
      key: '2',
      label: 'When and how will I receive my referral bonus?',
      contents: [
        'Initial $200',
        "‍When: After your referral's first vehicle goes live for bookings",
        'How: Earnings adjustment in your account',
        '‍Revenue sharing (25% of the referral"s first 60 days of earnings)',
        `‍When: 60 days after the referral's first vehicle goes live for bookings`,
        'How: Earnings adjustment in your account'
      ]
    },
    {
      key: '3',
      label: 'When and how will I receive my referral bonus?',
      contents: [
        'Initial $200',
        "‍When: After your referral's first vehicle goes live for bookings",
        'How: Earnings adjustment in your account',
        '‍Revenue sharing (25% of the referral"s first 60 days of earnings)',
        `‍When: 60 days after the referral's first vehicle goes live for bookings`,
        'How: Earnings adjustment in your account'
      ]
    },
    {
      key: '4',
      label: 'When and how will I receive my referral bonus?',
      contents: [
        'Initial $200',
        "‍When: After your referral's first vehicle goes live for bookings",
        'How: Earnings adjustment in your account',
        '‍Revenue sharing (25% of the referral"s first 60 days of earnings)',
        `‍When: 60 days after the referral's first vehicle goes live for bookings`,
        'How: Earnings adjustment in your account'
      ]
    },
    {
      key: '5',
      label: 'When and how will I receive my referral bonus?',
      contents: [
        'Initial $200',
        "‍When: After your referral's first vehicle goes live for bookings",
        'How: Earnings adjustment in your account',
        '‍Revenue sharing (25% of the referral"s first 60 days of earnings)',
        `‍When: 60 days after the referral's first vehicle goes live for bookings`,
        'How: Earnings adjustment in your account'
      ]
    },
    {
      key: '6',
      label: 'When and how will I receive my referral bonus?',
      contents: [
        'Initial $200',
        "‍When: After your referral's first vehicle goes live for bookings",
        'How: Earnings adjustment in your account',
        '‍Revenue sharing (25% of the referral"s first 60 days of earnings)',
        `‍When: 60 days after the referral's first vehicle goes live for bookings`,
        'How: Earnings adjustment in your account'
      ]
    }
  ]
}

const hostRefernalSlice = createSlice({
  name: 'hostRefernal',
  initialState,
  reducers: {
    updateExploreHostRefernal: (state, action: PayloadAction<ISelectItemsExploreHosting>) => {
      state.ExplorehostRefernal = action.payload
    },
    updateSlideLeftRightHostRefernal: (state, action: PayloadAction<ISelectItemsSlideLeftRight>) => {
      state.SlideLeftRighthostRefernal.push(action.payload)
    },
    updateHeaderHostRefernal: (state, action: PayloadAction<ISelectItemsHeaderHostRefernal>) => {
      state.HeaderhostRefernal = action.payload
    },
    updateCustomeStepsHostRefernal: (state, action: PayloadAction<ISelectItemsSlideLeftRight>) => {
      state.SlideLeftRighthostRefernal.push(action.payload)
    },
    updateImgCustomeStepsHostRefernal: (state, action: PayloadAction<ISelectItemsImgCustomeSteps>) => {
      state.imgcustomeSteps = action.payload
    },
    updateQuestionHostRefernal: (state, action: PayloadAction<ICommonQuestions>) => {
      state.QuestionhostRefernal.push(action.payload)
    }
  },
  extraReducers: (builder) => {}
})

export const {
  updateExploreHostRefernal,
  updateHeaderHostRefernal,
  updateSlideLeftRightHostRefernal,
  updateCustomeStepsHostRefernal,
  updateImgCustomeStepsHostRefernal,
  updateQuestionHostRefernal
} = hostRefernalSlice.actions
const hostRefernalReducer = hostRefernalSlice.reducer
export default hostRefernalReducer
