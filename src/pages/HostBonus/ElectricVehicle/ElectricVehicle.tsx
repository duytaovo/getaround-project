import React from 'react'
import { Link } from 'react-router-dom'
import { ArrowRightOutlined } from '@ant-design/icons'
const ElectricVehicle = () => {
  return (
    <div className='flex-col items-stretch mb-[104px] flex'>
      <div className='w-full max-w-[1272px] flex-col self-center items-stretch flex relative'>
        <div className='min-h-0 gap-x-[47px] flex-row justify-around w-full max-w-[1272px] bg-white rounded-[22px] self-center items-center m-[36px_auto] py-[72px] flex relative leading-[140%]'>
          <div className='w-1/2 gap-y-[18px] flex-col items-start flex'>
            <div className='max-w-[30ch] text-black uppercase text-[11px] font-bold leading-[13px]'>
              ELECTRIC VEHICLE FINANCING
            </div>
            <div className='text-mainColor text-[20px] font-bold leading-[13px]'>$500 Tenet EV Onboard Bonus</div>
            <div className='text-[#3f4041] text-[15px] font-bold leading-[20px]'>
              Tenet helps individuals finance Electric vehicles by offering lower up front costs in favor of a defered
              down payment. Unlock an additional bonus up to $500, on top of the standard Getaround onboarding bonus,
              for every electric vehicle you host and finance with Tenet.
            </div>
            <Link to='' className='text-black text-[15px] font-bold leading-[20px]'>
              Learn more <ArrowRightOutlined />
            </Link>
          </div>{' '}
          <img
            src='https://assets.website-files.com/581d2676fe18a07e43923cfc/64235e656aebd74c9a21d027_tenet%20x%20getaround.png'
            className='w-1/2 max-w-[326px] relative align-middle inline-block'
            alt=''
          />
        </div>
      </div>
    </div>
  )
}

export default ElectricVehicle
