import React from 'react'

const SlideHIWC = () => {
  return (
    <div className='bg-mainColor w-full mx-auto '>
      <div
        className='max-w-[100%] mx-auto p-[30px_3%] grid '
        style={{
          gridTemplateRows: 'auto',
          gridRowGap: '16px',
          gridColumnGap: '16px',
          gridAutoColumns: '1fr',
          gridTemplateColumns: '1fr 1fr'
        }}
      >
        <div className='text-right'>
          <button className='h-14 w-40 bg-white text-mainColor rounded-md'>Share A Car</button>
        </div>
        <div className=''>
          <button className='h-14 w-40 bg-white text-mainColor rounded-md'>Book A Car</button>
        </div>
      </div>
    </div>
  )
}

export default SlideHIWC
