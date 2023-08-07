import React from 'react'
import Img from '../../../assets/HeaderHIW.jpg'
import { Select } from 'antd'
import { DatePicker, Space } from 'antd'
import type { RangePickerProps } from 'antd/es/date-picker'
import dayjs from 'dayjs'
import customParseFormat from 'dayjs/plugin/customParseFormat'
import { TimePicker } from 'antd'
import './style.css'
import { AiFillStar } from 'react-icons/ai'
import CustomDatetimePicker from 'src/components/CustomDatetimePicker/CustomDatetimePicker'
import RatingStar from 'src/components/RatingStar'
dayjs.extend(customParseFormat)

const { RangePicker } = DatePicker
const format = 'HH:mm'
const range = (start: number, end: number) => {
  const result = []
  for (let i = start; i < end; i++) {
    result.push(i)
  }
  return result
}

const HeaderHowItWord = () => {
  // eslint-disable-next-line arrow-body-style
  const disabledDate: RangePickerProps['disabledDate'] = (current) => {
    // Can not select days before today and today
    return current && current < dayjs().endOf('day')
  }
  return (
    <div className='mb-28 flex flex-col items-stretch m-full h-101 '>
      <div className='w-full max-w-7xl flex-col self-center items-stretch flex relative  h-full'>
        <div
          className='rounded-2xl '
          style={{
            backgroundImage: `url(${Img})`,
            backgroundPosition: '50% 22%',
            backgroundSize: 'auto 161%',
            padding: '42px 0'
          }}
        >
          <div className=' w-full max-with max-w-5xl mx-auto flex-col px-9 flex '>
            <div className='w-6/13 md:w-[70%] ml-0 px-9 bg-[#efeff0] rounded-3xl'>
              <h1 className='text-black text-5xl font-bold mt-6'>
                Rent and unlock a <span className='text-mainColor'>nearby car</span> in seconds
              </h1>
              <div className=' h-8'></div>
              <div className='my-8'>
                <div>
                  <div>
                    <div className='w-full'>
                      <span className='text-xs pl-2 text-[#a49da7]'>Địa điểm</span>{' '}
                      <div className='rounded-lg'>
                        <div className='flex items-center md:pb-0 relative rounded-lg'>
                          <div className='rounded ant-select ant-select-auto-complete AVFB2APpFuQWSWz1zt5r w-full WT68zOsPUPzLwXLqTmOF ant-select-single ant-select-allow-clear ant-select-customize-input ant-select-show-search bg-white'>
                            <div className='ant-select-selector'>
                              <div className='ant-select-selection-search flex justify-end'>
                                <input
                                  autoComplete='dontshow'
                                  // className='ant-inpu w-96  outline-none ant-input-lg ant-select-selection-search-input rounded-r-lg h-[44px] lg:h-[56px]  placeholder-graphite'
                                  className='ant-inpu w-97  outline-none ant-input-lg ant-select-selection-search-input rounded-r-lg h-[44px] lg:h-[56px]  placeholder-black'
                                  type='text'
                                  data-testid='location-autocomplete-address'
                                  placeholder='Address'
                                />
                              </div>
                              <span className='ant-select-selection-placeholder'></span>
                            </div>
                          </div>
                          <div className='absolute flex items-center pl-3'>
                            <svg
                              width='12'
                              height='18'
                              viewBox='0 0 12 18'
                              fill='none'
                              xmlns='http://www.w3.org/2000/svg'
                            >
                              <path
                                d='M6 .667A5.834 5.834 0 00.167 6.5C.167 10.875 6 17.334 6 17.334s5.833-6.459 5.833-10.834A5.834 5.834 0 006 .667zm0 7.917A2.084 2.084 0 116 4.415 2.084 2.084 0 016 8.584z'
                                fill='#DBD8DC'
                              ></path>
                            </svg>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className='mt-3 w-full'>
                      <div className='StartEndDatePickers'>
                        <div className='grow flex'>
                          <CustomDatetimePicker className='h-[52px]' title='Ngày bắt đầu' />
                          <div style={{ width: '10px' }} />
                          <CustomDatetimePicker className='h-[52px]' title='Ngày kết thúc' />
                        </div>
                      </div>
                      <div className='h-14 w-full bg-mainColor mt-6 rounded-lg'>
                        <div className='flex justify-center items-center h-full group cursor-pointer'>
                          <h2 className='text-white text-xl font-semibold mr-5'>Tìm kiếm xe</h2>
                          <svg
                            width='29'
                            height='29'
                            viewBox='0 0 29 29'
                            fill='none'
                            xmlns='http://www.w3.org/2000/svg'
                            className='align-middle  translate-x-0 group-hover:translate-x-[-10px] transition-all transition-duration-500'
                          >
                            <path
                              d='M14.552 22.57l-1.212-1.214 7.328-7.357L13.34 6.66l1.212-1.233 8.559 8.57-8.56 8.571z'
                              fill='#F5F5F5'
                            ></path>
                            <path d='M21.897 13.136H6.303v1.729h15.594v-1.729z' fill='#F5F5F5'></path>
                            <path
                              d='M14.405 28.805c-2.833 0-5.603-.841-7.96-2.418A14.34 14.34 0 011.17 19.95 14.363 14.363 0 014.275 4.316a14.308 14.308 0 0115.612-3.11 14.33 14.33 0 016.43 5.284 14.359 14.359 0 012.414 7.97 14.374 14.374 0 01-4.201 10.138 14.335 14.335 0 01-10.125 4.207zm0-26.962c-2.492 0-4.928.74-7 2.126a12.613 12.613 0 00-4.64 5.663 12.633 12.633 0 002.73 13.749 12.584 12.584 0 0013.73 2.735 12.603 12.603 0 005.656-4.647 12.63 12.63 0 002.124-7.01 12.644 12.644 0 00-3.696-8.915 12.61 12.61 0 00-8.904-3.7z'
                              fill='#F5F5F5'
                            ></path>
                          </svg>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className='w-6/13 max-w-xl h-20 flex justify-center items-center'>
              <RatingStar rating={4} review='' />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default HeaderHowItWord
