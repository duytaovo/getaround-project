import React, { FC, ReactNode } from 'react'
import { Collapse, CollapseProps, Space } from 'antd'
import SingleCommonQuestion from './SingleCommonQuestion'
import { useTranslation } from 'react-i18next'
import { IconButton } from '@mui/material'
import TwitterIcon from '@mui/icons-material/Twitter'
import FacebookIcon from '@mui/icons-material/Facebook'
import InstagramIcon from '@mui/icons-material/Instagram'
import ggplay from './ggPlay.jpeg'
import appstore from './appstore.png'
import { Link } from 'react-router-dom'
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

const CustomeCollapseFooter: FC<CommonQuestionProps> = ({ titleClassName, items, className }) => {
  const { t } = useTranslation('home')

  const itemsForColapse: CollapseProps['items'] = items.map((item) => ({
    key: item.key,

    label: <h1 className={titleClassName}>{item.label}</h1>,

    children: <SingleCommonQuestion contents={item.contents} />
  }))
  return (
    <div className='flex flex-col justify-between p-4'>
      <div className=''>
        <Collapse
          expandIconPosition='end'
          style={{ width: '90%', background: 'transparent' }}
          accordion
          items={itemsForColapse}
          bordered={false}
        />
      </div>
      <div className='flex items-center justify-center mb-5'>
        <div>
          <Space>
            <IconButton>
              <TwitterIcon className='text-mainColor' />
            </IconButton>
            <IconButton>
              <FacebookIcon className='text-mainColor' />
            </IconButton>
            <IconButton>
              <InstagramIcon className='text-mainColor' />
            </IconButton>
          </Space>
        </div>
        <div className='flex items-center justify-center'>
          <Link to='/' className='rounded-lg'>
            <img src={ggplay} alt='' className='m-5 h-[50px] object-contain rounded-lg' />
          </Link>
          <Link to='/'>
            <img src={appstore} alt='' className='h-[50px] object-contain ' />
          </Link>
        </div>
      </div>
    </div>
  )
}

export default CustomeCollapseFooter
