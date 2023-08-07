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
  header?:string
  content?:string
}



export interface IItemBanner {
  title:string
  content:string
}

export interface IItemTopGettingStarted {
  topHeader?:string
  title?:string
  content?:string  
} 