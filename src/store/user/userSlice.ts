import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import authApi from 'src/apis/auth/auth.api'
import { payloadCreator } from 'src/utils/utils'
export const login = createAsyncThunk('auth/login', payloadCreator(authApi.login))

interface IUser {
  name: string
  token: string
  permision: number
}

const initialState: IUser = {
  name: 'admin',
  token: '123',
  permision: -1
}

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(login.fulfilled, (state, { payload }) => {
      state.token = payload.data.accessToken
      localStorage.setItem('accessToken', state.token)
      state.permision = -1
    })
  }
})

export const {} = userSlice.actions
const userReducer = userSlice.reducer
export default userReducer
