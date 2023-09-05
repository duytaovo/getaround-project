import React, { FC, ReactNode, useContext } from 'react'
import { Collapse, CollapseProps } from 'antd'
import SingleCommonQuestion from './SingleCommonQuestion'
import AccountCircleIcon from '@mui/icons-material/AccountCircle'
import { IconButton } from '@mui/material'
import Button from 'src/components/Button'
import { useTranslation } from 'react-i18next'
import { Link, useNavigate } from 'react-router-dom'
import path from 'src/constants/path'
import { AppContext } from 'src/contexts/app.context'
import { useAppDispatch } from 'src/hooks/useRedux'
import { logoutUser } from 'src/store/user/userSlice'
import { unwrapResult } from '@reduxjs/toolkit'
import { toast } from 'react-toastify'
import { clearLS } from 'src/utils/auth'

export interface ICommonQuestion {
  key: string
  label: string
  contents: Object[]
}

type CommonQuestionProps = {
  items: ICommonQuestion[]
  titleClassName?: string
  className?: string
  itemsAuth: ICommonQuestion[]
}

const CustomeCollapseHeader: FC<CommonQuestionProps> = ({ titleClassName, items, className, itemsAuth }) => {
  const { t } = useTranslation('home')
  const { isAuthenticated } = useContext(AppContext)

  const itemsForColapse: CollapseProps['items'] = items.map((item) => ({
    key: item.key,

    label: <h1 className={titleClassName}>{item.label}</h1>,

    children: <SingleCommonQuestion contents={item.contents} />
  }))

  const itemsForColapseAuth: CollapseProps['items'] = itemsAuth.map((item) => ({
    key: item.key,

    label: <h1 className={titleClassName}>{item.label}</h1>,

    children: <SingleCommonQuestion contents={item.contents} />
  }))
  const navigate = useNavigate()
  const dispatch = useAppDispatch()
  return (
    <div className='flex flex-col justify-between '>
      <div className=''>
        <Collapse
          expandIconPosition='end'
          style={{ width: '90%', background: 'transparent' }}
          accordion
          items={itemsForColapse}
          bordered={false}
        />
        {isAuthenticated ? (
          <div className='flex items-center text-black space-x-2 text-[20px]'>
            <AccountCircleIcon onClick={() => {}} className='' />
            <Link
              to={'/'}
              onClick={async () => {
                clearLS()
                await dispatch(logoutUser('')).then(unwrapResult)
                await toast.success('Đăng xuất thành công')

                setTimeout(async () => {
                  await window.location.reload()
                  await navigate('/')
                }, 1000)
              }}
            >
              Đăng xuất
            </Link>
          </div>
        ) : (
          <div className='flex justify-around'>
            <div className='flex items-center text-black space-x-2 text-[20px]'>
              <AccountCircleIcon onClick={() => {}} className='' />
              <Link to={path.login}>Đăng nhập</Link>
            </div>
            <div className='flex items-center text-black space-x-2 text-[20px]'>
              <AccountCircleIcon onClick={() => {}} className='' />
              <Link to={path.register}>Đăng ký</Link>
            </div>
          </div>
        )}
      </div>
      <div className=' flex flex-col items-center  space-y-3 mb-3'>
        <Button
          onClick={() => navigate(path.bookACar)}
          className='bg-black border hover:duration-500 duration-500 hover:transition-all  text-white  border-none hover:bg-mainColor rounded-full items-center w-[90vw] h-[40px] text-lg font-medium leading-5 
            '
          children={<span>{t('header.bookACar')}</span>}
        />
        <Button
          onClick={() => navigate(path.sharACar)}
          className='rounded-full bg-transparent  duration-500  hover:duration-500 text-mainColor border hover:text-white hover:bg-mainColor border-mainColor border-solid items-center w-[90vw] h-[40px] text-lg font-medium leading-5  text-center'
          children={<span>{t('header.shareACar')}</span>}
        />
      </div>
    </div>
  )
}

export default CustomeCollapseHeader
