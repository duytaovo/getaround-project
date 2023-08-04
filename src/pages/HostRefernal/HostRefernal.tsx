import React from 'react'
import ExploreHosting from 'src/components/ExploreHosting/ExploreHosting'
import { DataExploreHostingHostRefernal } from 'src/items/ExploreHosting/DataExploreHostingStyle'
import { DataExploreHostingHostRefernalText } from 'src/items/ExploreHosting/DataExploreHostingText'
import FormContact from 'src/components/FormContact/FormContact'
import CustomeCard from 'src/components/CustomeCard/CustomeCard'
import { DataCustomeCardHostRefernal } from 'src/Data/DataCustomeCard'
import WrapperContent from 'src/components/WrapperContent/WrapperContent'
import CustomeCommonQuestions from 'src/components/CustomeCommonQuestions/CustomeCommonQuestions'
import { itemsHostRefernal } from 'src/items/CommonQuestionItems/CommonQuestionItems'
import { Link } from 'react-router-dom'
import SlideLeftRight from 'src/components/SlideLeftRight/SlideLeftRight'
import { DataSlideLeftRightHostRefernal } from 'src/items/SlideLeftRight/DataSlideLeftRight'
const HostRefernal = () => {
  return (
    <div className='w-full h-auto bg-mainBackGroundColor'>
      <CustomeCard mainTitle={`When you refer a friend`} DataCustomeCard={DataCustomeCardHostRefernal} />
      <FormContact
        titleForm={'Refer a friend'}
        titleInput={'Input your information to get your referral link or submit a referee.'}
      />
      <SlideLeftRight
        Data={DataSlideLeftRightHostRefernal}
        img='https://assets.website-files.com/581d2676fe18a07e43923cfc/63ec0f939fa56f180d2f1b7b_ga-illustration-6.svg'
        mainTitle=''
      />
      <FormContact
        titleForm={'Track your Referrals'}
        titleInput={'Input your information to see your referral progress!'}
      />{' '}
      *
      <ExploreHosting
        img={
          'https://assets-global.website-files.com/5c16e90c8f6920b098f834e5/6324f5891e795a0a4cf1c346_AdobeStock_488832115.jpg'
        }
        DataExploreHostingStyle={DataExploreHostingHostRefernal}
        DataExploreHostingText={DataExploreHostingHostRefernalText}
        isEx={false}
      />
      <WrapperContent titlePadding={8} textAlign='left' title='Need more info? Check out FAQs.'>
        <div>
          <CustomeCommonQuestions items={itemsHostRefernal} className='w-full p-4' />
        </div>
      </WrapperContent>
    </div>
  )
}

export default HostRefernal
