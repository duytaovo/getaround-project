import React from 'react'
import Button from 'src/components/Button'
import { Link } from 'react-router-dom'
import { DownloadOutlined } from '@ant-design/icons'
import { Text } from 'src/components/Edition/Text'
import { Image } from 'src/components/Edition/Image'

export const DataHelpCUstomerNewsroom = {
  id: 'helpCustomer_AboutUs_NewsRoom',
  title: ` We're helping consumers shift away from car ownership.`,
  linkTo: `/`,
  nameButton: 'Down the media kit for logos, media assets, and more.',
  img: 'https://assets-global.website-files.com/5c16e90c8f6920b098f834e5/63ec0b73b2f4fb34b18ddb8a_ga-illustration-8.svg'
}
const HelpCustomer = () => {
  return (
    <div className='flex justify-center bg-[#e9eaeb] rounded-2xl mb-10 sm:flex-col-reverse'>
      <div className='w-1/2  flex items-center sm:w-[80%] sm:text-center sm:mx-auto'>
        <div className='block h-[50%]'>
          <Text
            id='titleHelpCustomerNewsRoom'
            tag='p'
            content={DataHelpCUstomerNewsroom.title}
            className='uppercase text-black font-semibold mb-3 text-2xl mt-10 sm:text-[18px] sm:font-normal'
          />
          {/* <p className='uppercase text-black font-semibold mb-3 text-2xl mt-10'>
            We're helping consumers shift away from car ownership.
          </p> */}

          <Link to='/'>
            {' '}
            <p className='text-mainColor hover:text-black hover:no-underline  duration-[0.5s] font-normal mt-3 underline'>
              Learn more
            </p>
          </Link>
          <div className='bg-white h-[100px] py-5 px-10 rounded-xl max-w-[45ch] flex items-center mt-10 cursor-pointer hover:border-solid hover:border-[1px] hover:border-mainColor duration-[0.5s]'>
            <Text
              id='nameButtonHelpCustomerNewsRoom'
              tag='p'
              content={DataHelpCUstomerNewsroom.nameButton}
              className=' text-black'
            />
            {/* <p className='text-black'>Download the media kit for logos, media assets, and more.</p> */}
            <DownloadOutlined className='text-mainColor text-[25px] ' />
          </div>
        </div>
      </div>
      <div className='w-[35%] flex justify-center sm:w-[80%]'>
        <Image
          id='imgHelpCustomerNewsRoom'
          className='object-contain h-[500px]'
          src={DataHelpCUstomerNewsroom.img}
          alt='Getaround Connect®'
        />
        {/* <img
          className='object-contain h-[500px]'
          src='https://assets-global.website-files.com/5c16e90c8f6920b098f834e5/63ec0b73b2f4fb34b18ddb8a_ga-illustration-8.svg'
          alt='ss'
        /> */}
      </div>{' '}
    </div>
  )
}

export default HelpCustomer
