import React, { FC } from 'react'
import { Link } from 'react-router-dom'

interface ISlideLR {
  img: string
  label?: string
  Linkto?: string
  Link?: string
  contents?: any[]
}
type Props = {
  Data?: ISlideLR[]
  img?: string
  mainTitle?: string
}
const SlideLeftRight: FC<Props> = ({ Data, img, mainTitle }) => {
  return (
    <div
      className='opacity-[1] flex-col items-stretch mb-[104px] flex text-[16px] font-normal leading-[140%]'
      style={{ transformStyle: 'preserve-3d' }}
    >
      <div className='w-full flex-col items-start  flex relative '>
        <div className='flex-row w-full max-w-[1080px] mx-auto flex sm:flex-col' style={{ gridColumnGap: '26px' }}>
          <div className='items-center flex w-full flex-col relative'>
            <img
              src={Data?.[0]?.img}
              alt=''
              className='h-full w-full max-h-[316px] sm:w-[70%] object-contain max-w-full align-middle inline-block border-0'
            />
          </div>
          <div className='items-start flex w-full flex-col relative'>
            <h2 className='pb-0 text-mainColor max-w-[30ch] text-left uppercase m-[0_0_24px] text-[11px] sm:text-[12px] font-bold leading-[13px]'>
              {mainTitle}
            </h2>
            {Data?.map((item, index) => (
              <div className='block mb-9'>
                <h2 className='text-[#fff] mt-0 mb-[10px] text-[32px] sm:text-[15px] font-medium leading-[106%]'>
                  {Data?.[index]?.label}
                </h2>
                <div className='text-[#fff] sm:text-[12px]'>
                  <Link to={Data?.[index]?.Linkto || ''} className='no-underline text-mainColor'>
                    {Data?.[index]?.Link}
                  </Link>{' '}
                  {Data?.[index]?.contents}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default SlideLeftRight
