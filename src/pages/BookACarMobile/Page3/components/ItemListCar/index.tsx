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
interface Item {
  icon: any
  title: string
  price: string
  link: string
  time: string
}
const item: Item[] = [
  {
    link: '/book-a-car/mobile/4',
    icon: <img src={car1} alt='' />,
    title: 'Standard',
    price: '500.000đ',
    time: '24 phút'
  },
  {
    link: '/book-a-car/mobile/4',
    icon: <img src={car2} alt='' />,
    title: 'Exec',
    price: '500.000đ',
    time: '15 phút'
  },
  {
    link: '/book-a-car/mobile/3',
    icon: <img src={car1} alt='' />,
    title: 'Van',
    price: '500.000đ',
    time: '18 phút'
  },
  {
    link: '/book-a-car/mobile',
    icon: <img src={car2} alt='' />,
    title: '83 MidStation',
    price: '500.000đ',
    time: '23 phút'
  },
  {
    link: '/book-a-car/mobile',
    icon: <img src={car1} alt='' />,
    title: '83 MidStation',
    price: '500.000đ',
    time: '23 phút'
  },
  {
    link: '/book-a-car/mobile',
    icon: <img src={car1} alt='' />,
    title: '83 MidStation',
    price: '500.000đ',
    time: '23 phút'
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
      className={`flex items-center justify-start space-2 shadow mb-2  rounded-md p-1 ${
        index === indexCardActive ? ' ' : ''
      }`}
      onClick={() => handleClick(index)}
    >
      <div className='flex flex-grow justify-between items-center'>
        <div className='flex'>
          <div className='text-[#3699d3] mx-2'>{item.icon}</div>
          <div className='flex justify-between flex-col '>
            <span className='text-black/70'>{item.title}</span>
            <span className='text-black/80 font-bold'>{item.price}</span>
            <span className='text-white font-bold bg-black/10 rounded-md px-2'>{item.time}</span>
          </div>
        </div>
        <Button
          onClick={() => {
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
        {item.map((item, index) => {
          return <ComponentListCarInfo item={item} index={index} key={index} />
        })}
        {/* <span className='text-black/40  '>Thời gian ước tính:</span>
        <span className='text-mainColor  ml-1'>24 phut</span> */}
      </div>
    </div>
  )
}

export default ItemListInfoCar
