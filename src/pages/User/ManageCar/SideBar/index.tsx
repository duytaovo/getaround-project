import React, { ReactNode } from 'react'
import CustomLink from 'src/components/CustomLink'
import { useAppDispatch, useAppSelector } from 'src/hooks/useRedux'
import { updateIndexCardActive } from 'src/store/car/manageCar/managCarSlice'
import DirectionsCarFilledOutlinedIcon from '@mui/icons-material/DirectionsCarFilledOutlined'
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined'
import WifiOutlinedIcon from '@mui/icons-material/WifiOutlined'
import DifferenceOutlinedIcon from '@mui/icons-material/DifferenceOutlined'
import InsertPhotoOutlinedIcon from '@mui/icons-material/InsertPhotoOutlined'
interface IItem {
  id: string
  icon: ReactNode
  title: string
  to: string
}

const items: IItem[] = [
  {
    id: '1',
    icon: <DirectionsCarFilledOutlinedIcon />,
    title: 'Chi tiết xe',
    to: '/host/xe/detail'
  },
  {
    id: '2',

    icon: <LocationOnOutlinedIcon />,
    title: 'Vị trí',
    to: '/host/xe/location'
  },
  {
    id: '3',
    icon: <WifiOutlinedIcon />,
    title: 'Kết nối',
    to: '/host/xe/connect'
  },
  {
    id: '4',
    icon: <DifferenceOutlinedIcon />,
    title: 'Giấy phép',
    to: '/host/xe/license'
  },
  {
    id: '5',
    icon: <InsertPhotoOutlinedIcon />,
    title: 'Tải hình ảnh',
    to: '/host/xe/upload-image'
  }
]
const SideBar = () => {
  const { indexCardActive } = useAppSelector((state) => state.car)
  const dispatch = useAppDispatch()
  const handleClick = (value: number) => {
    dispatch(updateIndexCardActive(value))
  }
  return (
    <div>
      {items?.map((item: IItem, index: number) => (
        <CustomLink key={index} to={item.to}>
          <div
            onClick={() => handleClick(index)}
            className={`flex justify-start hover:bg-slate-100 duration-300 transition-all m-4 mt-0 rounded-xl py-2 px-1 ${
              index === indexCardActive ? 'bg-mainColor text-white' : ''
            } `}
          >
            {item.icon}
            <span className='ml-2'>{item.title}</span>
          </div>
        </CustomLink>
      ))}
    </div>
  )
}

export default SideBar
