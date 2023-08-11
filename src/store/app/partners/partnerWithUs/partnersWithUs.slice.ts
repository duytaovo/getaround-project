import { createSlice } from '@reduxjs/toolkit'
import { IHeroPartnerWithUsSection, IHostBenefitsSection } from 'src/types/partnersWithUs/partnesWithUs.type'

type PartnersWithUsType = {
  partnersHero: IHeroPartnerWithUsSection
  partnerBenefits: IHostBenefitsSection
}

const initialState: PartnersWithUsType = {
  partnersHero: {
    id: 'partner_hero-s01',
    imgLogo:
      'https://assets-global.website-files.com/5c16e90c8f6920b098f834e5/610ef9dd8b2b17d8489ead9c_multiracial-colleagues-giving-high-five.jpg',
    title: 'partner_with_us_hero_title',
    content: 'partner_with_us_hero_content'
  },
  partnerBenefits: {
    id: 'benefits_s_02',
    itemsData: [
      {
        title: 'Government partnerships',
        description:
          'Getaround partners with cities, agencies, and others on shared goals. Our vision is to make cities and communities better places to live. Getaround has a long history of collaborating with public-private partners to create innovative solutions.'
      },
      {
        title: 'Real estate partnerships',
        description:
          'Getaround works with all different types and classes of real estate assets to provide car sharing as an amenity. Our mission is to connect safe, convenient, and affordable cars with people who need them to live and work.'
      },
      {
        title: 'Strategic partnerships',
        description:
          'Getaround can help your enterprise grow or become more efficient through a strategic partnership. We can provide access to affordable, on-demand transportation to your customers, employees, or marketplace. Our team will work on a specialized operational plan for your organization by aligning our goals and initiatives.'
      },
      {
        title: 'Vehicle service & technology partnerships',
        description:
          'Getaround was founded in 2009 and operates in over 950 cities across the U.S. and Europe. Our community of car-owning hosts who share their cars with guests for on-demand mobility often require assistance in the form of service or technology partners to help them run their businesses. If you provide a service that you feel would be beneficial for our host community, reach out to discuss how we connect your service to our ecosystem of Getaround hosts.'
      }
    ]
  }
}

const partnersWithUsSlice = createSlice({
  name: 'PartnersWithUs',
  initialState,
  reducers: {}
})

export default partnersWithUsSlice
