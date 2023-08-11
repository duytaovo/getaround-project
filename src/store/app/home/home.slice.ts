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
        id: 1,
        title: 'SUV/Jeep',
        img: 'https://assets-global.website-files.com/5c19140f997c250869180aa0/63f151630314aae858291f3f_homehatchback-p-500.jpg'
      },
      {
        id: 2,
        title: 'SUV/Jeep',
        img: 'https://assets-global.website-files.com/5c19140f997c250869180aa0/63f151630314aae858291f3f_homehatchback-p-500.jpg'
      },
      {
        id: 3,
        title: 'SUV/Jeep',
        img: 'https://assets-global.website-files.com/5c19140f997c250869180aa0/63f151630314aae858291f3f_homehatchback-p-500.jpg'
      },
      {
        id: 4,
        title: 'SUV/Jeep',
        img: 'https://assets-global.website-files.com/5c19140f997c250869180aa0/63f151630314aae858291f3f_homehatchback-p-500.jpg'
      },
      {
        id: 5,
        title: 'SUV/Jeep',
        img: 'https://assets-global.website-files.com/5c19140f997c250869180aa0/63f151630314aae858291f3f_homehatchback-p-500.jpg'
      },
      {
        id: 6,
        title: 'SUV/Jeep',
        img: 'https://assets-global.website-files.com/5c19140f997c250869180aa0/63f151630314aae858291f3f_homehatchback-p-500.jpg'
      }
    ]
  },
  homeIntoduceCarouselSection: {
    id: 'p-003',
    itemsData: [
      {
        id: 1,
        title: 'We make sharing cars simple.',
        content: `Getaround is the world's first carsharing marketplace to offer a 100% digital experience.`,
        header: 'WHAT IS GETAROUND?',
        img: 'https://assets-global.website-files.com/5c19140f997c250869180aa0/61423e93194b43a1163b71ff_613d0738270e9b84f99c22ae_atlanta-georgia.jpeg',
        name: 'Sheri and Adam, Oahu, HI'
      },
      {

        // data[...itemsData.title]
        id: 2,
        title: 'We make sharing cars simple.',
        content: `Getaround is the world's first carsharing marketplace to offer a 100% digital experience.`,
        header: 'WHAT IS GETAROUND?',
        img: 'https://assets-global.website-files.com/5c16e90c8f6920b098f834e5/6424a42fa7a5e299086ca951_yasminehostga%20Pequena.png',
        name: 'Sheri and Adam, Oahu, HI'
      },
      {
        id: 3,
        title: 'We make sharing cars simple.',
        content: `Getaround is the world's first carsharing marketplace to offer a 100% digital experience.`,
        header: 'WHAT IS GETAROUND?',
        img: 'https://assets-global.website-files.com/5c16e90c8f6920b098f834e5/63ec0bdc7fffbd39d91b6d46_ga-illustration-11.svg',
        name: 'Sheri and Adam, Oahu, HI'
      },
      {
        id: 4,
        title: 'We make sharing cars simple.',
        content: `Getaround is the world's first carsharing marketplace to offer a 100% digital experience.`,
        header: 'WHAT IS GETAROUND?',
        img: 'https://assets-global.website-files.com/5c16e90c8f6920b098f834e5/63ec0bdc7fffbd39d91b6d46_ga-illustration-11.svg',
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
        images: [
          'https://assets-global.website-files.com/5c16e90c8f6920b098f834e5/636580091db0b72179b2c1ab_appstore-icon.svg',
          'https://assets-global.website-files.com/5c16e90c8f6920b098f834e5/63657fca094cac0e19c45708_googleplay-icon.svg'
        ],
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
    wrapperTitle: 'CARS IN YOUR CITY',
    heading: 'Local favorites near you',
    itemsData: [
      {
        id: 1,
        title: 'SUV/Jeep',
        content: 'Maximize your host earnings',
        time: 'August-25-2023',
        img: 'https://assets-global.website-files.com/5c19140f997c250869180aa0/63f151560314aa5369291e7a_homesuv-p-500.jpg'
      },
      {
        id: 2,
        title: 'SUV/Jeep',
        content: 'Maximize your host earnings',
        time: 'August-25-2023',
        img: 'https://assets-global.website-files.com/5c19140f997c250869180aa0/63604de17a48638f8bcbfdd5_AdobeStock_519954384_Editorial_Use_Only%206.jpg'
      },
      {
        id: 3,
        title: 'SUV/Jeep',
        content: 'Maximize your host earnings',
        time: 'August-25-2023',
        img: 'https://assets-global.website-files.com/5c19140f997c250869180aa0/63f151a269cfc056b53bff66_homepuckuptruck-p-500.jpg'
      },
      {
        id: 4,
        title: 'SUV/Jeep',
        content: 'Maximize your host earnings',
        time: 'August-25-2023',
        img: 'https://assets-global.website-files.com/5c19140f997c250869180aa0/63f151630314aae858291f3f_homehatchback-p-500.jpg'
      },
      {
        id: 5,
        title: 'SUV/Jeep',
        content: 'Maximize your host earnings',
        time: 'August-25-2023',
        img: 'https://assets-global.website-files.com/5c19140f997c250869180aa0/61423e93194b43a1163b71ff_613d0738270e9b84f99c22ae_atlanta-georgia.jpeg'
      },
      {
        id: 6,
        title: 'SUV/Jeep',
        content: 'Maximize your host earnings',
        time: 'August-25-2023',
        img: 'https://assets-global.website-files.com/5c19140f997c250869180aa0/61423e93194b43a1163b71ff_613d0738270e9b84f99c22ae_atlanta-georgia.jpeg'
      }
    ]
  },
  blogSilerSection: {
    id: 'p-008',
    wrapperTitle: 'THE GETAROUND BLOG',
    heading: 'The Road Ahead: Discover our Blog',
    itemsData: [
      {
        id: 1,
        title: 'SUV/Jeep',
        content: 'Maximize your host earnings',
        time: 'August-25-2023',
        img: 'https://assets-global.website-files.com/5c19140f997c250869180aa0/63f151560314aa5369291e7a_homesuv-p-500.jpg'
      },
      {
        id: 2,
        title: 'SUV/Jeep',
        content: 'Maximize your host earnings',
        time: 'August-25-2023',
        img: 'https://assets-global.website-files.com/5c19140f997c250869180aa0/63604de17a48638f8bcbfdd5_AdobeStock_519954384_Editorial_Use_Only%206.jpg'
      },
      {
        id: 3,
        title: 'SUV/Jeep',
        content: 'Maximize your host earnings',
        time: 'August-25-2023',
        img: 'https://assets-global.website-files.com/5c19140f997c250869180aa0/63f151a269cfc056b53bff66_homepuckuptruck-p-500.jpg'
      },
      {
        id: 4,
        title: 'SUV/Jeep',
        content: 'Maximize your host earnings',
        time: 'August-25-2023',
        img: 'https://assets-global.website-files.com/5c19140f997c250869180aa0/63f151630314aae858291f3f_homehatchback-p-500.jpg'
      },
      {
        id: 5,
        title: 'SUV/Jeep',
        content: 'Maximize your host earnings',
        time: 'August-25-2023',
        img: 'https://assets-global.website-files.com/5c19140f997c250869180aa0/61423e93194b43a1163b71ff_613d0738270e9b84f99c22ae_atlanta-georgia.jpeg'
      },
      {
        id: 6,
        title: 'SUV/Jeep',
        content: 'Maximize your host earnings',
        time: 'August-25-2023',
        img: 'https://assets-global.website-files.com/5c19140f997c250869180aa0/61423e93194b43a1163b71ff_613d0738270e9b84f99c22ae_atlanta-georgia.jpeg'
      }
    ]
  },
  qAndASection: {
    id: 'p-009',
    wrapperTitle: 'home_q_and_a_title_txt_1',
    heading: 'home_q_and_a_heading_txt_1',
    img: 'http://localhost:3000/src/assets/images/commonQuestionRight.svg',
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
