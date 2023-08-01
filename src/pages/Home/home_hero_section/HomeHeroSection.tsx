import React from 'react'
// import home_hero_background from '../../../assets/images/63c5b095e7bfaba115ba5ccd_homepage-bg-picnic.webp'
// import { AutoComplete, Button, DatePicker } from 'antd'
// import { TimePicker, Space } from 'antd'

type Props = {}

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
      className='mt-[30px] h-[478px] bg-no-repeat p-9 pb-6'
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
          <div className='w-[180px] h-[60px] bg-white/90 rounded-xl'>
            <Autocomplete
              bordered={false}
              placeholder='Địa chỉ...'
              style={{
                width: '100%',
                height: '100%',
                display: 'flex',
                alignItems: 'center'
              }}
            />
          </div>
          <div className='flex justify-center items-center'>
            <div className='bg-white flex justify-between py-4 px-2 rounded-xl w-60'>
              <DatePicker
                format='DD/MM/YYYY'
                style={{
                  border: 'none',
                  outline: 'none',
                  boxShadow: 'none'
                }}
              />

              <TimePicker
                format='HH:mm'
                style={{
                  border: 'none',
                  outline: 'none',
                  boxShadow: 'none'
                }}
              />
            </div>

            <div className='px-2' />

            <div className='bg-white max-w-60 w-60 py-4 px-2 flex justify-between rounded-xl'>
              <DatePicker
                format='DD/MM/YYYY'
                style={{
                  border: 'none',
                  outline: 'none',
                  boxShadow: 'none'
                }}
              />
              <TimePicker
                format='HH:mm'
                style={{
                  border: 'none',
                  outline: 'none',
                  boxShadow: 'none'
                }}
              />
            </div>
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
