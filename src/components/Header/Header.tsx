import CustomDropDown from '../Dropdown/Dropdown'
import { itemAcount, itemsFirst, itemsFive, itemsFour, itemsSecond, itemsThird } from 'src/items/HeaderItem/HeaderItem'
import Button from '../Button'
import SentimentSatisfiedAltRoundedIcon from '@mui/icons-material/SentimentSatisfiedAltRounded'
import AccountCircleIcon from '@mui/icons-material/AccountCircle'
import { locales } from 'src/i18n/i18n'
import { useTranslation } from 'react-i18next'
import { useContext, useEffect, useLayoutEffect, useState } from 'react'
import LanguageIcon from '@mui/icons-material/Language'
import { AppContext } from 'src/contexts/app.context'
import TransitionsModal from '../Modal'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { Dropdown, MenuProps } from 'antd'
import ComponentHeader, { aInStyle, aStyle } from './components/HeaderItem'
import CustomLink from '../CustomLink'
import path from 'src/constants/path'
import { clearLS } from 'src/utils/auth'
import { toast } from 'react-toastify'
import { useAppDispatch } from 'src/hooks/useRedux'
import { logoutUser, updateUser } from 'src/store/user/userSlice'
import { unwrapResult } from '@reduxjs/toolkit'
type Props = {}

const titleStyle = 'py-5 text-base font-normal'

const customDropdownStyle = {
  arrow: false,
  isOnClick: false,
  className: 'px-1 mx-3 xl:p-0 xl:mr-0 hover:text-mainColor'
}

const menuStyle = {
  padding: '20px 20px',
  borderRadius: '16px'
}

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
  const { isAuthenticated } = useContext(AppContext)

  const changeLanguage = (lng: 'en' | 'vi') => {
    i18n.changeLanguage(lng)
  }
  const location = useLocation()
  useLayoutEffect(() => {
    document.documentElement.scrollTo(0, 0)
  }, [location.pathname])

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
      key: '0',
      label: (
        <CustomLink to={path.register}>
          <div className={aStyle}>
            <span className={aInStyle}>{t('header.register')}</span>
          </div>
        </CustomLink>
      )
    },
    {
      key: '1',
      label: (
        <CustomLink to={path.login}>
          <div className={aStyle}>
            <span className={aInStyle}>{t('header.login')}</span>
          </div>
        </CustomLink>
      )
    }
  ]

  const itemLogout: MenuProps['items'] = [
    {
      key: '2',
      label: (
        <CustomLink to={path.home}>
          <div
            onClick={async () => {
              clearLS()
              await dispatch(updateUser('0'))
              const res = await dispatch(logoutUser('')).then(unwrapResult)
              await toast.success('Đăng xuất thành công')

              setTimeout(async () => {
                await window.location.reload()
                await navigate('/')
              }, 1000)
            }}
            className={aStyle}
          >
            <span className={aInStyle}>{t('header.logout')}</span>
          </div>
        </CustomLink>
      )
    }
  ]
  return (
    <div>
      <div className='bg-white-main bg-opacity-80 blur-bg fixed cur z-50 flex items-center justify-between h-[100px] inset-x-0 top-0 px-10'>
        <div className='flex  justify-center items-center'>
          <div>
            <Link to='/'>
              <img src='/public/logo-main.png' alt='logo' className='fill-current bg-none h-[26px]' />
            </Link>
            {/* <span className='text-mainColor font-bold fill-current text-2xl w-[120px] h-[26px]'>Unlock</span> */}
          </div>
          <ComponentHeader />
        </div>
        <div className='flex items-center font-semibold text-sm justify-between'>
          <Button
            onClick={() => navigate(path.bookACar)}
            className='bg-black border hover:duration-500 duration-500 hover:transition-all  text-white  border-none hover:bg-mainColor rounded-full items-center w-[124px] h-[40px] leading-5 px-0
          '
            children={<span>{t('header.bookACar')}</span>}
          />
          <Button
            onClick={() => navigate(path.sharACar)}
            className='rounded-full bg-transparent mx-2 duration-500 hover:duration-500 text-mainColor border hover:text-white/70 hover:bg-mainColor border-mainColor border-solid items-center w-[124px] h-[40px]  leading-5 px-0 text-center'
            children={<span>{t('header.shareACar')}</span>}
          />

          <CustomDropDown
            {...customDropdownStyle}
            menuStyle={menuStyle}
            items={isAuthenticated ? itemLogout : itemAcount}
            children={
              <div className='flex items-center justify-around cursor-pointer '>
                {isAuthenticated ? (
                  <SentimentSatisfiedAltRoundedIcon />
                ) : (
                  <AccountCircleIcon onClick={handleOpenModal} />
                )}

                {/* <ArrowDropDownIcon className='group-hover:text-mainColor'/> */}
              </div>
            }
          />

          <div className=''>
            <CustomDropDown
              {...customDropdownStyle}
              menuStyle={menuStyle}
              items={items}
              // arrow
              // menu={{
              //   items
              // }}
              // placement='bottom'
            >
              <div className=' hover:text-mainColor'>
                <LanguageIcon />
                <span className='mx-1 text-mainColor text-sm'>{currentLanguage}</span>
              </div>
            </CustomDropDown>
          </div>
        </div>
      </div>
      <TransitionsModal />
    </div>
  )
}

export default Header
