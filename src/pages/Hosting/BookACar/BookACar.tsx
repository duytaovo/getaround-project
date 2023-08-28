import React, { useEffect } from 'react'
import HomeHeroSection from 'src/pages/Home/home_hero_section/HomeHeroSection'
import FillterLocationTime from './components/FilterLocation'
import DropdownFirst from './components/Dropdownfirst'
import DropdownSecond from './components/DropdownSecond'
import DropdownThird from './components/DropdownThird'
import DropdownFour from './components/DropdownFour'
import Skeleton from 'src/components/Skeleton/Loading'
import { GoogleMap, Marker, useLoadScript } from '@react-google-maps/api'
import { Box } from '@mui/material'
import Media from 'src/components/Skeleton/Skeleton'
import axios from 'axios'

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
const containerStyle = {
  width: '600px',
  height: '400px',
  borderRadius: '5px'
}

const center = {
  lat: -3.745,
  lng: -38.523
}

const BookACar = (props: Props) => {
  const [valueLocal, setValueLocal] = React.useState<PlaceType | null>(null)

  const getValue = (value: PlaceType | null) => {
    setValueLocal(value)
  }
  const GOOGLE_MAPS_API_KEY = 'AIzaSyBI7135GTiX4YEAiKVqf-sD8DizXl0ONlQ'
  const { isLoaded } = useLoadScript({
    id: 'google-map',
    googleMapsApiKey: 'AIzaSyBI7135GTiX4YEAiKVqf-sD8DizXl0ONlQ'
  })

  const [map, setMap] = React.useState<any>(null)
  const onLoad = React.useCallback(function callback(map: any) {
    // This is just an example of getting and using the map instance!!! don't just blindly copy!
    const bounds = new window.google.maps.LatLngBounds(center)
    map.fitBounds(bounds)

    setMap(map)
  }, [])

  const onUnmount = React.useCallback(function callback(map: any) {
    setMap(null)
  }, [])

  const placeId = 'ChIJ0T2NLikpdTERKxE8d61aX_E'

  const url = `https://maps.googleapis.com/maps/api/place/details/json?place_id=${placeId}&key=${GOOGLE_MAPS_API_KEY}`
  useEffect(() => {
    axios
      .get(url)
      .then((res) => {})
      .catch((error) => console.log('erorr'))
  }, [])

  return (
    <div className=' text-black/70'>
      <div className='border-y-[1px] p-3 px-6'>
        <FillterLocationTime getValue={getValue} />
      </div>
      <div className='flex border-y-[1px] px-6 py-3 items-center gap-x-5'>
        <div>
          <DropdownFirst />
        </div>
        <div>
          <DropdownSecond />
        </div>
        <div>
          <DropdownThird />
        </div>
        <div>
          <DropdownFour />
        </div>
      </div>
      <div className='flex w-full gap-x-3 bg-slate-500 text-white p-3 px-6'>
        <div className='w-1/2  px-4'>
          <Box sx={{ overflow: 'hidden' }}>
            <Media loading />
          </Box>
          <Box sx={{ overflow: 'hidden' }}>
            <Media loading />
          </Box>
          <Box sx={{ overflow: 'hidden' }}>
            <Media loading />
          </Box>
          {/* <div style={{ display: 'flex', gap: 20, paddingTop: 32 }}>
            <div className='gap-y-4'>
              <Skeleton styles={{ height: '30px', width: '200px' }} children={undefined} className={'mb-2'} />
              <Skeleton styles={{ height: '150px', width: '200px' }} children={undefined} className={undefined} />
            </div>
            <div className='gap-y-4'>
              <Skeleton styles={{ height: '30px', width: '200px' }} children={undefined} className={'mb-2'} />
              <Skeleton styles={{ height: '150px', width: '200px' }} children={undefined} className={undefined} />
            </div>
            <div className='gap-y-4'>
              <Skeleton styles={{ height: '30px', width: '200px' }} children={undefined} className={'mb-2'} />
              <Skeleton styles={{ height: '150px', width: '200px' }} children={undefined} className={undefined} />
            </div>
          </div>
          <div style={{ display: 'flex', gap: 20, paddingTop: 32 }}>
            <div className='gap-y-4'>
              <Skeleton styles={{ height: '30px', width: '200px' }} children={undefined} className={'mb-2'} />
              <Skeleton styles={{ height: '150px', width: '200px' }} children={undefined} className={undefined} />
            </div>
            <div className='gap-y-4'>
              <Skeleton styles={{ height: '30px', width: '200px' }} children={undefined} className={'mb-2'} />
              <Skeleton styles={{ height: '150px', width: '200px' }} children={undefined} className={undefined} />
            </div>
            <div className='gap-y-4'>
              <Skeleton styles={{ height: '30px', width: '200px' }} children={undefined} className={'mb-2'} />
              <Skeleton styles={{ height: '150px', width: '200px' }} children={undefined} className={undefined} />
            </div>
          </div> */}
        </div>
        <div className='w-1/2 p-3 px-6 mt-7 rounded-md'>
          <div className='mx-4 rounded-md'>
            {valueLocal && isLoaded == true ? (
              <GoogleMap
                mapContainerStyle={containerStyle}
                center={{
                  lat: valueLocal.geometry?.location?.lat,
                  lng: valueLocal.geometry?.location?.lng
                }}
                zoom={10}
                onLoad={onLoad}
                onUnmount={onUnmount}
              >
                <>
                  <Marker
                    position={{ lat: valueLocal.geometry?.location.lat, lng: valueLocal.geometry?.location.lng }}
                  />
                </>
              </GoogleMap>
            ) : (
              <></>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

export default BookACar
