import { createSlice } from '@reduxjs/toolkit'

interface IdynamicData<T> {
  [key: string]: T
}

const data: IdynamicData<string> = {
  home_hero_s1: 'value1',
  home_hero_s2: 'value2',
  home_hero_s3: 'value3',
  home_hero_s4: 'value4',
  home_hero_s5: 'value5',
  home_hero_s6: 'value6',
  home_hero_s7: 'value7',
  home_hero_s8: 'value8',
  home_hero_s9: 'value9',
  home_hero_s10: 'value10',
  hosting_s1: 'value11',
  hosting_s2: 'value12',
  hosting_s3: 'value13',
  hosting_s4: 'value14',
  hosting_s5: 'value15',
  hosting_s6: 'value16',
  hosting_s7: 'value17',
  hosting_s8: 'value18',
  hosting_s9: 'value19',
  hosting_s10: 'value20',
  hosting_s11: 'value21',
  hosting_s12: 'value22',
  hosting_s13: 'value23',
  hosting_s14: 'value24',
  hosting_s15: 'value25',
  hosting_s16: 'value26',
  hosting_s17: 'value27',
  hosting_s18: 'value28',
  hosting_s19: 'value29',

  // ///////////////////////
  //shareACar
  //itemBodyTop
  'img-bodyTop-shareACar':
    'https://assets-global.website-files.com/5c16e90c8f6920b098f834e5/63ec0cc59fa56f9bb02ee62f_ga-illustration-13.svg',
  'txt-bodytop-shareACar_content': "When you list your car, you're earning money while helping others navigate your city. It's a win-win, and your next big opportunity.",
  'txt-bodytop-shareACar_header': "Turn your car into extra money",
  'txt-buttonBodyTop-shareACar': "Share a car",

  // slider
  'sliderShareACar_txt-card_slider_title_1': 'SUV/Jeep',
  'sliderShareACar_txt-card_slider_content_1': 'Maximize your host earnings',
  'sliderShareACar_txt-card_slider_time_1': 'August-25-2023',
  'sliderShareACar_img-card_slider_1':
    'https://assets-global.website-files.com/5c19140f997c250869180aa0/642c5727f0b7763cbb82c314_onboardbonus.png',

  'sliderShareACar_txt-card_slider_title_2': 'SUV/Jeep',
  'sliderShareACar_txt-card_slider_content_2': 'Maximize your host earnings',
  'sliderShareACar_txt-card_slider_time_2': 'August-25-2023',
  'sliderShareACar_img-card_slider_2':
    'https://assets-global.website-files.com/5c19140f997c250869180aa0/642c5727f0b7763cbb82c314_onboardbonus.png',

  'sliderShareACar_txt-card_slider_title_3': 'SUV/Jeep',
  'sliderShareACar_txt-card_slider_content_3': 'Maximize your host earnings',
  'sliderShareACar_txt-card_slider_time_3': 'August-25-2023',
  'sliderShareACar_img-card_slider_3':
    'https://assets-global.website-files.com/5c19140f997c250869180aa0/642c5727f0b7763cbb82c314_onboardbonus.png',

  'sliderShareACar_txt-card_slider_title_4': 'SUV/Jeep',
  'sliderShareACar_txt-card_slider_content_4': 'Maximize your host earnings',
  'sliderShareACar_txt-card_slider_time_4': 'August-25-2023',
  'sliderShareACar_img-card_slider_4':
    'https://assets-global.website-files.com/5c19140f997c250869180aa0/642c5727f0b7763cbb82c314_onboardbonus.png',

  'sliderShareACar_txt-card_slider_title_5': 'SUV/Jeep',
  'sliderShareACar_txt-card_slider_content_5': 'Maximize your host earnings',
  'sliderShareACar_txt-card_slider_time_5': 'August-25-2023',
  'sliderShareACar_img-card_slider_5':
    'https://assets-global.website-files.com/5c19140f997c250869180aa0/642c5727f0b7763cbb82c314_onboardbonus.png',

  'sliderShareACar_txt-card_slider_title_6': 'SUV/Jeep',
  'sliderShareACar_txt-card_slider_content_6': 'Maximize your host earnings',
  'sliderShareACar_txt-card_slider_time_6': 'August-25-2023',
  'sliderShareACar_img-card_slider_6':
    'https://assets-global.website-files.com/5c19140f997c250869180aa0/642c5727f0b7763cbb82c314_onboardbonus.png',

  //itemcontentSlider
  'txt-contentSlider-shareACar-headerTitle': 'EARN',
  'txt-contentSlider-shareACar-title': 'Discover how much you can earn each month',
  'txt-contentSlider-shareACar-content': ' Car earnings differ by make, model, calendar availability, and market. Earnings numbers and car information shown are from real hosts on Getaround',

  //itemBanner
  'txt-bodyBaner-shareACar-title': 'Digital key platform',
  'txt-bodyBaner-shareACar-content': 'Experience a seamless, hands-off, and secure experience. Getaround Connect® hardware lets guests unlock your car from the app, and gives you data about the usage and location of your vehicle.',

  //itemBodyCardTop
  'bodyCardTop_txt-bodyCard-shareACar-title': 'Insurance on every trip',
  'bodyCarTop_txt-bodyCard-shareACar-content': 'Rest easy knowing that you are covered whenever your car is in a trip booked on Getaround.',

  //itemBodyCardBottom
  'bodyCardBottom_txt-bodyCard-shareACar-title': 'Let our data figure out exactly how to price bookings, so you can maximize your earnings.',
  'bodyCarBottom_txt-bodyCard-shareACar-content': 'Predictive pricing',

  //itemSupport
  'support_shareACar-img':
    'https://assets-global.website-files.com/5c16e90c8f6920b098f834e5/6328bdb541c77f294bfb6e1e_aboutga-247-support-p-500.png',
  'support_shareACar-title': '24/7 support, prioritized for hosts.',
  'support_shareACar-contentLeft': "Don't hesitate to contact us if you ever have a problem.",
  'support_shareACar-Right': " Dedicated account managers for power hosts. As you grow your fleet, you'll get more personalized support from a Getaround team member assigned to you.",

  //itemCommonQuestionBody
  'img_commonQuestion-shareACar':
    'https://assets-global.website-files.com/5c16e90c8f6920b098f834e5/63ea84651bd74658a3f37eac_ga-illustration-2.svg',

  //itemGetAroundYourBack
  'txt-getAroundYourBack-shareACar-title': 'PERKS OF HOSTING',
  'txt-getAroundYourBack-shareACar-content': 'Getaround has your back',

  //itemOurHost
  'ourHost-shareAcar-title': 'COMMUNITY',
  'ourHost-shareAcar-content': 'Our hosts have earned a total of $370M to date',

  //wrapperTitle
  'txt-wrapperTitle-shareACar-01': '...and more',
  'xt-wrapperTitle-shareACar-02': 'Need more info? Check out FAQs.',

  //exploreHosting
  txtMainTitleShareACar: '',
  txtHeaderTitleShareACar: 'HOST INCENTIVES',
  txtTitleShareACar: 'Big-time bonuses to help you grow',
  txtDescriptionShareACar: "Lock in a bonus for adding your vehicle to Getaround, and another that's based on your earnings over time.",

  txtMainTitleShareACar_bottom: '',
  txtHeaderTitleShareACar_bottom: 'HOST INCENTIVES',
  txtTitleShareACar_bottom: 'Big-time bonuses to help you grow',
  txtDescriptionShareACar_bottom: "Lock in a bonus for adding your vehicle to Getaround, and another that's based on your earnings over time.",

  //customStep
  txtCustomStepItemsTitle_1:"Sign up and name your car.",
  txtCustomStepImages1:"https://assets-global.website-files.com/5c16e90c8f6920b098f834e5/636580091db0b72179b2c1ab_appstore-icon.svg",
  txtCustomStepImages2:"https://assets-global.website-files.com/5c16e90c8f6920b098f834e5/63657fca094cac0e19c45708_googleplay-icon.svg",
  txtCustomStepSubTitle_1:"ith their phone, and gives you insights about the car, trips, and vehicle security. Once Connect® is installed, you're ready for bookings!",
  txtCustomStepTitle_2:"Create a profile and upload photos",
  txtCustomStepSubTitle_2:" We'll reach out to have our proprietary hardware, Getaround Connect®, installed in your car. Connect® lets guests unlock the car with their phone, and gives you insights about the car, trips, and vehicle security. Once Connect® is installed, you're ready for bookings!",
  txtCustomStepTitle_3:"Install Getaround Connect®",
  txtCustomStepSubTitle_3:" We'll reach out to have our proprietary hardware, Getaround Connect®, installed in your car. Connect® lets guests unlock the car with their phone, and gives you insights about the car, trips, and vehicle security. Once Connect® is installed, you're ready for bookings!",
  


  ////////////////////
  // host community
  //itemOurHostCommunity
  txt_OurHost_community_title: 'HOST COMMUNITY',
  txt_OurHost_community_content: 'Featured news & updates',


  //slider
  img_sliderTopComunity_1:"https://assets-global.website-files.com/5c19140f997c250869180aa0/642c5727f0b7763cbb82c314_onboardbonus.png",
  txt_cardSlider_community_content_1:"Getaround was featured on Crackle TV’s newest season of Going From Broke.",
  txt_cardSlider_community_url_1:"Watch free episode",

  img_sliderTopComunity_2:"https://assets-global.website-files.com/5c19140f997c250869180aa0/642c5727f0b7763cbb82c314_onboardbonus.png",
  txt_cardSlider_community_content_2:"Getaround was featured on Crackle TV’s newest season of Going From Broke.",
  txt_cardSlider_community_url_2:"Watch free episode",

  img_sliderTopComunity_3:"https://assets-global.website-files.com/5c19140f997c250869180aa0/642c5727f0b7763cbb82c314_onboardbonus.png",
  txt_cardSlider_community_content_3:"Getaround was featured on Crackle TV’s newest season of Going From Broke.",
  txt_cardSlider_community_url_3:"Watch free episode",

  img_sliderTopComunity_4:"https://assets-global.website-files.com/5c19140f997c250869180aa0/642c5727f0b7763cbb82c314_onboardbonus.png",
  txt_cardSlider_community_content_4:"Getaround was featured on Crackle TV’s newest season of Going From Broke.",
  txt_cardSlider_community_url_4:"Watch free episode",
  //itemCardBodyImg
  txt_cardBodyImg_community_title: 'Offer & Bonus',
  img_cardBodyImg_shareACar:
    'https://assets-global.website-files.com/5c16e90c8f6920b098f834e5/63f39125b1910bf39b1880a3_ga-illustration-20.svg',

  //itemCardBodyParnerDeal
  txt_CardBodyParner_community_title: 'Partners, Deals & Discounts',
  txt_cardBodyParnerDeal_community_infoButton: 'Explore Offers',
  img_cardBodyParner_shareACar:
    'https://assets-global.website-files.com/5c16e90c8f6920b098f834e5/6423102cd0a502d6a4c44b95_Car%20Illustration.png',
  txt_CardBodyParner_community_content: 'As a Getaround host, you get access to exclusive deals and discounts with our entire network of partners.',

  //itemCardBodyReferFriend
  txt_CardBodyReferFrient_community_title: 'Refer a friend, earn money',
  txt_CardBodyReferFrient_community_content: 'Earn even more when you refer a friend to host on Getaround.',
  txt_CardBodyReferFrient_community_infoLink: 'Share your referral link',

  //itemCardBodyButton
  txt_cardBodyButton_community_title: 'Login to view your host dashboard',
  txt_cardBodyButton_community_infoButton: 'Login',

  //itemBannerCommunity
  txt_banner_community_title: 'The New Onboard Bonus',
  txt_banner_community_content: 'Earn up to $1200 for adding a new car depending on where you list it. Check our bonus programs for more details.',
  txt_banner_community_infoButton: 'Share a car',

  //itemTopHostComunity
  txt_topHost_Community_title: 'HOST COMMUNITY',
  txt_topHost_Community_content: 'Featured news & updates',

  //itemTopGettingStarted
  txt_topGettingStarted_community_topHeader: 'HOSTING 101',
  txt_topGettingStarted_community_title: 'Getting Started',
  txt_topGettingStarted_community_content: 'Onboard and optimize your Getaround business with best practices and recommendations from our team and other hosts.',


  //item linkNailBasic
  txt_GettingStarted_community_itemNailTheBasic_1:"The Connect",
  txt_GettingStarted_community_itemNailTheBasic_2:"Claim-1-paper",
  txt_GettingStarted_community_itemNailTheBasic_3:"Turn your car into a paycheck",
  txt_GettingStarted_community_itemNailTheBasic_4:"Tips & Trick",
  //itemImgGettingStarted
  img_gettingStarted_hostCommunity: 'https://assets-global.website-files.com/5c16e90c8f6920b098f834e5/63ec0b73b2f4fb34b18ddb8a_ga-illustration-8.svg',

  //theNailBasicContent
  txt_GettingStarted_community_headerTheNailBasic: 'Nail the basics',
  txt_GettingStarted_community_contentNailTheBasic: 'Want to learn about our full claims process, our proprietary hardware technology, or how to manage for seasonal demand? Start here.',
  txt_GettingStarted_community_headerBusiness: 'Grow your business',
  txt_GettingStarted_community_contentBusiness: 'Ready to grow your business even further? Here are resources and tools that will help you as you scale.',

  //exploreHosting
  //exploreHosting
  txtMainTitleCommunity: '',
  txtHeaderCommunity: 'HOST INCENTIVES',
  txtTitleCommunity: 'Big-time bonuses to help you grow',
  txtDescriptionCommunity: "Lock in a bonus for adding your vehicle to Getaround, and another that's based on your earnings over time.",
}

const dataSlice = createSlice({
  name: 'dataSlice',
  initialState: data,
  reducers: {},
  extraReducers: (builder) => {}
})

export const {} = dataSlice.actions
const dataReducer = dataSlice.reducer
export default dataReducer
