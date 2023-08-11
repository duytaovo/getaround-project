import { createSlice } from '@reduxjs/toolkit'
import axios from 'axios'
interface IdynamicData<T> {
  [key: string]: T
}

const data: IdynamicData<string> = {
  home_explore_item_txt_2: 'ssss',
  home_hero_t1: 'value1',
  home_hero_t2: 'value2',
  home_hero_t3: 'value3',
  home_hero_t4: 'value4',
  home_hero_t5: 'value5',
  home_perfect_car_t6: 'value6',
  home_perfect_car_t7: 'value7',
  home_perfect_car_t8: 'value8',
  home_perfect_car_t9: 'value9',
  home_perfect_car_t10: 'value10',

  home_sharing_market_title_1: 'sharing-market',
  home_sharing_market_item_1: 'A',
  home_sharing_market_item_2: 'B',
  home_sharing_maket_item_3: 'C',
  home_sharing_maket_item_4: 'D',
  home_sharing_maket_item_5: 'E',
  home_sharing_maket_item_6: 'F',
  home_sharing_maket_item_7: 'G',
  home_sharing_maket_item_8: 'H',

  home_step_title_1: 'Phan Ngoc Nam',
  home_step_heading_1: 'Phan Ngoc Nam v2',
  home_step_item_txt_1: 'Nam child',
  home_step_item_txt_2: 'sub title 1',
  home_step_item_txt_3: 'Luu so em di',
  home_step_item_txt_4: 'Khi nao ma co can con dau thi goi cho em',
  home_step_item_txt_5: 'Khong nho loi nua',
  home_step_item_txt_6: 'what do you ussually do after work?',

  home_q_and_a_title_txt_1: 'Questions mark?',
  home_q_and_a_label_txt_1: 'Hello guy!',
  home_q_and_a_desc_txt_1: 'Nice!',
  home_q_and_a_desc_txt_2: 'Keep it simple, stupid.',
  home_q_and_a_desc_txt_3: 'okela!',
  home_q_and_a_label_txt_2: 'nope!',
  home_q_and_a_desc_txt_4: 'Move forward!',
  home_q_and_a_desc_txt_5: '...',
  home_q_and_a_desc_txt_6: '...',
  home_q_and_a_label_txt_3: '...',
  home_q_and_a_desc_txt_7: '...',
  home_q_and_a_desc_txt_8: '...',
  home_q_and_a_desc_txt_9: '...',
  home_q_and_a_label_txt_4: '...',
  home_q_and_a_label_txt_10: '...',
  home_q_and_a_label_txt_11: '...',
  home_q_and_a_label_txt_12: '...',

  home_explore_txt_1: '...',
  home_explore_item_txt_1: '...',
  home_explore_item_txt_2: '...',

  drive_with_uber_q7a_title_1: '...',
  drive_with_uber_q7q_lbl_1: '...',
  drive_with_uber_q7q_content_1: '...',
  drive_with_uber_q7q_content_2: '...',
  drive_with_uber_q7q_content_3: '...',
  drive_with_uber_q7q_lbl_2: '...',
  drive_with_uber_q7q_content_4: '...',
  drive_with_uber_q7q_content_5: '...',
  drive_with_uber_q7q_content_6: '...',
  drive_with_uber_q7q_lbl_3: '...',
  drive_with_uber_q7q_content_7: '...',
  drive_with_uber_q7q_content_8: '...',
  drive_with_uber_q7q_content_9: '...',
  drive_with_uber_q7q_lbl_4: '...',
  drive_with_uber_q7q_content_10: '...',
  drive_with_uber_q7q_content_11: '...',
  drive_with_uber_q7q_content_12: '...',
  drive_with_uber_getStatedTitle_title_1: '...',
  drive_with_uber_getStatedTitle_btn_sub_lbl_1: '...',
  drive_with_uber_getStatedTitle_btn_lbl_1: '...',
  drive_with_uber_getStatedTitle_btn_sub_lbl_2: '...',
  drive_with_uber_getStatedTitle_btn_lbl_2: '...',
  drive_with_uber_getStatedTitle_sentence_1: '...',
  drive_with_uber_getStatedTitle_sentence_2: '...',
  drive_with_uber_getStatedTitle_sentence_3: '...',
  drive_with_uber_hero_img:
    'https://assets-global.website-files.com/5c16e90c8f6920b098f834e5/63d82ff7ba27e7ee16cce7de_dwuguest1tiny.jpeg ',
  drive_with_uber_hero_logo_unlock: '...',
  drive_with_uber_hero_logo_another: '...',
  drive_with_uber_hero_title_1: '...',
  drive_with_uber_hero_title_2: '...',
  drive_with_uber_hero_para_1: '...',
  drive_with_uber_hero_para_2: '...',
  drive_with_uber_hero_btn: '...',
  drive_with_uber_hero_link: '...',
  drive_with_uber_intro_img:
    'https://assets-global.website-files.com/5c16e90c8f6920b098f834e5/63f913e7a34806823acdff1a_ga-illustration-16.svg',
  drive_with_uber_intro_title_1: '...',
  drive_with_uber_intro_para_1: '...',
  drive_with_uber_intro_para_2: '...',
  drive_with_uber_perk_heading: '...',
  drive_with_uber_perk_title_1: '...',
  drive_with_uber_perk_desc_1: '...',
  drive_with_uber_perk_title_2: '...',
  drive_with_uber_perk_desc_2: '...',
  drive_with_uber_perk_title_3: '...',
  drive_with_uber_perk_desc_3: '...',
  drive_with_uber_perk_title_4: '...',
  drive_with_uber_perk_desc_4: '...',
  drive_with_uber_step_title: '...',
  drive_with_uber_step_heading: '...',
  drive_with_uber_step_img:
    'https://assets-global.website-files.com/5c16e90c8f6920b098f834e5/63cef76977f95804643dc7b4_howitworks-guest%20c-p-500.jpg',
  drive_with_uber_step_item_title_1: '...',
  drive_with_uber_step_item_sub_title_1: '...',
  drive_with_uber_step_item_title_2: '...',
  drive_with_uber_step_item_sub_title_2: '...',
  drive_with_uber_step_item_title_3: '...',
  drive_with_uber_step_item_sub_title_3: '...',

  partner_with_us_hero_img: '...',
  partner_with_us_hero_title: '...',
  partner_with_us_hero_content: '...',

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

  mainTitle_Slide_HowItWork: 'OUT MISSION',
  title_Slide_HowItWork: 'Chúng tôi kết nối những chiếc xe an toàn, tiện lợi với mọi người',
  img1_Slide_HowItWork:
    'https://assets-global.website-files.com/5c16e90c8f6920b098f834e5/63cef76977f95804643dc7b4_howitworks-guest%20c.jpg',
  img2_Slide_HowItWork:
    'https://assets-global.website-files.com/5c16e90c8f6920b098f834e5/63cef77225a91196b5c06fe7_howitworks-host-c.jpg',
  content1_Slide_HowItWork: 'Người chia sẻ xe hưởng lợi bằng việc tiếp cận linh hoạt đến một phương tiện xe hơi.',
  content2_Slide_HowItWork: 'Chủ xe hơi kiếm tiền từ những khoảng thời gian họ không lái xe dù sao.',

  img1_SlideLeftRight_HowItWork:
    'https://assets-global.website-files.com/5c16e90c8f6920b098f834e5/63ec0cde6f148fb8b21d20e3_ga-illustration-7.svg',
  img2_SlideLeftRight_HowItWork:
    'https://assets-global.website-files.com/5c16e90c8f6920b098f834e5/63ec0cde6f148fb8b21d20e3_ga-illustration-7.svg',
  img3_SlideLeftRight_HowItWork:
    'https://assets-global.website-files.com/5c16e90c8f6920b098f834e5/63ec0cde6f148fb8b21d20e3_ga-illustration-7.svg',
  label1_SlideLeftRight_HowItWork: 'Trip insurance',
  label2_SlideLeftRight_HowItWork: 'Customer support',
  label3_SlideLeftRight_HowItWork: 'Wiggle room for change',
  linkto1_SlideLeftRight_HowItWork: '/',
  linkto2_SlideLeftRight_HowItWork: '/',
  linkto3_SlideLeftRight_HowItWork: '/',
  link_SlideLeftRight_HowItWork: 'Help standing by, 24/7.',
  link2_SlideLeftRight_HowItWork: 'Peace of mind by design.',
  link3_SlideLeftRight_HowItWork: 'Flexible cancellations.',
  contents1_SlideLeftRight_HowItWork:
    " Getaround trips include insurance for the length of your reservation. You shouldn't have to stress if something doesn't go according to plan.",
  contents2_SlideLeftRight_HowItWork:
    " We're here to solve problems at any point of your trip, from the wee hours of the morning to late at night",
  contents3_SlideLeftRight_HowItWork:
    "Plans changed? Cancel within 1 hour of booking or more than 24 hours before the start of your trip, and you won't be charged any fees.",

  title_HearCommunity_HowItWork: 'Hear from the community',
  content_HearCommunity_HowItWork: 'Stories from Getaround community members, in their own words.',
  link_HearCommunity_HowItWork: '/',

  headerTitle_Propritary_HowItWork: 'out proprietary hardware',
  title_Propritary_HowItWork: 'Explore the power of Getaround Connect®',
  description_Propritary_HowItWork:
    't® technology. To make sharing a car as easy as owning one, we built the only hardware designed specifically for contactless, peer-to-peer car sharing. ',
  description2_Propritary_HowItWork:
    'alllows you to find, book, and unlock cars directly from your phone, and avoid meeting up with anyone  throughout the process to exchange keys.',
  span_Propritary_HowItWork: 'Getaround Connect®',
  img_Propritary_HowItWork:
    'https://assets-global.website-files.com/5c16e90c8f6920b098f834e5/639a1e9f44d6d5e62cda3fbb_iStock-1243633999%201.jpg',
  link_Propritary_HowItWork: '/',
  mainTitle_Explore_HowItWork: 'EXPLORE HOSTING',
  headerTitle_Explore_HowItWork: '',
  title_Explore_HowItWork: 'Have a car? Start sharing',
  description_Explore_HowItWork:
    "Become a Host and list your car on Getaround. You'll help your neighbors travel easier while making extra money each month.",
  link_Explore_HowItWork: '',

  mainTitle_Explore_SafeTrust: 'EXPLORE HOSTING',
  headerTitle_Explore_SafeTrust: '',
  title_Explore_SafeTrust: 'Have a car? Start sharing',
  description_Explore_SafeTrust:
    "Become a Host and list your car on Getaround. You'll help your neighbors travel easier while making extra money each month.",
  link_Explore_SafeTrust: '/',
  headerTitle_Proprietary_ST: '',
  title_Proprietary_ST: 'Getaround Connect® - as an option',
  description_Proprietary_ST:
    'Getaround vehicles are powered by our proprietary Connect® technology. To make sharing a car as easy as owning one, we built the only hardware designed specifically for contactless, peer-to-peer car sharing. ',
  description2_Proprietary_ST:
    'allows you to find, book, and unlock cars directly from your phone, and avoid meeting up with anyone  throughout the process to exchange keys.',
  span_Proprietary_ST: 'Getaround Connect®',
  img_Proprietary_ST:
    'https://assets-global.website-files.com/5c16e90c8f6920b098f834e5/639a1e9f44d6d5e62cda3fbb_iStock-1243633999%201.jpg',
  link_Proprietary_ST: '/',
  ImgSlideLeftRightST:
    'https://assets-global.website-files.com/5c16e90c8f6920b098f834e5/63ea9fc9c0cafb2053ba37ac_ga-illustration-19.svg',
  MainTirleLeftRightST: '',
  ImgSlideLeftRight_HowITWork:
    'https://assets-global.website-files.com/5c16e90c8f6920b098f834e5/63ea9fc9c0cafb2053ba37ac_ga-illustration-19.svg',
  MainTirleLeftRight_HowITWork: 'HIT THE ROAD STRESS-FREE',
  ImgSlideLeftRight_HostRefernal:
    'https://assets-global.website-files.com/5c16e90c8f6920b098f834e5/63ea9fc9c0cafb2053ba37ac_ga-illustration-19.svg',
  MainTirleLeftRight_HostRefernal: 'HIT THE ROAD STRESS-FREE',
  img1_SlideLeftRight_ST:
    'https://assets-global.website-files.com/5c16e90c8f6920b098f834e5/63ec0cde6f148fb8b21d20e3_ga-illustration-7.svg',
  label1_SlideLeftRight_ST: 'Insurance on every trip',
  linkTo1_SlideLeftRight_ST: '',
  link1_SlideLeftRight_ST: '',
  contents1_SlideLeftRight_ST:
    'Protection for your car in the event of damage. Hosts are covered up to $1,000,00 in liability insurance',
  img2_SlideLeftRight_ST:
    'https://assets-global.website-files.com/5c16e90c8f6920b098f834e5/63ec0cde6f148fb8b21d20e3_ga-illustration-7.svg',
  label2_SlideLeftRight_ST: 'Real-time trip monitoring',
  linkTo2_SlideLeftRight_ST: '',
  lin2k_SlideLeftRight_ST: '',
  contents2_SlideLeftRight_ST:
    'Our team receives and monitors real-time alerts for late returns and other renter behavior that may indicate a safety event.  We monitor these events on a 24/7 basis and our team takes prompt and appropriate action.',
  img3_SlideLeftRight_ST:
    'https://assets-global.website-files.com/5c16e90c8f6920b098f834e5/63ec0cde6f148fb8b21d20e3_ga-illustration-7.svg',
  label3_SlideLeftRight_ST: 'Insurance on every trip',
  linkTo3_SlideLeftRight_ST: '',
  link3_SlideLeftRight_ST: '',
  contents3_SlideLeftRight_ST:
    'Protection for your car in the event of damage. Hosts are covered up to $1,000,00 in liability insurance',

  title_bookUnlockCar_ST: 'Book - Unlock and Drive nearby car',
  link_bookUnlockCar_ST: '/',

  headerTitle_header_ST: 'Safety and trus',
  title_header_ST: 'at every level',
  content_header_ST:
    'Getaround prioritizes the safety and security of its community members by implementing proactive safety  measures, verifying identities, maintaining insurance coverage, and using advanced technology to prevent fraud. Additionally, Getaround has a dedicated team available 24/7 to investigate any safety or security  concerns.',
  img_header_ST:
    'https://assets-global.website-files.com/5c16e90c8f6920b098f834e5/641a1bcc9cff2052158af235_ga-illustration-6.svg',

  img_powerfull_ST:
    'https://assets-global.website-files.com/5c16e90c8f6920b098f834e5/648380f3f2fadb5289320a68_ga-illustration-4.svg',
  headerTitle_powerfull_ST: 'For Hosts',
  title_powerfull_ST: 'POWERFUL VETTING & FRAUD DETECTION SYSTEM',
  content_titlespan1__powerfull_ST: 'Getaround uses advanced identity verification ',
  content_titleh21_powerfull_ST:
    'technologies and a thorough screening process to ensure that every Getaround guest meets our guidelines.',
  content_titlespan2__powerfull_ST: 'Every Getaround guest must meet our eligibility criteria',
  content_titleh22_powerfull_ST:
    'in order to rent. To verify guests’ eligibility, we obtain their driving records from the Department of Motor Vehicles.',
  content_titlespan3__powerfull_ST: 'A team of dedicated experts agents the latest',
  content_titleh23_powerfull_ST:
    'risk detection technologies to protect hosts by identifying and preventing fraudulent activity on our platform.',

  imgLogo_header_Connnect:
    'https://assets-global.website-files.com/5c16e90c8f6920b098f834e5/600754c5a561bdd9d1f4a065_badge-getaround%C2%AE%401X.png',
  titleLogo_header_Connnect: 'A SAFER, MORE CONVENIENT WAY TO CARSHARE',
  mainTitleHeader_header_Connnect: 'Getaround Connect',
  content_header_Connnect:
    'No other carsharing service offers contactless sharing using Getaround Connect®. With your Android or iOS phone and the Getaround app, you can find, book, and unlock a car, truck, or van near you. Getaround is the leading global and digital carsharing marketplace. Try it today',
  imgContent_header_Connnect:
    'https://assets-global.website-files.com/5c16e90c8f6920b098f834e5/6064908339a45b8d2297f2c9_feature-contactless-booking.svg',
  nameButton1_Slide_Connect: 'Share A Car',
  linkto1_Slide_Connect: '/',
  nameButton2_Slide_Connect: 'Book A Car',
  linkto2_Slide_Connect: '/',
  title_HeaderkeyFeatures_Connect: 'key features',
  maintitle_HeaderkeyFeatures_Connect: 'The ultimate in carsharing connectivity',
  subtitle_HeaderkeyFeatures_Connect: 'For iOS and Android devices',
  title1_BodyKeyFeatures_Connect: 'GPS trackin',
  description1_BodyKeyFeatures_Connect:
    "Getaround Connect® enables us to securely track each car's location during Getaround trips, which means we can provide roadside assistance to guests in real-time if they experience any mechanical troubles during their trips.",
  linkSecurity1_BodyKeyFeatures_Connect: '',
  linkTo1_BodyKeyFeatures_Connect: '/',
  title2_BodyKeyFeatures_Connect: 'Security',
  description2_BodyKeyFeatures_Connect:
    "Theft-deterrent functionality disables the car's starter when the vehicle is not in use by the host or by a verified guest, so long as the host has enabled",
  linkSecurity2_BodyKeyFeatures_Connect: '',
  linkTo2_BodyKeyFeatures_Connect: '/',
  title3_BodyKeyFeatures_Connect: 'Contactless sharing',
  description3_BodyKeyFeatures_Connect:
    "Book and unlock with confidence. Getaround Connect® means you don't need a physical hand-off of keys.",
  linkSecurity3_BodyKeyFeatures_Connect: '',
  linkTo3_BodyKeyFeatures_Connect: '/',
  img_Blog_About:
    'https://assets-global.website-files.com/5c16e90c8f6920b098f834e5/63dc05d87b4b95cb44c4ef9f_getaroundblog%20Grande.jpeg',
  headerTitle_Blog_About: 'THE GETAROUND BLOG',
  mainTitle_Blog_About: 'Discover the Getaround blog',
  content_Blog_About:
    'Explore the collection of stories, news, and other resources for hosts, guests, and partners throughout the  Getaround carsharing community.',
  linkTo_Blog_About: '/',
  mainTitle_Explore_AboutUs: '',
  header_Explore_AboutUs: 'Book  Unlock  and Drive nearby cars',
  title_Explore_AboutUs: 'Book a car',
  description_Explore_AboutUs: 'Have a car to share?',
  link_Explore_AboutUs: '/',
  title1_Carousel_AboutUS:
    'Getaround Reaffirms Commitment as the True Open Carsharing   Marketplace with New Onboarding Incentives',
  date1_Carousel_AboutUS: 'April 28, 2023',
  description1_Carousel_AboutUS:
    "Following recent news of industry competitor's plans to shut down access to third-party vendors including CarSync, Getaround is ramping up its onboarding incentives",
  linkTo1_Carousel_AboutUS: '/',
  title2_Carousel_AboutUS: "Getaround Reveals Earth Day Plans to Support Guests' Wallets and The Planet",
  date2_Carousel_AboutUS: 'April 13, 2023',
  description2_Carousel_AboutUS:
    "Industry pioneer and world's first connected carsharing marketplace is offering new U.S. guests up to $100 in savings",
  linkTo2_Carousel_AboutUS: '/',
  title3_Carousel_AboutUS:
    'Getaround Acquires HyreCar Assets to Accelerate Profitability Path and Fortify Worldwide Gig Carsharing Leadership Position',
  date3_Carousel_AboutUS: 'May 11, 2023',
  description3_Carousel_AboutUS:
    'Getaround anticipates that the acquisition will contribute up to $75 million of run-rate annualized  Gross Booking Value and positive Adjusted EBITDA,  accelerating its path to profitability  Transaction is expected to be synergistic as Getaround expands its global market footprint',
  linkTo3_Carousel_AboutUS: '/',
  title4_Carousel_AboutUS: 'Getaround Acquires HyreCar Assets  to Accelerate Profitability ',
  date4_Carousel_AboutUS: 'May 11, 2023',
  description4_Carousel_AboutUS: '',
  linkTo4_Carousel_AboutUS: '',
  headerTitle_TitleCarousel_AboutUs: 'OUR LATEST UPDATES',
  title_TitleCarousel_AboutUs: 'News room: Press releases',
  linkTo_TitleCarousel_AboutUs: '/',
  title_JoinTeam_AboutUs: 'Join the Getaround team',
  img_JoinTeam_AboutUs:
    'https://assets-global.website-files.com/5c16e90c8f6920b098f834e5/63ea9fc9c0cafb2053ba37ac_ga-illustration-19.svg',
  content_JoinTeam_AboutUs:
    'Want to work with us? Come join the team focused on empowering people to carshare everywhere. Explore open roles at Getaround.',
  linkTo_JoinTeam_AboutUs: '/',
  title_Banner_AboutUS:
    "We're helping consumers shift away from car ownership by giving them instant and convenient access to vehicles when they need them.",
  content_Banner_AboutUS:
    'Our peer-to-peer marketplace helps solve some of the most pressing challenges facing the world today, including environmental sustainability and access to economic opportunity.',
  img_Banner_AboutUS:
    'https://assets-global.website-files.com/5c16e90c8f6920b098f834e5/63ec0b73b2f4fb34b18ddb8a_ga-illustration-8.svg',
  total1_ConnectedCarSharing_AboutUs: '1.7M',
  title1_ConnectedCarSharing_AboutUs: 'Worldwide guest',
  total2_ConnectedCarSharing_AboutUs: '6M',
  title2_ConnectedCarSharing_AboutUs: 'Trips taken',
  total3_ConnectedCarSharing_AboutUs: '1,000+',
  title3_ConnectedCarSharing_AboutUs: 'Cities covered',
  total4_ConnectedCarSharing_AboutUs: '8',
  title4_ConnectedCarSharing_AboutUs: 'Countries',
  title_Header_AboutUs: 'We empower people to carshare everywhere',
  img1_Header_AboutUs:
    'https://assets-global.website-files.com/5c16e90c8f6920b098f834e5/6390f378577eec857f016f4e_The-Verge-New-2022.svg',
  img2_Header_AboutUs:
    'https://assets-global.website-files.com/5c16e90c8f6920b098f834e5/6390f3788372d0e324dafc8f_bloomberglogo.svg',
  img3_Header_AboutUs:
    'https://assets-global.website-files.com/5c16e90c8f6920b098f834e5/6390f378c864d13f8763bda2_forbes-logo.svg',
  img4_Header_AboutUs:
    'https://assets-global.website-files.com/5c16e90c8f6920b098f834e5/6390f268577eec6e9601550e_techcrunch%20logo.png',
  img5_Header_AboutUs:
    'https://assets-global.website-files.com/5c16e90c8f6920b098f834e5/6390f265fdc36f271a970fa2_newyorktimeslogo.png',
  img6_Header_AboutUs:
    'https://assets-global.website-files.com/5c16e90c8f6920b098f834e5/6390f26576664076cce83df7_nbclogo.png',
  img7_Header_AboutUs:
    'https://assets-global.website-files.com/5c16e90c8f6920b098f834e5/6390f26630e2fc922c59a4d1_HuffPost.svg.png',

  img_Blog_NewsRoom:
    'https://assets-global.website-files.com/5c16e90c8f6920b098f834e5/63dc05d87b4b95cb44c4ef9f_getaroundblog%20Grande.jpeg',
  headerTitle_Blog_NewsRoom: 'THE GETAROUND BLOG',
  mainTitle_Blog_NewsRoom: 'Discover the Getaround blog',
  content_Blog_NewsRoom:
    'Explore the collection of stories, news, and other resources for hosts, guests, and partners throughout the  Getaround carsharing community.',
  linkTo_Blog_NewsRoom: '/',

  title_HelpCustomer_NewsRoom: "We're helping consumers shift away from car ownership.",
  linkTo_HelpCustomer_NewsRoom: '/',
  nameButton_HelpCustomer_NewsRoom: 'Down the media kit for logos, media assets, and more',
  img_HelpCustomer_NewsRoom:
    'https://assets-global.website-files.com/5c16e90c8f6920b098f834e5/63ec0b73b2f4fb34b18ddb8a_ga-illustration-8.svg',

  img_Header_NewsRoom:
    'https://assets-global.website-files.com/5c16e90c8f6920b098f834e5/63c98c83e7bffe6581cd4811_AdobeStock_516425442%202%20compress.jpg',
  title_Header_NewsRoom: 'Explore Getaround in the news',
  content_Header_NewsRoom:
    'Welcome to our press room. Find our latest press releases and new media coverage of our company.',
  titleButton_Header_NewsRoom: 'For media inquiries,',
  email_Header_NewsRoom: 'please contact us at press@getaround.com.',

  headerTitle_TitleCarousel_NewsRoom: 'NEWS FROM GETAROUND',
  title_TitleCarousel_NewsRoom: 'Press releases',
  linkTo_TitleCarousel_NewsRoom: '/',

  title1_Carousel_NewsRoom:
    'Getaround Reaffirms Commitment as the True Open Carsharing   Marketplace with New Onboarding Incentives',
  date1_Carousel_NewsRoom: 'April 28, 2023',
  description1_Carousel_NewsRoom:
    "Following recent news of industry competitor's plans to shut down access to third-party vendors including CarSync, Getaround is ramping up its onboarding incentives",
  linkTo1_Carousel_NewsRoom: '/',
  title2_Carousel_NewsRoom: "Getaround Reveals Earth Day Plans to Support Guests' Wallets and The Planet",
  date2_Carousel_NewsRoom: 'April 13, 2023',
  description2_Carousel_NewsRoom:
    "Industry pioneer and world's first connected carsharing marketplace is offering new U.S. guests up to $100 in savings",
  linkTo2_Carousel_NewsRoom: '/',
  title3_Carousel_NewsRoom:
    'Getaround Acquires HyreCar Assets to Accelerate Profitability Path and Fortify Worldwide Gig Carsharing Leadership Position',
  date3_Carousel_NewsRoom: 'May 11, 2023',
  description3_Carousel_NewsRoom:
    'Getaround anticipates that the acquisition will contribute up to $75 million of run-rate annualized  Gross Booking Value and positive Adjusted EBITDA,  accelerating its path to profitability  Transaction is expected to be synergistic as Getaround expands its global market footprint',
  linkTo3_Carousel_NewsRoom: '/',
  title4_Carousel_NewsRoom: 'Getaround Acquires HyreCar Assets  to Accelerate Profitability ',
  date4_Carousel_NewsRoom: 'May 11, 2023',
  description4_Carousel_NewsRoom: '',
  linkTo4_Carousel_NewsRoom: '',

  date1_Read_NewsRoom: 'Jan 5, 2023',
  title1_Read_NewsRoom: 'Car Sharing: What You Need To Know - Kelley Blue Book',
  link1_Read_NewsRoom: '/',
  date2_Read_NewsRoom: 'Dec 16, 2022',
  title2_Read_NewsRoom: 'Why This Company Went Public In a Bear Market - TheStree',
  link2_Read_NewsRoom: '/',
  date3_Read_NewsRoom: 'Dec 8, 2022',
  title3_Read_NewsRoom:
    'Sam Zaid —On Leadership Styles, Decision-Making, Going Public via SPAC at $1.2 Billion Value - Vunela',
  link3_Read_NewsRoom: '/',

  mainTitle_Explore_hostRefernal: '',
  headerTitle_Explore_hostRefernal: 'OTHER HOST BONUSES',
  title_Explore_hostRefernal: 'Explore more bonuses',
  description_Explore_hostRefernal:
    "Referrals aren't the only way to make extra money as a Getaround Host. Explore more ways to earn more.",
  link_Explore_hostRefernal: '/',
  img_SlideLeftRight_hostRefernal:
    'https://assets-global.website-files.com/5c16e90c8f6920b098f834e5/63ec0cde6f148fb8b21d20e3_ga-illustration-7.svg',
  label_SlideLeftRight_hostRefernal: 'The details',
  linkTo_SlideLeftRight_hostRefernal: '/',
  link_SlideLeftRight_hostRefernal: 'Referrals must be made with your custom referral link on this page',
  content1_SlideLeftRight_hostRefernal:
    "not with the link you'll find in the Getaround app. If you don't want to share the link directly with a friend, you can submit their information through the form above.",
  content2_SlideLeftRight_hostRefernal:
    "With each host you refer, you can earn a maximum of a $1000 referral bonus. Refer more friends or family to earn more. All referred Hosts must list cars that meet Getaround's standard vehicle eligibility requirements",
  img_imgcustomeSteps:
    'https://assets.website-files.com/581d2676fe18a07e43923cfc/63dc1685bdd5eaa356d17f23_6306804d1f0ca670cfa33eb5_iStock-688453812%202.jpg',
  Headertitle_imgcustomeSteps: 'HOW IT WORKS',
  title_imgcustomeSteps: 'Make it happen in second',
  headerTitle_Header_hostRefernal: 'Make even more',
  title_Header_hostRefernal: 'when you refer your friends',
  content_Header_hostRefernal:
    "You already know how powerful hosting can be. Time to share the love. Don't delay—this is a limited-time offer.",
  img_Header_hostRefernal:
    'https://assets.website-files.com/581d2676fe18a07e43923cfc/63ec0f79defe6c3903d84ee4_ga-illustration-2.svg',
  title1_customeSteps: 'Think of friends to refer',
  subtitle1_customeSteps: "You've got this. Who do you know with a car that  might like to list it?",
  title2_customeSteps: 'Copy your custom referral link',
  subtitle2_customeSteps:
    "Generate your link in the tool on this page. Share it with your friends via email or text. Make sure to use your link, since it's the only way for us to credit you for referrals.",
  title3_customeSteps: 'Follow up with your friend',
  subtitle3_customeSteps:
    "Don't stop with just sending the link. Talk to your friends, share the Host handbook, and see how you can help them get started.",
  key1_Question_hostRefernal: '1',
  label1_Question_hostRefernal: 'When and how will I receive my referral bonus?',
  content1_1_Question_hostRefernal: 'Initial $20',
  content1_2_Question_hostRefernal: "‍When: After your referral's first vehicle goes live for bookings",
  content1_3_Question_hostRefernal: 'How: Earnings adjustment in your account',
  content1_4_Question_hostRefernal: 'How: Earnings adjustment in your account',

  key2_Question_hostRefernal: '2',
  label2_Question_hostRefernal: 'When and how will I receive my referral bonus?',
  content2_1_Question_hostRefernal: 'Initial $20',
  content2_2_Question_hostRefernal: "‍When: After your referral's first vehicle goes live for bookings",
  content2_3_Question_hostRefernal: 'How: Earnings adjustment in your account',
  content2_4_Question_hostRefernal: 'How: Earnings adjustment in your account',

  key3_Question_hostRefernal: '3',
  label3_Question_hostRefernal: 'When and how will I receive my referral bonus?',
  content3_1_Question_hostRefernal: 'Initial $20',
  content3_2_Question_hostRefernal: "‍When: After your referral's first vehicle goes live for bookings",
  content3_3_Question_hostRefernal: 'How: Earnings adjustment in your account',
  content3_4_Question_hostRefernal: 'How: Earnings adjustment in your account',

  key4_Question_hostRefernal: '4',
  label4_Question_hostRefernal: 'When and how will I receive my referral bonus?',
  content4_1_Question_hostRefernal: 'Initial $20',
  content4_2_Question_hostRefernal: "‍When: After your referral's first vehicle goes live for bookings",
  content4_3_Question_hostRefernal: 'How: Earnings adjustment in your account',
  content4_4_Question_hostRefernal: 'How: Earnings adjustment in your account'
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
