import { useEffect, useRef, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import MenuIcon from '@mui/icons-material/Menu'
import { IconButton, Tooltip } from '@mui/material'
import ClearOutlinedIcon from '@mui/icons-material/ClearOutlined'
import CustomeCollapseHeader from './CustomItemHeader'
import { itemsHeaderMobile } from 'src/items/HeaderItem/HeaderItem'
import { useTranslation } from 'react-i18next'
type Props = {}
export interface IPath {
  hash?: string
  key?: string
  pathname?: string
  search?: string
}
const HeaderMobile = (props: Props) => {
  const path = useLocation()
  const url = path.pathname
  const [menuOpen, setMenuOpen] = useState(false)
  const [iconRotated, setIconRotated] = useState(false)
  const toggleMenu = (e: React.MouseEvent<HTMLElement>) => {
    e.preventDefault()
    e.stopPropagation()
    setMenuOpen(!menuOpen)
    setIconRotated(!menuOpen)
  }
  useEffect(() => {
    setTimeout(() => {
      setMenuOpen(false)
    }, 300)
  }, [url])
  return (
    <div className='mb-bottom z-[1500] bg-bgHeaderMobile backdrop-blur-md fixed w-[100vw] backdrop-saturate-[180%]'>
      <div className='bg-white cursor-pointer z-50  flex items-center justify-between h-[100px] px-10'>
        <Link to='/'>
          <img src='/public/logo.jpg' alt='logo' className='fill-current bg-none h-[26px] w-[120px]' />
        </Link>
        {menuOpen ? (
          <Tooltip title='Hide menu'>
            <IconButton onClick={(e) => toggleMenu(e)}>
              <ClearOutlinedIcon
                className={`text-black  transition-transform duration-300  ${
                  iconRotated ? 'rotate-180' : 'rotate-0'
                } transition-transform duration-300`}
              ></ClearOutlinedIcon>
            </IconButton>
          </Tooltip>
        ) : (
          <Tooltip title='Show menu'>
            <IconButton onClick={(e) => toggleMenu(e)}>
              <MenuIcon className={`text-black  transition-transform duration-300`}></MenuIcon>
            </IconButton>
          </Tooltip>
        )}
      </div>
      <div
        className={`${
          menuOpen ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0'
        } left-0   overflow-hidden transition-all  h-[803px] flex px-8`}
      >
        <CustomeCollapseHeader
          titleClassName='text-black/90 text-bold text-[18px] '
          items={itemsHeaderMobile}
          className='w-full'
        />
      </div>
    </div>
  )
}

export default HeaderMobile
