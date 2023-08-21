import React from 'react'
import HeaderHIWC from 'src/components/HowItWorkConnect/HeaderHIWC'
import SlideHIWC from 'src/components/HowItWorkConnect/SlideHIWC'
import KeyFeature from 'src/components/HowItWorkConnect/KeyFeature'
import { DataSliceHIWC } from 'src/items/SlideHIWC/DataSlideHIWC'
import { useDispatch, useSelector } from 'react-redux'
import { RootState } from 'src/store/store'
import { useAppSelector } from 'src/hooks/useRedux'
import { Helmet } from 'react-helmet-async'
const HowItWorkConnect = () => {
  const { SlideHIWCR } = useSelector((state: RootState) => state.connecthiw)
  const dispatch = useDispatch()
  const data = useAppSelector((state) => state.data.data)
  return (
    <div className='bg-mainBackGroundColor'>
      <Helmet>
        <title>Connect</title>
        <meta name='description' content='Trang công nghệ ' />
      </Helmet>

      <HeaderHIWC />
      <SlideHIWC DataSliceHIWC={SlideHIWCR} />
      <KeyFeature />
    </div>
  )
}

export default HowItWorkConnect
