export interface IHeroPartnerWithUsSection {
  id: string
  imgLogo: string
  title: string
  content: string
}

export interface IHostBenefitsSection {
  id: string
  itemsData: {
    title: string
    description: string
  }[]
}
