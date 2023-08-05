import React from 'react'
import { Link } from 'react-router-dom'
import { RightOutlined } from '@ant-design/icons'

import ReadNewsItem from './ReadNewsItem/ReadNewsItem'
import { DataReadNewItem } from 'src/items/NewsRoom/DataNewsRoom'
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
              <div>
                {DataReadNewItem.map((item, index) => (
                  <Link
                    to=''
                    className='gap-x-[53px] text-black bg-[#f9f8f8] rounded-[18px] justify-between p-[40px] flex touch-manipulation outline-none cursor-pointer font-normal duration-[0.2s] group'
                  >
                    <div className='group-hover:text-mainColor'>Jan 5, 2023</div>
                    <div className='my-0 ml-0 m-auto'>
                      <div className='max-w-[70ch]'>
                        <div className='text-black mb-0 text-[24px] leading-[106%]'>
                          Car Sharing: What You Need To Know - Kelley Blue Book
                        </div>
                        <Link
                          to='/'
                          className='text-[20px] underline text-black hover:text-mainColor hover:no-underline duration-[0.3s] mt-2'
                        >
                          <strong>Read more</strong>
                        </Link>
                      </div>
                    </div>
                    <div className='text-[24px] group-hover:text-mainColor'>
                      <RightOutlined />
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ReadNews
