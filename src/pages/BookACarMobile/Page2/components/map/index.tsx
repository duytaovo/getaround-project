import React, { useEffect, useRef, useState } from 'react'
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
import osm from './osm-providers'
import 'leaflet/dist/leaflet.css'
import L from 'leaflet'
import markerImg from './car_top.png'
import useGeoLocation from 'src/hooks/useGeoLocation'
import { GeoSearchControl, OpenStreetMapProvider } from 'leaflet-geosearch'

const markerIcon = new L.Icon({
  iconUrl: markerImg,
  iconSize: [40, 40],
  iconAnchor: [17, 46], //[left/right, top/bottom]
  popupAnchor: [0, -46] //[left/right, top/bottom]
})
interface result {
  x: number // lon
  y: number // lat
  label: string // formatted address
  bounds: [
    [number, number], // south, west - lat, lon
    [number, number] // north, east - lat, lon
  ]
  raw: any // raw provider result
}
const CustomMapHistory = () => {
  const [center, setCenter] = useState({ lat: 13.084622, lng: 80.248357 })
  const ZOOM_LEVEL = 9
  const mapRef: any = useRef()
  const items = [
    {
      city: 'tphcm',
      admin: 'duytao',
      country: 'vn',
      population_proper: '12691836',
      iso2: 'IN',
      capital: 'admin',
      lat: 10.8636778,
      lng: 106.7397867
    },
    {
      city: 'tphcm',
      admin: 'duytao',
      country: 'vn',
      population_proper: '12691836',
      iso2: 'IN',
      capital: 'admin',
      lat: 12.8636778,
      lng: 108.7397867
    },
    {
      city: 'tphcm',
      admin: 'duytao',
      country: 'vn',
      population_proper: '12691836',
      iso2: 'IN',
      capital: 'admin',
      lat: 13.8636778,
      lng: 107.7397867
    }
  ]

  useEffect(() => {
    if (mapRef.current) {
      const provider = new OpenStreetMapProvider()
      // @ts-ignore
      const searchControl = new GeoSearchControl({
        provider,
        style: 'button', // Bạn có thể chọn kiểu hiển thị của ô tìm kiếm
        autoComplete: true,
        autoClose: true,
        searchLabel: 'Enter address, city, etc.',
        position: 'topright',
        showMarker: false,
        keepResult: false,
        marker: {
          icon: new L.Icon.Default(),
          draggable: false
        },
        popupFormat: (result: result) => result.label,
        maxMarkers: 1,
        retainZoomLevel: false,
        animateZoom: true,
        showPopup: true
      })
      mapRef.current.addControl(searchControl)
    }
  }, [])
  return (
    <MapContainer
      center={center}
      zoom={ZOOM_LEVEL}
      ref={mapRef}
      style={{ height: '600px', width: '100%', position: 'unset' }}
    >
      <TileLayer url={osm.maptiler.url} attribution={osm.maptiler.attribution} />

      {items.map((city, idx) => (
        <Marker position={[city.lat, city.lng]} icon={markerIcon} key={idx}>
          <Popup>
            <b>
              {city.city}, {city.country}
            </b>
          </Popup>
        </Marker>
      ))}
    </MapContainer>
  )
}

export default CustomMapHistory
