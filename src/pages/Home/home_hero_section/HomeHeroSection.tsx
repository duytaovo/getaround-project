import home_hero_background from '../../../assets/images/63c5b095e7bfaba115ba5ccd_homepage-bg-picnic.webp'
import CustomDatetimePicker from 'src/components/CustomDatetimePicker/CustomDatetimePicker'
import CustomeAddressAutocomplete from 'src/components/CustomeAddressAutocomplete/CustomeAddressAutocomplete'
import CustomeButton from '../../../components/Button/Button'
import { Space } from 'antd'
import RatingStar from 'src/components/RatingStar'

type Props = {}
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

const HomeHeroSection = (props: Props) => {
  return (
    <div
      style={{
        backgroundImage: `url(${home_hero_background})`,
        backgroundPosition: '58%',
        backgroundAttachment: 'scroll'
        // backgroundSize: '158%'
      }}
      className='h-[478px] bg-no-repeat bg-[length:158%] p-9 pb-6 flex flex-col items-center mb-bottom md:h-fit md:bg-cover sm:p-0'
    >
      <div className='w-full h-[90%] max-w-[980px] bg-white/90 m-auto rounded-[20px] py-9 px-14 flex flex-col justify-center sm:px-2'>
        <div className='flex flex-col justify-center items-center pb-8'>
          <div>
            <h2 className='py-4 leading-5 text-lg font-bold my-0 text-black/80'>Drive on your schedule</h2>
          </div>
          <div>
            <h1 className='text-5xl tracking-tigh leading-[50px] max-w-[18ch] text-center font-bold text-black/80'>
              Instantly <span className='text-mainColor'>rent and unlock</span> nearby cars
            </h1>
          </div>
        </div>

        <Space align='center' className='flex justify-center items-end md:flex-col'>
          <CustomeAddressAutocomplete items={options} />
          <div className='grow flex'>
            <CustomDatetimePicker className='h-[52px]' title='Start trip' />
            <div style={{ width: '10px' }} />
            <CustomDatetimePicker className='h-[52px]' title='End trip' />
          </div>

          <CustomeButton
            className='min-w-[140px] h-[52px] bg-mainColor rounded-[10px] text-white/80 md:w-full'
            isNext={true}
          >
            Search a car
          </CustomeButton>
        </Space>
      </div>
      {/* <RatingStar rating={4} review='Shoppee' classReview='text-white' activeClassname='h-20' /> */}
    </div>
  )
}

export default HomeHeroSection
