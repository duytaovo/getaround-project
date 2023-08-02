import React from 'react'
import home_hero_background from '../../../assets/images/63c5b095e7bfaba115ba5ccd_homepage-bg-picnic.webp'
import { AutoComplete, Button, DatePicker } from 'antd'
import type { MenuProps } from 'antd'
import { TimePicker, Space } from 'antd'
import CustomDatetimePicker from 'src/components/CustomDatetimePicker/CustomDatetimePicker'
import CustomeAddressAutocomplete from 'src/components/CustomeAddressAutocomplete/CustomeAddressAutocomplete'

type Props = {}
const options = [
  {
    label: 'Option 1',
    value: '1'
  },
  {
    label: 'Option 2',
    value: '2'
  },
  {
    label: 'Option 3',
    value: '3'
  }
]

const HomeHeroSection = (props: Props) => {
  return (
    <div
      style={{
        backgroundImage: `url(${home_hero_background})`,
        backgroundPosition: '58%',
        backgroundAttachment: 'scroll',
        backgroundSize: '158%',
        scrollbarGutter: 'stable'
      }}
      className='h-[478px] bg-no-repeat p-9 pb-6'
    >
      <div className='w-full h-[90%] max-w-[980px] bg-white/90 m-auto rounded-[20px] py-9 px-14 flex flex-col'>
        <div className='flex flex-col justify-center items-center grow'>
          <div>
            <h2 className='py-4 leading-5 text-lg font-bold my-0 text-black/80'>Chủ động thời gian</h2>
          </div>
          <div>
            <h1 className='text-5xl tracking-tigh leading-[50px] max-w-[18ch] text-center font-bold text-black/80'>
              Instantly <span className='text-[#bb00cc]'>rent and unlock</span> nearby cars
            </h1>
          </div>
        </div>

        <Space align='center' className='flex justify-center'>
          <CustomeAddressAutocomplete items={options} />
          <div className='grow flex'>
            <CustomDatetimePicker title='Ngày bắt đầu' />
            <div style={{ width: '10px' }} />
            <CustomDatetimePicker title='Ngày kết thúc' />
          </div>
          <div className='bg-[#c93cc8] py-[18px] w-[180px] h-[60px] rounded-xl'>
            <Button>Tìm xe</Button>
          </div>
        </Space>
      </div>
    </div>
  )
}

export default HomeHeroSection
