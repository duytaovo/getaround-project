import {
  IItemBanner,
  IItemCardBodyButton,
  IItemLink,
  IItemNailTheBasic,
  IItemSliderHostComunity,
  IItemTopGettingStarted
} from 'src/types/hosting_comunity.type '
import {
  IBodyCommonQuestionImg,
  IBodyTop,
  IIWrapContentTitle,
  IItemBodyBannerCard,
  IItemBodyRefer,
  IItemContentSlider,
  IItemGetAroundYourBack,
  IItemSupport
} from 'src/types/hosting_shareACar.type'

import LooksOneOutlinedIcon from '@mui/icons-material/LooksOneOutlined'
import LooksTwoOutlinedIcon from '@mui/icons-material/LooksTwoOutlined'
import Looks3OutlinedIcon from '@mui/icons-material/Looks3Outlined'
import Looks4OutlinedIcon from '@mui/icons-material/Looks4Outlined'
// Share a car
export const ItemContentSlider: IItemContentSlider = {
  headerTitle: 'EARN',
  title: 'Discover how much you can earn each month',
  content:
    '  Car earnings differ by make, model, calendar availability, and market. Earnings numbers and car information shown are from real hosts on Getaround'
}

export const ItemBodyTop: IBodyTop = {
  img: 'https://assets-global.website-files.com/5c16e90c8f6920b098f834e5/63ec0cc59fa56f9bb02ee62f_ga-illustration-13.svg',
  content:
    " When you list your car, you're earning money while helping others navigate your city. It's a win-win, and your next big opportunity.",
  header: 'Turn your car into extra money'
}

export const itemBanner: IItemBodyBannerCard = {
  title: 'Digital key platform',
  content:
    'Experience a seamless, hands-off, and secure experience. Getaround Connect® hardware lets guests unlock your car from the app, and gives you data about the usage and location of your vehicle.'
}

export const itemBodyCardTop: IItemBodyBannerCard = {
  title: 'Insurance on every trip',
  content: 'Rest easy knowing that you are covered whenever your car is in a trip booked on Getaround.'
}

export const itemBodyCardBottom: IItemBodyBannerCard = {
  content: 'Let our data figure out exactly how to price bookings, so you can maximize your earnings.',
  title: 'Predictive pricing'
}

export const itemSupport: IItemSupport = {
  img: 'https://assets-global.website-files.com/5c16e90c8f6920b098f834e5/6328bdb541c77f294bfb6e1e_aboutga-247-support-p-500.png',
  title: '24/7 support, prioritized for hosts.',
  contentLeft: "Don't hesitate to contact us if you ever have a problem.",
  contentRight:
    "  Dedicated account managers for power hosts. As you grow your fleet, you'll get more personalized support from a Getaround team member assigned to you."
}
export const itemCommonQuestionBody: IBodyCommonQuestionImg = {
  img: 'https://assets-global.website-files.com/5c16e90c8f6920b098f834e5/63ea84651bd74658a3f37eac_ga-illustration-2.svg'
}
export const itemGetAroundYourBack: IItemGetAroundYourBack = {
  title: 'PERKS OF HOSTING',
  content: 'Getaround has your back'
}

export const itemOurHost: IItemGetAroundYourBack = {
  title: 'COMMUNITY',
  content: 'Our hosts have earned a total of $370M to date'
}

export const wrapperTitle: IIWrapContentTitle[] = [
  {
    id: 1,
    title: '...and more'
  },
  { id: 2, title: 'Need more info? Check out FAQs.' }
]

