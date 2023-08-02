import React, { useState } from 'react'

const ConsentManager = () => {
  const [memo, setMemo] = useState(true)

  return (
    <div
      className={`${memo === true ? 'fixed left-0 right-0 bottom-0 z-[20000] w-full h-[93px] bg-[#1f4160]' : 'hidden'}`}
    >
      <div className='text-white bg-scroll flex'>
        <div className='w-[97%]'>
          <p className='m-0 font-["Brown_Sans"] text-[18px] font-normal leading-[140%] text-center mt-2'>
            <span>
              We use cookies (and other similar technologies) to collect data to improve your experience on our site. By
              using our website, you՚re agreeing to the collection of data as described in our{' '}
              <a href='/' className='inline p-0 border-0 underline cursor-pointer'>
                Privacy Policy
              </a>
            </span>
          </p>
          <p className='m-0 font-["Brown_Sans"] text-[18px] font-normal leading-[140%] text-center mt-2'>
            <span>
              <a href='/' className='inline p-0 border-0 underline cursor-pointer'>
                You can change your preferences at any time.
              </a>
            </span>
          </p>
        </div>
        <div className='w-[3%] flex justify-center items-center'>
          <button className='my-auto' onClick={() => setMemo(false)}>
            ✕
          </button>
        </div>
      </div>
    </div>
  )
}

export default ConsentManager
