import { PayloadAction, createSlice } from '@reduxjs/toolkit'
import { ISelectItemsExploreHosting, ISelectItemsImgExploreHosting } from 'src/types/HowItWork'
import { ISelectItemsSlideLeftRight, ISelectImglideLeftRight } from 'src/types/HowItWork'
import { ISelectItemsHeaderHostRefernal } from 'src/types/hostRefernal/hostRefernal'
import { ICustomeSteps } from 'src/types/customeSteps.type'
import { ISelectItemsImgCustomeSteps } from 'src/types/hostRefernal/hostRefernal'
import { ICommonQuestions } from 'src/types/commonQuestion.type'
import { ISelectItemsCustomeCard } from 'src/types/customeCard'
interface hostRefernalState {
  ExplorehostRefernal: ISelectItemsExploreHosting
  SlideLeftRighthostRefernal: ISelectItemsSlideLeftRight[]
  HeaderhostRefernal: ISelectItemsHeaderHostRefernal
  customeSteps: ICustomeSteps[]
  imgcustomeSteps: ISelectItemsImgCustomeSteps
  QuestionhostRefernal: ICommonQuestions[]
  ImgSlideLeftRight_HostRefernal: ISelectImglideLeftRight
  ImgExploreHR: ISelectItemsImgExploreHosting
  CustomeCard: ISelectItemsCustomeCard[]
}

const initialState: hostRefernalState = {
  ImgExploreHR: {
    img: 'ImgExploreHR'
  },
  ImgSlideLeftRight_HostRefernal: {
    img: 'ImgSlideLeftRight_HostRefernal',
    mainTitle: 'MainTirleLeftRight_HostRefernal'
  },
  ExplorehostRefernal: {
    id: 'ExploreHosting_hostRefernal',
    mainTitle: 'mainTitle_Explore_hostRefernal',
    headerTitle: 'headerTitle_Explore_hostRefernal',
    Title: 'title_Explore_hostRefernal',

    Description: 'description_Explore_hostRefernal',
    Link: 'link_Explore_hostRefernal'
  },
  SlideLeftRighthostRefernal: [
    {
      id: 'SlideLeftRight_hostRefernal_01',
      img: 'img_SlideLeftRight_hostRefernal',
      label: 'label_SlideLeftRight_hostRefernal',
      Linkto: 'linkTo_SlideLeftRight_hostRefernal',
      Link: 'link_SlideLeftRight_hostRefernal',
      contents: [`content1_SlideLeftRight_hostRefernal`, `content2_SlideLeftRight_hostRefernal`]
    }
  ],
  HeaderhostRefernal: {
    id: 'header_hosting_hostRefernal',
    headerTitle: 'headerTitle_Header_hostRefernal',
    title: 'title_Header_hostRefernal',
    content: 'content_Header_hostRefernal',
    img: 'img_Header_hostRefernal'
  },
  customeSteps: [
    {
      title: 'title1_customeSteps',

      subTitle: 'subtitle1_customeSteps'
    },
    {
      title: 'title2_customeSteps',

      subTitle: 'subtitle2_customeSteps'
    },
    {
      title: 'title3_customeSteps',

      subTitle: 'subtitle3_customeSteps'
    }
  ],
  imgcustomeSteps: {
    id: 'ImgCustomeSteps_HostRF',
    img: 'img_imgcustomeSteps',
    title: 'title_imgcustomeSteps',
    headerTitle: 'Headertitle_imgcustomeSteps'
  },
  QuestionhostRefernal: [
    {
      key: 'key1_Question_hostRefernal',
      label: 'label1_Question_hostRefernal',
      contents: [
        'content1_1_Question_hostRefernal',
        'content1_2_Question_hostRefernal',
        'content1_3_Question_hostRefernal',
        'content1_4_Question_hostRefernal'
      ]
    },
    {
      key: 'key2_Question_hostRefernal',
      label: 'label2_Question_hostRefernal',
      contents: [
        'content2_1_Question_hostRefernal',
        'content2_2_Question_hostRefernal',
        'content2_3_Question_hostRefernal',
        'content2_4_Question_hostRefernal'
      ]
    },
    {
      key: 'key3_Question_hostRefernal',
      label: 'label3_Question_hostRefernal',
      contents: [
        'content3_1_Question_hostRefernal',
        'content3_2_Question_hostRefernal',
        'content3_3_Question_hostRefernal',
        'content3_4_Question_hostRefernal'
      ]
    },
    {
      key: 'key4_Question_hostRefernal',
      label: 'label4_Question_hostRefernal',
      contents: [
        'content4_1_Question_hostRefernal',
        'content4_2_Question_hostRefernal',
        'content4_3_Question_hostRefernal',
        'content4_4_Question_hostRefernal'
      ]
    }
  ],
  CustomeCard: [
    {
      header: 'header_hostRefernal',
      title: 'title_hostRefernal',
      description: 'description_hostRefernal'
    }
  ]
}

const hostRefernalSlice = createSlice({
  name: 'hostRefernal',
  initialState,
  reducers: {
    updateExploreHostRefernal: (state, action: PayloadAction<ISelectItemsExploreHosting>) => {
      state.ExplorehostRefernal = action.payload
    },
    updateSlideLeftRightHostRefernal: (state, action: PayloadAction<ISelectItemsSlideLeftRight>) => {
      state.SlideLeftRighthostRefernal.push(action.payload)
    },
    updateHeaderHostRefernal: (state, action: PayloadAction<ISelectItemsHeaderHostRefernal>) => {
      state.HeaderhostRefernal = action.payload
    },
    updateCustomeStepsHostRefernal: (state, action: PayloadAction<ISelectItemsSlideLeftRight>) => {
      state.SlideLeftRighthostRefernal.push(action.payload)
    },
    updateImgCustomeStepsHostRefernal: (state, action: PayloadAction<ISelectItemsImgCustomeSteps>) => {
      state.imgcustomeSteps = action.payload
    },
    updateQuestionHostRefernal: (state, action: PayloadAction<ICommonQuestions>) => {
      state.QuestionhostRefernal.push(action.payload)
    }
  },
  extraReducers: (builder) => {}
})

export const {
  updateExploreHostRefernal,
  updateHeaderHostRefernal,
  updateSlideLeftRightHostRefernal,
  updateCustomeStepsHostRefernal,
  updateImgCustomeStepsHostRefernal,
  updateQuestionHostRefernal
} = hostRefernalSlice.actions
const hostRefernalReducer = hostRefernalSlice.reducer
export default hostRefernalReducer
