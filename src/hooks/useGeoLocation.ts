import React, { useState, useEffect } from 'react'

const useGeoLocation = () => {
  const [location, setLocation] = useState({
    loaded: false,
    coordinates: { lat: '', lng: '' }
  })

  const onSuccess = (location: any) => {
    setLocation({
      loaded: true,
      coordinates: {
        lat: location.coords.latitude,
        lng: location.coords.longitude
      }
    })
  }

  const onError = (error: any) => {
    setLocation({
      loaded: true,
      coordinates: {
        lat: '',
        lng: ''
      }
    })
  }

  return location
}

export default useGeoLocation
