import { createSlice } from '@reduxjs/toolkit'
import { IExploreHostingSection } from 'src/types/IExploreHostingSection.type'
import { IQAndASection } from 'src/types/IQAndASection.type'
import {
  IDriveWithUberStepSection,
  IGetStatedSection,
  IHeroSectionType,
  IIntroduceSection,
  IPerksSection
} from 'src/types/driveWithUber/driveWithUberSection.type'

type DriveWithUberType = {
  heroSection: IHeroSectionType
  introduceSection: IIntroduceSection
  perksSection: IPerksSection
  driveStepsSection: IDriveWithUberStepSection
  getStatedSection: IGetStatedSection
  driveWithUberExploreHosting: IExploreHostingSection
  diriveQAndASection: IQAndASection
}

const initialState: DriveWithUberType = {
  heroSection: {
    id: 'drive_hero_s-01',
    img: 'https://assets-global.website-files.com/5c16e90c8f6920b098f834e5/63d82ff7ba27e7ee16cce7de_dwuguest1tiny.jpeg',
    logos: ['Unlock', 'UBer'],
    titles: ['Drive Getaround cars.', 'Earn with Uber.'],
    paragraphs: [
      "Want to drive for Uber, but don't have the right car? Getaround offers pre-approved and inspected vehicles, ready for you to book by the hour, day or week.",
      "Find the right car and start earning with Uber and Uber Eats. The Getaround and Uber apps are seamlessly connected. It's trusted tech that makes life easier for guests and hosts."
    ]
  },
  introduceSection: {
    id: 'drive_introduce_s_02',
    img: 'https://assets-global.website-files.com/5c16e90c8f6920b098f834e5/63f913e7a34806823acdff1a_ga-illustration-16.svg',
    title: 'Book by the hour, day, or week*',
    paragraphs: [
      'Experience the ultimate convenience in car bookings with our flexible options tailored to your needs. Whether you require a car for a few hours, a full day, an entire week, or even longer durations, we have you covered.',
      'Embrace a lifestyle that revolves around your schedule, giving you the freedom to choose the perfect vehicle and trip length that suits your plans.'
    ]
  },
  perksSection: {
    id: 'drive_perks_s_03',
    headingTitle: 'The perks of Getaround x Uber',
    itemsData: [
      {
        title: 'Uber-approved options',
        descriptions:
          "Seamless integration between the Getaround and Uber apps makes your life simple. Pick from cars ready for Uber rides, whenever's best for you."
      },
      {
        title: 'Affordable cars',
        descriptions:
          'Book by the hour or up to 28 days! More cities now offer affordable daily and weekly options, for your flexibility'
      },
      {
        title: 'Worry-free driving',
        descriptions:
          'Insurance, unlimited mileage, 24/7 support, and roadside assistance come with every booking. You can even extend a reservation if you want to keep driving.'
      },
      {
        title: 'Design your schedule',
        descriptions:
          'Instantly book, unlock, and return a car from your phone.No need to wait in line or meet in person for a key hand off.'
      }
    ]
  },
  driveStepsSection: {
    id: 'drive_step_s_04',
    wrapperTitle: 'HOW IT WORKS',
    headingTitle: "It's easy to drive with Uber",
    img: 'https://assets-global.website-files.com/5c16e90c8f6920b098f834e5/63cef76977f95804643dc7b4_howitworks-guest%20c-p-500.jpg',
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
        title: 'Create a profile and upload photos.',
        subTitle:
          " We'll reach out to have our proprietary hardware, Getaround Connect®, installed in your car. Connect® lets guests unlock the car with their phone, and gives you insights about the car, trips, and vehicle security. Once Connect® is installed, you're ready for bookings!"
      },
      {
        title: 'Install Getaround Connect®',
        subTitle:
          " We'll reach out to have our proprietary hardware, Getaround Connect®, installed in your car. Connect® lets guests unlock the car with their phone, and gives you insights about the car, trips, and vehicle security. Once Connect® is installed, you're ready for bookings!"
      }
    ]
  },
  getStatedSection: {
    id: 'get_stated_s_05',
    wrapperContent: 'Get started now',
    buttonTitle: [
      { title: 'alreay an uber driver?', subTitle: 'Log in with Uber' },
      { title: 'not an uber driver yet?', subTitle: 'Sign up with Uber' }
    ],
    contents: [
      'Link your Uber driver and Getaround account to book',
      'Link your Uber driver and Getaround account to book',
      'Link your Uber driver and Getaround account to book'
    ]
  },
  driveWithUberExploreHosting: {
    id: 'drive_explore_s_05',
    img: 'https://assets-global.website-files.com/5c16e90c8f6920b098f834e5/6324f5891e795a0a4cf1c346_AdobeStock_488832115-p-1080.jpg',
    wrapperTitle: '',
    itemData: {
      mainTitle: 'EXPLORE HOSTING',
      headerTitle: '',
      Title: 'Have a car? Start sharing',
      Description:
        "Become a Host and list your car on Getaround. You'll help your neighbors travel easier while making extra money each month.",
      Link: ''
    }
  },
  diriveQAndASection: {
    id: 'drive_q_a_s_06',

    wrapperTitle: 'Need more info? Check out our FAQs',
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

const driveWithUberSlice = createSlice({
  name: 'DriveWithUber',
  initialState,
  reducers: {}
})

export default driveWithUberSlice
