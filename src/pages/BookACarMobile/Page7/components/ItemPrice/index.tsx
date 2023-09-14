import { TextField } from '@mui/material'
import React from 'react'
import { useNavigate } from 'react-router-dom'
import Button from 'src/components/Button'

type Props = {}

const ItemPrice = (props: Props) => {
  const navigate = useNavigate()
  return (
    <div className='flex justify-between flex-col  '>
      <div className='flex justify-center items-center text-center  mt-10 flex-col rounded-lg'>
        <TextField
          fullWidth
          required
          id='outlined-required'
          label='Nhập giá bạn mong muốn'
          defaultValue='20.000đ'
          className='text-red-500'
          sx={{
            fontSize: '20px'
          }}
        />
      </div>
      <div className=' w-full mb-2 '>
        <Button
          onClick={() => {
            navigate('/book-a-car/mobile/8')
          }}
          children={<span>Tìm xe</span>}
          isNext={true}
          className='w-full text-2xl font-bold [&>*]:flex [&>*]:flex-row hover:duration-500 mt-4 duration-500 hover:transition-all  text-white h-[50px]  rounded-lg bg-[#3699d3] hover:bg-black  '
        ></Button>
      </div>
      {/* <span className='flex justify-center  items-center text-center mt-3 text-black/40'>Hoặc thay đổi giá</span>
      <div className='fixed bottom-0 w-[92%] mb-2'>
        <Button
          // onClick={onClick}
          children={<span>Thay đổi giá</span>}
          isNext={true}
          className='w-full font-bold [&>*]:flex [&>*]:flex-row hover:duration-500 mt-2 duration-500 hover:transition-all  text-white h-[50px]  rounded-lg bg-[#3699d3] hover:bg-black  '
        ></Button>
      </div> */}
    </div>
  )
}

export default ItemPrice
