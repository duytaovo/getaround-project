import React from 'react'
import KeyFeatureItem from './KeyFeatureItem'
import { Text } from 'src/components/Edition/Text'
import { iDGenerator } from 'src/utils/idGenerator'
import { DataKeyFeatureItem } from 'src/items/KeyFeatureItem/DataKeyFeatureItem'
import { useDispatch, useSelector } from 'react-redux'
import { RootState } from 'src/store/store'
import { useAppSelector } from 'src/hooks/useRedux'
export const DataHeaderKeyFeatures = {
  id: 'HeaderKeyFeatures_HowItWork_Connect',
  title: 'key features',
  mainTitle: 'The ultimate in carsharing connectivity',
  subTitle: 'For iOS and Android devices.'
}
const KeyFeature = () => {
  const { HeaderKeyFeatures } = useSelector((state: RootState) => state.connecthiw)
  const dispatch = useDispatch()
  const data = useAppSelector((state) => state.data.data)
  return (
    <div className='flex-col items-center mt-[5%] p-[5%] flex'>
      <div className='max-w-[1140px] mx-auto block'>
        <div className='max-w-[1140px] flex-col justify-center items-center mb-[40px] mx-auto flex '>
          <Text
            id='titleConnect'
            tag='p'
            content={data[HeaderKeyFeatures.mainTitle]}
            className='max-w-none text-mainColor text-left uppercase mt-[20px] text-[14px] font-bold leading-[25px] mb-[1em] sm:text-[10px]'
          />
          {/* <p className='max-w-none text-mainColor text-left uppercase mt-[20px] text-[14px] font-bold leading-[25px] mb-[1em] sm:text-[10px]'>
            key features
          </p> */}
          <Text
            id='maintitleConnect'
            tag='h2'
            content={data[HeaderKeyFeatures.title]}
            className='text-center mt-0 mb-[0.5em] text-white font-medium max-w-fullm-[20px_auto_10px] text-[42px] leading-[105%] sm:text-[30px]'
          />
          {/* <h2 className='text-center mt-0 mb-[0.5em] text-white font-medium max-w-fullm-[20px_auto_10px] text-[42px] leading-[105%] sm:text-[30px]'>
            The ultimate in carsharing connectivity
          </h2> */}
          <Text
            id='subtitleConnect'
            tag='p'
            content={data[HeaderKeyFeatures.subTitle]}
            className='w-auto text-white text-[22px] font-light leading-[145%] block max-w-full text-left mt-0 mb-[10px] pl-0 not-italic	sm:text-[15px]'
          />
          {/* <p className='w-auto text-white text-[22px] font-light leading-[145%] block max-w-full text-left mt-0 mb-[10px] pl-0 not-italic	sm:text-[15px]'>
            For iOS and Android devices.
          </p> */}
        </div>
      </div>
      <KeyFeatureItem DataKeyFeatureItem={DataKeyFeatureItem} />
    </div>
  )
}

export default KeyFeature
