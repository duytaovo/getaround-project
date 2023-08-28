import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import CarApi from 'src/apis/user/user_car'
import { Car, itemCar } from 'src/types/car'
import { payloadCreator } from 'src/utils/utils'

export const getCars = createAsyncThunk('Car/getCars', payloadCreator(CarApi.getCar))
export const getCarsBrand = createAsyncThunk('Car/getCarsBrand', payloadCreator(CarApi.getCarBrand))
export const getCarsModel = createAsyncThunk('Car/getCarsModel', payloadCreator(CarApi.getCarModel))
export const getCarsSeri = createAsyncThunk('Car/getCarsSeri', payloadCreator(CarApi.getCarSeri))
export const getCarsType = createAsyncThunk('Car/getCarsType', payloadCreator(CarApi.getCarType))
export const getCarsLicense = createAsyncThunk('Car/getCarsLicense', payloadCreator(CarApi.getCarLicense))
export const addCars = createAsyncThunk('Car/addCars', payloadCreator(CarApi.addCar))

interface CarState {
  carList: Car[]
  carsBrand: any[]
  carsModel: any[]
  carsSeri: any[]
  carType: any[]
  carLicense: any[]
  indexCardActive: number
}

const initialState: CarState = {
  carList: [],
  indexCardActive: 0,
  carLicense: [],
  carsBrand: [],
  carsModel: [],
  carsSeri: [],
  carType: []
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
    builder.addCase(getCarsBrand.fulfilled, (state, { payload }) => {
      state.carsBrand = payload.data
    })
    builder.addCase(getCarsModel.fulfilled, (state, { payload }) => {
      state.carsModel = payload.data
    })
    builder.addCase(getCarsLicense.fulfilled, (state, { payload }) => {
      state.carLicense = payload.data
    })
    builder.addCase(getCarsType.fulfilled, (state, { payload }) => {
      state.carType = payload.data
    })
    builder.addCase(getCarsSeri.fulfilled, (state, { payload }) => {
      state.carsSeri = payload.data
    })
  }
})

const carReducer = CarSlice.reducer
export const { updateIndexCardActive } = CarSlice.actions
export default carReducer
