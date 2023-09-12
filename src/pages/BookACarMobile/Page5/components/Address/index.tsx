import * as React from 'react'
import Box from '@mui/material/Box'
import SearchBox from '../map/SearchBox'
import SouthOutlinedIcon from '@mui/icons-material/SouthOutlined'
import TimeToLeaveIcon from '@mui/icons-material/TimeToLeave'
import CircleTwoToneIcon from '@mui/icons-material/CircleTwoTone'
import DriveEtaOutlinedIcon from '@mui/icons-material/DriveEtaOutlined'
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined'
import FmdGoodIcon from '@mui/icons-material/FmdGood'
import { IconButton, Input } from '@mui/material'
const ariaLabel = { 'aria-label': 'description' }
export default function Address({ selectPosition, setSelectPosition }: any) {
  const [itemStart, setItemStart] = React.useState<any>()
  React.useEffect(() => {
    setItemStart(JSON.parse(localStorage.getItem('start') || ''))
  }, [])
  return (
    <div className='flex items-stretch justify-start space-x-3'>
      <div className='space-y-0 '>
        <div>
          <DriveEtaOutlinedIcon className='text-mainColor' />
        </div>
        <div>
          <SouthOutlinedIcon className='text-black/60' />
        </div>
        <div>
          <LocationOnOutlinedIcon className='text-red-400' />
        </div>
      </div>
      <div className='space-y-3'>
        <Input
          disabled
          value={itemStart?.properties?.name}
          defaultValue={itemStart?.properties?.name}
          inputProps={ariaLabel}
          placeholder={itemStart?.properties?.name}
          className='w-[280px]'
        />
        <SearchBox
          placeholder='Nhập điểm đến'
          selectPosition={selectPosition}
          setSelectPosition={setSelectPosition}
          width={'280px'}
        />
        <IconButton
          sx={{
            border: '0.1px solid black',
            borderRadius: '5px',
            fontSize: '10px',
            margin: '0'
          }}
        >
          <FmdGoodIcon className='text-sm text-mainColor' fontSize='small' />
          <span className='text-sm'>Biểu diễn trên bảng đồ</span>
        </IconButton>
      </div>
    </div>
  )
}
