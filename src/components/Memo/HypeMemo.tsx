import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const HypeMemo = () => {
  const [memo, setMemo] = useState(true)
  return (
    <div className={`${memo === true ? ' w-80 h-28 bg-white rounded-xl flex mb-2 ml-5 justify-around' : 'hidden'}`}>
      <div className='w-[20%] h-full text-white bg-mainColor flex justify-center items-center rounded-l-xl'>
        <span>Unlock</span>
        {/*  <div className='w-full h-full'>
          <span className='text-white bg-[#fd6347] font-bold fill-current text-xl w-full h-full'>HypeCare</span>
        </div> */}
      </div>
      <div className='w-[70%] pl-6 h-full'>
        <h1 className='font-semibold text-[13px] mt-3 text-black'>
          Exciting News: <br /> Getaround Acquires HyreCar!
        </h1>
        <Link to='/' className='font-semibold text-[13px] text-mainColor mt-8 underline '>
          Read the announcement
        </Link>{' '}
      </div>
      <div className='mt-3 w-[10%]'>
        <button className=' top-2 right-2 text-black' onClick={() => setMemo(false)}>
          ✕
        </button>
      </div>
    </div>
  )
}

export default HypeMemo
