import { ReactNode } from 'react'

export interface IItemSliderHostComunity {
  id:number
  img: string
  content: string
  url: string
}

export interface IItemNailTheBasic {
  id?: number
  iconSTT?: ReactNode
  title?: string
  headerTheNailBasic?:string
  contentNailTheBasic?:string
  headerBusiness?:string
  contentBusiness?:string
}

export interface IItemLink {
  id?:number
  title:string
  to?:string
}

export interface IItemCardBodyButton {
  title:string
  infoButton:string
}


export interface IItemBanner {
  title:string
  content:string
  infoButton:string
}

export interface IItemTopGettingStarted {
  topHeader?:string
  title?:string
  content?:string  
} 