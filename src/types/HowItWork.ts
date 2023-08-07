import { ReactNode } from 'react'

export interface ISelectItemsExploreHosting {
  mainTitle?: string
  headerTitle?: string
  Title?: string
  Description?: string
  Link?: string
}

export interface ISelectItemsProprietary {
  id?: number
  headerTitle?: string
  title?: string
  description?: string
  description2?: string
  span?: string
  Link?: string
}
export interface ISelectItemsHearCommunity {
  title?: string
  content?: string
  link?: string
}
export interface ISelectItemsSlide {
  mainTitle?: string
  title?: string
  img1?: string
  content1?: string
  img2?: string
  content2?: string
}
export interface ISelectItemsSlideLeftRight {
  img: string
  label?: string
  Linkto?: string
  Link?: string
  contents?: any[]
}
