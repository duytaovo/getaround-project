import { createSlice } from '@reduxjs/toolkit'
import { RootState } from 'src/store/store'
import { ICommonQuestions } from 'src/types/commonQuestion.type'
import { IConnectedCarSharing } from 'src/types/connectedCarSharing.type'
import { ICustomeSteps } from 'src/types/customeSteps.type'
import { IExploreHostingText } from 'src/types/exploreHostingText.type'
import { IItemSlider, IItemCarousel } from 'src/types/hoisting.type'
import { IHeroSection } from './HomeTypes/Hero.type'
import { IQAndASection } from 'src/types/IQAndASection.type'
import { IExploreHostingSection } from 'src/types/IExploreHostingSection.type'

interface IHomeStepSection {
  id?: string
  wrapperTitle: string
  heading: string
  itemsData: ICustomeSteps[]
  img: string
}

interface ISectionIncludesSliderPart {
  id?: string
  wrapperTitle: string
  heading: string
  itemsData: IItemSlider[]
}

interface ISharingMarketplace {
  id?: string
  wrapperTitle: string
  itemsData: IConnectedCarSharing[]
}

interface IHomeCarouselSection {
  id?: string
  itemsData: IItemCarousel[]
}

type HomePageType = {
  heroSection: IHeroSection
  perfectCarSliderSection: ISectionIncludesSliderPart
  homeIntoduceCarouselSection: IHomeCarouselSection
  sharingMaketPlaceSection: ISharingMarketplace
  homeStepSection: IHomeStepSection
  exploreHostingSection: IExploreHostingSection
  localFavouriteSection: ISectionIncludesSliderPart
  blogSilerSection: ISectionIncludesSliderPart
  qAndASection: IQAndASection
}

