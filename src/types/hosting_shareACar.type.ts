import { ReactNode } from 'react'

export interface IItemSlider {
  id?: string
  title?: string
  img: string
  content?: string
  time?: string
}
export interface IItemCarousel1 {
  id: number
  title: string
  date: string
  description: string
  linkTo: string
}
export interface IItemCarousel2 {
  id: number
  title: string
  date: string
  description: string
  linkTo: string
}
export interface IItemCarousel {
  id: number | string
  title?: string
  header?: string
  content?: string
  childrenImgPersong?: ReactNode
  name?: string
  img?: string
}

export interface IItemBodyBannerCard {
  id?: string
  title: string
  img?: string
  content?: string
  infoButton?: string
}

export interface IItemBodyRefer {
  id?: string
  title: string
  content?: string
  infoLink?: string
  to?: string
}

export interface IBodyTop {
  id?: string
  header?: string
  content?: string
  img?: string
  infoButton?: string
}

export interface IBodyCommonQuestionImg {
  id?: string
  img: string
}

export interface IItemContentSlider {
  id?: string
  headerTitle?: string
  title?: string
  content?: string
}

export interface IItemGetAroundYourBack {
  id?: string
  title?: string
  content?: string
}

export interface IItemSupport {
  id?: string
  img: string
  title: string
  contentLeft: string
  contentRight: string
}

export interface IIWrapContentTitle {
  id: number
  title: string
}
