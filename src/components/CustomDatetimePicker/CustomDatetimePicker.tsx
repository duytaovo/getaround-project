import React, { FC, ReactNode } from 'react'
import { DatePicker, TimePicker } from 'antd'
import { Text } from '../Edition/Text'
import { useAppSelector } from 'src/hooks/useRedux'
import getTime from 'src/utils/getTime'
import dayjs from 'dayjs'

type CustomeDateTimeProps = {
  title: string
  className?: string
}

const CustomDatetimePicker: FC<CustomeDateTimeProps> = ({ className, title }) => {
  const data = useAppSelector((state) => state.data.data)
  return (
    <div className='lg:grow'>
      <Text id={title} content={data[title]} tag='p' className='pl-2 text-[#a49da7] text-xs py-1' />
      <div
        className={className}
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          background: '#fff',
          borderRadius: '10px',
          padding: '10px'
        }}
      >
        <div className='w-[60%]'>
          <DatePicker
            bordered={false}
            style={{ width: '100%', height: '100%' }}
            format='DD/MM/YYYY'
            // defaultValue={[dayjs(`${getTime.currDate()}`), dayjs(`${getTime.currDate()}`)]}
          />
        </div>
        <div className='w-[40%]'>
          <TimePicker
            bordered={false}
            style={{ width: '100%', height: '100%' }}
            showSecond={false}
            minuteStep={15}
            format='HH:mm'
            showNow={false}
            // placeholder=''
          />
        </div>
      </div>
    </div>
  )
}

export default CustomDatetimePicker
