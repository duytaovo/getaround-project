import React from 'react'
import Location from '../Location'
import CustomDatetimePicker from 'src/components/CustomDatetimePicker/CustomDatetimePicker'
import { useAppSelector } from 'src/hooks/useRedux'

type Props = {}

const FillterLocationTime = (props: Props) => {
  const data = useAppSelector((state) => state.bookAcar)

  return (
    <div>
      <div>
        <div className='grow flex justify-between  my-2 p-0'>
          <div className='bg-white mb-0'>
            <Location />
          </div>
          <CustomDatetimePicker className='h-[52px] lg:grow' title={data.heroSection.startDateTimePikerTitle} />
          <CustomDatetimePicker className='h-[52px] lg:grow' title={data.heroSection.endDateTimePikerTitle} />
        </div>
      </div>
    </div>
  )
}

export default FillterLocationTime
