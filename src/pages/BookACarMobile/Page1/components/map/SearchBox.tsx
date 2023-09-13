import React, { useRef, useState } from 'react'
import { Button, Divider, List, ListItem, ListItemIcon, ListItemText } from '@mui/material'
import Search from 'src/components/Search'
import marker from './marker.png'
import { useDebounce } from 'usehooks-ts'
import { useAppDispatch, useAppSelector } from 'src/hooks/useRedux'
import { updateIndexCardActive } from 'src/store/car/manageCar/managCarSlice'
import { useNavigate } from 'react-router-dom'
import useGeoLocation from 'src/hooks/useGeoLocation'

const VIETMAP_API_KEY = import.meta.env.VITE_API_KEY_VIETMAP
const VIETMAP_SEARCH_URL = 'https://maps.vietmap.vn/api/search?api-version=1.1&'
// const URL = 'https://maps.vietmap.vn/api/search/v3?'
export default function SearchBox(props: any) {
  const { selectPosition, setSelectPosition, setSelectMyPosition, selectMyPosition } = props
  const [searchText, setSearchText] = useState('')
  const [listPlace, setListPlace] = useState<any>([])
  const debouncedValue = useDebounce<string>(searchText, 300)
  const { indexCardActive } = useAppSelector((state) => state.car)
  const dispatch = useAppDispatch()
  const navigate = useNavigate()
  const handleClick = (value: number) => {
    dispatch(updateIndexCardActive(value))
  }

  const onChange = (value: string) => {
    setSearchText(value)

    const params: any = {
      apikey: VIETMAP_API_KEY,
      text: debouncedValue
      // addressdetails: 1,
      // polygon_geojson: 0
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

  //current Location
  const location = useGeoLocation()
  const showMyLocation = () => {
    if (location.loaded && !location.error) {
      const URL = `https://maps.vietmap.vn/api/reverse/v3?`
      const params: any = {
        apikey: VIETMAP_API_KEY,
        // text: 'vị trí của tôi',
        lat: location.coordinates.lat,
        lng: location.coordinates.lng
      }
      const queryString = new URLSearchParams(params).toString()
      const requestOptions: any = {
        method: 'GET',
        redirect: 'follow'
      }
      fetch(`${URL}${queryString}`, requestOptions)
        .then((response) => response.text())
        .then((result) => {
          let myPosition = JSON.parse(result)[0]
          localStorage.setItem('start', JSON.stringify(myPosition))
          setSelectMyPosition(myPosition)
          navigate('/book-a-car/mobile/2')
        })
        .catch((err) => console.log('err: ', err))
    }
  }
  return (
    <div style={{ display: 'flex', flexDirection: 'column' }}>
      <div className='flex flex-col justify-center items-center'>
        <div>
          <Search onChange={onChange} placeholder='Nhập điểm đi' width={props.width} />
        </div>
        <span className='mt-1'>Hoặc </span>
        <Button
          className='bg-blue-300'
          sx={{
            backgroundColor: 'rgb(147 197 253 / .5)'
          }}
          onClick={showMyLocation}
        >
          {' '}
          Vị trí của tôi
        </Button>
      </div>
      <div>
        <span>Tìm kiếm gần đây</span>
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
                    localStorage.setItem('start', JSON.stringify(item))
                    setSelectPosition(item)
                    navigate('/book-a-car/mobile/2')
                  }}
                >
                  <ListItemIcon>
                    <img src={marker} alt='Placeholder' style={{ width: 38, height: 38 }} />
                  </ListItemIcon>
                  <ListItemText primary={item?.properties.name} />
                </ListItem>
                <Divider />
              </div>
            )
          })}
        </List>
      </div>
    </div>
  )
}
