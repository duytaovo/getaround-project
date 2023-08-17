import { ReactNode } from 'react'

export interface IItemSlider {
  id: string
  title?: string
  img: string
  content?: string
  time?: string
}

export interface IItemCarousel {
  id: string | number
  title?: string
  header?: string
  content?: string
  childrenImgPersong?: ReactNode
  name?: string
  img?: string
}

export interface ICardBody {
  title: string
  img?: string
  content?: string
}
