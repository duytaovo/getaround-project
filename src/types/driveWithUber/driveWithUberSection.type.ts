import { ICustomeSteps } from '../customeSteps.type'

export interface IHeroSectionType {
  id?: string
  img: string
  logos: string[]
  titles: string[]
  paragraphs: string[]
}

export interface IIntroduceSection {
  id?: string
  img: string
  title: string
  paragraphs: string[]
}

export interface IPerksSection {
  id?: string
  headingTitle: string
  itemsData: {
    title: string
    descriptions: string
  }[]
}

export interface IDriveWithUberStepSection {
  id?: string
  wrapperTitle: string
  headingTitle: string
  img: string
  itemsData: ICustomeSteps[]
}

export interface IGetStatedSection {
  id?: string
  wrapperContent: string
  contents: string[]
  buttonTitle: {
    title: string
    subTitle: string
  }[]
}
