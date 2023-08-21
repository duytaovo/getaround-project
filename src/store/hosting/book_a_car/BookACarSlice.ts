import { createSlice } from '@reduxjs/toolkit'
import { heroSection } from 'src/items/ShareACarId/ShareACarId'
import { IHeroSection } from 'src/store/app/home/HomeTypes/Hero.type'

interface BookACarState {
  heroSection: IHeroSection
}

const initialState: BookACarState = {
  heroSection: heroSection
}

const bookACarSlice = createSlice({
  name: 'bookACar',
  initialState,
  reducers: {},
  extraReducers: (builder) => {}
})

const bookAcarReducer = bookACarSlice.reducer
export default bookAcarReducer
