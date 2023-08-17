import React from 'react'
import { Link } from 'react-router-dom'

const Secure = () => {
  return (
    <div className='preserver-3d flex-col items-stretch mb-[104px] flex'>
      <div className='w-full flex-col mx-auto flex max-w-[1024px]'>
        <div className='w-full max-w-[500px] gap-y-[24px] flex-col items-center mx-auto flex'>
          <h2 className='text-mainColor text-center text-[28px] mb-0 leading-[110%] font-normal'>
            Secure your bonus now
          </h2>
          <div className='text-white text-[16px] font-light mx-auto text-center mt-0'>
            Hosting on Getaround opens a world of opportunity and smarter transportation. Start hosting and making extra
            money now.
          </div>
          <Link
            to=''
            className='text-center mx-auto h-auto   px-6 py-2 rounded-[20px]  text-mainColor border-[1px] border-mainColor  border-solid hover:bg-mainColor hover:text-white duration-[300ms]'
          >
            Share your first car
          </Link>

          <div className='mt-3 text-center mx-auto'>
            Already a Getaround host?{' '}
            <Link to='' className='underline text-mainColor font-normal'>
              Add a new car
            </Link>{' '}
            and boost your business with the new bonuses
          </div>
        </div>
      </div>
    </div>
  )
}

export default Secure
