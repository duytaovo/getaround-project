export interface ISelectItemsBlog {
  id?: string
  img: string
  headerTitle: string
  mainTitle: string
  content: string
  link: string
  linkTo: string
}

export interface ISelectItemsHelpCustomer {
  id?: string
  title: string
  link: string
  linkTo: string
  nameButton: string
  img: string
}
export interface ISelectItemsHeader {
  id?: string
  img: string
  title: string
  content: string
  titleButton: string
  email: string
}
export interface ISelectItemsReadNews {
  id?: string
  day: string
  title: string
  link: string
}
export interface ISelectItemsTitleReadNews {
  id?: string
  headerTitle: string
  title: string
}
