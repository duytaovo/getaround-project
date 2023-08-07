import {
  IItemBanner,
  IItemNailTheBasic,
  IItemSliderHostComunity,
  IItemTopGettingStarted
} from 'src/types/hosting_comunity.type '
import {
  IBodyTop,
  IItemBodyBannerCard,
  IItemContentSlider,
  IItemGetAroundYourBack
} from 'src/types/hosting_shareACar.type'

import LooksOneOutlinedIcon from '@mui/icons-material/LooksOneOutlined'
import LooksTwoOutlinedIcon from '@mui/icons-material/LooksTwoOutlined'
import Looks3OutlinedIcon from '@mui/icons-material/Looks3Outlined'
import Looks4OutlinedIcon from '@mui/icons-material/Looks4Outlined'
// Share a car
export const ItemContentSlider: IItemContentSlider = {
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
  content: 'Rest easy knowing that you are covered whenever your car is in a trip booked on Getaround.',
  title: 'Insurance on every trip'
}

export const itemBodyCardBottom: IItemBodyBannerCard = {
  content: 'Let our data figure out exactly how to price bookings, so you can maximize your earnings.',
  title: 'Predictive pricing'
}

export const itemGetAroundYourBack: IItemGetAroundYourBack = {
  title: 'PERKS OF HOSTING',
  content: 'Getaround has your back'
}

export const itemOurHost: IItemGetAroundYourBack = {
  title: 'COMMUNITY',
  content: 'Our hosts have earned a total of $370M to date'
}

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
  img: 'https://assets-global.website-files.com/5c16e90c8f6920b098f834e5/6423102cd0a502d6a4c44b95_Car%20Illustration.png',
  content: 'As a Getaround host, you get access to exclusive deals and discounts with our entire network of partners.'
}

export const itemCardBodyReferFriend: IItemBodyBannerCard = {
  title: 'Refer a friend, earn money',
  content: 'Earn even more when you refer a friend to host on Getaround.'
}


export const itemBannerCommunity: IItemBanner = {
  title: 'The New Onboard Bonus',
  content:
    'Earn up to $1200 for adding a new car depending on where you list it. Check our bonus programs for more details.'
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

export const itemLink = [
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

export const theNailBasicContent:IItemNailTheBasic = {
  header:"Nail the basics",
  content:"Want to learn about our full claims process, our proprietary hardware technology, or how to manage for seasonal demand? Start here."
}