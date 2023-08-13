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
  IItemSlider,
  IItemSupport
} from 'src/types/hosting_shareACar.type'

import LooksOneOutlinedIcon from '@mui/icons-material/LooksOneOutlined'
import LooksTwoOutlinedIcon from '@mui/icons-material/LooksTwoOutlined'
import Looks3OutlinedIcon from '@mui/icons-material/Looks3Outlined'
import Looks4OutlinedIcon from '@mui/icons-material/Looks4Outlined'
import { IExploreHostingText } from 'src/types/exploreHostingText.type'
import { ICustomeSteps } from 'src/types/customeSteps.type'
import { ICommonQuestions } from 'src/types/commonQuestion.type'
// Share a car
export const ItemContentSlider: IItemContentSlider = {
  headerTitle: 'txt-contentSlider-shareACar-headerTitle',
  title: 'txt-contentSlider-shareACar-title',
  content: '  txt-contentSlider-shareACar-content'
}
//component
export const DataExploreHostingShareCarText: IExploreHostingText = {
  mainTitle: 'txtMainTitleShareACar',
  headerTitle: 'txtHeaderTitleShareACar',
  Title: 'txtTitleShareACar',

  Description: 'txtDescriptionShareACar',
  Link: '/'
}

export const DataExploreHostingShareCarText_bottom: IExploreHostingText = {
  mainTitle: 'txtMainTitleShareACar_bottom',
  headerTitle: 'txtHeaderTitleShareACar_bottom',
  Title: 'txtTitleShareACar_bottom',

  Description: 'txtDescriptionShareACar_bottom',
  Link: '/'
}
export const CustomeStepItems: ICustomeSteps[] = [
  {
    title: 'txtCustomStepItemsTitle_1',
    // images: ['txtCustomStepImages1', 'txtCustomStepImages2'],
    subTitle: 'txtCustomStepSubTitle_1'
  },
  {
    title: 'txtCustomStepTitle_2',
    subTitle: 'txtCustomStepSubTitle_2'
  },
  {
    title: 'txtCustomStepTitle_3',
    subTitle: 'txtCustomStepSubTitle_3'
  }
]
export const items: ICommonQuestions[] = [
  {
    key: '1',
    label: 'commonQuestion_shareACar_label_01',
    contents: [
      'commonQuestion_shareACar_content_01',
      'commonQuestion_shareACar_content_02',
      'commonQuestion_shareACar_content_03'
    ]
  },
  {
    key: '2',
    label: 'commonQuestion_shareACar_label_02',
    contents: [
      'commonQuestion_shareACar_content_04',
      'commonQuestion_shareACar_content_05',
      'commonQuestion_shareACar_content_06'
    ]
  },
  {
    key: '3',
    label: 'commonQuestion_shareACar_label_03',
    contents: [
      'commonQuestion_shareACar_content_07',
      'commonQuestion_shareACar_content_08',
      'commonQuestion_shareACar_content_09'
    ]
  },
  {
    key: '4',
    label: 'commonQuestion_shareACar_label_04',
    contents: [
      'commonQuestion_shareACar_content_10',
      'commonQuestion_shareACar_content_11',
      'commonQuestion_shareACar_content_12'
    ]
  }
]

