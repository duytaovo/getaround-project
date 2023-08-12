import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { useAppSelector } from 'src/hooks/useRedux'
import { useDispatch, useSelector } from 'react-redux'
import { RootState } from 'src/store/store'
import { Text } from 'src/components/Edition/Text'
import { Image } from 'src/components/Edition/Image'
const ConsentManager = () => {
  const [memo, setMemo] = useState(true)
  const { Notice1 } = useSelector((state: RootState) => state.notice)
  const data = useAppSelector((state) => state.data.data)

  return (
    <div className={`${memo === true ? ' w-full  bg-[#1f4160]' : 'hidden'}`}>
      <div className='text-white bg-scroll flex p-[7px_10px]'>
        <div className='w-[97%]'>
          <p className='m-0 text-[14px] font-normal leading-[140%] text-center mt-2'>
            <span>
              <Text id={Notice1.noticeMain} tag='span' content={data[Notice1.noticeMain]} className='' />
              <Link to='/' className='inline p-0 border-0 underline cursor-pointer'>
                Privacy Policy
              </Link>
            </span>
          </p>
          <p className='m-0  text-[14px] font-normal leading-[140%] text-center mt-2'>
            <span>
              <Link to='/' className='inline p-0 border-0 underline cursor-pointer'>
                <Text id={Notice1.noticeSub} tag='span' content={data[Notice1.noticeSub]} className='' />
              </Link>
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