const initialState: HomePageType = {
  heroSection: {
    id: 'p-001',
    title: 'home_hero_t1',
    mainText: 'home_hero_t2',
    startDateTimePikerTitle: 'home_hero_t3',
    endDateTimePikerTitle: 'home_hero_t4',
    buttonSearchText: 'home_hero_t5',
    addressPlaceholder: 'Address',
    datePickerPlaceholder: 'Select date',
    timePickerPlaceholder: 'SelectTime',
    img: 'https://assets-global.website-files.com/5c16e90c8f6920b098f834e5/63c5b095e7bfaba115ba5ccd_homepage-bg-picnic.webp'
  },
  perfectCarSliderSection: {
    id: 'p-002',
    heading: '',
    wrapperTitle: 'home_perfect_car_t6',
    itemsData: [
      {
        id: '1',
        title: 'sliderHome_txt-card_slider_title_1',
        img: 'sliderHome_img-card_slider_1'
      },
      {
        id: '2',
        title: 'sliderHome_txt-card_slider_title_2',
        img: 'sliderHome_img-card_slider_2'
      },
      {
        id: '3',
        title: 'sliderHome_txt-card_slider_title_3',
        img: 'sliderHome_img-card_slider_3'
      },
      {
        id: '4',
        title: 'sliderHome_txt-card_slider_title_4',
        img: 'sliderHome_img-card_slider_4'
      },
      {
        id: '5',
        title: 'sliderHome_txt-card_slider_title_5',
        img: 'sliderHome_img-card_slider_5'
      },
      {
        id: '6',
        title: 'sliderHome_txt-card_slider_title_6',
        img: 'sliderHome_img-card_slider_6'
      }
    ]
  },
  homeIntoduceCarouselSection: {
    id: 'p-003',
    itemsData: [
      {
        id: '1',
        title: 'home_carousel_intro_txt_title_1',
        content: `home_carousel_intro_txt_content_1`,
        header: 'home_carousel_intro_txt_header_1',
        img: 'home_carousel_intro_txt_img_1',
        name: 'Sheri and Adam, Oahu, HI'
      },
      {
        // data[...itemsData.title]
        id: '2',
        title: 'home_carousel_intro_txt_title_2',
        content: `home_carousel_intro_txt_content_2`,
        header: 'home_carousel_intro_txt_header_2',
        img: 'home_carousel_intro_txt_img_2',
        name: 'Sheri and Adam, Oahu, HI'
      },
      {
        id: '3',
        title: 'home_carousel_intro_txt_title_3',
        content: `home_carousel_intro_txt_content_3`,
        header: 'home_carousel_intro_txt_header_3',
        img: 'home_carousel_intro_txt_img_3',
        name: 'Sheri and Adam, Oahu, HI'
      },
      {
        id: '4',
        title: 'home_carousel_intro_txt_title_4',
        content: `home_carousel_intro_txt_content_4`,
        header: 'home_carousel_intro_txt_header_4',
        img: 'home_carousel_intro_txt_img_4',
        name: 'Sheri and Adam, Oahu, HI'
      }
    ]
  },
  sharingMaketPlaceSection: {
    id: 'p-004',
    wrapperTitle: 'home_sharing_market_title_1',
    itemsData: [
      {
        id: '1',
        total: 'home_sharing_market_item_1',
        title: 'home_sharing_market_item_2'
      },
      {
        id: '2',
        total: 'home_sharing_maket_item_3',
        title: 'home_sharing_maket_item_4'
      },
      {
        id: '3',
        total: 'home_sharing_maket_item_5',
        title: 'home_sharing_maket_item_6'
      },
      {
        id: '4',
        total: 'home_sharing_maket_item_7',
        title: 'home_sharing_maket_item_8'
      }
    ]
  },
  homeStepSection: {
    id: 'p-005',
    wrapperTitle: 'home_step_title_1',
    heading: 'home_step_heading_1',
    itemsData: [
      {
        title: 'home_step_item_txt_1',
        subTitle: 'home_step_item_txt_2'
      },
      {
        title: 'home_step_item_txt_3',
        subTitle: 'home_step_item_txt_4'
      },
      {
        title: 'home_step_item_txt_5',
        subTitle: 'home_step_item_txt_6'
      }
    ],
    img: 'https://assets-global.website-files.com/5c16e90c8f6920b098f834e5/63c5b4afd9423e2cac7f6cde_how-it-works-image%20copiar.jpg'
  },
  exploreHostingSection: {
    id: 'p-006',
    wrapperTitle: 'home_explore_txt_1',
    // img: 'imgExploredHostingSection',
    img: 'https://assets-global.website-files.com/5c16e90c8f6920b098f834e5/63c5b458858ce546324e6786_636056a89c0f36b634f4dc4e_AdobeStock_488832115%20copiar.jpg',
    itemData: {
      Title: 'home_explore_item_txt_1',
      Description: 'home_explore_item_txt_2',
      headerTitle: '',
      Link: '',
      mainTitle: ''
    }
  },
  localFavouriteSection: {
    id: 'p-007',
    wrapperTitle: 'home_local_favourite_section_title',
    heading: 'home_local_favourite_section_heading',
    itemsData: [
      {
        id: '1',
        title: 'sliderHome_txt-card_slider_title_7',
        img: 'sliderHome_img-card_slider_7'
      },
      {
        id: '2',
        title: 'sliderHome_txt-card_slider_title_8',
        img: 'sliderHome_img-card_slider_8'
      },
      {
        id: '3',
        title: 'sliderHome_txt-card_slider_title_9',
        img: 'sliderHome_img-card_slider_9'
      },
      {
        id: '4',
        title: 'sliderHome_txt-card_slider_title_10',
        img: 'sliderHome_img-card_slider_10'
      },
      {
        id: '5',
        title: 'sliderHome_txt-card_slider_title_11',
        img: 'sliderHome_img-card_slider_11'
      },
      {
        id: '6',
        title: 'sliderHome_txt-card_slider_title_12',
        img: 'sliderHome_img-card_slider_12'
      }
    ]
  },
  blogSilerSection: {
    id: 'p-008',
    wrapperTitle: 'home_blog_section_title',
    heading: 'home_blog_section_heading',
    itemsData: [
      {
        id: '1',
        title: 'sliderHome_txt-card_slider_title_13',
        content: 'sliderHome_txt-card_slider_content_13',
        time: 'sliderHome_txt-card_slider_time_13',
        img: 'sliderHome_img-card_slider_13'
      },
      {
        id: '2',
        title: 'sliderHome_txt-card_slider_title_14',
        content: 'sliderHome_txt-card_slider_content_14',
        time: 'sliderHome_txt-card_slider_time_14',
        img: 'sliderHome_img-card_slider_14'
      },
      {
        id: '3',
        title: 'sliderHome_txt-card_slider_title_15',
        content: 'sliderHome_txt-card_slider_content_15',
        time: 'sliderHome_txt-card_slider_time_15',
        img: 'sliderHome_img-card_slider_15'
      },
      {
        id: '4',
        title: 'sliderHome_txt-card_slider_title_16',
        content: 'sliderHome_txt-card_slider_content_16',
        time: 'sliderHome_txt-card_slider_time_16',
        img: 'sliderHome_img-card_slider_16'
      },
      {
        id: '5',
        title: 'sliderHome_txt-card_slider_title_17',
        content: 'sliderHome_txt-card_slider_content_17',
        time: 'sliderHome_txt-card_slider_time_17',
        img: 'sliderHome_img-card_slider_17'
      },
      {
        id: '6',
        title: 'sliderHome_txt-card_slider_title_18',
        content: 'sliderHome_txt-card_slider_content_18',
        time: 'sliderHome_txt-card_slider_time_18',
        img: 'sliderHome_img-card_slider_18'
      }
    ]
  },
  qAndASection: {
    id: 'p-009',
    wrapperTitle: 'home_q_and_a_title_txt_1',
    heading: 'home_q_and_a_heading_txt_1',
    img: 'home_q_and_a_img',
    itemsData: [
      {
        key: '1',
        label: 'home_q_and_a_label_txt_1',
        contents: ['home_q_and_a_desc_txt_1', 'home_q_and_a_desc_txt_2', 'home_q_and_a_desc_txt_3']
      },
      {
        key: '2',
        label: 'home_q_and_a_label_txt_2',
        contents: ['home_q_and_a_desc_txt_4', 'home_q_and_a_desc_txt_5', 'home_q_and_a_desc_txt_6']
      },
      {
        key: '3',
        label: 'home_q_and_a_label_txt_3',
        contents: ['home_q_and_a_desc_txt_7', 'home_q_and_a_desc_txt_8', 'home_q_and_a_desc_txt_9']
      },
      {
        key: '4',
        label: 'home_q_and_a_label_txt_4',
        contents: ['home_q_and_a_label_txt_10', 'home_q_and_a_label_txt_11', 'home_q_and_a_label_txt_12']
      }
    ]
  }
}

const homeSlice = createSlice({
  name: 'Home',
  initialState,
  reducers: {}
})

export default homeSlice.reducer
