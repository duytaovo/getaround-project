import { createSlice } from '@reduxjs/toolkit'
import axios from 'axios'
interface IdynamicData<T> {
  [key: string]: T
}

const data: IdynamicData<string> = {
  home_hero_s1: 'value1',
  home_hero_s2: 'value2',
  home_hero_s3: 'value3',
  home_hero_s4: 'value4',
  home_hero_s5: 'value5',
  home_hero_s6: 'value6',
  home_hero_s7: 'value7',
  home_hero_s8: 'value8',
  home_hero_s9: 'value9',
  home_hero_s10: 'value10',
  hosting_s1: 'value11',
  hosting_s2: 'value12',
  hosting_s3: 'value13',
  hosting_s4: 'value14',
  hosting_s5: 'value15',
  hosting_s6: 'value16',
  hosting_s7: 'value17',
  hosting_s8: 'value18',
  hosting_s9: 'value19',
  hosting_s10: 'value20',
  hosting_s11: 'value21',
  hosting_s12: 'value22',
  hosting_s13: 'value23',
  hosting_s14: 'value24',
  hosting_s15: 'value25',
  hosting_s16: 'value26',
  hosting_s17: 'value27',
  hosting_s18: 'value28',
  hosting_s19: 'value29'
}

const dataSlice = createSlice({
  name: 'dataSlice',
  initialState: data,
  reducers: {},
  extraReducers: (builder) => {}
})

export const {} = dataSlice.actions
const dataReducer = dataSlice.reducer
export default dataReducer
