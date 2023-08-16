import { PayloadAction, createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axios from 'axios'

import dataApi from 'src/apis/data/data.api'
import { payloadCreator } from 'src/utils/utils'

export const _getData = createAsyncThunk('data/getData', payloadCreator(dataApi.getData))

interface IdynamicData<T> {
  [key: string]: T
}

interface DataState {
  data: IdynamicData<string>
}

const initialState: DataState = {
  data: {}
}

const dataSlice = createSlice({
  name: 'data',
  initialState: initialState,
  reducers: {
    updateData: (state, action: { payload: IdynamicData<string> }) => {
      state.data = { ...state?.data, ...action?.payload }
    }
  },
  extraReducers: (builder) => {
    builder.addCase(_getData.fulfilled, (state, { payload }) => {
      console.log(payload.data)
      state.data = payload.data.data
    })
  }
})

export const { updateData } = dataSlice.actions
const dataReducer = dataSlice.reducer
export default dataReducer
