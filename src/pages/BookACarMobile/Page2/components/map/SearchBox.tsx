import React, { useState } from 'react'
import { Button, Divider, List, ListItem, ListItemIcon, ListItemText } from '@mui/material'
import Search from 'src/components/Search'
import marker from './marker.png'
import { useDebounce } from 'usehooks-ts'
import { useAppDispatch, useAppSelector } from 'src/hooks/useRedux'
import { updateIndexCardActive } from 'src/store/car/manageCar/managCarSlice'
const VIETMAP_API_KEY = '9c486497752392adc6b3a4156cb889271e83b5e462f4a54f'
const VIETMAP_SEARCH_URL = 'https://maps.vietmap.vn/api/search?api-version=1.1&'

export default function SearchBox(props: any) {
  const { selectPosition, setSelectPosition } = props
  const [searchText, setSearchText] = useState('')
  const [listPlace, setListPlace] = useState<any>([])
  const debouncedValue = useDebounce<string>(searchText, 300)
  const { indexCardActive } = useAppSelector((state) => state.car)
  const [open, setOpen] = useState(false)
  const dispatch = useAppDispatch()
  const handleClick = (value: number) => {
    dispatch(updateIndexCardActive(value))
  }
  const onChange = (value: string) => {
    setOpen(true)
    setSearchText(value)

    const params: any = {
      text: debouncedValue,
      apikey: VIETMAP_API_KEY,
      addressdetails: 1,
      polygon_geojson: 0
    }
    const queryString = new URLSearchParams(params).toString()
    const requestOptions: any = {
      method: 'GET',
      redirect: 'follow'
    }
    fetch(`${VIETMAP_SEARCH_URL}${queryString}`, requestOptions)
      .then((response) => response.text())
      .then((result) => {
        setListPlace(JSON.parse(result))
      })
      .catch((err) => console.log('err: ', err))
  }

  return (
    <div style={{ display: 'flex', flexDirection: 'column' }}>
      <div style={{ display: 'flex' }}>
        <div>
          <Search onChange={onChange} placeholder={props.placeholder} width={props.width} />
        </div>
      </div>
      <div>
        {open == true && (
          <List component='nav' aria-label='main mailbox folders'>
            {listPlace?.data?.features?.map((item: any, index: number) => {
              return (
                <div
                  key={item?.Id}
                  className={`flex items-center justify-start space-x-2 border-b-[1px] rounded-md p-1 ${
                    index === indexCardActive ? 'bg-black/10' : ''
                  }`}
                  onClick={() => handleClick(index)}
                >
                  <ListItem
                    onClick={() => {
                      localStorage.setItem('end', JSON.stringify(item))
                      setOpen(false)
                      setSelectPosition(item)
                    }}
                  >
                    <ListItemIcon>
                      <img src={marker} alt='Placeholder' style={{ width: 38, height: 38 }} />
                    </ListItemIcon>
                    <ListItemText className='text-black/70' primary={item?.properties.name} />
                  </ListItem>
                  <Divider />
                </div>
              )
            })}
          </List>
        )}
      </div>
    </div>
  )
}
