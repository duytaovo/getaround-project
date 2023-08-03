import React from 'react'
interface Props {
  DataKeyFeatureItem: Array<{
    id: number
    title: string
    description: string
    linkSecurity: string
  }>
}
const KeyFeatureItem: React.FC<Props> = ({ DataKeyFeatureItem }) => {
  return (
    <div className='mt-0 mb-[25px] grid-flow-col'>
      {DataKeyFeatureItem.map((item, index) => (
        <div className='w-1/2 float-left min-h-[1px] px-[10px] relative'>
          <div className='min-h-[230px] flex-col justify-center items-center mx-auto p-[15px] flex'>
            <div className='shadow-none bg-[rgba(0,0,0,0)] w-[55px] h-[55px] rounded-[100px] justify-center items-center mb-[15px] p-[15px] flex'>
              <img
                src='https://assets-global.website-files.com/5c16e90c8f6920b098f834e5/6048b2f9d00d693cb20869aa_icon-teal-checkmark.svg'
                alt=''
                className='w-[150px] h-[150px] max-w-none align-middle border-none inline-block border-0'
              />
            </div>
            <h3 className='text-center mt-0 mb-[0.5em] text-white font-medium text-[36px] leading-[105%] '>
              {DataKeyFeatureItem?.[index]?.title}
            </h3>
            <p className='w-auto text-center max-w-[1279px] mt-0 mb-[10px] pl-0 text-[17px] font-light leading-[155%] block not-italic text-white'>
              {DataKeyFeatureItem?.[index]?.description}
              <a href='/' className='text-center text-mainColor'>
                {DataKeyFeatureItem?.[index]?.linkSecurity}
              </a>
            </p>
          </div>
        </div>
      ))}
    </div>
  )
}

export default KeyFeatureItem
