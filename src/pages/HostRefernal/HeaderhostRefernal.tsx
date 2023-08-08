import React from 'react'
export const DataHeaderHostrefernal = {
  headerTitle: 'Make even more',
  title: 'when you refer your friends',
  content:
    "You already know how powerful hosting can be. Time to share the love. Don't delay—this is a limited-time offer.",
  img: 'https://assets.website-files.com/581d2676fe18a07e43923cfc/63ec0f79defe6c3903d84ee4_ga-illustration-2.svg'
}
const HeaderhostRefernal = () => {
  return (
    <div className='flex justify-center px-[36px] sm:flex-col'>
      <div className='w-1/2  flex justify-center items-center sm:w-[100%]'>
        <div className='block'>
          <h2 className='text-3xl text-black font-bold'>
            <span className='text-mainColor'> Make even more</span> when you refer your friends
          </h2>

          <p className='text-[#1e1e1e] font-normal mt-3'>
            You already know how powerful hosting can be. Time to share the love. Don't delay—this is a limited-time
            offer.
          </p>
        </div>
      </div>
      <div className='w-1/2 flex justify-center sm:w-[100%]'>
        <img
          className='object-contain h-[500px]'
          src='https://assets.website-files.com/581d2676fe18a07e43923cfc/63ec0f79defe6c3903d84ee4_ga-illustration-2.svg'
          alt='ss'
        />
      </div>{' '}
    </div>
  )
}

export default HeaderhostRefernal
