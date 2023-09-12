import React from 'react'

type Props = {}
import LocationOnIcon from '@mui/icons-material/LocationOn'
import AddLocationOutlinedIcon from '@mui/icons-material/AddLocationOutlined'
import { Box, Card, CardContent } from '@mui/material'
import { Link } from 'react-router-dom'
import CustomLink from 'src/components/CustomLink'
import { useAppDispatch, useAppSelector } from 'src/hooks/useRedux'
import { updateIndexCardActive } from 'src/store/car/manageCar/managCarSlice'
import ToysTwoToneIcon from '@mui/icons-material/ToysTwoTone'
import car1 from './exec.png'
import car2 from './standard.png'
interface Item {
  icon: any
  title: string
  price: string
  link: string
  time: string
}
const item: Item[] = [
  {
    link: '/book-a-car/mobile/1',
    icon: <img src={car1} alt='' />,
    title: 'Standard',
    price: '500.000đ',
    time: '24 phút'
  },
  {
    link: '/book-a-car/mobile/1',
    icon: <img src={car2} alt='' />,
    title: 'Exec',
    price: '500.000đ',
    time: '15 phút'
  },
  {
    link: '/book-a-car/mobile',
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
  return (
    <CustomLink to={item.link}>
      <div
        className={`flex items-center justify-start space-2  rounded-md p-1 ${
          index === indexCardActive ? 'bg-black/10 ' : ''
        }`}
        onClick={() => handleClick(index)}
      >
        <div className='text-[#3699d3]'>{item.icon}</div>
        <div className='flex justify-between flex-col '>
          <span className='text-black/70'>{item.title}</span>
          <span className='text-black/40'>{item.price}</span>
          <span className='text-black/40'>{item.time}</span>
        </div>
      </div>
    </CustomLink>
  )
}

const ItemListInfoCar = (props: Props) => {
  return (
    <div>
      <span className='text-black/60'>Các xe xung quanh đây</span>
      {item.map((item, index) => {
        return <ComponentListCarInfo item={item} index={index} key={index} />
      })}
    </div>
  )
}

export default ItemListInfoCar
