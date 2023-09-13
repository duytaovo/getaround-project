import React from 'react'
import { useNavigate } from 'react-router-dom'
import Button from 'src/components/Button'

type Props = {}

const ItemPrice = (props: Props) => {
  const navigate = useNavigate()
  return (
    <div className='flex  flex-col  '>
      <div className='flex justify-center items-center text-center border-[1px] mt-10 flex-col rounded-lg'>
        <span className='flex justify-center items-center text-center'>Giá đề xuất</span>
        <span className='flex justify-center items-center text-center text-3xl font-bold'>20.000đ</span>
      </div>
      <div className=' w-full mb-2 '>
        <Button
          onClick={() => {
            navigate('/book-a-car/mobile/8')
          }}
          children={<span>Chấp nhận</span>}
          isNext={true}
          className='w-full text-xl font-bold [&>*]:flex [&>*]:flex-row hover:duration-500 mt-4 duration-500 hover:transition-all  text-white h-[50px]  rounded-lg bg-[#3699d3] hover:bg-black  '
        ></Button>
      </div>
      <span className='flex justify-center  items-center text-center mt-3 text-black/40'>Hoặc thay đổi giá</span>
      <div className='w-full mb-2'>
        <Button
          onClick={() => {
            navigate('/book-a-car/mobile/7')
          }}
          children={<span>Thay đổi giá</span>}
          isNext={true}
          className='w-full text-xl font-bold [&>*]:flex [&>*]:flex-row hover:duration-500 mt-2 duration-500 hover:transition-all  text-white h-[50px]  rounded-lg bg-[#3699d3] hover:bg-black  '
        ></Button>
      </div>
    </div>
  )
}

export default ItemPrice
