import React from 'react'

type Props = {}

const Support = (props: Props) => {
  return (
    <div className='flex items-center justify-between bg-white text-black rounded-2xl p-2'>
      <div className='flex items-center justify-between flex-1'>
        <div>
          <img
            src='https://assets-global.website-files.com/5c16e90c8f6920b098f834e5/6328bdb541c77f294bfb6e1e_aboutga-247-support-p-500.png'
            alt=''
            className='w-[250px] h-[124px] rounded-full'
          />
        </div>
        <div className='p-3'>
          <h4 className='text-mainColor text-[24px] font-bold tracking-tight leading-7 text-left'>24/7 support, prioritized for hosts.</h4>
          <p className='font-bold leading-[22.4px]'>Don't hesitate to contact us if you ever have a problem.</p>
        </div>
      </div>
      <div className='flex-1'>
        <p className='#727272 rounded-2xl flex flex-start leading-[22.4px] text-ellipsis mt-6'>
          Dedicated account managers for power hosts. As you grow your fleet, you'll get more personalized support from
          a Getaround team member assigned to you.
        </p>
      </div>
    </div>
  )
}

export default Support
