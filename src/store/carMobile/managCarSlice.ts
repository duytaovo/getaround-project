import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import CarApiMobile from 'src/apis/bookCarMobile'
import CarApi from 'src/apis/user/user_car'
import { payloadCreator } from 'src/utils/utils'

export const getCarsHistory = createAsyncThunk('Car/getCarsHistory', payloadCreator(CarApiMobile.getCarHistory))
export const getCars = createAsyncThunk('Car/getCarsBrand', payloadCreator(CarApi.getCarBrand))

interface CarState {
  carListHistory: any[]
  cars: any[]
}

const initialState: CarState = {
  carListHistory: [],
  cars: []
}

const CarSlice = createSlice({
  name: 'Car',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getCarsHistory.fulfilled, (state, { payload }) => {
      state.carListHistory = payload.data.cars
    }),
      builder.addCase(getCars.fulfilled, (state, { payload }) => {
        state.cars = payload.data.cars
      })
  }
})

const carReducer = CarSlice.reducer
export const {} = CarSlice.actions
export default carReducer
