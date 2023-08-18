import React from 'react'
import ComponentFooter from './ComponentFooter'
import {
  firstColumn,
  fiveColumn,
  fourColumn,
  secondColumn,
  selectItems,
  thirdColumn
} from 'src/items/FooterItem/FooterItem'
import { Col, Row, Space } from 'antd'
import CustomSelect from '../Select'
import { IconButton } from '@mui/material'
import TwitterIcon from '@mui/icons-material/Twitter'
import FacebookIcon from '@mui/icons-material/Facebook'
import InstagramIcon from '@mui/icons-material/Instagram'
import ggplay from './ggPlay.jpeg'
import appstore from './appstore.png'
import { Link } from 'react-router-dom'
import logo from 'src/assets/images/logo.jpg'

type Props = {}

const style: React.CSSProperties = { padding: '8px 0' }

const Footer = (props: Props) => {
  return (
    <div className='p-10 bg-white'>
      <div className='flex items-start justify-between  '>
        <img src={logo} alt='logo' className='fill-current bg-none h-[36px]' />

        <CustomSelect
          width='200px'
          defaultValue='Pháp'
          options={selectItems}
          className='text-black border-none outline-none rounded-md h-10'
        />
      </div>
      <div className='mt-8 flex flex-grow justify-between flex-wrap'>
        <div style={style}>
          <ComponentFooter header='Giải pháp của chúng tôi' tabContent={firstColumn} />
        </div>
        <div style={style}>
          <ComponentFooter header='Chia sẻ xe' tabContent={secondColumn} />
        </div>
        <div style={style}>
          <ComponentFooter header='Cộng tác' tabContent={thirdColumn} />
        </div>
        <div style={style}>
          <ComponentFooter header='Toà soạn' tabContent={fiveColumn} />
        </div>
        <div style={style}>
          <ComponentFooter header='Về chúng tôi' tabContent={fourColumn} />
        </div>
        <div className='w-1/5'>
          <iframe
            src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3919.320149371682!2d106.69511501026645!3d10.78677345895912!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31752f350884eb97%3A0x667a9a130691e89a!2zNCBOZ3V54buFbiDEkMOsbmggQ2hp4buDdSwgxJBhIEthbywgUXXhuq1uIDEsIFRow6BuaCBwaOG7kSBI4buTIENow60gTWluaCwgVmnhu4d0IE5hbQ!5e0!3m2!1svi!2s!4v1692330440805!5m2!1svi!2s'
            width='100%'
            height='100%'
            loading='lazy'
            referrerPolicy='no-referrer-when-downgrade'
          ></iframe>
        </div>

        {/* <div style={style}>
              <ComponentFooter header='Top city' tabContent={firstColumn} />
            </div> */}
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

export default Footer
