import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import authApi from 'src/apis/auth/auth.api'
import { payloadCreator } from 'src/utils/utils'
import jwtDecode from 'jwt-decode'
import { getAccessTokenFromLS } from 'src/utils/auth'
import { toast } from 'react-toastify'

export const login = createAsyncThunk('auth/login', payloadCreator(authApi.login))

interface DecodedToken {
  userID: number
  permissions: string
  username: string
}

interface IUser {
  name: string
  accessToken: string
  permission: string
  isActiveEdit?: boolean
}

let decodeToken: DecodedToken
export const isAccessTokenExpired = (): any => {
  if (!getAccessTokenFromLS() || getAccessTokenFromLS() == '') {
    return '0'
  }
  try {
    decodeToken = jwtDecode(getAccessTokenFromLS() || '') as DecodedToken
    return decodeToken.permissions
  } catch (error) {
    toast.error('Invalid token format')
    return ''
  }
}
const initialState: IUser = {
  name: 'admin',
  accessToken: '123',
  permission: isAccessTokenExpired() || '0',
  isActiveEdit: false
}

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    updateUser: (state, action: { payload: IUser }) => {
      state.permission = action?.payload?.permission
    },

    toggleActiveEdit: (state) => {
      state.isActiveEdit = !state.isActiveEdit
    }
  },
  extraReducers: (builder) => {
    builder.addCase(login.fulfilled, (state, { payload }) => {
      state.accessToken = payload.data.accessToken
    })
  }
})

export const { updateUser, toggleActiveEdit } = userSlice.actions
const userReducer = userSlice.reducer
export default userReducer
