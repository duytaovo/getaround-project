import { FC } from 'react'
import CustomDatetimePicker from 'src/components/CustomDatetimePicker/CustomDatetimePicker'
import CustomeAddressAutocomplete from 'src/components/CustomeAddressAutocomplete/CustomeAddressAutocomplete'
import CustomeButton from '../../../components/Button/Button'
import { Space } from 'antd'
import RatingStar from 'src/components/RatingStar'
import { IHeroSection } from 'src/store/app/home/HomeTypes/Hero.type'
import { Text } from 'src/components/Edition/Text'
import { useAppSelector } from 'src/hooks/useRedux'
import Button from '../../../components/Button/Button'
import { useNavigate } from 'react-router-dom'
import path from 'src/constants/path'

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

const HomeHeroSection: FC<IHeroSection> = ({
  id,
  title,
  timePickerPlaceholder,
  datePickerPlaceholder,
  img,
  startDateTimePikerTitle,
  endDateTimePikerTitle,
  buttonSearchText,
  addressPlaceholder,
  mainText
}) => {
  const navigate = useNavigate()
  const data = useAppSelector((state) => state.data.data)
  return (
    <div
      style={{
        backgroundImage: `url(${img})`,
        backgroundPosition: '58%'
      }}
      className='h-[478px] bg-no-repeat bg-[length:158%] p-9 pb-6 flex flex-col items-center mb-[48px] 2xl:h-fit lg:bg-cover sm:p-0'
    >
      <div className='w-full h-[90%] max-w-[980px] bg-white/90 m-auto rounded-[20px] py-9 px-14 flex flex-col justify-center sm:px-2'>
        <div className='flex flex-col justify-center items-center pb-8'>
          <div>
            <Text
              id={title || ''}
              tag='h2'
              content={data[title || '']}
              className='py-4 leading-5 text-lg font-bold my-0 text-black/80'
            />
            {/* <h2 className='py-4 leading-5 text-lg font-bold my-0 text-black/80'>{title}</h2> */}
          </div>
          <div>
            <Text
              id={mainText || ''}
              tag='h1'
              content={data[mainText || '']}
              className='text-[48px] tracking-tigh leading-[50px] max-w-[18ch] text-center font-[700] text-textMainColor'
            />
          </div>
        </div>

        <Space align='center' className='flex justify-center  items-end lg:flex-col'>
          <CustomeAddressAutocomplete items={options} />

          <div className='grow flex justify-between'>
            <CustomDatetimePicker className='h-[52px] lg:grow' title={startDateTimePikerTitle} />
            <div style={{ width: '10px' }} />
            <CustomDatetimePicker className='h-[52px] lg:grow' title={endDateTimePikerTitle} />
          </div>
          {/* <Button
            // onClick={onClick}
            children={<Text id={``} tag='span' content={data[buttonSearchText || '']} className={`text-base `} />}
            isNext={true}
            className='min-w-[140px] h-[52px] [&>*]:flex [&>*]:flex-row hover:duration-500 mt-2 duration-500 hover:transition-all  text-white   rounded-lg bg-[#3699d3] hover:bg-black  '
          ></Button> */}
          <CustomeButton
            className='min-w-[140px] h-[52px] rounded-[10px] text-white/80 lg:w-full bg-mainColor grow [&>*]:flex'
            isNext={true}
            onClick={() => navigate(path.bookACarMobile)}
          >
            <Text id={buttonSearchText || ''} tag='span' className='flex' content={data[buttonSearchText || '']} />
          </CustomeButton>
        </Space>
      </div>
      {/* <RatingStar rating={4} review='Shoppee' classReview='text-white' activeClassname='h-20' /> */}
    </div>
  )
}

export default HomeHeroSection
