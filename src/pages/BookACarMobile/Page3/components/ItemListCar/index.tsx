import React, { useEffect } from 'react'

type Props = {}
import { Link, useNavigate, useSearchParams } from 'react-router-dom'
import { useAppDispatch, useAppSelector } from 'src/hooks/useRedux'
import { updateIndexCardActive } from 'src/store/car/manageCar/managCarSlice'
import car1 from './exec.png'
import car2 from './standard.png'
import car3 from './anh1.avif'
import car4 from './anh2.jpeg'
import car5 from './anh3.jpeg'
import Button from 'src/components/Button'
import { getCars } from 'src/store/carMobile/managCarSlice'
import numberWithCommas from 'src/utils/numberWithCommas'
import AccessAlarmsIcon from '@mui/icons-material/AccessAlarms'

import { Global } from '@emotion/react'
import { styled } from '@mui/material/styles'
import CssBaseline from '@mui/material/CssBaseline'
import { grey } from '@mui/material/colors'
import Box from '@mui/material/Box'
import Skeleton from '@mui/material/Skeleton'
import Typography from '@mui/material/Typography'
import SwipeableDrawer from '@mui/material/SwipeableDrawer'
interface Item {
  icon: any
  seri: string
  suggested_price: string
  type: string
  link: string
  min: string
}
const item: Item[] = [
  {
    link: '/book-a-car/mobile/4',
    icon: <img src={car3} alt='' className='w-[120px] h-[80px] object-contain' />,
    seri: 'Standard',
    suggested_price: '500.000',
    min: '24 ',
    type: 'Xe 5 chỗ'
  },
  {
    link: '/book-a-car/mobile/4',
    icon: <img src={car4} alt='' className='w-[120px] h-[80px] object-contain' />,
    seri: 'Exec',
    suggested_price: '500.000',
    min: '15 ',
    type: 'Xe 5 chỗ'
  },
  {
    link: '/book-a-car/mobile/3',
    icon: <img src={car1} alt='' className='w-[120px] h-[80px] object-contain' />,
    seri: 'Van',
    suggested_price: '500.000',
    min: '18 ',
    type: 'Xe 5 chỗ'
  },
  {
    link: '/book-a-car/mobile',
    icon: <img src={car5} alt='' className='w-[120px] h-[80px] object-contain' />,
    seri: '83 MidStation',
    suggested_price: '500.000',
    min: '23 ',
    type: 'Xe 5 chỗ'
  }
]

const ComponentListCarInfo = ({ item, index }: { item: Item; index: number }) => {
  const { indexCardActive } = useAppSelector((state) => state.car)
  const dispatch = useAppDispatch()
  const handleClick = (value: number) => {
    dispatch(updateIndexCardActive(value))
  }
  const navigate = useNavigate()
  return (
    <div
      className={`flex items-center justify-start space-2 mt-4 shadow mb-2  rounded-md p-1 border-[1px] ${
        index === indexCardActive ? 'bg-mainColor/20 border-[1px] border-mainColor border-solid' : ''
      }`}
      onClick={() => handleClick(index)}
    >
      <div className='flex flex-grow justify-between items-center'>
        <div className='flex'>
          <div className='text-[#3699d3] mx-2'>
            {/* <img src={car1} alt='' /> */}
            {item.icon}
          </div>
          <div className='flex justify-between flex-col '>
            <span className='text-black font-bold'>{item?.seri}</span>
            <span className='text-yellow-500 font-bold'>{item?.type}</span>
            <span className='text-mainColor font-bold text-lg'>{numberWithCommas(item?.suggested_price)}đ</span>
            <div className='flex flex-row justify-between items-center space-x-1'>
              <AccessAlarmsIcon sx={{}} fontSize='small' />
              <span className='text-white font-bold text-xs bg-black/20 rounded-md px-2'>{item?.min} phút</span>
            </div>
          </div>
        </div>
        <Button
          onClick={() => {
            localStorage.setItem('itemCar', JSON.stringify(item))
            navigate('/book-a-car/mobile/4')
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
  const { cars } = useAppSelector((state) => state.carMobile)
  const dispatch = useAppDispatch()
  useEffect(() => {
    // dispatch(
    //   getCars({
    //     lat: '22.001612',
    //     lng: '106.710186'
    //   })
    // )
  }, [])
  return (
    <div className='my-4 space-y-2 mt-3'>
      <div className=''>
        {cars?.length > 0
          ? cars.map((item, index) => {
              return <ComponentListCarInfo item={item} index={index} key={index} />
            })
          : item.map((item, index) => {
              return <ComponentListCarInfo item={item} index={index} key={index} />
            })}
      </div>
    </div>
  )
}

export default ItemListInfoCar
