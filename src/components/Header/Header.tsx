import logo from 'src/assets/logo.png'
import CustomDropDown from '../Dropdown/Dropdown'
import { itemAcount, itemsFirst, itemsFour, itemsSecond, itemsThird } from 'src/items/HeaderItem/HeaderItem'
import Button from '../Button'
import { Avatar } from '@mui/material'
import AccountCircleIcon from '@mui/icons-material/AccountCircle'
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown'
type Props = {}

const Header = (props: Props) => {
  return (
    <div className='bg-slate-400 flex items-center justify-between h-[100px] w-[100vw] px-10'>
      <div className='flex  '>
        <div>
          {/* <img src={logo} alt='logo' className='fill-current bg-none h-[26px] w-[120px]'/> */}
          <span className='text-mainColor font-bold fill-current text-2xl w-[120px] h-[26px]'>Unlock</span>
        </div>
        <div className='ml-6  flex items-center cursor-pointer justify-between text-black font-bold font-sans text-sm'>
          <CustomDropDown
            arrow={false}
            isOnClick={false}
            children={<span>Cách thức hoạt động</span>}
            items={itemsFirst}
            className='p-2 hover:text-mainColor '
          />
          <CustomDropDown
            arrow={false}
            isOnClick={false}
            children={<span>Lưu trữ</span>}
            items={itemsSecond}
            className='p-2 mx-2 hover:text-mainColor'
          />
          <CustomDropDown
            arrow={false}
            isOnClick={false}
            children={<span>Đối tác</span>}
            items={itemsThird}
            className='p-2 mx-2 hover:text-mainColor'
          />
          <CustomDropDown
            arrow={false}
            isOnClick={false}
            children={<span>Về chúng tôi</span>}
            items={itemsFour}
            className='p-2 hover:text-mainColor'
          />
        </div>
      </div>
      <div className='flex items-center justify-between'>
        <Button
          className='bg-[#000000] border duration-300  border-black  text-white  border-solid  hover:bg-mainColor rounded-full items-center w-[124px] h-[40px] text-sm font-bold leading-5 px-0 text-center'
          children={'Đặt xe'}
        />
        <Button
          className='rounded-full bg-transparent mx-2 duration-300 text-mainColor border hover:text-white hover:bg-mainColor border-mainColor border-solid items-center w-[124px] h-[40px] text-sm font-bold leading-5 px-0 text-center'
          children={'Đặt xe'}
        />
        <CustomDropDown
          arrow={false}
          isOnClick={false}
          children={
            <div className='flex items-center justify-around'>
              <Avatar sx={{}}>
                <AccountCircleIcon />
              </Avatar>
              <ArrowDropDownIcon />
            </div>
          }
          items={itemAcount}
          className='p-2 mx-2 hover:text-mainColor cursor-pointer'
        />
      </div>
    </div>
  )
}

export default Header