//////////////////////////////////
// host community
export const itemSliderHostComunity: IItemSliderHostComunity[] = [
  {
    id: 1,
    img: 'https://assets-global.website-files.com/5c19140f997c250869180aa0/642c5727f0b7763cbb82c314_onboardbonus.png',
    content: 'Getaround was featured on Crackle TV’s newest season of Going From Broke.',
    url: 'Watch free episode'
  },
  {
    id: 2,
    img: 'https://assets-global.website-files.com/5c19140f997c250869180aa0/642c5727f0b7763cbb82c314_onboardbonus.png',
    content: 'Getaround was featured on Crackle TV’s newest season of Going From Broke.',
    url: 'Watch free episode'
  },
  {
    id: 3,
    img: 'https://assets-global.website-files.com/5c19140f997c250869180aa0/642c5727f0b7763cbb82c314_onboardbonus.png',
    content: 'Getaround was featured on Crackle TV’s newest season of Going From Broke.',
    url: 'Watch free episode'
  },
  {
    id: 4,
    img: 'https://assets-global.website-files.com/5c19140f997c250869180aa0/642c5727f0b7763cbb82c314_onboardbonus.png',
    content: 'Getaround was featured on Crackle TV’s newest season of Going From Broke.',
    url: 'Watch free episode'
  }
]

export const itemCardBodyImg: IItemBodyBannerCard = {
  title: ' Offer & Bonus',
  img: 'https://assets-global.website-files.com/5c16e90c8f6920b098f834e5/63f39125b1910bf39b1880a3_ga-illustration-20.svg'
}

export const itemCardBodyParnerDeal: IItemBodyBannerCard = {
  title: 'Partners, Deals & Discounts',
  infoButton: 'Explore Offers',
  img: 'https://assets-global.website-files.com/5c16e90c8f6920b098f834e5/6423102cd0a502d6a4c44b95_Car%20Illustration.png',
  content: 'As a Getaround host, you get access to exclusive deals and discounts with our entire network of partners.'
}

export const itemCardBodyReferFriend: IItemBodyRefer = {
  title: 'Refer a friend, earn money',
  content: 'Earn even more when you refer a friend to host on Getaround.',
  infoLink: 'Share your referral link',
  to: '/'
}

export const itemCardBodyButton: IItemCardBodyButton = {
  title: 'Login to view your host dashboard',
  infoButton: 'Login'
}

export const itemBannerCommunity: IItemBanner = {
  title: 'The New Onboard Bonus',
  content:
    'Earn up to $1200 for adding a new car depending on where you list it. Check our bonus programs for more details.',
  infoButton: 'Share a car'
}

export const itemTopHostComunity: IItemGetAroundYourBack = {
  title: 'HOST COMMUNITY',
  content: 'Featured news & updates'
}

export const itemTopGettingStarted: IItemTopGettingStarted = {
  topHeader: 'HOSTING 101',
  title: 'Getting Started',
  content:
    'Onboard and optimize your Getaround business with best practices and recommendations from our team and other hosts.'
}

export const itemImgGettingStarted: string =
  'https://assets-global.website-files.com/5c16e90c8f6920b098f834e5/63ec0b73b2f4fb34b18ddb8a_ga-illustration-8.svg'

export const itemImgExploreHosting: string =
  'https://assets-global.website-files.com/5c16e90c8f6920b098f834e5/63c5b458858ce546324e6786_636056a89c0f36b634f4dc4e_AdobeStock_488832115%20copiar.jpg'

export const itemLinkNailTheBasic: IItemNailTheBasic[] = [
  {
    id: 1,
    iconSTT: <LooksOneOutlinedIcon />,
    title: 'The Connect'
  },
  {
    id: 2,
    iconSTT: <LooksTwoOutlinedIcon />,
    title: 'Claim-1-paper'
  },
  {
    id: 3,
    iconSTT: <Looks3OutlinedIcon />,
    title: 'Turn your car into a paycheck'
  },
  {
    id: 4,
    iconSTT: <Looks4OutlinedIcon />,
    title: 'Tips & Trick'
  }
]

export const itemLink: IItemLink[] = [
  {
    id: 1,
    title: 'Maximize your earnings',
    to: '/'
  },
  {
    id: 2,
    title: 'Generate more bookings',
    to: '/'
  },
  {
    id: 3,
    title: 'Power Host Playbook',
    to: '/'
  }
]

export const theNailBasicContent: IItemNailTheBasic = {
  headerTheNailBasic: 'Nail the basics',
  contentNailTheBasic:
    'Want to learn about our full claims process, our proprietary hardware technology, or how to manage for seasonal demand? Start here.',
  headerBusiness: 'Grow your business',
  contentBusiness:"Ready to grow your business even further? Here are resources and tools that will help you as you scale."
}
