import React from 'react'
import BodyTop from './Component/BodyTop'
import ExploreHosting from 'src/components/ExploreHosting/ExploreHosting'
import { DataExploreHostingShareCar } from 'src/items/ExploreHosting/DataExploreHostingStyle'
import { DataExploreHostingShareCarText } from 'src/items/ExploreHosting/DataExploreHostingText'

type Props = {}

const ShareACar = (props: Props) => {
  return (
    <div className='pt-[84px]'>
      <div>
      <BodyTop
        img='https://assets-global.website-files.com/5c16e90c8f6920b098f834e5/63ec0cc59fa56f9bb02ee62f_ga-illustration-13.svg'
        content="
      When you list your car, you're earning money while helping others navigate your city. It's a win-win, and your next big opportunity.
      "
        header='Turn your car
      into extra money'
      />
      </div>
      <div className='mt-[100px]'>
      <ExploreHosting
        img={
          'https://assets-global.website-files.com/5c16e90c8f6920b098f834e5/63c5b458858ce546324e6786_636056a89c0f36b634f4dc4e_AdobeStock_488832115%20copiar.jpg'
        }
        DataExploreHostingStyle={DataExploreHostingShareCar}
        DataExploreHostingText={DataExploreHostingShareCarText}
        isEx={false}
      />
      </div>
    </div>
  )
}

export default ShareACar
