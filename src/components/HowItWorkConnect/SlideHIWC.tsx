import React, { FC } from 'react'
import { Link } from 'react-router-dom'
interface ISliceHIWC {
  nameButton?: string
  linkTo?: string
}

type Props = {
  DataSliceHIWC?: ISliceHIWC[]
}
const SlideHIWC: FC<Props> = ({ DataSliceHIWC }) => {
  return (
    <div className='bg-mainColor w-full mx-auto '>
      <div className='max-w-[100%] mx-auto p-[30px_3%] flex justify-center items-center'>
        {DataSliceHIWC.map((item, index) => (
          <div className='px-3'>
            <Link
              to={DataSliceHIWC?.[index]?.linkTo || ''}
              className='h-14 w-40 p-4 bg-white text-mainColor rounded-md cursor-pointer hover:text-[#1f4160]'
            >
              {DataSliceHIWC?.[index]?.nameButton}
            </Link>
          </div>
        ))}
      </div>
    </div>
  )
}

export default SlideHIWC
