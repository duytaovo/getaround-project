import React, { useEffect } from 'react'

type Props = {}
import LocationOnIcon from '@mui/icons-material/LocationOn'
import AddLocationOutlinedIcon from '@mui/icons-material/AddLocationOutlined'
import { Box } from '@mui/material'
import { Link } from 'react-router-dom'
import CustomLink from 'src/components/CustomLink'
import { useAppDispatch, useAppSelector } from 'src/hooks/useRedux'
import { updateIndexCardActive } from 'src/store/car/manageCar/managCarSlice'
import { getCarsHistory } from 'src/store/carMobile/managCarSlice'
interface Item {
  icon: JSX.Element
  title: string
  country: string
  link: string
}
const item: Item[] = [
  {
    link: '/book-a-car/mobile/1',
    icon: <AddLocationOutlinedIcon />,
    title: '83 MidStation',
    country: 'United States'
  },
  {
    link: '/book-a-car/mobile/1',
    icon: <AddLocationOutlinedIcon />,
    title: '83 MidStation',
    country: 'United States'
  },
  {
    link: '/book-a-car/mobile',
    icon: <AddLocationOutlinedIcon />,
    title: '83 MidStation',
    country: 'United States'
  },
  {
    link: '/book-a-car/mobile',
    icon: <AddLocationOutlinedIcon />,
    title: '83 MidStation',
    country: 'United States'
  }
]

const ComponentListCarInfo = ({ item, index }: { item: Item; index: number }) => {
  const { indexCardActive } = useAppSelector((state) => state.car)
  const dispatch = useAppDispatch()
  const handleClick = (value: number) => {
    dispatch(updateIndexCardActive(value))
  }

  useEffect(() => {}, [])
  return (
    <div
      className={`flex items-center justify-start space-x-2 border-b-[1px] rounded-md p-1 border-[1px] m-2 ${
        index === indexCardActive ? 'bg-mainColor/20 border-[1px] border-mainColor border-solid' : ''
      }`}
      onClick={() => handleClick(index)}
    >
      <div className='text-red-400'>{item.icon}</div>
      <div className='flex justify-between flex-col '>
        <span className='text-black/90'>{item.title}</span>
        <span className='text-black/40'>{item.country}</span>
      </div>
    </div>
  )
}

const ItemListInfoCar = (props: Props) => {
  const { carListHistory } = useAppSelector((state) => state.carMobile)
  const dispatch = useAppDispatch()
  useEffect(() => {
    // dispatch(getCarsHistory(''))
  }, [])
  return (
    <div>
      {carListHistory.length > 0
        ? carListHistory.map((item, index) => {
            return <ComponentListCarInfo item={item} index={index} key={index} />
          })
        : item.map((item, index) => {
            return <ComponentListCarInfo item={item} index={index} key={index} />
          })}
    </div>
  )
}

export default ItemListInfoCar
