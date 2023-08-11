import { createSlice } from '@reduxjs/toolkit'

interface IdynamicData<T> {
  [key: string]: T
}

const data: IdynamicData<string> = {
  home_hero_t1: 'value1',
  home_hero_t2: 'value2',
  home_hero_t3: 'value3',
  home_hero_t4: 'value4',
  home_hero_t5: 'value5',
  home_perfect_car_t6: 'value6',
  home_perfect_car_t7: 'value7',
  home_perfect_car_t8: 'value8',
  home_perfect_car_t9: 'value9',
  home_perfect_car_t10: 'value10',

  home_sharing_market_title_1: 'sharing-market',
  home_sharing_market_item_1: 'A',
  home_sharing_market_item_2: 'B',
  home_sharing_maket_item_3: 'C',
  home_sharing_maket_item_4: 'D',
  home_sharing_maket_item_5: 'E',
  home_sharing_maket_item_6: 'F',
  home_sharing_maket_item_7: 'G',
  home_sharing_maket_item_8: 'H',

  home_step_title_1: 'Phan Ngoc Nam',
  home_step_heading_1: 'Phan Ngoc Nam v2',
  home_step_item_txt_1: 'Nam child',
  home_step_item_txt_2: 'sub title 1',
  home_step_item_txt_3: 'Luu so em di',
  home_step_item_txt_4: 'Khi nao ma co can con dau thi goi cho em',
  home_step_item_txt_5: 'Khong nho loi nua',
  home_step_item_txt_6: 'what do you ussually do after work?',

  home_hero_img1: 'value1',
  home_hero_img2: 'value2',
  home_hero_img3: 'value3',
  home_hero_img4: 'value4',
  home_hero_img5: 'value5',
  home_hero_img6: 'value6',
  home_hero_img7: 'value7',
  home_hero_img8: 'value8',
  home_hero_img9: 'value9',
  home_hero_img10: 'value10',
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
