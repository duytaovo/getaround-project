import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { useAppSelector } from 'src/hooks/useRedux'
import { useDispatch, useSelector } from 'react-redux'
import { RootState } from 'src/store/store'
import { Text } from 'src/components/Edition/Text'
import { Image } from 'src/components/Edition/Image'
const HypeMemo = () => {
  const [memo, setMemo] = useState(true)
  const { Notice2 } = useSelector((state: RootState) => state.notice)
  const data = useAppSelector((state) => state.data)
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
          Exciting News: <br />{' '}
          <Text id={Notice2.noticeMain} tag='span' content={data[Notice2.noticeMain]} className='' />
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
