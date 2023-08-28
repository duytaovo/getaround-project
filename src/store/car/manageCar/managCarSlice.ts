import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import CarApi from 'src/apis/user/user_car'
import { Car, itemCar } from 'src/types/car'
import { payloadCreator } from 'src/utils/utils'

export const getCars = createAsyncThunk('Car/getCars', payloadCreator(CarApi.getCar))

interface CarState {
  carList: Car[]
  indexCardActive: number
}

const initialState: CarState = {
  carList: [],
  indexCardActive: 0
}

const CarSlice = createSlice({
  name: 'Car',
  initialState,
  reducers: {
    updateIndexCardActive: (state, action) => {
      state.indexCardActive = action.payload
    }
  },
  extraReducers: (builder) => {
    builder.addCase(getCars.fulfilled, (state, { payload }) => {
      state.carList = payload.data.cars
    })
  }
})

const carReducer = CarSlice.reducer
export const { updateIndexCardActive } = CarSlice.actions
export default carReducer
