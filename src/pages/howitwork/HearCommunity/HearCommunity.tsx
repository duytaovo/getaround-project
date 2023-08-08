import React from 'react'
import { Link } from 'react-router-dom'
export const DataCommunity = {
  title: 'Hear from the community',
  content: 'Stories from Getaround community members, in their own words.',
  link: '/'
}
const HearCommunity = () => {
  return (
    <div className='flex-col items-stretch mb-[104px] flex '>
      <div className='w-full  flex-col self-center items-stretch  flex relative'>
        <div className='gap-x-[56px] flex-row w-full max-w-[1080px] mx-auto  flex'>
          <div className='max-w-[1080px] py-[47px] w-full bg-[#fff] rounded-[22px] flex-col justify-center self-center items-center mx-auto flex relative'>
            <div className='max-w-[37ch] text-center mx-auto text-mainColor uppercase m-[0_0_24px] text-[11px] font-bold leading-[13px]'>
              {DataCommunity.title}
            </div>
            <h2 className='max-w-[40ch] text-center mx-auto mt-[6px] text-[20px] font-bold leading-[110%] text-black'>
              {DataCommunity.content}
            </h2>
            <div className='text-[#727272] mt-[30px] text-[16px] font-normal '>
              <Link to={DataCommunity.link} className='text-[#000] underline hover:text-mainColor hover:no-underline'>
                Read now
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default HearCommunity
