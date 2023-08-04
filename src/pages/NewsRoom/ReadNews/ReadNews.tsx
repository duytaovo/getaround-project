import React from 'react'
import { Link } from 'react-router-dom'
import { RightOutlined } from '@ant-design/icons'

import ReadNewsItem from './ReadNewsItem/ReadNewsItem'
const ReadNews = () => {
  return (
    <div className='flex-col items-stretch mb-[104px] flex'>
      <div className='w-full flex-col self-center items-stretch flex relative'>
        <div className='w-full min-h-[400px] bg-[#fff] rounded-[22px] flex-col justify-center self-center items-center mx-auto py-[72px] flex relative'>
          <div className='gap-y-[32px] items-center w-full flex-col mx-auto flex'>
            <div className='text-mainColor text-left uppercase text-[11px] font-semibold m-[0_0_10px] leading-[13px] mb-0'>
              MEdia Coverage
            </div>
            <h2 className='text-black font-medium text-[30px] tracking-[-0.025em] mt-0 mx-0 leading-[106%] mb-[0.5em] text-left'>
              Getaround in the news
            </h2>
          </div>
          <div className='w-full'>
            <div className='gap-y-[14px] flex-col flex'>
              <ReadNewsItem />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ReadNews
