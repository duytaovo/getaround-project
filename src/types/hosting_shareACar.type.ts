import { ReactNode } from 'react'

export interface IItemSlider {
  id: number
  title?: string
  img: string
  content?: string
  time?: string
}

export interface IItemCarousel {
  id: number
  title?: string
  header?: string
  content?: string
  childrenImgPersong?: ReactNode
  name?: string
  img?: string
}

export interface IItemBodyBannerCard {
  title: string
  img?: string
  content?: string
  infoButton?:string
}

export interface IItemBodyRefer {
  title: string
  content?: string
  infoLink?:string
  to?:string
}

export interface IBodyTop {
  header?: string
  content?: string
  img?: string
}

export interface IBodyCommonQuestionImg {
  img: string
}

export interface IItemContentSlider {
  headerTitle?:string
  title?: string
  content?: string
}

export interface IItemGetAroundYourBack {
  title?: string
  content?: string
}

export interface IItemSupport {
  img:string
  title: string
  contentLeft: string
  contentRight: string
}

export interface IIWrapContentTitle {
  id:number
  title:string
}