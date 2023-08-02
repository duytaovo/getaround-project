import logo from 'src/assets/logo.png'
import CustomDropDown from '../Dropdown/Dropdown'
import { itemAcount, itemsFirst, itemsFour, itemsSecond, itemsThird } from 'src/items/HeaderItem/HeaderItem'
import Button from '../Button'
import { Avatar, IconButton, Popover } from '@mui/material'
import AccountCircleIcon from '@mui/icons-material/AccountCircle'
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown'
import { locales } from 'src/i18n/i18n'
import { useTranslation } from 'react-i18next'
import { useState } from 'react'
import LanguageIcon from '@mui/icons-material/Language'

type Props = {}

const Header = (props: Props) => {
  const { t } = useTranslation('home')
  const { i18n } = useTranslation()
  const [anchorEl, setAnchorEl] = useState<HTMLButtonElement | null>(null)
  const open = Boolean(anchorEl)
  const id = open ? 'simple-popover' : undefined
  const currentLanguage = locales[i18n.language as keyof typeof locales]
  const changeLanguage = (lng: 'en' | 'vi') => {
    i18n.changeLanguage(lng)
  }
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget)
  }

  const handleClose = () => {
    setAnchorEl(null)
  }

  return (

    <div className='bg-slate-400 flex items-center justify-between h-[100px] w-[98.95vw] px-10'>

      <div className='flex  '>
        <div>
          {/* <img src={logo} alt='logo' className='fill-current bg-none h-[26px] w-[120px]'/> */}
          <span className='text-mainColor font-bold fill-current text-2xl w-[120px] h-[26px]'>Unlock</span>
        </div>
        <div className='ml-6  flex items-center cursor-pointer justify-between text-black font-bold font-sans text-sm'>
          <CustomDropDown
            arrow={false}
            isOnClick={false}
            children={<span>{t('header.howItWork')}</span>}
            items={itemsFirst}
            className='p-2 hover:text-mainColor '
          />
          <CustomDropDown
            arrow={false}
            isOnClick={false}
            children={<span>{t('header.hoisting')}</span>}
            items={itemsSecond}
            className='p-2 mx-2 hover:text-mainColor'
          />
          <CustomDropDown
            arrow={false}
            isOnClick={false}
            children={<span>{t('header.partners')}</span>}
            items={itemsThird}
            className='p-2 mx-2 hover:text-mainColor'
          />
          <CustomDropDown
            arrow={false}
            isOnClick={false}
            children={<span>{t('header.aboutUs')}</span>}
            items={itemsFour}
            className='p-2 hover:text-mainColor'
          />
        </div>
      </div>
      <div className='flex items-center justify-between'>
        <Button
          className='bg-[#000000] border hover:duration-500 duration-500 hover:transition-all  text-white  border-none hover:bg-mainColor rounded-full items-center w-[124px] h-[40px] text-sm font-bold leading-5 px-0
          '
          children={<span>{t('header.bookACar')}</span>}
        />
        <Button
          className='rounded-full bg-transparent mx-2 duration-500 hover:duration-500 text-mainColor border hover:text-white hover:bg-mainColor border-mainColor border-solid items-center w-[124px] h-[40px] text-sm font-bold leading-5 px-0 text-center'
          children={<span>{t('header.bookACar')}</span>}
        />
        <CustomDropDown
          arrow={false}
          isOnClick={false}
          children={
            <div className='flex items-center justify-around group:'>
              <Avatar sx={{}}>
                <AccountCircleIcon />
              </Avatar>
              {/* <ArrowDropDownIcon className='group-hover:text-mainColor'/> */}
            </div>
          }
          items={itemAcount}
          className='p-2 mx-2 hover:text-mainColor cursor-pointer group-hover:text-mainColor'
        />
        <div>
          <IconButton
            sx={{
              color: 'white',
              '&:hover': {
                opacity: [0.9, 0.8, 0.7],
                color: 'white'
              }
            }}
            onClick={handleClick}
          >
            <LanguageIcon />
          </IconButton>
          <span className='mx-1 text-white'>{currentLanguage}</span>
          <Popover
            id={id}
            open={open}
            anchorEl={anchorEl}
            onClose={handleClose}
            anchorOrigin={{
              vertical: 'bottom',
              horizontal: 'left'
            }}
          >
            <div className='relative mr-5 rounded-sm border border-gray-200 bg-white shadow-md'>
              <div className='flex flex-col py-2 pr-2 pl-3'>
                <button className='py-2 px-3 text-left hover:text-mainColor' onClick={() => changeLanguage('vi')}>
                  Tiếng Việt
                </button>
                <button className='mt-2 py-2 px-3 text-left hover:text-mainColor ' onClick={() => changeLanguage('en')}>
                  English
                </button>
              </div>
            </div>
          </Popover>
        </div>
      </div>
    </div>
  )
}

export default Header
