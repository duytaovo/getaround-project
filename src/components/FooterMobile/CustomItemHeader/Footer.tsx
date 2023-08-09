import React from 'react'
import { firstColumn, fourColumn, secondColumn, selectItems, thirdColumn } from 'src/items/FooterItem/FooterItem'
import { Col, Row, Space } from 'antd'
import { IconButton } from '@mui/material'
import TwitterIcon from '@mui/icons-material/Twitter'
import FacebookIcon from '@mui/icons-material/Facebook'
import InstagramIcon from '@mui/icons-material/Instagram'
import ggplay from './ggPlay.jpeg'
import appstore from './appstore.png'
import { Link } from 'react-router-dom'
import logo from 'src/assets/images/logo.jpg'
import CustomSelect from 'src/components/Select'
import ComponentFooter from 'src/components/Footer/ComponentFooter'

type Props = {}

const style: React.CSSProperties = { padding: '8px 0' }

const Footer = (props: Props) => {
  return (
    <div className='p-10 bg-white'>
      <div className='flex items-start justify-between  '>
      <img src={logo} alt='logo' className='fill-current bg-none h-[36px] w-[120px]'/>

        <CustomSelect
          width='200px'
          defaultValue='Pháp'
          options={selectItems}
          className='text-black border-none outline-none rounded-md h-10'
        />
      </div>
      <div className='mt-8 flex flex-grow justify-between flex-wrap'>

            <div style={style}>
              <ComponentFooter header='Cách thức hoạt động' tabContent={firstColumn} />
            </div>
            <div style={style}>
              <ComponentFooter header='Tổ chức' tabContent={secondColumn} />
            </div>
            <div style={style}>
              <ComponentFooter header='Cộng tác' tabContent={thirdColumn} />
            </div>
            <div style={style}>
              <ComponentFooter header='Về chúng tôi' tabContent={fourColumn} />
            </div>
            <div style={style}>
              <ComponentFooter header='Top city' tabContent={firstColumn} />
            </div>
            <div style={style}>
              <ComponentFooter header='Top city' tabContent={firstColumn} />
            </div>
            {/* <div style={style}>
              <ComponentFooter header='Top city' tabContent={firstColumn} />
            </div> */}
      </div>
      <div className='flex items-center justify-center mb-5'>
        <div>
          <Space>
            <IconButton>
              <TwitterIcon className='text-mainColor'/>
            </IconButton>
            <IconButton>
              <FacebookIcon className='text-mainColor'/>
            </IconButton>
            <IconButton>
              <InstagramIcon className='text-mainColor'/>
            </IconButton>
          </Space>
        </div>
        <div className='flex items-center justify-center'>
          <Link to='/' className='rounded-lg'>
            <img src={ggplay} alt='' className='m-5 h-[50px] object-contain rounded-lg'/>
          </Link>
          <Link to='/'>
            <img src={appstore} alt='' className='h-[50px] object-contain '/>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Footer
