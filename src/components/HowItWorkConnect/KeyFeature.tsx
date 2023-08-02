import React from 'react'

const KeyFeature = () => {
  return (
    <div className='flex-col items-center mt-[5%] p-[5%] flex'>
      <div className='max-w-[1140px] mx-auto block'>
        <div className='max-w-[1140px] flex-col justify-center items-center mb-[40px] mx-auto flex '>
          <p className='max-w-none text-mainColor text-left uppercase mt-[20px] text-[14px] font-bold leading-[25px] mb-[1em]'>
            key features
          </p>
          <h2 className='text-center mt-0 mb-[0.5em] text-[rgba(0,0,0,0.85)] font-medium max-w-fullm-[20px_auto_10px] text-[42px] leading-[105%]'>
            The ultimate in carsharing connectivity
          </h2>
          <p className='w-auto text-[#333] text-[22px] font-light leading-[145%] block max-w-full text-left mt-0 mb-[10px] pl-0 not-italic	'>
            For iOS and Android devices.
          </p>
        </div>
      </div>
    </div>
  )
}

export default KeyFeature
