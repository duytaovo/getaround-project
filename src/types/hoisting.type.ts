import { ReactNode } from "react"

export interface IItemSlider {
    id:number
    title?:string
    img:string,
    content?:string,
    time?:string,
}

export interface IItemCarousel {
    id:number
    title?:string
    header?:string
    content?:string
    childrenImgPersong?:ReactNode
    name?:string
    img?:string
}

export interface ICardBody {
    title:string,
    img?:string
    content?:string
}
