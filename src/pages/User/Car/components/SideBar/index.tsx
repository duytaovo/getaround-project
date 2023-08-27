import React, { ReactNode } from 'react'
import LocalCarWashIcon from '@mui/icons-material/LocalCarWash'
import CalendarTodayIcon from '@mui/icons-material/CalendarToday'
import LocalAtmIcon from '@mui/icons-material/LocalAtm'
import ArticleIcon from '@mui/icons-material/Article'
import SettingsIcon from '@mui/icons-material/Settings'
import CustomLink from 'src/components/CustomLink'
type Props = {}
interface IItem {
  icon: ReactNode
  title: string
  to: string
}

const items: IItem[] = [
  {
    icon: <LocalCarWashIcon />,
    title: 'Car',
    to: '/host/cars'
  },
  {
    icon: <CalendarTodayIcon />,
    title: 'Reservations',
    to: '/host/reservations'
  },
  {
    icon: <LocalAtmIcon />,
    title: 'Earnings',
    to: '/host/earnings'
  },
  {
    icon: <ArticleIcon />,
    title: 'Claims',
    to: '/host/claims'
  },
  {
    icon: <SettingsIcon />,
    title: 'Setting',
    to: '/host/settings#payout'
  }
]
const SideBar = (props: Props) => {
  return (
    <div>
      {items?.map((item, index: number) => (
        <CustomLink key={index} to={item.to}>
          <div className={`flex justify-start m-4 mt-0 rounded-sm py-2 px-1 ${index === 0 ? 'bg-mainColor' : ''} `}>
            {item.icon}
            <span className='ml-2'>{item.title}</span>
          </div>
        </CustomLink>
      ))}
    </div>
  )
}

export default SideBar
