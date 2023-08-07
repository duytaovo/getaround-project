import { IItemBanner, IItemGettingStarted, IItemSliderHostComunity } from 'src/types/hosting_comunity.type '
import { IBodyTop, IItemBodyBannerCard, IItemContentSlider } from 'src/types/hosting_shareACar.type'
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


export const itemCardBodyParnerDeal:IItemBodyBannerCard = {
  title:"Partners, Deals & Discounts",
  img:"https://assets-global.website-files.com/5c16e90c8f6920b098f834e5/6423102cd0a502d6a4c44b95_Car%20Illustration.png",
  content:"As a Getaround host, you get access to exclusive deals and discounts with our entire network of partners."
}

export const itemCardBodyReferFriend:IItemBodyBannerCard = {
  title:"Refer a friend, earn money",
  content:"Earn even more when you refer a friend to host on Getaround."
}

export const itemGettingStarted:IItemGettingStarted = {
  content:"Want to learn about our full claims process, our proprietary hardware technology, or how to manage for seasonal demand? Start here."
}

export const itemBannerCommunity:IItemBanner = {
  title:"The New Onboard Bonus",
  content:"Earn up to $1200 for adding a new car depending on where you list it. Check our bonus programs for more details."
}