export const itemsBottom: ICommonQuestions[] = [
  {
    key: '1',
    label: 'commonQuestionBottom_shareACar_label_01',
    contents: [
      'commonQuestionBottom_shareACar_content_01',
      'commonQuestionBottom_shareACar_content_02',
      'commonQuestionBottom_shareACar_content_03'
    ]
  },
  {
    key: '2',
    label: 'commonQuestionBottom_shareACar_label_02',
    contents: [
      'commonQuestionBottom_shareACar_content_04',
      'commonQuestionBottom_shareACar_content_05',
      'commonQuestionBottom_shareACar_content_06'
    ]
  },
  {
    key: '3',
    label: 'commonQuestionBottom_shareACar_label_03',
    contents: [
      'commonQuestionBottom_shareACar_content_07',
      'commonQuestionBottom_shareACar_content_08',
      'commonQuestionBottom_shareACar_content_09'
    ]
  },
  {
    key: '4',
    label: 'commonQuestion_shareACar_label_04',
    contents: [
      'commonQuestion_shareACar_content_10',
      'commonQuestion_shareACar_content_11',
      'commonQuestion_shareACar_content_12'
    ]
  }
]
////
export const ItemSliderShareCar: IItemSlider[] = [
  {
    id: '1',
    title: 'sliderShareACar_txt-card_slider_title_1',
    content: 'sliderShareACar_txt-card_slider_content_1',
    time: 'sliderShareACar_txt-card_slider_time_1',
    img: 'sliderShareACar_img-card_slider_1'
  },
  {
    id: '2',
    title: 'sliderShareACar_txt-card_slider_title_2',
    content: 'sliderShareACar_txt-card_slider_content_2',
    time: 'sliderShareACar_txt-card_slider_time_2',
    img: 'sliderShareACar_img-card_slider_2'
  },
  {
    id: '3',
    title: 'sliderShareACar_txt-card_slider_title_3',
    content: 'sliderShareACar_txt-card_slider_content_3',
    time: 'sliderShareACar_txt-card_slider_time_3',
    img: 'sliderShareACar_img-card_slider_3'
  },
  {
    id: '4',
    title: 'sliderShareACar_txt-card_slider_title_4',
    content: 'sliderShareACar_txt-card_slider_content_4',
    time: 'sliderShareACar_txt-card_slider_time_4',
    img: 'sliderShareACar_img-card_slider_4'
  },
  {
    id: '5',
    title: 'sliderShareACar_txt-card_slider_title_5',
    content: 'sliderShareACar_txt-card_slider_content_5',
    time: 'sliderShareACar_txt-card_slider_time_5',
    img: 'sliderShareACar_img-card_slider_5'
  },
  {
    id: '6',
    title: 'sliderShareACar_txt-card_slider_title_6',
    content: 'sliderShareACar_txt-card_slider_content_6',
    time: 'sliderShareACar_txt-card_slider_time_6',
    img: 'sliderShareACar_img-card_slider_6'
  }
]

export const ItemBodyTop: IBodyTop = {
  img: 'img-bodyTop-shareACar',
  content: ' txt-bodytop-shareACar_content',
  header: 'txt-bodytop-shareACar_header',
  infoButton: 'txt-buttonBodyTop-shareACar'
}

export const itemBanner: IItemBodyBannerCard = {
  img: 'img_bodyBanner-shareACar',
  title: 'txt-bodyBaner-shareACar-title',
  content: 'txt-bodyBaner-shareACar-content'
}

export const itemBodyCardTop: IItemBodyBannerCard = {
  title: 'bodyCardTop_txt-bodyCard-shareACar-title',
  content: 'bodyCarTop_txt-bodyCard-shareACar-content'
}

export const itemBodyCardBottom: IItemBodyBannerCard = {
  content: 'bodyCardBottom_txt-bodyCard-shareACar-title',
  title: 'bodyCarBottom_txt-bodyCard-shareACar-content'
}

export const itemSupport: IItemSupport = {
  img: 'support_shareACar-img',
  title: 'support_shareACar-title',
  contentLeft: 'support_shareACar-contentLeft',
  contentRight: 'support_shareACar-Right'
}
export const itemCommonQuestionBody: IBodyCommonQuestionImg = {
  img: 'img_commonQuestion-shareACar'
}
export const itemGetAroundYourBack: IItemGetAroundYourBack = {
  title: 'txt-getAroundYourBack-shareACar-title',
  content: 'txt-getAroundYourBack-shareACar-content'
}

export const itemOurHost: IItemGetAroundYourBack = {
  title: 'ourHost-shareAcar-title',
  content: 'ourHost-shareAcar-content'
}

export const wrapperTitle: IIWrapContentTitle[] = [
  {
    id: 1,
    title: 'txt-wrapperTitle-shareACar-01'
  },
  { id: 2, title: 'txt-wrapperTitle-shareACar-02' }
]

//////////////////////////////////
// host community
export const itemSliderHostComunity: IItemSliderHostComunity[] = [
  {
    id: 1,
    img: 'img_sliderTopComunity_1',
    content: 'txt_cardSlider_community_content_1',
    url: 'txt_cardSlider_community_url_1'
  },
  {
    id: 2,
    img: 'img_sliderTopComunity_2',
    content: 'txt_cardSlider_community_content_2',
    url: 'txt_cardSlider_community_url_2'
  },
  {
    id: 3,
    img: 'img_sliderTopComunity_3',
    content: 'txt_cardSlider_community_content_3',
    url: 'txt_cardSlider_community_url_3'
  },
  {
    id: 4,
    img: 'img_sliderTopComunity_4',
    content: 'txt_cardSlider_community_content_4',
    url: 'txt_cardSlider_community_url_4'
  }
]

