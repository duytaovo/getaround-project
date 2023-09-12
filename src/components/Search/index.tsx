import React, { ChangeEvent, memo, useState } from 'react'
import { IconButton } from '@mui/material'
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined'

interface Props {
  placeholder: string
  onChange: (value: string) => void
  width?: string
}

const Search = ({ placeholder, onChange, width }: Props) => {
  const [valueSearch, setValueSearch] = useState('')
  const getValue = (event: ChangeEvent<HTMLInputElement>) => {
    const target = event.target as HTMLInputElement
    const value = target.value
    setValueSearch(value)
    onChange && onChange(valueSearch)
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
    <div style={{ width: width }} className='flex h-8 content-center border items-center  rounded bg-white'>
      <IconButton></IconButton>
      <input
        className='mr-5 text-base placeholder:text-xs focus:outline-none w-[inherit]'
        type='search'
        placeholder={`${placeholder}...`}
        onChange={getValue}
        onKeyDown={handleKeyDown}
        width={300}
        defaultValue={JSON.parse(localStorage.getItem('end') || '')?.properties?.name}
        // defaultValue={''}
      />
    </div>
  )
}

export default memo(Search)
