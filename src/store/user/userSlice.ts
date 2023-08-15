import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import authApi from 'src/apis/auth/auth.api'
import { payloadCreator } from 'src/utils/utils'
export const login = createAsyncThunk('auth/login', payloadCreator(authApi.login))

interface IUser {
  name: string
  token: string
  permission: number
  isActiveEdit?: boolean
}

const initialState: IUser = {
  name: 'admin',
  token: '123',
  permission: Number(localStorage?.getItem('permission') || 0) || 0,
  isActiveEdit: false
}

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    updateUser: (state, action: { payload: IUser }) => {
      state.permission = Number(action?.payload?.permission || 0)
    },

    toggleActiveEdit: (state) => {
      state.isActiveEdit = !state.isActiveEdit
    }
  },
  extraReducers: (builder) => {
    builder.addCase(login.fulfilled, (state, { payload }) => {
      // state.token = payload.data
      // localStorage.setItem('accessToken', state.token)
      state.permission = -1
    })
  }
})

export const { updateUser, toggleActiveEdit } = userSlice.actions
const userReducer = userSlice.reducer
export default userReducer
