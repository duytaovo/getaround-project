import { ReactNode } from 'react'

export interface ISelectItemsExploreHosting {
  id?: string
  mainTitle: string
  headerTitle: string
  Title: string
  Description: string
  Link: string
}

export interface ISelectItemsProprietary {
  id?: string
  headerTitle: string
  title: string
  description: string
  description2: string
  span: string
  img: string
  Link: string
}
export interface ISelectItemsHearCommunity {
  id?: string
  title: string
  content: string
  link: string
}
export interface ISelectItemsSlide {
  id?: string
  mainTitle: string
  title: string
  img1: string
  content1: string
  img2: string
  content2: string
}
export interface ISelectItemsSlideLeftRight {
  id: string
  img: string
  label: string
  Linkto: string
  Link: string
  contents: any[]
}
export interface ISelectImglideLeftRight {
  id?: string
  img: string
  mainTitle: string
}
