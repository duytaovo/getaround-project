import React from 'react'
import { Link } from 'react-router-dom'
import { RightOutlined } from '@ant-design/icons'
const ReadNewsItem = () => {
  return (
    <div>
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
    </div>
  )
}

export default ReadNewsItem
