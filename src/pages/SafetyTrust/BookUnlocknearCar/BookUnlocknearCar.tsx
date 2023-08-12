import React from 'react'
import { CarOutlined, KeyOutlined, ReloadOutlined } from '@ant-design/icons'
import Button from 'src/components/Button'
import { Link } from 'react-router-dom'

import { Text } from 'src/components/Edition/Text'
import { Image } from 'src/components/Edition/Image'
import { useDispatch, useSelector } from 'react-redux'
import { useAppSelector } from 'src/hooks/useRedux'
import { RootState } from 'src/store/store'
export const DataBookUnlockCar = {
  id: 'BookUnlockCar',
  title: ' Book - Unlock and Drive  nearby cars',
  link: '/'
}

const BookUnlocknearCar = () => {
  const onClick = () => {
    const element = document.querySelector(`#getstarted`)
    element &&
      element.scrollIntoView({
        behavior: 'smooth',
        block: 'center'
      })
  }
  const { BookUnlockCar } = useSelector((state: RootState) => state.safetrust)
  const dispatch = useDispatch()
  const data = useAppSelector((state) => state.data.data)
  return (
    <div className='flex-col items-stretch mb-[104px] flex'>
      <div className='w-full flex-col items-stretch flex relative'>
        <div className='gap-y-[32px] items-center w-full flex-col mx-auto flex'>
          <Text
            id='id-textHTitleBookUnlockST'
            tag='div'
            content={data[BookUnlockCar.title]}
            className='text-center tracking-[-0.03em] m-[0_auto] leading-[100%] text-mainColor self-start text-4xl font-bold max-w-[30ch]'
          />
          {/* <div className='text-center tracking-[-0.03em] m-[0_auto] leading-[100%] text-mainColor self-start text-4xl font-bold max-w-[30ch]'>
            {DataBookUnlockCar.title}
          </div> */}
          <Link
            onClick={onClick}
            to={data[BookUnlockCar.link]}
            className='w-[260px] hover:duration-500 duration-500 hover:transition-all text-white h-[70px] rounded-lg bg-[#3699d3] hover:bg-black flex justify-center items-center'
          >
            {/* <Text id='id-textButtonNameBookUnlockST' tag='span' content='Search and Book a Car' className='text-xl' /> */}
            <span className='text-xl'>Search and Book a Car</span>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default BookUnlocknearCar
