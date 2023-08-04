import React from 'react'
import Button from 'src/components/Button'
import { Link } from 'react-router-dom'
import { DownloadOutlined } from '@ant-design/icons'
const HelpCustomer = () => {
  return (
    <div className='flex justify-center bg-[#e9eaeb] rounded-2xl mb-10'>
      <div className='w-1/2  flex items-center'>
        <div className='block h-[50%]'>
          <p className='uppercase text-black font-semibold mb-3 text-2xl mt-10'>
            We're helping consumers shift away from car ownership.
          </p>

          <Link to='/'>
            {' '}
            <p className='text-mainColor hover:text-black hover:no-underline  duration-[0.5s] font-normal mt-3 underline'>
              Learn more about Getaround
            </p>
          </Link>
          <div className='bg-white h-[100px] py-5 px-10 rounded-xl max-w-[45ch] flex items-center mt-10 cursor-pointer hover:border-solid hover:border-[1px] hover:border-mainColor duration-[0.5s]'>
            <p className='text-black'>Download the media kit for logos, media assets, and more.</p>
            <DownloadOutlined className='text-mainColor text-[25px] ' />
          </div>
        </div>
      </div>
      <div className='w-[35%] flex justify-center'>
        <img
          className='object-contain h-[500px]'
          src='https://assets-global.website-files.com/5c16e90c8f6920b098f834e5/63ec0b73b2f4fb34b18ddb8a_ga-illustration-8.svg'
          alt='ss'
        />
      </div>{' '}
    </div>
  )
}

export default HelpCustomer
