import React from 'react'
import { CarOutlined, KeyOutlined, ReloadOutlined } from '@ant-design/icons'
import Button from 'src/components/Button'
const BookUnlocknearCar = () => {
  const onClick = () => {
    const element = document.querySelector(`#getstarted`)
    element &&
      element.scrollIntoView({
        behavior: 'smooth',
        block: 'center'
      })
  }
  return (
    <div className='flex-col items-stretch mb-[104px] flex'>
      <div className='w-full flex-col items-stretch flex relative'>
        <div className='gap-y-[32px] items-center w-full flex-col mx-auto flex'>
          <div className='text-center tracking-[-0.03em] m-[0_auto] leading-[100%] text-mainColor self-start text-4xl font-bold max-w-[30ch]'>
            Book <CarOutlined className='text-white' /> Unlock <KeyOutlined className='text-white' /> and Drive{' '}
            <ReloadOutlined className='text-white' /> nearby cars
          </div>
          <Button
            onClick={onClick}
            children={<span className='text-xl'>Search and Book a Car</span>}
            isNext={true}
            className='w-[260px] hover:duration-500 duration-500 hover:transition-all  text-white h-[70px]  rounded-lg bg-[#3699d3] hover:bg-black  '
          ></Button>
        </div>
      </div>
    </div>
  )
}

export default BookUnlocknearCar
