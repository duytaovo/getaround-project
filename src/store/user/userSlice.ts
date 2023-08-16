import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import authApi from 'src/apis/auth/auth.api'
import { payloadCreator } from 'src/utils/utils'
export const login = createAsyncThunk('auth/login', payloadCreator(authApi.login))
import jwtDecode from 'jwt-decode'

interface DecodedToken {
  userID: number
  permissions: string
  username: string
  // Add other properties as needed
}

interface IUser {
  name: string
  token: string
  permission: number
  isActiveEdit?: boolean
}

const decodeToken = jwtDecode(localStorage.getItem('accessToken') || '') as DecodedToken

// console.log(decodeToken.permissions)

const initialState: IUser = {
  name: 'admin',
  token: '123',
  permission: 0,
  // permission: Number(decodeToken.permissions) || 0,
  // permission: Number(localStorage?.getItem('permission') || 0) || 0,
  // permission: Number(permissions = jwtDecode(localStorage?.getItem('accessToken') || 'no_access_token_here')) || 0,
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

      console.log(payload.data)
      localStorage.setItem('accessToken', payload.data.accessToken)

      state.permission = Number(payload.data.permission || '0')
      // console.log()
    })
  }
})

export const { updateUser, toggleActiveEdit } = userSlice.actions
const userReducer = userSlice.reducer
export default userReducer