export const itemCardBodyImg: IItemBodyBannerCard = {
  title: 'txt_cardBodyImg_community_title',
  img: 'img_cardBodyImg_shareACar'
}

export const itemCardBodyParnerDeal: IItemBodyBannerCard = {
  title: 'txt_CardBodyParner_community_title',
  infoButton: 'txt_cardBodyParnerDeal_community_infoButton',
  img: 'img_cardBodyParner_shareACar',
  content: 'txt_CardBodyParner_community_content'
}

export const itemCardBodyReferFriend: IItemBodyRefer = {
  title: 'txt_CardBodyReferFrient_community_title',
  content: 'txt_CardBodyReferFrient_community_content',
  infoLink: 'txt_CardBodyReferFrient_community_infoLink',
  to: '/'
}

export const itemCardBodyButton: IItemCardBodyButton = {
  title: 'txt_cardBodyButton_community_title',
  infoButton: 'txt_cardBodyButton_community_infoButton'
}

export const itemBannerCommunity: IItemBanner = {
  title: 'txt_banner_community_title',
  content: 'txt_banner_community_content',
  infoButton: 'txt_banner_community_infoButton'
}
export const itemOurHostCommunity: IItemGetAroundYourBack = {
  title: 'txt_OurHost_community_title',
  content: 'ourHost-shareAcar-content'
}
export const itemTopHostComunity: IItemGetAroundYourBack = {
  title: 'txt_topHost_Community_title',
  content: 'txt_topHost_Community_content'
}

export const itemTopGettingStarted: IItemTopGettingStarted = {
  topHeader: 'txt_topGettingStarted_community_topHeader',
  title: 'txt_topGettingStarted_community_title',
  content: 'txt_topGettingStarted_community_content'
}

export const itemImgGettingStarted: string = 'img_gettingStarted_hostCommunity'

export const itemImgExploreHosting: string =
  'https://assets-global.website-files.com/5c16e90c8f6920b098f834e5/63c5b458858ce546324e6786_636056a89c0f36b634f4dc4e_AdobeStock_488832115%20copiar.jpg'

export const itemLinkNailTheBasic: IItemNailTheBasic[] = [
  {
    id: 1,
    iconSTT: <LooksOneOutlinedIcon />,
    title: 'txt_GettingStarted_community_itemNailTheBasic_1'
  },
  {
    id: 2,
    iconSTT: <LooksTwoOutlinedIcon />,
    title: 'txt_GettingStarted_community_itemNailTheBasic_2'
  },
  {
    id: 3,
    iconSTT: <Looks3OutlinedIcon />,
    title: 'txt_GettingStarted_community_itemNailTheBasic_3'
  },
  {
    id: 4,
    iconSTT: <Looks4OutlinedIcon />,
    title: 'txt_GettingStarted_community_itemNailTheBasic_4'
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
  headerTheNailBasic: 'txt_GettingStarted_community_headerTheNailBasic',
  contentNailTheBasic: 'txt_GettingStarted_community_contentNailTheBasic',
  headerBusiness: 'txt_GettingStarted_community_headerBusiness',
  contentBusiness: 'txt_GettingStarted_community_contentBusiness'
}

export const DataExploreHostingShareCarText_Community: IExploreHostingText = {
  mainTitle: 'txtMainTitleCommunity',
  headerTitle: 'txtHeaderTitleCommunity',
  Title: 'txtTitleCommunity',
  Description: 'txtDescriptionCommunity',
  Link: '/'
}

export const itemsCommonQuestionCommunity: ICommonQuestions[] = [
  {
    key: '1',
    label: 'commonQuestion_Community_label_01',
    contents: [
      'commonQuestion_Community_content_01',
      'commonQuestion_Community_content_02',
      'commonQuestion_Community_content_03'
    ]
  },
  {
    key: '2',
    label: 'commonQuestion_Community_label_02',
    contents: [
      'commonQuestion_Community_content_04',
      'commonQuestion_Community_content_05',
      'commonQuestion_Community_content_06'
    ]
  },
  {
    key: '3',
    label: 'commonQuestion_Community_label_03',
    contents: [
      'commonQuestion_Community_content_07',
      'commonQuestion_Community_content_08',
      'commonQuestion_Community_content_09'
    ]
  },
  {
    key: '4',
    label: 'commonQuestion_Community_label_04',
    contents: [
      'commonQuestion_Community_content_10',
      'commonQuestion_Community_content_11',
      'commonQuestion_Community_content_12'
    ]
  }
]
