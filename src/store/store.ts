import { AnyAction, Store, ThunkDispatch, configureStore } from '@reduxjs/toolkit'

import appReducer from './app/app.slice'
import shareAcarReducer from './hosting/share_a_car/shareACarSlice'
import HowItWorkReducer from './howitwork/HowItWork/HowItWorkSlice'
import ConnectHIWReducer from './howitwork/Connect/ConnectSlice'
import HomeReducer from './app/home/home.slice'
import UserReducer from './user/userSlice'
import communityReducer from './hosting/host_comunity/hostComunitySlice'
import NewsRoomReducer from './aboutus/newsroom/newsroomSlice'
import AboutUSReducer from './aboutus/aboutUs/aboutusSlice'
import hostRefernalReducer from './hosting/hostRefernal/hostRefernalSlice'
import SafeTrustReducer from './howitwork/SafeTrust/SafeTrustSlice'
import driveWithUberSlice from './app/partners/driveWithUber/driveWithUber.slice'
import partnersWithUsSlice from './app/partners/partnerWithUs/partnersWithUs.slice'
import dataReducer from './dataSlice'
import NoticeReducer from './notice/noticeSlice'
import hostBonusReducer from './hosting/host_bonus/hostbonusSlice'
import bookAcarReducer from './hosting/book_a_car/BookACarSlice'
import carReducer from './car/manageCar/managCarSlice'
import carMobileReducer from './carMobile/managCarSlice'
export const store = configureStore({
  reducer: {
    data: dataReducer,
    loading: appReducer,
    shareAcar: shareAcarReducer,
    bookAcar: bookAcarReducer,
    howitwork: HowItWorkReducer,
    connecthiw: ConnectHIWReducer,
    newsroom: NewsRoomReducer,
    homePageData: HomeReducer,
    driveWithUberData: driveWithUberSlice.reducer,
    partnersWithUs: partnersWithUsSlice.reducer,
    AboutUs: AboutUSReducer,
    community: communityReducer,
    hostingReferral: hostRefernalReducer,
    safetrust: SafeTrustReducer,
    user: UserReducer,
    notice: NoticeReducer,
    hostBonus: hostBonusReducer,
    car: carReducer,
    carMobile: carMobileReducer
  },
  devTools: process.env.NODE_ENV === 'development',
  middleware: (getDefaultMiddleware) => [...getDefaultMiddleware({ serializableCheck: false })]
})

// trích xuất type
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

// 1. Get the root state's type from reducers

// 2. Create a type for thunk dispatch
export type AppThunkDispatch = ThunkDispatch<RootState, any, AnyAction>

// 3. Create a type for store using RootState and Thunk enabled dispatch
export type AppStore = Omit<Store<RootState, AnyAction>, 'dispatch'> & {
  dispatch: AppThunkDispatch
}

export default store
