import { PayloadAction, createSlice } from '@reduxjs/toolkit'
import { ISelectItemsConnectHeader } from 'src/types/HowItWorkConnect'
import { DataHeaderConnect } from 'src/components/HowItWorkConnect/HeaderHIWC'
import { DataSliceHIWC } from 'src/items/SlideHIWC/DataSlideHIWC'
import { ISelectItemSlideHIWC } from 'src/types/HowItWorkConnect'
import { ISelectItemsHeaderkeyFeatures } from 'src/types/HowItWorkConnect'
import { DataHeaderKeyFeatures } from 'src/components/HowItWorkConnect/KeyFeature'
import { ISelectItemsBodykeyFeatures } from 'src/types/HowItWorkConnect'
import { DataKeyFeatureItem } from 'src/items/KeyFeatureItem/DataKeyFeatureItem'
interface ConnectHIWState {
  HeaderConnect: ISelectItemsConnectHeader
  SlideHIWC: ISelectItemSlideHIWC[]
  HeaderKeyFeatures: ISelectItemsHeaderkeyFeatures
  BodyKeyFeatures: ISelectItemsBodykeyFeatures[]
}

const initialState: ConnectHIWState = {
  HeaderConnect: {
    id: 'Header_HowItWork_Connect',
    imgLogo:
      'https://assets-global.website-files.com/5c16e90c8f6920b098f834e5/600754c5a561bdd9d1f4a065_badge-getaround%C2%AE%401X.png',
    titleLogo: ' A SAFER, MORE CONVENIENT WAY TO CARSHARE',
    mainTitleHeader: 'Getaround Connect',
    contentHeader: `No other carsharing service offers contactless sharing using Getaround Connect®. With your Android or iOS
    phone and the Getaround app, you can find, book, and unlock a car, truck, or van near you. Getaround is the
    leading global and digital carsharing marketplace. Try it today.`,
    imgContentHeader:
      'https://assets-global.website-files.com/5c16e90c8f6920b098f834e5/6064908339a45b8d2297f2c9_feature-contactless-booking.svg'
  },
  SlideHIWC: [
    {
      id: 'SlideButton_HowItWork_Connect_01',
      nameButton: 'Share A Car',
      linkTo: '/'
    },
    {
      id: 'SlideButton_HowItWork_Connect_02',
      nameButton: 'Book A Car',
      linkTo: '/'
    }
  ],
  HeaderKeyFeatures: {
    id: 'HeaderKeyFeatures_HowItWork_Connect',
    title: 'key features',
    mainTitle: 'The ultimate in carsharing connectivity',
    subTitle: 'For iOS and Android devices.'
  },
  BodyKeyFeatures: [
    {
      id: 'BodykeyFeatures_01',
      title: 'GPS tracking',
      description:
        "Getaround Connect® enables us to securely track each car's location during Getaround trips, which means we can provide roadside assistance to guests in real-time if they experience any mechanical troubles during their trips.",
      linkSecurity: '',
      linkTo: '/'
    },
    {
      id: 'BodykeyFeatures_02',
      title: 'Security',
      description:
        "Theft-deterrent functionality disables the car's starter when the vehicle is not in use by the host or by a verified guest, so long as the host has enabled",
      linkSecurity: ' Enhanced Security.',
      linkTo: '/'
    },
    {
      id: 'BodykeyFeatures_03',
      title: 'Contactless sharing',
      description:
        "Book and unlock with confidence. Getaround Connect® means you don't need a physical hand-off of keys.",
      linkSecurity: '',
      linkTo: '/'
    },
    {
      id: 'BodykeyFeatures_04',
      title: 'Location',
      description:
        'Getaround Connect® helps hosts find their cars quickly if they’re street-parked without a designated parking space.',
      linkSecurity: '',
      linkTo: '/'
    }
  ]
}

const ConnectHIWSlice = createSlice({
  name: 'ConnectHowItWork',
  initialState,
  reducers: {
    updateHeaderConnect: (state, action: PayloadAction<ISelectItemsConnectHeader>) => {
      state.HeaderConnect = action.payload
    },
    updateSliceHIWC: (state, action: PayloadAction<ISelectItemSlideHIWC>) => {
      state.SlideHIWC.push(action.payload)
    },
    updateHeaderKeyFeatures: (state, action: PayloadAction<ISelectItemsHeaderkeyFeatures>) => {
      state.HeaderKeyFeatures = action.payload
    },
    updateBodyKeyFeatures: (state, action: PayloadAction<ISelectItemsBodykeyFeatures>) => {
      state.BodyKeyFeatures.push(action.payload)
    }
  },
  extraReducers: (builder) => {}
})

export const { updateHeaderConnect, updateSliceHIWC, updateHeaderKeyFeatures } = ConnectHIWSlice.actions
const ConnectHIWReducer = ConnectHIWSlice.reducer
export default ConnectHIWReducer
