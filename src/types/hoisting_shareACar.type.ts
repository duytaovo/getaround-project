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
}

export interface IBodyTop {
  header?: string
  content?: string
  img?: string
}

export interface IItemContentSlider {
  title?: string
  content?: string
}

export interface IItemSupport {
  title: string
  contentLeft: string
  contentRight: string
}
