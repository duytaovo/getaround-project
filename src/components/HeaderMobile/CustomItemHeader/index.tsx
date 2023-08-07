import React, { FC, ReactNode } from 'react'
import { Collapse, CollapseProps } from 'antd'
import SingleCommonQuestion from './SingleCommonQuestion'
import AccountCircleIcon from '@mui/icons-material/AccountCircle'
import { IconButton } from '@mui/material'
import Button from 'src/components/Button'
import { useTranslation } from 'react-i18next'

export interface ICommonQuestion {
  key: string
  label: string
  contents: Object[]
}

type CommonQuestionProps = {
  items: ICommonQuestion[]
  titleClassName?: string
  className?: string
}

const CustomeCollapseHeader: FC<CommonQuestionProps> = ({ titleClassName, items, className }) => {
  const { t } = useTranslation('home')

  const itemsForColapse: CollapseProps['items'] = items.map((item) => ({
    key: item.key,

    label: <h1 className={titleClassName}>{item.label}</h1>,

    children: <SingleCommonQuestion contents={item.contents} />
  }))
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
        <div className='flex items-center text-black space-x-2 text-[20px]'>
            <AccountCircleIcon onClick={() => {}} className='' />
          <span>Login - Signup</span>
        </div>
      </div>
      <div className=' flex flex-col items-center  space-y-3 mb-3'>
        <Button
          className='bg-black border hover:duration-500 duration-500 hover:transition-all  text-white  border-none hover:bg-mainColor rounded-full items-center w-[90vw] h-[40px] text-lg font-medium leading-5 
            '
          children={<span>{t('header.bookACar')}</span>}
        />
        <Button
          className='rounded-full bg-transparent  duration-500  hover:duration-500 text-mainColor border hover:text-white hover:bg-mainColor border-mainColor border-solid items-center w-[90vw] h-[40px] text-lg font-medium leading-5  text-center'
          children={<span>{t('header.bookACar')}</span>}
        />
      </div>
    </div>
  )
}

export default CustomeCollapseHeader
