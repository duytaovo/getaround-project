import React from 'react'
import ExploreHosting from 'src/components/ExploreHosting/ExploreHosting'
import { DataExploreHostingHostRefernal } from 'src/items/ExploreHosting/DataExploreHostingStyle'
import FormContact from 'src/components/FormContact/FormContact'
import WrapperContent from 'src/components/WrapperContent/WrapperContent'
import CustomeCommonQuestions from 'src/components/CustomeCommonQuestions/CustomeCommonQuestions'
import SlideLeftRight from 'src/components/SlideLeftRight/SlideLeftRight'
import CustomeStep from 'src/components/CustomeStep/CustomeStep'
import HeaderhostRefernal from './HeaderhostRefernal'
import { useAppSelector } from 'src/hooks/useRedux'
import { useDispatch, useSelector } from 'react-redux'
import { RootState } from 'src/store/store'
import { MobileOutlined, CarOutlined, RiseOutlined, DollarOutlined, WalletOutlined } from '@ant-design/icons'
import { Text } from 'src/components/Edition/Text'
import { Image } from 'src/components/Edition/Image'

export const DataImgCustomeStepHostRF = {
  id: 'ImgCustomeSteps_HostRF',
  img: 'https://assets.website-files.com/581d2676fe18a07e43923cfc/63dc1685bdd5eaa356d17f23_6306804d1f0ca670cfa33eb5_iStock-688453812%202.jpg',
  title: 'Make it happen in seconds'
}
const HostRefernal = () => {
  const {
    ExplorehostRefernal,
    customeSteps,
    imgcustomeSteps,
    SlideLeftRighthostRefernal,
    ImgSlideLeftRight_HostRefernal,
    ImgExploreHR,
    QuestionhostRefernal,
    CustomeCard
  } = useSelector((state: RootState) => state.hostingReferral)
  const data = useAppSelector((state) => state.data.data)
  const dispatch = useDispatch()

  return (
    <div className='w-full h-auto bg-mainBackGroundColor'>
      <WrapperContent textAlign='center' title='' classname='flex flex-col'>
        <HeaderhostRefernal />
      </WrapperContent>
      {/* <CustomeCard mainTitle={`When you refer a friend`} DataCustomeCard={DataCustomeCardHostRefernal} /> */}
      <WrapperContent textAlign='center' title={data[imgcustomeSteps.headerTitle]} classname='flex flex-col'>
        <div className='justify-center items-center flex relative'>
          <div className='flex justify-center px-[36px] sm:flex-col'>
            <div className='w-1/2 md:w-[65%] sm:w-[100%]'>
              <Text
                id='TitleHIW'
                tag='p'
                content={data[imgcustomeSteps.title]}
                className='text-black text-2xl mb-3 font-semibold'
              />
              {/* <p className='text-black text-2xl mb-3 font-semibold'>Make it happen in seconds</p> */}
              <CustomeStep
                icons={[<CarOutlined />, <WalletOutlined />, <DollarOutlined />]}
                classname='w-full'
                items={customeSteps}
              />
            </div>
            {/* <div className='w-1/2 flex justify-center rounded-[16px] items-center'> */}
            <Image
              id={imgcustomeSteps.img}
              className='object-cover w-[310px] md:w-[230px] min-h-[260px] md:min-h-[400px] mb-auto mx-auto  rounded-[16px]'
              src={data[imgcustomeSteps.img]}
              alt='Getaround Connect®'
            />
            {/* <img
              className='object-cover w-[310px] md:w-[230px] min-h-[260px] md:min-h-[400px] mb-auto mx-auto  rounded-[16px]'
              src='https://assets.website-files.com/581d2676fe18a07e43923cfc/63dc1685bdd5eaa356d17f23_6306804d1f0ca670cfa33eb5_iStock-688453812%202.jpg'
              alt='ss'
            /> */}
            {/* </div> */}
          </div>
        </div>
      </WrapperContent>
      <FormContact
        titleForm={'Refer a friend'}
        titleInput={'Input your information to get your referral link or submit a referee.'}
      />
      <SlideLeftRight
        Data={SlideLeftRighthostRefernal}
        img={data[ImgSlideLeftRight_HostRefernal.img]}
        mainTitle={data[ImgSlideLeftRight_HostRefernal.mainTitle]}
        idTitle={ImgSlideLeftRight_HostRefernal.mainTitle}
        idimg={ImgSlideLeftRight_HostRefernal.img}
      />
      <FormContact
        titleForm={'Track your Referrals'}
        titleInput={'Input your information to see your referral progress!'}
      />{' '}
      <ExploreHosting
        img={data[ImgExploreHR.img]}
        DataExploreHostingStyle={DataExploreHostingHostRefernal}
        DataExploreHostingText={ExplorehostRefernal}
        isEx={false}
        className='flex-col items-center flex w-full mb-[120px]'
      />
      <WrapperContent titlePadding={8} textAlign='left' title='Need more info? Check out FAQs.'>
        <div>
          <CustomeCommonQuestions items={QuestionhostRefernal} className='w-full p-4' />
        </div>
      </WrapperContent>
    </div>
  )
}

export default HostRefernal
