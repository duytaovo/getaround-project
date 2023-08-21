import React from 'react'
import WrapperContent from 'src/components/WrapperContent/WrapperContent'
import HeaderHostBonus from './HeaderHostBonus/HeaderHostBonus'
import CustomeCard from 'src/components/CustomeCard/CustomeCard'
import { useAppSelector } from 'src/hooks/useRedux'
import { useDispatch, useSelector } from 'react-redux'
import { RootState } from 'src/store/store'
import { MobileOutlined, CarOutlined, RiseOutlined, DollarOutlined, WalletOutlined } from '@ant-design/icons'
import { Text } from 'src/components/Edition/Text'
import { Image } from 'src/components/Edition/Image'
import FormZip from './FormZip/FormZip'
import Secure from './Secure/Secure'
import SlideLeftRight from 'src/components/SlideLeftRight/SlideLeftRight'
import ElectricVehicle from './ElectricVehicle/ElectricVehicle'
import CustomeCommonQuestions from 'src/components/CustomeCommonQuestions/CustomeCommonQuestions'
import EarnUp from './EarnUp/EarnUp'
import HostDeals from './HostDeals/HostDeals'
import { Helmet } from 'react-helmet-async'
const HostBonus = () => {
  const { CustomeCardR, titleCustomeCardR, QuestionhostBonus } = useSelector((state: RootState) => state.hostBonus)
  const data = useAppSelector((state) => state.data.data)
  return (
    <div className='w-full h-auto '>
      <Helmet>
        <title>Benefit </title>
        <meta name='description' content='Trang chủ tìm kiếm và đặt xe' />
      </Helmet>
      <WrapperContent textAlign='center' title='' classname='flex flex-col'>
        <HeaderHostBonus />
      </WrapperContent>
      <CustomeCard mainTitle={titleCustomeCardR.mainTitle} DataCustomeCard={CustomeCardR} />
      <EarnUp />
      <FormZip
        titleForm={'Search your ZIP code'}
        titleInput={'Use the tool below to find out which zone your ZIP code belongs to.'}
      />
      <Secure />
      {/* <SlideLeftRight
        Data={SlideLeftRighthostRefernal}
        img={data[ImgSlideLeftRight_HostRefernal.img]}
        mainTitle={data[ImgSlideLeftRight_HostRefernal.mainTitle]}
        idTitle={ImgSlideLeftRight_HostRefernal.mainTitle}
        idimg={ImgSlideLeftRight_HostRefernal.img}
      />*/}
      {/* <ElectricVehicle /> */}
      <HostDeals />
      <WrapperContent titlePadding={8} textAlign='left' title='Need more info? Check out FAQs.'>
        <CustomeCommonQuestions items={QuestionhostBonus} className='w-full p-4' />
      </WrapperContent>
    </div>
  )
}

export default HostBonus
