import { createSlice } from '@reduxjs/toolkit'
import { RootState } from 'src/store/store'
import { ICommonQuestions } from 'src/types/commonQuestion.type'
import { IConnectedCarSharing } from 'src/types/connectedCarSharing.type'
import { ICustomeSteps } from 'src/types/customeSteps.type'
import { IExploreHostingText } from 'src/types/exploreHostingText.type'
import { IItemSlider, IItemCarousel } from 'src/types/hoisting.type'
import { IHeroSection } from './HomeTypes/Hero.type'

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

interface IQAndASection {
  id?: string
  wrapperTitle: string
  heading: string
  itemsData: ICommonQuestions[]
  img: string
}

interface ISharingMarketplace {
  id?: string
  wrapperTitle: string
  itemsData: IConnectedCarSharing[]
}

interface IExploreHosting {
  id?: string
  wrapperTitle: string
  img: string
  itemData: IExploreHostingText
}

type HomePageType = {
  heroSection: IHeroSection
  perfectCarSliderSection: ISectionIncludesSliderPart
  homeIntoduceCarouselSection: IItemCarousel[]
  sharingMaketPlaceSection: ISharingMarketplace
  homeStepSection: IHomeStepSection
  exploreHostingSection: IExploreHosting
  localFavouriteSection: ISectionIncludesSliderPart
  blogSilerSection: ISectionIncludesSliderPart
  qAndASection: IQAndASection
}

const initialState: HomePageType = {
  heroSection: {
    id: 'hero-x1',
    title: 'Drive on your schedule Nam',
    mainText: 'Instantly rent and unlock nearby cars',
    addressPlaceholder: 'Address',
    startDateTimePikerTitle: 'Start trip',
    endDateTimePikerTitle: 'End trip',
    datePickerPlaceholder: 'Select date',
    timePickerPlaceholder: 'SelectTime',
    buttonSearchText: 'Search a car',
    img: 'https://assets-global.website-files.com/5c16e90c8f6920b098f834e5/63c5b095e7bfaba115ba5ccd_homepage-bg-picnic.webp'
  },
  perfectCarSliderSection: {
    heading: '',
    wrapperTitle: 'THE PERFECT CAR FOR YOUR TRIP IS JUST AROUND THE CORNER',
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
  homeIntoduceCarouselSection: [
    {
      id: 1,
      title: 'We make sharing cars simple.',
      content: `Getaround is the world's first carsharing marketplace to offer a 100% digital experience.`,
      header: 'WHAT IS GETAROUND?',
      img: 'https://assets-global.website-files.com/5c19140f997c250869180aa0/61423e93194b43a1163b71ff_613d0738270e9b84f99c22ae_atlanta-georgia.jpeg',
      name: 'Sheri and Adam, Oahu, HI'
    },
    {
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
  ],
  sharingMaketPlaceSection: {
    id: 'sharingMaketPlace',
    wrapperTitle: "The World's First🌐Connected Car Sharing Marketplace",
    itemsData: [
      {
        id: 1,
        total: '1.7M',
        title: 'Worldwide guests sdhsdhasdhk'
      },
      {
        id: 2,
        total: '6M',
        title: 'Trips taken'
      },
      {
        id: 3,
        total: '1,000+',
        title: 'Cities covered'
      },
      {
        id: 4,
        total: '8',
        title: 'Countries'
      }
    ]
  },
  homeStepSection: {
    id: 'home-step-x01',
    heading: 'Find your drive in 3 easy steps',
    wrapperTitle: 'HOW IT WORKS',
    itemsData: [
      {
        title: 'Sign up and name your car.',
        images: [
          'https://assets-global.website-files.com/5c16e90c8f6920b098f834e5/636580091db0b72179b2c1ab_appstore-icon.svg',
          'https://assets-global.website-files.com/5c16e90c8f6920b098f834e5/63657fca094cac0e19c45708_googleplay-icon.svg'
        ],
        subTitle:
          " We'll reach out to have our proprietary hardware, Getaround Connect®, installed in your car. Connect® lets guests unlock the car with their phone, and gives you insights about the car, trips, and vehicle security. Once Connect® is installed, you're ready for bookings!"
      },
      {
        title: 'Sign up and name your car.',
        subTitle:
          " We'll reach out to have our proprietary hardware, Getaround Connect®, installed in your car. Connect® lets guests unlock the car with their phone, and gives you insights about the car, trips, and vehicle security. Once Connect® is installed, you're ready for bookings!"
      },
      {
        title: 'Sign up and name your car.',
        subTitle:
          " We'll reach out to have our proprietary hardware, Getaround Connect®, installed in your car. Connect® lets guests unlock the car with their phone, and gives you insights about the car, trips, and vehicle security. Once Connect® is installed, you're ready for bookings!"
      }
    ],
    img: 'https://assets-global.website-files.com/5c16e90c8f6920b098f834e5/63c5b4afd9423e2cac7f6cde_how-it-works-image%20copiar.jpg'
  },
  exploreHostingSection: {
    id: 'explore-x01',
    wrapperTitle: 'EXPLORE HOSTING',
    img: 'https://assets-global.website-files.com/5c16e90c8f6920b098f834e5/63c5b458858ce546324e6786_636056a89c0f36b634f4dc4e_AdobeStock_488832115%20copiar.jpg',
    itemData: {
      Title: 'Have a car? Start sharing',
      Description:
        "Become a Host and list your car on Getaround. You'll help your neighbors travel easier while making extra money each month. >> was changed",
      headerTitle: '',
      Link: '',
      mainTitle: ''
    }
  },
  localFavouriteSection: {
    id: 'local-favourite-x01',
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
    id: 'slider-blog',
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
    id: 'common-question-x01',
    heading: 'LEARN MORE ABOUT THE BENEFITS OF GETAROUND',
    wrapperTitle: 'LEARN MORE ABOUT THE BENEFITS OF GETAROUND',
    img: 'http://localhost:3000/src/assets/images/commonQuestionRight.svg',
    itemsData: [
      {
        key: '1',
        label: 'How do I find a car and book a trip?',
        contents: [
          'Browse thousands of cars in our 300+ U.S. cities, filter by date, car style and class.',
          "After creating your account or logging in, click on the 'Find cars' text at the top of the screen.",
          'Enter your address into the search bar, if it doesn’t already appear.Select your pickup and return times. Cars that are available for booking during that time will be shown'
        ]
      },
      {
        key: '2',
        label: 'How do I find a car and book a trip?',
        contents: [
          'Browse thousands of cars in our 300+ U.S. cities, filter by date, car style and class.',
          "After creating your account or logging in, click on the 'Find cars' text at the top of the screen.",
          'Enter your address into the search bar, if it doesn’t already appear.Select your pickup and return times. Cars that are available for booking during that time will be shown'
        ]
      },
      {
        key: '3',
        label: 'How do I find a car and book a trip?',
        contents: [
          'Browse thousands of cars in our 300+ U.S. cities, filter by date, car style and class.',
          "After creating your account or logging in, click on the 'Find cars' text at the top of the screen.",
          'Enter your address into the search bar, if it doesn’t already appear.Select your pickup and return times. Cars that are available for booking during that time will be shown'
        ]
      },
      {
        key: '4',
        label: 'How do I find a car and book a trip?',
        contents: [
          'Browse thousands of cars in our 300+ U.S. cities, filter by date, car style and class.',
          "After creating your account or logging in, click on the 'Find cars' text at the top of the screen.",
          'Enter your address into the search bar, if it doesn’t already appear.Select your pickup and return times. Cars that are available for booking during that time will be shown'
        ]
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
