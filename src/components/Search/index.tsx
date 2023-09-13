import React, { ChangeEvent, memo, useState } from 'react'
import { IconButton } from '@mui/material'
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined'
import { searchCars, getCars } from 'src/store/car/manageCar/managCarSlice'
import { useAppDispatch } from 'src/hooks/useRedux'
import { unwrapResult } from '@reduxjs/toolkit'
import axios from 'axios'
import { use } from 'i18next'
interface Props {
  placeholder: string
  onChange: (value: string) => void
  width?: string
}

const Search = ({ placeholder, onChange, width }: Props) => {
  const dispatch = useAppDispatch()
  const [valueSearch, setValueSearch] = useState('')
  const [valueSearchcar, setValueSearchCar] = useState('')
  const getValue = (event: ChangeEvent<HTMLInputElement>) => {
    const target = event.target as HTMLInputElement
    const value = target.value
    setValueSearch(value)
    onChange && onChange(valueSearch)
  }

  const handleInputSearch = (event: ChangeEvent<HTMLInputElement>) => {
    const target = event.target as HTMLInputElement
    const value = target.value
    setValueSearchCar(value)
  }

  const handleSearch = async () => {
    const body = {
      carname: valueSearchcar
    }
    try {
      const res = await dispatch(getCars(body))

      unwrapResult(res)
    } catch (error: any) {
      console.log('Error')
    }
  }

  const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Enter') {
      // onChange && onChange(valueSearch)
    }
  }
  const [itemEnd, setItemEnd] = React.useState<any>()
  React.useEffect(() => {
    setItemEnd(JSON.parse(localStorage.getItem('end') || ''))
  }, [])
  return (

    <div style={{ width: width }} className='flex h-8 content-center border items-center  rounded-full bg-white'>
      <IconButton onClick={handleSearch}>
        <SearchOutlinedIcon
          sx={{
            fontSize: '20px',
            alignItems: 'center',
            marginTop: '3px'
          }}
        />
      </IconButton>

      <input
        className='mr-5 text-base placeholder:text-xs focus:outline-none w-[inherit]'
        type='search'
        placeholder={`${placeholder}...`}
        onChange={handleInputSearch}
        onKeyDown={handleKeyDown}
        width={300}
        defaultValue={JSON.parse(localStorage.getItem('end') || '')?.properties?.name}
        // defaultValue={''}
      />
    </div>
  )
}

export default memo(Search)
