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
import car1 from './anh1.avif'
import car2 from './standard.png'
import Button from 'src/components/Button'
import numberWithCommas from 'src/utils/numberWithCommas'
import AccessAlarmsIcon from '@mui/icons-material/AccessAlarms'
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
    <div
      className={`flex  justify-start space-2 shadow mb-2  rounded-md mt-10 bg-mainColor/20 border-[1px] border-mainColor border-solid `}
    >
      <div className='flex flex-row items-center justify-between space-x-10'>
        <div className='flex justify-between items-center '>
          <div className='text-[#3699d3] mx-2'>
            <img src={car1} alt='' className='w-[120px] h-[120px] object-contain' />
            {/* {item.icon} */}
          </div>
          <div className='flex  flex-col '>
            <span className='text-black font-bold'>{itemCar?.seri}</span>
            <span className='text-yellow-500 font-bold'>{itemCar?.type}</span>
            <span className='text-mainColor font-bold text-lg'>{numberWithCommas(itemCar?.suggested_price)}đ</span>
            {/* <div className='flex flex-row justify-between items-center space-x-1'>
              <span className='text-white font-bold text-xs bg-black/20 rounded-md px-2'>{itemCar?.min} phút</span>
            </div> */}
          </div>
        </div>
        <Button
          onClick={() => {
            localStorage.setItem('itemCar', JSON.stringify(item))
            navigate('/book-a-car/mobile/5')
          }}
          className='w-[80px] mr-2 [&>*]:flex [&>*]:flex-row hover:duration-500 mt-2 duration-500 hover:transition-all  text-white h-[40px]  rounded-lg bg-[#3699d3] hover:bg-black font-bold '
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
        <div className='flex flex-row justify-start items-center space-x-1'>
          <AccessAlarmsIcon sx={{}} fontSize='small' className='text-mainColor' />
          <span className='text-black/40  '>Thời gian ước tính:</span>
          <span className='text-red-400  ml-1'>24 phút</span>
        </div>
      </div>
    </div>
  )
}

export default ItemListInfoCar
