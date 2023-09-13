import React from 'react'
import AccountBalanceWalletOutlinedIcon from '@mui/icons-material/AccountBalanceWalletOutlined'
import { useAppDispatch, useAppSelector } from 'src/hooks/useRedux'
import { updateIndexCardActive } from 'src/store/car/manageCar/managCarSlice'
import CreditCardOutlinedIcon from '@mui/icons-material/CreditCardOutlined'
import Button from 'src/components/Button'
import ArrowCircleRightOutlinedIcon from '@mui/icons-material/ArrowCircleRightOutlined'
import MoneyOutlinedIcon from '@mui/icons-material/MoneyOutlined'
import LogoutOutlinedIcon from '@mui/icons-material/LogoutOutlined'
import { useNavigate } from 'react-router-dom'
interface Item {
  icon: any
  title: string
}
const item: Item[] = [
  {
    icon: <CreditCardOutlinedIcon />,
    title: 'Thanh toán bằng ngân hàng'
  },
  {
    icon: <MoneyOutlinedIcon />,
    title: 'Thanh toán bằng tiền mặt'
  }
]

const ComponentListPayment = ({ item, index }: { item: Item; index: number }) => {
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
          </div>
        </div>
        <Button
          onClick={() => {
            navigate('/book-a-car/mobile/6')
          }}
          className='w-[45px] [&>*]:flex [&>*]:flex-row hover:duration-500 mt-2 duration-500 hover:transition-all  text-white h-[26px]  rounded-lg bg-mainColor hover:bg-black font-bold '
        >
          <LogoutOutlinedIcon
            sx={{
              fontSize: '20px'
            }}
            className=' group-hover:delay-150 transition-transform group-hover:duration-700  hover:arrow group-hover:transition-all  '
          />
        </Button>
      </div>
    </div>
  )
}

const ItemListPayment = () => {
  return (
    <div className='my-4 space-y-2 mt-3'>
      <span className='text-black/40  '>Lựa chọn phương thức thanh toán</span>
      <div className=''>
        {item.map((item, index) => {
          return <ComponentListPayment item={item} index={index} key={index} />
        })}
      </div>
    </div>
  )
}

export default ItemListPayment
