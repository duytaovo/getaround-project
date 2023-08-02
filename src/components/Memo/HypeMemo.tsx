import React, { useState } from 'react'

const HypeMemo = () => {
  const [memo, setMemo] = useState(true)
  return (
    <div
      className={`${
        memo === true ? 'fixed bottom-[100px] ml-[30px] z-[9999] w-80 h-28 bg-white rounded-xl flex' : 'hidden'
      }`}
    >
      <div className='w-[20%] h-full text-white bg-mainColor flex justify-center items-center rounded-l-xl'>
        <span>Unlock</span>
        {/*  <div className='w-full h-full'>
          <span className='text-white bg-[#fd6347] font-bold fill-current text-xl w-full h-full'>HypeCare</span>
        </div> */}
      </div>
      <div className='w-[65%] pl-6 h-full'>
        <h1 className='font-semibold text-[13px] mt-3'>
          Exciting News: <br /> Getaround Acquires HyreCar!
        </h1>
        <h1 className='font-semibold text-[13px] text-mainColor mt-6 underline'>Read the announcement</h1>
      </div>
      <button className='absolute top-2 right-2' onClick={() => setMemo(false)}>
        ✕
      </button>
    </div>
  )
}

export default HypeMemo
