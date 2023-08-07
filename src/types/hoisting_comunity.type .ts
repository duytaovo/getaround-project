import { ReactNode } from 'react'

export interface IItemSliderHostComunity {
  id:number
  img: string
  content: string
  url: string
}

export interface IItemNailTheBasic {
  id: number
  iconSTT: ReactNode
  title: string
}

export interface IItemGettingStarted {
  content?:string
}

export interface IItemBanner {
  title:string
  content:string
}