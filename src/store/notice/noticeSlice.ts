import { PayloadAction, createSlice } from '@reduxjs/toolkit'
import { ISelectItemsNotice1, ISelectItemsNotice2 } from 'src/types/notice'
interface NoticeState {
  Notice1: ISelectItemsNotice1
  Notice2: ISelectItemsNotice2
}

const initialState: NoticeState = {
  Notice1: {
    noticeMain: 'mainNotice_notice1',
    noticeSub: 'subNotice_notice1'
  },
  Notice2: {
    noticeMain: 'mainNotice_notice2',
    noticeSub: 'subNotice_notice2'
  }
}

const NoticeSlice = createSlice({
  name: 'Notice',
  initialState,
  reducers: {
    updateNotice1: (state, action: PayloadAction<ISelectItemsNotice1>) => {
      state.Notice1 = action.payload
    },
    updateNotice2: (state, action: PayloadAction<ISelectItemsNotice2>) => {
      state.Notice2 = action.payload
    }
  },
  extraReducers: (builder) => {}
})

export const { updateNotice1, updateNotice2 } = NoticeSlice.actions
const NoticeReducer = NoticeSlice.reducer
export default NoticeReducer
