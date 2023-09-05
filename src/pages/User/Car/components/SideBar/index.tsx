import React, { ReactNode } from 'react'
import LocalCarWashIcon from '@mui/icons-material/LocalCarWash'
import CalendarTodayIcon from '@mui/icons-material/CalendarToday'
import LocalAtmIcon from '@mui/icons-material/LocalAtm'
import ArticleIcon from '@mui/icons-material/Article'
import SettingsIcon from '@mui/icons-material/Settings'
import CustomLink from 'src/components/CustomLink'
import { useAppDispatch, useAppSelector } from 'src/hooks/useRedux'
import { updateIndexCardActive } from 'src/store/car/manageCar/managCarSlice'

interface IItem {
  id: string
  icon: ReactNode
  title: string
  to: string
}

const items: IItem[] = [
  {
    id: '1',
    icon: <LocalCarWashIcon />,
    title: 'Xe',
    to: '/host/xe'
  },
  {
    id: '2',

    icon: <CalendarTodayIcon />,
    title: 'Đặt chỗ',
    to: '/host/xe'
  },
  {
    id: '3',
    icon: <LocalAtmIcon />,
    title: 'Thu nhập',
    to: '/host/xe'
  },
  {
    id: '4',
    icon: <ArticleIcon />,
    title: 'Xác nhận',
    to: '/host/xe'
  },
  {
    id: '5',
    icon: <SettingsIcon />,
    title: 'Cài đặt',
    to: '/host/xe'
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
