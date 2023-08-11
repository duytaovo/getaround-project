import React, { FC } from 'react'
import { Link } from 'react-router-dom'
import { Text } from 'src/components/Edition/Text'
import { Image } from 'src/components/Edition/Image'
import { useDispatch, useSelector } from 'react-redux'
import { RootState } from 'src/store/store'
import { useAppSelector } from 'src/hooks/useRedux'
interface ISliceHIWC {
  id?: string
  nameButton?: string
  linkTo?: string
}

type Props = {
  DataSliceHIWC?: ISliceHIWC[]
}
const SlideHIWC: FC<Props> = ({ DataSliceHIWC }) => {
  const { SlideHIWCR } = useSelector((state: RootState) => state.connecthiw)
  const dispatch = useDispatch()
  const data = useAppSelector((state) => state.data)
  // console.log(SlideHIWCR?.[0]?.linkTo)
  // console.log([ in data)
  return (
    <div className='bg-mainColor w-full mx-auto '>
      <div className='max-w-[100%] mx-auto p-[30px_3%] flex justify-center items-center'>
        {SlideHIWCR?.map((item, index) => (
          <div className='px-3'>
            {/* <Text 
            id='id-textBCHIW'
            tag='Link'
            content={DataSliceHIWC?.[index]?.nameButton}
            className='h-14 w-40 p-4 bg-white text-mainColor rounded-md cursor-pointer hover:text-[#1f4160]'
          />*/}
            <Link
              to={data[SlideHIWCR?.[index]?.linkTo] || ''}
              className='h-14 w-40 p-4 bg-white text-mainColor rounded-md cursor-pointer hover:text-[#1f4160]'
            >
              {data[SlideHIWCR?.[index]?.nameButton]}
            </Link>
          </div>
        ))}
      </div>
    </div>
  )
}

export default SlideHIWC
