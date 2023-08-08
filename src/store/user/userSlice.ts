import { PayloadAction, createAsyncThunk, createSlice } from '@reduxjs/toolkit'

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
  extraReducers: (builder) => {}
})

export const {} = userSlice.actions
const userReducer = userSlice.reducer
export default userReducer
