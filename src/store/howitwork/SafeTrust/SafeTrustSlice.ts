import { PayloadAction, createSlice } from '@reduxjs/toolkit'

import { ISelectItemsExploreHosting } from 'src/types/HowItWork'
import { DataExploreHostingSafetyTrustText } from 'src/items/ExploreHosting/DataExploreHostingText'
import { DataProprietarySafetyTrust } from 'src/items/Proprietary/DataProprietary'
import { ISelectItemsProprietary } from 'src/types/HowItWork'

import { ISelectItemsSlideLeftRight } from 'src/types/HowItWork'
import { DataSlideLeftRightSafetyTrust } from 'src/items/SlideLeftRight/DataSlideLeftRight'
import { ISelectBookUnlockCar } from 'src/types/SafeTrust'
import { DataBookUnlockCar } from 'src/pages/SafetyTrust/BookUnlocknearCar/BookUnlocknearCar'
import { ISelectItemsHeaderHostRefernal } from 'src/types/hostRefernal/hostRefernal'
import { DataHeaderST } from 'src/pages/SafetyTrust/HeaderSafeTrust'
import { ISelectPowerFull } from 'src/types/SafeTrust'
import { DataPowerFullSafeTrust } from 'src/pages/SafetyTrust/PowerfulVetting/PowerfulVetting'
interface SafeTrustState {
  ExploreST: ISelectItemsExploreHosting
  ProprietaryST: ISelectItemsProprietary
  SlideLeftRightST: ISelectItemsSlideLeftRight[]
  BookUnlockCar: ISelectBookUnlockCar
  HeaderST: ISelectItemsHeaderHostRefernal
  PowerFullST: ISelectPowerFull
}

const initialState: SafeTrustState = {
  ExploreST: {
    id: 'ExploreHosting_SafeTrust',
    mainTitle: 'EXPLORE HOSTING',
    headerTitle: '',
    Title: 'Have a car? Start sharing',

    Description:
      "Become a Host and list your car on Getaround. You'll help your neighbors travel easier while making extra money each month.",
    Link: '/'
  },
  ProprietaryST: {
    id: 'Proprietary_safety-trust',
    headerTitle: '',
    title: 'Getaround Connect® - as an option',
    description:
      '  Getaround vehicles are powered by our proprietary Connect® technology. To make sharing a car as easy as owning one, we built the only hardware designed specifically for contactless, peer-to-peer car sharing. ',
    description2:
      ' allows you to find, book, and unlock cars directly from your phone, and avoid meeting up with anyone  throughout the process to exchange keys.',
    span: 'Getaround Connect®',
    img: 'https://assets-global.website-files.com/5c16e90c8f6920b098f834e5/639a1e9f44d6d5e62cda3fbb_iStock-1243633999%201.jpg',
    Link: '/'
  },
  SlideLeftRightST: [
    {
      id: 'SlideLeftRight_SafeTrust_01',
      img: 'https://assets-global.website-files.com/5c16e90c8f6920b098f834e5/63ec0cde6f148fb8b21d20e3_ga-illustration-7.svg',
      label: 'Insurance on every trip',
      Linkto: '',
      Link: '',
      contents: [
        `Protection for your car in the event of damage. Hosts are covered up to $1,000,00 in liability insurance`
      ]
    },
    {
      id: 'SlideLeftRight_SafeTrust_02',
      img: 'https://assets-global.website-files.com/5c16e90c8f6920b098f834e5/63ec0cde6f148fb8b21d20e3_ga-illustration-7.svg',
      label: 'Real-time trip monitoring',
      Linkto: '',
      Link: '',
      contents: [
        `Our team receives and monitors real-time alerts for late returns and other renter behavior that may indicate a safety event.  We monitor these events on a 24/7 basis and our team takes prompt and appropriate action.`
      ]
    }
  ],
  BookUnlockCar: {
    id: 'BookUnlockCar',
    title: ' Book - Unlock and Drive  nearby cars',
    link: '/'
  },
  HeaderST: {
    id: 'header_HowItWork_SafeTrust',
    headerTitle: 'Safety and trust',
    title: ' at every level',
    content:
      'Getaround prioritizes the safety and security of its community members by implementing proactive safety  measures, verifying identities, maintaining insurance coverage, and using advanced technology to prevent fraud. Additionally, Getaround has a dedicated team available 24/7 to investigate any safety or security  concerns.',
    img: 'https://assets-global.website-files.com/5c16e90c8f6920b098f834e5/641a1bcc9cff2052158af235_ga-illustration-6.svg'
  },
  PowerFullST: {
    id: 'PowerFullSafeTrust',
    img: 'https://assets-global.website-files.com/5c16e90c8f6920b098f834e5/648380f3f2fadb5289320a68_ga-illustration-4.svg',
    headerTitle: 'For Hosts',
    title: 'POWERFUL VETTING & FRAUD DETECTION SYSTEM',
    content: [
      {
        titleSpan: 'Getaround uses advanced identity verification ',
        titleH2:
          'technologies and a thorough screening process to ensure that every Getaround guest meets our guidelines.'
      },
      {
        titleSpan: 'Every Getaround guest must meet our eligibility criteria ',
        titleH2:
          ' in order to rent. To verify guests’ eligibility, we obtain their driving records from the Department of Motor Vehicles. ‍'
      },
      {
        titleSpan: 'A team of dedicated experts agents the latest ',
        titleH2:
          'risk detection technologies to protect hosts by identifying and preventing fraudulent activity on our platform.'
      }
    ]
  }
}

const SafeTrustSlice = createSlice({
  name: 'SafeTrust',
  initialState,
  reducers: {
    updateExploreST: (state, action: PayloadAction<ISelectItemsExploreHosting>) => {
      state.ExploreST = action.payload
    },
    updateProprietaryST: (state, action: PayloadAction<ISelectItemsProprietary>) => {
      state.ProprietaryST = action.payload
    },

    updateSlideLeftRightST: (state, action: PayloadAction<ISelectItemsSlideLeftRight>) => {
      state.SlideLeftRightST.push(action.payload)
    },
    updateBookUnlockCarST: (state, action: PayloadAction<ISelectBookUnlockCar>) => {
      state.BookUnlockCar = action.payload
    },
    updateHeaderST: (state, action: PayloadAction<ISelectItemsHeaderHostRefernal>) => {
      state.HeaderST = action.payload
    },
    updatePowerST: (state, action: PayloadAction<ISelectPowerFull>) => {
      state.PowerFullST = action.payload
    }
  },
  extraReducers: (builder) => {}
})

export const { updateExploreST, updateProprietaryST, updateSlideLeftRightST, updateBookUnlockCarST, updateHeaderST } =
  SafeTrustSlice.actions
const SafeTrustReducer = SafeTrustSlice.reducer
export default SafeTrustReducer
