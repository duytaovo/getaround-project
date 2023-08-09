import { ICommonQuestions } from './commonQuestion.type'

export interface IQAndASection {
  id?: string
  wrapperTitle: string
  heading?: string
  itemsData: ICommonQuestions[]
  img?: string
}
