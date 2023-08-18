import CustomDropDown from '../Dropdown/Dropdown'
import { itemAcount, itemsFirst, itemsFive, itemsFour, itemsSecond, itemsThird } from 'src/items/HeaderItem/HeaderItem'
import Button from '../Button'
import { Avatar, IconButton, Popover } from '@mui/material'
import AccountCircleIcon from '@mui/icons-material/AccountCircle'
import { locales } from 'src/i18n/i18n'
import { useTranslation } from 'react-i18next'
import { useContext, useEffect, useState } from 'react'
import LanguageIcon from '@mui/icons-material/Language'
import { AppContext } from 'src/contexts/app.context'
import TransitionsModal from '../Modal'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { Dropdown, MenuProps } from 'antd'
import ComponentHeader from './components/HeaderItem'
import CustomLink from '../CustomLink'
import path from 'src/constants/path'
import { clearLS } from 'src/utils/auth'
import { toast } from 'react-toastify'
import { useAppDispatch } from 'src/hooks/useRedux'
import { updateUser } from 'src/store/user/userSlice'
type Props = {}

const Header = (props: Props) => {
  const { t } = useTranslation('home')
  const { i18n } = useTranslation()
  const currentLanguage = locales[i18n.language as keyof typeof locales]
  const { setOpenModal } = useContext(AppContext)
  const navigate = useNavigate()
  const dispatch = useAppDispatch()
  const handleOpenModal = () => {
    setOpenModal(true)
  }
  const changeLanguage = (lng: 'en' | 'vi') => {
    i18n.changeLanguage(lng)
  }
  const url = useLocation()
  useEffect(() => {
    setTimeout(() => {
      window.scrollTo({ top: 0, behavior: 'smooth' })
    }, 1000)
  }, [url.pathname])

  const items: MenuProps['items'] = [
    {
      key: '1',
      label: (
        <button className=' px-2 text-left text-sm hover:text-mainColor' onClick={() => changeLanguage('vi')}>
          VN
        </button>
      )
    },
    {
      key: '2',
      label: (
        <button className='px-2 text-left text-sm hover:text-mainColor ' onClick={() => changeLanguage('en')}>
          ENG
        </button>
      )
    }
  ]
  const itemAcount: MenuProps['items'] = [
    {
      key: '1',
      label: (
        <CustomLink to={path.login}>
          <div className='flex flex-col px-5 text-black  duration-300 group-hover:text-mainColor'>
            <span className='cursor-pointer  group-hover:text-mainColor justify-between text-black  duration-300 font-medium font-sans text-xs  hover:text-mainColor'>
              <span className='group-hover:text-mainColor'>{t('header.login')}</span>
            </span>
          </div>
        </CustomLink>
      )
    },
    {
      key: '2',
      label: (
        <CustomLink to={path.home}>
          <div
            onClick={async () => {
              clearLS()
              await dispatch(updateUser('0'))
              await toast.success('Đăng xuất thành công')

              setTimeout(async () => {
                await window.location.reload()
                await navigate('/')
              }, 1000)
              // setTimeout(async () => {}, 2000)
            }}
            className='flex flex-col px-5 text-black mt-1 duration-300 group-hover:text-mainColor'
          >
            <span className='cursor-pointer  group-hover:text-mainColor justify-between text-black  duration-300 font-medium font-sans text-xs  hover:text-mainColor'>
              <span className='group-hover:text-mainColor'>{t('header.logout')}</span>
            </span>
          </div>
        </CustomLink>
      )
    }
  ]

  return (
    <div>
      <div className='bg-white fixed cur z-50 flex items-center justify-between h-[100px] inset-x-0 top-0 px-10'>
        <div className='flex  '>
          <div>
            <Link to='/'>
              <img src='/public/logo.jpg' alt='logo' className='fill-current bg-none h-[26px] w-[120px]' />
            </Link>
            {/* <span className='text-mainColor font-bold fill-current text-2xl w-[120px] h-[26px]'>Unlock</span> */}
          </div>
          <ComponentHeader />
        </div>
        <div className='flex items-center justify-between'>
          <Button
            className='bg-black border hover:duration-500 duration-500 hover:transition-all  text-white  border-none hover:bg-mainColor rounded-full items-center w-[124px] h-[40px] text-sm font-medium leading-5 px-0
          '
            children={<span>{t('header.bookACar')}</span>}
          />
          <Button
            className='rounded-full bg-transparent mx-2 duration-500 hover:duration-500 text-mainColor border hover:text-white hover:bg-mainColor border-mainColor border-solid items-center w-[124px] h-[40px] text-sm font-medium leading-5 px-0 text-center'
            children={<span>{t('header.shareACar')}</span>}
          />
          <CustomDropDown
            arrow={true}
            isOnClick={false}
            children={
              <div className='flex items-center justify-around cursor-pointer '>
                <AccountCircleIcon onClick={handleOpenModal} />
                {/* <ArrowDropDownIcon className='group-hover:text-mainColor'/> */}
              </div>
            }
            items={itemAcount}
            className='p-2 mx-2  text-black hover:text-mainColor cursor-pointer group-hover:text-mainColor'
          />
          <div className=''>
            <Dropdown
              arrow
              menu={{
                items
              }}
              placement='bottom'
            >
              <IconButton
                sx={{
                  color: 'black',
                  '&:hover': {
                    opacity: [0.9, 0.8, 0.7]
                  }
                }}
                className='hover:text-mainColor '
              >
                <LanguageIcon />
              </IconButton>
            </Dropdown>
            <span className='mx-1 text-mainColor text-sm'>{currentLanguage}</span>
          </div>
        </div>
      </div>
      <TransitionsModal />
    </div>
  )
}

export default Header
