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
import { useNavigate } from 'react-router-dom'
const ariaLabel = { 'aria-label': 'description' }
export default function Address({ selectPosition, setSelectPosition }: any) {
  const [itemStart, setItemStart] = React.useState<any>()
  const navigate = useNavigate()
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
        <span className='truncate hover:text-ellipsis w-[55%] block'>
          {itemStart?.properties?.name || itemStart?.display}
        </span>

        <SearchBox
          placeholder='Nhập vị trí bạn cần đến'
          selectPosition={selectPosition}
          setSelectPosition={setSelectPosition}
          width={'330px'}
        />
        <IconButton
          onClick={() => {
            navigate('/book-a-car/mobile/3')
          }}
          sx={{
            border: '1px solid rgb(54 153 211 / 1)',
            borderRadius: '5px',
            fontSize: '10px',
            margin: '0',
            width: '330px'
          }}
        >
          <FmdGoodIcon className='text-sm text-mainColor mr-2' fontSize='small' />
          <span className='text-sm'>Biểu diễn trên bảng đồ</span>
        </IconButton>
      </div>
    </div>
  )
}
