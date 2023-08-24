import React, { useState } from 'react'
import Location from '../Location'
import CustomDatetimePicker from 'src/components/CustomDatetimePicker/CustomDatetimePicker'
import { useAppSelector } from 'src/hooks/useRedux'
import { GoogleMap, LoadScript, Marker, useJsApiLoader, useLoadScript } from '@react-google-maps/api'

type Props = {}
interface PlaceType {
  description: string
  structured_formatting: {
    main_text: string
    secondary_text: string
    main_text_matched_substrings?: Array<{ offset: number; length: number }>
  }
  geometry: {
    location: { lat: number; lng: number }
  }
}
const FillterLocationTime = ({ getValue }: any) => {
  const data = useAppSelector((state) => state.bookAcar)

  const _getValue = (value: PlaceType | null) => {
    getValue && getValue(value)
  }

  return (
    <div>
      <div>
        <div className='grow flex gap-x-2  my-2 p-0'>
          <div className='bg-white mt-4 rounded-md'>
            <Location getValue={_getValue} />
          </div>
          <CustomDatetimePicker className='h-[52px] lg:grow' title={data.heroSection.startDateTimePikerTitle} />
          <CustomDatetimePicker className='h-[52px] lg:grow' title={data.heroSection.endDateTimePikerTitle} />
        </div>
      </div>
    </div>
  )
}

export default FillterLocationTime
