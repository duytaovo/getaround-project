import React from 'react'
import Button from 'src/components/Button'
import { Text } from 'src/components/Edition/Text'

import { IItemBanner } from 'src/types/hosting_comunity.type '
import { useAppSelector } from 'src/hooks/useRedux'
import { useDispatch, useSelector } from 'react-redux'
import { RootState } from 'src/store/store'
const HostDeals = () => {
  const data = useAppSelector((state) => state.data.data)
  const { HostDeal } = useSelector((state: RootState) => state.hostBonus)
  return (
    <div className='flex-col items-stretch mb-[104px] flex'>
      <div className='w-full max-w-[1272px] flex-col items-stretch flex relative'>
        <div
          className='bg-[#0d0d0d] bg-no-repeat rounded-[22px] py-[74px]'
          style={{
            backgroundSize: '122%',
            backgroundImage:
              'url(https://assets.website-files.com/581d2676fe18a07e43923cfc/6423061997f94ae7a88b3a84_about-us-header-img-1.jpg)',
            backgroundPosition: '166% 32%'
          }}
        >
          <div className='w-full max-w-[1080px] flex-col mx-auto flex'>
            <div className='max-w-[30ch] gap-y-[26px] flex-col items-start ml-auto flex'>
              <Text
                id={HostDeal.title}
                tag='h2'
                content={data[HostDeal.title]}
                className='pb-0 mb-0 font-bold text-[25px]'
              ></Text>
              {/* <h2 className='pb-0 mb-0 font-bold text-[25px]'>Host Deals & Discounts</h2> */}
              <Text
                id={HostDeal.content}
                tag='h3'
                content={data[HostDeal.content]}
                className='pb-0 mb-0 font-normal text-[15px]'
              ></Text>
              {/* <h3 className='pb-0 mb-0 font-normal text-[15px]'>
                As a Getaround host, you get access to exclusive deals and discounts with our entire network of
                partners.
              </h3> */}
              <Button
                children={
                  <Text
                    id={`txt_banner_community_infoButton`}
                    tag='span'
                    content={'Explore Offers' || ''}
                    className={`text-xl`}
                  />
                }
                isNext={true}
                className='w-[200px] [&>*]:flex hover:duration-500 duration-500 hover:transition-all  text-black h-[70px]  rounded-lg bg-white hover:bg-mainColor  hover:text-white'
              ></Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default HostDeals
