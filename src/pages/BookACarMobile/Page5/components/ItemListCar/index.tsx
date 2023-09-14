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
import MonetizationOnIcon from '@mui/icons-material/MonetizationOn'
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
  return (
    <div
      className={`flex items-center justify-start space-2 shadow mb-2  rounded-md p-1 ${
        index === indexCardActive ? 'bg-mainColor/20' : ''
      }`}
      onClick={() => handleClick(index)}
    >
      <div className='flex h-[40px] flex-grow justify-between items-center'>
        <div className='flex'>
          <div className='text-[#3699d3] mx-2'>{item.icon}</div>
          <div className='flex justify-between flex-col '>
            <span className='text-black/70'>{item.title}</span>
          </div>
        </div>
      </div>
    </div>
  )
}

const ItemListPayment = () => {
  const navigate = useNavigate()

  return (
    <div className='my-4 space-y-2 mt-3'>
      <MonetizationOnIcon className='text-mainColor mr-2' />
      <span className='text-black/40  '>Lựa chọn phương thức thanh toán</span>
      <div className=''>
        {item.map((item, index) => {
          return <ComponentListPayment item={item} index={index} key={index} />
        })}
      </div>
      <Button
        isNext
        onClick={() => {
          navigate('/book-a-car/mobile/6')
        }}
        className='w-[93%] fixed bottom-2  [&>*]:flex [&>*]:flex-row hover:duration-500 mt-2 duration-500 hover:transition-all  text-white h-[56px]  rounded-lg bg-mainColor hover:bg-black font-bold text-2xl'
      >
        Thanh toán
        {/* <LogoutOutlinedIcon
          sx={{
            fontSize: '32px',
            marginLeft: '5px'
          }}
          className=' group-hover:delay-150 transition-transform group-hover:duration-700  hover:arrow group-hover:transition-all  '
        /> */}
      </Button>
    </div>
  )
}

export default ItemListPayment
