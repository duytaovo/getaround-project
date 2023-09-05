import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import CarApi from 'src/apis/user/user_car'
import { Car, itemCar } from 'src/types/car'
import { payloadCreator } from 'src/utils/utils'

export const getCars = createAsyncThunk('Car/getCars', payloadCreator(CarApi.getCar))
export const getCarsBrand = createAsyncThunk('Car/getCarsBrand', payloadCreator(CarApi.getCarBrand))
export const getCarsModel = createAsyncThunk('Car/getCarsModel', payloadCreator(CarApi.getCarModel))
export const getCarYear = createAsyncThunk('Car/getCarYear', payloadCreator(CarApi.getCarYear))
export const getCarsSeri = createAsyncThunk('Car/getCarsSeri', payloadCreator(CarApi.getCarSeri))
export const getCarsType = createAsyncThunk('Car/getCarsType', payloadCreator(CarApi.getCarType))
export const getCarsLicense = createAsyncThunk('Car/getCarsLicense', payloadCreator(CarApi.getCarLicense))
export const getCarsRegis = createAsyncThunk('Car/getCarsRegis', payloadCreator(CarApi.getCarRegis))
export const addCars = createAsyncThunk('Car/addCars', payloadCreator(CarApi.addCar))

interface CarState {
  carList: Car[]
  carsBrand: any[]
  carsYear: any[]
  carsModel: any[]
  carsSeri: any[]
  carType: any[]
  carRegis: any[]
  carLicense: any[]
  indexCardActive: number
}

const initialState: CarState = {
  carList: [],
  indexCardActive: 0,
  carLicense: [],
  carsBrand: [],
  carsModel: [],
  carRegis: [],
  carsYear: [],
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
    builder.addCase(getCarYear.fulfilled, (state, { payload }) => {
      state.carsYear = payload.data
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
    builder.addCase(getCarsRegis.fulfilled, (state, { payload }) => {
      state.carRegis = payload.data
    })
  }
})

const carReducer = CarSlice.reducer
export const { updateIndexCardActive } = CarSlice.actions
export default carReducer
