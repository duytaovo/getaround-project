import React, { FC } from 'react'
import { Link } from 'react-router-dom'
import { Text } from 'src/components/Edition/Text'
import { iDGenerator } from 'src/utils/idGenerator'
import { Image } from 'src/components/Edition/Image'
interface ISelectBodyKeyFeatures {
  title?: string
  description?: string
  linkSecurity?: string
  linkTo?: string
}

type Props = {
  DataKeyFeatureItem?: ISelectBodyKeyFeatures[]
}

const KeyFeatureItem: FC<Props> = ({ DataKeyFeatureItem }) => {
  return (
    <div className='md:mt-0 mt-10 mb-[25px]'>
      {' '}
      {DataKeyFeatureItem?.map((item, index) => (
        <div className='w-1/2 float-left sm:block min-h-[1px] px-[10px] relative h-auto'>
          <div className='h-[330px] flex-col justify-center items-center mx-auto p-[15px] flex'>
            <div className='shadow-none bg-[rgba(0,0,0,0)] w-[55px] h-[55px] rounded-[100px] justify-center items-center mb-[15px] p-[15px] flex'>
              <img
                src='https://assets-global.website-files.com/5c16e90c8f6920b098f834e5/6048b2f9d00d693cb20869aa_icon-teal-checkmark.svg'
                alt=''
                className='w-[150px] h-[150px] max-w-none align-middle border-none inline-block border-0'
              />
            </div>
            <Text
              id='titleKeyItemsConnect'
              tag='h3'
              content={DataKeyFeatureItem?.[index]?.title || ''}
              className='text-center mt-0 mb-[0.5em] text-white font-medium text-[36px] leading-[105%] sm:text-[20px] lg:text-[25px]'
            />
            {/* <h3 className='text-center mt-0 mb-[0.5em] text-white font-medium text-[36px] leading-[105%] sm:text-[20px] lg:text-[25px]'>
              {DataKeyFeatureItem?.[index]?.title}
            </h3> */}
            <Text
              id='descriptionKeyItemsConnect'
              tag='p'
              content={DataKeyFeatureItem?.[index]?.description || ''}
              className='w-auto text-center max-w-[1279px] mt-0 mb-[10px] pl-0 text-[17px] font-light leading-[155%] block not-italic text-white sm:text-[10px]'
            />
            {/* <p className='w-auto text-center max-w-[1279px] mt-0 mb-[10px] pl-0 text-[17px] font-light leading-[155%] block not-italic text-white sm:text-[10px]'>
              {DataKeyFeatureItem?.[index]?.description}

              <Link to='/' className='text-center text-mainColor'>
                {DataKeyFeatureItem?.[index]?.linkSecurity}
              </Link>
            </p> */}
          </div>
        </div>
      ))}{' '}
    </div>
  )
}

export default KeyFeatureItem
