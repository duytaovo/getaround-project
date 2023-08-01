import React from 'react'

const Discover = () => {
  return (
    <div className='flex-col items-stretch mb-[104px] flex'>
      <div className='w-full max-w-[1272px] flex-col self-center items-stretch px-9 flex relative'>
        <h2 className='max-w-[37ch] text-center mx-auto text-[#cdcccc] uppercase m-[0_0_24px] text-[11px] font-bold leading-3'>
          DISCOVER HOW IT WORKS
        </h2>
        <div
          data-current='Tab 1'
          data-easing='ease'
          data-duration-in='300'
          data-duration-out='100'
          className='relative'
        >
          <div className='justify-center items-center flex relative'>
            <a
              href='#bookingtab'
              className='bg-[rgba(0,0,0,0)] items-center no-underline gap-x-14 tracking-[-0.3em] px-0 text-[24px] font-bold flex align-top text-left cursor-pointer text-[#222] p-[9px_30px] relative max-w-full touch-manipulation	'
            >
              <h3 className='text-[rgb(176,26,167)] mt-0 mb-0 text-2xl  text-left font-brown-pro font-sans leading-[105%]'>
                Đặt xe
              </h3>
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Discover
