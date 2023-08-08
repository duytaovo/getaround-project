import React from 'react'
import { CarOutlined, KeyOutlined, ReloadOutlined } from '@ant-design/icons'
const Data = [
  {
    id: 1,
    titleSpan: 'Getaround uses advanced identity verification ',
    titleH2: 'technologies and a thorough screening process to ensure that every Getaround guest meets our guidelines.'
  },
  {
    id: 2,
    titleSpan: 'Every Getaround guest must meet our eligibility criteria ',
    titleH2:
      ' in order to rent. To verify guests’ eligibility, we obtain their driving records from the Department of Motor Vehicles. ‍'
  },
  {
    id: 1,
    titleSpan: 'A team of dedicated experts agents the latest ',
    titleH2:
      'risk detection technologies to protect hosts by identifying and preventing fraudulent activity on our platform.'
  }
]
const PowerfulVetting = () => {
  return (
    <div
      className='opacity-[1] flex-col items-stretch mb-[104px] flex text-[16px] font-normal leading-[140%]'
      style={{ transformStyle: 'preserve-3d' }}
    >
      <h2 className='text-mainColor font-semibold text-4xl text-center mb-[40px]'>For Hosts</h2>
      <div className='w-full flex-col items-start  flex relative '>
        <div className='flex-row w-full max-w-[1080px] mx-auto flex sm:flex-col' style={{ gridColumnGap: '26px' }}>
          <div className='items-center flex w-full flex-col relative'>
            <img
              src='https://assets-global.website-files.com/5c16e90c8f6920b098f834e5/648380f3f2fadb5289320a68_ga-illustration-4.svg'
              alt=''
              className='h-full w-full max-h-[316px] object-contain max-w-full align-middle inline-block border-0 '
            />
          </div>
          <div className='items-start flex w-full flex-col relative '>
            <CarOutlined className='text-mainColor font-normal text-[32px] mb-6 sm:text-[20px] sm:tex-center' />
            <h2 className='pb-0 text-mainColor text-left uppercase m-[0_0_24px] text-[30px] font-bold leading-[32px] sm:text-[20px] sm:leading-[20px] sm:text-center'>
              Powerful vetting & fraud detection system
            </h2>
            <ul>
              {Data.map((item, index) => (
                <li className='text-white mb-3 sm:text-[15px]'>
                  <span className='text-mainColor sm:text-[15px]'> {Data?.[index]?.titleSpan} </span>
                  {Data?.[index]?.titleH2}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}

export default PowerfulVetting
