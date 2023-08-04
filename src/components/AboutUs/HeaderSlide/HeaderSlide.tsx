import React from 'react'

const HeaderSlide = () => {
  return (
    <div className='flex-col items-stretch mb-[104px] flex'>
      <div className='w-full max-w-[1272px] flex-col self-center items-stretch px-9 flex relative'>
        <div
          className='h-[650px] gap-y-[40px] bg-[0_0_50%_71%] bg-[length:auto,auto_136%] bg-scroll rounded-[22px] felx-col justify-end items-center p-9 flex'
          style={{
            backgroundImage: `linear-gradient(rgba(0, 0, 0, 0) 60%, #000 88%), url("https://assets-global.website-files.com/5c16e90c8f6920b098f834e5/63dc06aaf37c3ff0d68e82b2_about-us-header-img-1.jpg")`
          }}
        >
          <h1 className='max-w-[22ch] text-center mx-auto text-mainColor tracking-[-.05em] m-0 pd-0 text-[47px] font-bold leading-[106%] '>
            <span className='text-white font-normal'>We empower people to carshare everywhere</span>
          </h1>
        </div>
      </div>
    </div>
  )
}

export default HeaderSlide
