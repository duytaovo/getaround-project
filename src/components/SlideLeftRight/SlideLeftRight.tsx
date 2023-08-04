import React from 'react'
import { Link } from 'react-router-dom'
interface Props {
  Data: Array<{
    id: number
    label: string
    Linkto: string
    Link: string
    contents: string[]
  }>
  img: string
  mainTitle: string
}
const SlideLeftRight: React.FC<Props> = ({ Data, img, mainTitle }) => {
  return (
    <div
      className='opacity-[1] flex-col items-stretch mb-[104px] flex text-[16px] font-normal leading-[140%]'
      style={{ transformStyle: 'preserve-3d' }}
    >
      <div className='w-full max-w-[1279px] flex-col items-start px-9 flex relative '>
        <div className='flex-row w-full max-w-[1080px] mx-auto px-9 flex' style={{ gridColumnGap: '26px' }}>
          <div className='items-center flex w-full flex-col relative'>
            <img
              src={img}
              alt=''
              className='h-full w-full max-h-[316px] object-contain max-w-full align-middle inline-block border-0'
            />
          </div>
          <div className='items-start flex w-full flex-col relative'>
            <h2 className='pb-0 text-mainColor max-w-[30ch] text-left uppercase m-[0_0_24px] text-[11px] font-bold leading-[13px]'>
              {mainTitle}
            </h2>
            {Data.map((item, index) => (
              <div className='block mb-9'>
                <h2 className='text-[#fff] mt-0 mb-[10px] text-[32px] font-medium leading-[106%]'>
                  {Data?.[index]?.label}
                </h2>
                <div className='text-[#fff]'>
                  <Link to={Data?.[index]?.Linkto} className='no-underline text-mainColor'>
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
