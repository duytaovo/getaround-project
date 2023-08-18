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
import CustomeAddressAutocomplete from 'src/components/CustomeAddressAutocomplete/CustomeAddressAutocomplete'
import { useDispatch, useSelector } from 'react-redux'
import { RootState } from 'src/store/store'
import { Text } from 'src/components/Edition/Text'
import { Image } from 'src/components/Edition/Image'
import { useAppSelector } from 'src/hooks/useRedux'
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
const options = [
  {
    label: 'Option 1',
    value: 'This is value one'
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
const HeaderHowItWord = () => {
  const {
    ExploreHowItWork,
    ProprietaryHowItWork,
    HearCommunityHowItWork,
    SlideLeftRightHowItWork,
    SlideHowItWorkR,
    HeaderHIW
  } = useSelector((state: RootState) => state.howitwork)
  // eslint-disable-next-line arrow-body-style
  const disabledDate: RangePickerProps['disabledDate'] = (current) => {
    // Can not select days before today and today
    return current && current < dayjs().endOf('day')
  }
  const data = useAppSelector((state) => state.data.data)

  return (
    <div className='mb-28 flex flex-col items-stretch m-full h-101 sm:mb-0'>
      <div className='w-full max-w-7xl flex-col self-center items-stretch flex relative  h-full'>
        <div
          className='rounded-2xl sm:bg-[0%_0%]'
          style={{
            backgroundImage: ` url(${Img})`,
            backgroundPosition: '50% 22%',
            backgroundSize: 'auto 161%',
            padding: '42px 0'
          }}
        >
          <div className=' w-full max-with max-w-5xl mx-auto flex-col px-9 flex '>
            <div className='w-6/13   ml-0 px-9 bg-[#efeff0] rounded-3xl sm:w-full sm:px-2'>
              <Text
                id={HeaderHIW.mainTitle}
                tag='h2'
                content={data[HeaderHIW.mainTitle]}
                className='text-black text-5xl font-bold mt-6 sm:text-xl'
              />
              {/* <h1 className='text-black text-5xl font-bold mt-6 sm:text-xl'>
                Rent and unlock a <span className='text-mainColor'>nearby car</span> in seconds
              </h1> */}
              <div className=' h-8'></div>
              <div className='my-8'>
                <div>
                  <div>
                    <CustomeAddressAutocomplete items={options} />
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
            <div className='w-6/13 max-w-xl h-20 flex justify-center items-center sm:w-full'>
              <RatingStar rating={4} review='' />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default HeaderHowItWord
