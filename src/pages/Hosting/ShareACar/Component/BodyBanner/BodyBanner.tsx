import React from 'react'

type Props = {}

const BodyBanner = (props: Props) => {
  return (
    <div className='bg-shareACar flex flex-start bg-cover rounded-lg flex-col justify-between leading-[22.4px] pt-[38px] px-[54px] pb-[54px]'>
      <h3 className='text-textMainColor text-[42px] font-bold tracking-tight leading-10 text-left'>Digital key platform</h3>
      <p className='text-textMainColor flex justify-start leading-[22.4px] mt-[30px]'>
        Experience a seamless, hands-off, and secure experience. Getaround Connect® hardware lets guests unlock your
        car from the app, and gives you data about the usage and location of your vehicle.
      </p>
    </div>
  )
}

export default BodyBanner
