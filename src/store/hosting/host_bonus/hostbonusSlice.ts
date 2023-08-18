import { PayloadAction, createSlice } from '@reduxjs/toolkit'
import { ISelectItemsExploreHosting, ISelectItemsImgExploreHosting } from 'src/types/HowItWork'
import { ISelectItemsSlideLeftRight, ISelectImglideLeftRight } from 'src/types/HowItWork'
import { ISelectItemsHeaderHostRefernal } from 'src/types/hostRefernal/hostRefernal'
import { ICustomeSteps } from 'src/types/customeSteps.type'
import { ISelectItemsImgCustomeSteps } from 'src/types/hostRefernal/hostRefernal'
import { ICommonQuestions } from 'src/types/commonQuestion.type'
import { ISelectItemsCustomeCardHB, ISelectItemsTitleCustomeCard } from 'src/types/customeCard'
import {
  ISelectItemsEarnUpHostBonus,
  ISelectItemsSecureHostBonus,
  ISelectItemsHostDealHostBonus
} from 'src/types/hostBonus/hostBonus'
interface hostBonusState {
  ExplorehostRefernal: ISelectItemsExploreHosting
  SlideLeftRighthostRefernal: ISelectItemsSlideLeftRight[]
  HeaderhostBonus: ISelectItemsHeaderHostRefernal
  customeSteps: ICustomeSteps[]
  imgcustomeSteps: ISelectItemsImgCustomeSteps
  QuestionhostBonus: ICommonQuestions[]
  ImgSlideLeftRight_HostRefernal: ISelectImglideLeftRight
  ImgExploreHR: ISelectItemsImgExploreHosting
  CustomeCardR: ISelectItemsCustomeCardHB[]
  titleCustomeCardR: ISelectItemsTitleCustomeCard
  EarnUp: ISelectItemsEarnUpHostBonus
  Secure: ISelectItemsSecureHostBonus
  HostDeal: ISelectItemsHostDealHostBonus
}

const initialState: hostBonusState = {
  HostDeal: {
    img: 'imgHostDealHB',
    title: 'titleHostDealHB',
    content: 'contentHostDealHB'
  },
  Secure: {
    headerTitle: 'headerTitle',
    content: 'content',
    nameButtonSharecar: 'nameButtonSharecarBonus',
    footer: 'footerBonusSecure',
    footer2: 'footerBonusSecure2',
    nameButtonAddCar: 'nameButtonAddcarBonus'
  },
  EarnUp: {
    img: 'imgEarnUpHB',
    headerTitle: 'headerTitleEarnUpHB',
    mainTitle: 'mainTitleEarnUpHB',
    content: ['contentEarnUp1', 'contentEarnUp2', 'contentEarnUp3'],
    footer: 'footer1EarnUpHB',
    footer2: 'footer2EarnUpHB',
    footer3: 'footer3EarnUpHB'
  },
  titleCustomeCardR: {
    mainTitle: 'mainTitleCustomeCardHostBonus'
  },
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
  HeaderhostBonus: {
    id: 'header_hosting_hostRefernal',
    headerTitle: 'headerTitle_Header_hostBonus',
    title: 'title_Header_hostBonus',
    content: 'content_Header_hostBonus',
    img: 'img_Header_hostBonus'
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
  QuestionhostBonus: [
    {
      key: 'key1_Question_hostRefernal',
      label: 'label1_Question_hostBonus',
      contents: ['content1_1_Question_hostBonus']
    },
    {
      key: 'key1_Question_hostRefernal',
      label: 'label2_Question_hostBonus',
      contents: ['content2_1_Question_hostBonus']
    },
    {
      key: 'key1_Question_hostRefernal',
      label: 'label3_Question_hostBonus',
      contents: ['content3_1_Question_hostBonus']
    },
    {
      key: 'key1_Question_hostRefernal',
      label: 'label4_Question_hostBonus',
      contents: ['content4_1_Question_hostBonus']
    },
    {
      key: 'key1_Question_hostRefernal',
      label: 'label5_Question_hostBonus',
      contents: ['content5_1_Question_hostBonus']
    },
    {
      key: 'key1_Question_hostRefernal',
      label: 'label6_Question_hostBonus',
      contents: ['content6_1_Question_hostBonus']
    },
    {
      key: 'key1_Question_hostRefernal',
      label: 'label7_Question_hostBonus',
      contents: ['content7_1_Question_hostBonus']
    }
  ],
  CustomeCardR: [
    {
      header: 'header_hosBonus1',
      title: 'title_hostBonus1',
      description: 'description_hostBonus1',
      linkTo: '/host-bonus',
      link: 'Learn more'
    },
    {
      header: 'header_hosBonus2',
      title: 'title_hostBonus2',
      description: 'description_hostBonus2',
      linkTo: '/host-referral',
      link: 'Learn more'
    },
    {
      header: 'header_hosBonus3',
      title: 'title_hostBonus3',
      description: 'description_hostBonus3',
      linkTo: '/solution/insurance',
      link: 'Learn more'
    }
  ]
}

const hostBonusSlice = createSlice({
  name: 'hostBonus',
  initialState,
  reducers: {
    updateExploreHostRefernal: (state, action: PayloadAction<ISelectItemsExploreHosting>) => {
      state.ExplorehostRefernal = action.payload
    },
    updateSlideLeftRightHostRefernal: (state, action: PayloadAction<ISelectItemsSlideLeftRight>) => {
      state.SlideLeftRighthostRefernal.push(action.payload)
    },
    updateHeaderHostRefernal: (state, action: PayloadAction<ISelectItemsHeaderHostRefernal>) => {
      state.HeaderhostBonus = action.payload
    },
    updateCustomeStepsHostRefernal: (state, action: PayloadAction<ISelectItemsSlideLeftRight>) => {
      state.SlideLeftRighthostRefernal.push(action.payload)
    },
    updateImgCustomeStepsHostRefernal: (state, action: PayloadAction<ISelectItemsImgCustomeSteps>) => {
      state.imgcustomeSteps = action.payload
    },
    updateQuestionHostRefernal: (state, action: PayloadAction<ICommonQuestions>) => {
      state.QuestionhostBonus.push(action.payload)
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
} = hostBonusSlice.actions
const hostBonusReducer = hostBonusSlice.reducer
export default hostBonusReducer
