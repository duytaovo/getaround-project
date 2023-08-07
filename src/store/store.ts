import { AnyAction, Store, ThunkDispatch, configureStore } from '@reduxjs/toolkit'
<<<<<<< HEAD
import appReducer from './app/app.slice'
import HomeReducer from './app/home/home.slice'
=======
import appReducer from './app/app.slice';
import shareAcarReducer from './hosting/share_a_car/shareACarSlice';
import communityReducer from './hosting/host_comunity/hostComunitySlice';
>>>>>>> 7f6af7d26b4b54e6a8765f17ce6f1711f77cf9de

export const store = configureStore({
  reducer: {
    loading: appReducer,
<<<<<<< HEAD
    homePageData: HomeReducer
=======
    shareAcar:shareAcarReducer,
    community:communityReducer

>>>>>>> 7f6af7d26b4b54e6a8765f17ce6f1711f77cf9de
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
