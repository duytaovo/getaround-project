import React from 'react'

const HeaderHIWC = () => {
  return (
    <div className='max-w-full mt-[0%] mx-auto mb-10'>
      <div
        style={{
          gridColumnGap: '16px',
          gridRowGap: '16px',
          gridTemplateColumns: '1fr 1fr',
          gridTemplateRows: 'auto',
          gridAutoColumns: '1fr',
          alignContent: 'end',
          alignItems: 'end',
          justifyItems: 'end',
          marginLeft: 'auto',
          marginRight: 'auto',
          padding: '0%',
          display: 'grid'
        }}
      >
        <div className='self-auto w-auto max-w-[1279px] text-left'>
          <img
            src='https://assets-global.website-files.com/5c16e90c8f6920b098f834e5/600754c5a561bdd9d1f4a065_badge-getaround%C2%AE%401X.png'
            loading='lazy'
            width='103'
            alt='Getaround® badge'
            className='w-[100px] block align-middle border-none max-w-[100%] border-[0]'
          />
          <p className='w-auto max-w-[1279px] text-left text-mainColor uppercase mt-[20px] text-[14px] font-bold leading-[25px] mb-[1em]'>
            A SAFER, MORE CONVENIENT WAY TO CARSHARE
          </p>
          <h1 className='w-auto max-w-[1279px] text-left mt-0 mb-[0.5em] text-white font-medium pb-[20px] text-[50px] leading-[105%] m-[0.67em_0]'>
            Getaround Connect
          </h1>
          <p className='w-auto text-white text-[22px] font-light leading-[145%] block max-w-[1279px] text-left mt-0 mb-[10px] pl-0 not-italic'>
            No other carsharing service offers contactless sharing using Getaround Connect®. With your Android or iOS
            phone and the Getaround app, you can find, book, and unlock a car, truck, or van near you. Getaround is the
            leading global and digital carsharing marketplace. Try it today.
          </p>
        </div>
        <div className='self-end justify-end'>
          <img
            src='https://assets-global.website-files.com/5c16e90c8f6920b098f834e5/6064908339a45b8d2297f2c9_feature-contactless-booking.svg'
            loading='lazy'
            width='638'
            alt='Getaround Connect®'
            className='mb-0 align-middle not-italic max-w-[100%] inline-block border-0 '
          />
        </div>
      </div>
    </div>
  )
}

export default HeaderHIWC
