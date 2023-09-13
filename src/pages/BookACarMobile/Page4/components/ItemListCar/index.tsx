import React from 'react'

type Props = {}
import LocationOnIcon from '@mui/icons-material/LocationOn'
import AddLocationOutlinedIcon from '@mui/icons-material/AddLocationOutlined'
import { Box, Card, CardContent } from '@mui/material'
import { Link, useNavigate } from 'react-router-dom'
import CustomLink from 'src/components/CustomLink'
import { useAppDispatch, useAppSelector } from 'src/hooks/useRedux'
import { updateIndexCardActive } from 'src/store/car/manageCar/managCarSlice'
import ToysTwoToneIcon from '@mui/icons-material/ToysTwoTone'
import car1 from './exec.png'
import car2 from './standard.png'
import Button from 'src/components/Button'
import numberWithCommas from 'src/utils/numberWithCommas'
interface Item {
  icon: any
  seri: string
  suggested_price: string
  link: string
  min: string
}
const item: Item[] = [
  {
    link: '/book-a-car/mobile/4',
    icon: <img src={car1} alt='' />,
    seri: 'Standard',
    suggested_price: '500.000',
    min: '24'
  }
]

const ComponentListCarInfo = () => {
  const { indexCardActive } = useAppSelector((state) => state.car)
  const dispatch = useAppDispatch()
  const handleClick = (value: number) => {
    dispatch(updateIndexCardActive(value))
  }
  const navigate = useNavigate()

  const itemCar = JSON.parse(localStorage.getItem('itemCar') || '')
  return (
    <div className={`flex items-center justify-start space-2 shadow mb-2  rounded-md p-1 `}>
      <div className='flex flex-grow justify-between items-center'>
        <div className='flex'>
          <div className='text-[#3699d3] mx-2'>
            <img src={car1} alt='' />
          </div>
          <div className='flex justify-between flex-col '>
            <span className='text-black/80'>{itemCar?.seri}</span>
            <span className='text-black/80 font-bold text-lg'>{numberWithCommas(itemCar?.suggested_price)}đ</span>
            <span className='text-white font-bold bg-black/10 rounded-md px-2'>{itemCar?.min} phút</span>
          </div>
        </div>
        <Button
          onClick={() => {
            localStorage.setItem('itemCar', JSON.stringify(item))
            navigate('/book-a-car/mobile/4')
          }}
          className='w-[80px] [&>*]:flex [&>*]:flex-row hover:duration-500 mt-2 duration-500 hover:transition-all  text-white h-[40px]  rounded-lg bg-[#3699d3] hover:bg-black font-bold '
        >
          Chọn xe
        </Button>
      </div>
    </div>
  )
}

const ItemListInfoCar = (props: Props) => {
  return (
    <div className='my-4 space-y-2 mt-3'>
      <div className=''>
        <ComponentListCarInfo />
        <span className='text-black/40  '>Thời gian ước tính:</span>
        <span className='text-mainColor  ml-1'>24 phút</span>
      </div>
    </div>
  )
}

export default ItemListInfoCar
