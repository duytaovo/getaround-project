import React from 'react'
import CustomDropDown from '../Dropdown/Dropdown'
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown'
import { itemAcount } from 'src/items/HeaderItem/HeaderItem'
import PublicIcon from '@mui/icons-material/Public'
import ComponentFooter from './ComponentFooter'
import { firstColumn, fourColumn, secondColumn, selectItems, thirdColumn } from 'src/items/FooterItem/FooterItem'
import { Col, Row } from 'antd'
import CustomSelect from '../Select'
type Props = {}

const style: React.CSSProperties = { padding: '8px 0' }

const Footer = (props: Props) => {
  return (
    <div className='px-10 bg-slate-400'>
      <div className='flex items-center justify-between  '>
        <span className='text-mainColor  font-bold fill-current text-[50px] '>Unlock</span>
      <CustomSelect width='200px'  defaultValue='Pháp' options={selectItems} label='Pháp' placeholder='pháp' className='text-black border-none outline-none rounded-md h-10'/>
      </div>
      <div className='mt-8'>
        <Row gutter={16}>
          <Col className='gutter-row' span={4}>
            <div style={style}>
              <ComponentFooter header='Cách thức hoạt động' tabContent={firstColumn} />
            </div>
          </Col>
          <Col className='gutter-row' span={4}>
            <div style={style}>
              <ComponentFooter header='Cách thức hoạt động' tabContent={secondColumn} />
            </div>
          </Col>{' '}
          <Col className='gutter-row' span={4}>
            <div style={style}>
              <ComponentFooter header='Cách thức hoạt động' tabContent={thirdColumn} />
            </div>
          </Col>{' '}
          <Col className='gutter-row' span={4}>
            <div style={style}>
              <ComponentFooter header='Cách thức hoạt động' tabContent={fourColumn} />
            </div>
          </Col>
          <Col className='gutter-row' span={4}>
            <div style={style}>
              <ComponentFooter header='Cách thức hoạt động' tabContent={firstColumn} />
            </div>
          </Col>
          
        </Row>
      </div>
    </div>
  )
}

export default Footer
