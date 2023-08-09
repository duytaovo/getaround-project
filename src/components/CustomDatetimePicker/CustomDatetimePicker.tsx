import React, { FC, ReactNode } from 'react'
import { DatePicker, TimePicker } from 'antd'

type CustomeDateTimeProps = {
  title: string
  className?: string
}

const CustomDatetimePicker: FC<CustomeDateTimeProps> = ({ className, title }) => {
  return (
    <div className='lg:grow'>
      <p className='pl-2 text-[#a49da7] text-xs'>{title}</p>
      <div
        className={className}
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          background: 'rgba(255, 255, 255, 0.9)',
          borderRadius: '10px',
          padding: '10px'
        }}
      >
        <div className='w-[60%]'>
          <DatePicker bordered={false} style={{ width: '100%', height: '100%' }} format='DD/MM/YYYY' />
        </div>
        <div className='w-[40%]'>
          <TimePicker
            bordered={false}
            style={{ width: '100%', height: '100%' }}
            showSecond={false}
            minuteStep={15}
            format='HH:mm'
            showNow={false}
          />
        </div>
      </div>
    </div>
  )
}

export default CustomDatetimePicker
