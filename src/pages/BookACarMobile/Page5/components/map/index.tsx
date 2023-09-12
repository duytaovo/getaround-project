import React, { useEffect, useRef, useState } from 'react'
import { MapContainer, TileLayer, Marker, Popup, useMap, Polyline } from 'react-leaflet'
import osm from './osm-providers'
import 'leaflet/dist/leaflet.css'
import L from 'leaflet'
import markerImg from './marker.png'
import markerImgStart from './car_top.png'
import { useNavigate } from 'react-router-dom'

const markerIconStart = new L.Icon({
  iconUrl: markerImgStart,
  iconSize: [40, 40],
  iconAnchor: [17, 46], //[left/right, top/bottom]
  popupAnchor: [0, -46] //[left/right, top/bottom]
})
const markerIcon = new L.Icon({
  iconUrl: markerImg,
  iconSize: [40, 40],
  iconAnchor: [17, 46], //[left/right, top/bottom]
  popupAnchor: [0, -46] //[left/right, top/bottom]
})

const CustomMapHistory = ({ selectPosition }: any) => {
  const [center, setCenter] = useState({ lat: 10.8636778, lng: 106.7397867 })
  const ZOOM_LEVEL = 9
  const mapRef: any = useRef()
  const locationSelection: any = [selectPosition?.geometry.coordinates[1], selectPosition?.geometry.coordinates[0]]
  const [itemStart, setItemStart] = React.useState<any>()
  const [itemEnd, setItemEnd] = React.useState<any>()
  const navigate = useNavigate()
  React.useEffect(() => {
    setItemStart(JSON.parse(localStorage.getItem('start') || ''))
    setItemEnd(JSON.parse(localStorage.getItem('end') || ''))
  }, [])

  const pointA = [itemStart?.geometry?.coordinates[1], itemStart?.geometry?.coordinates[0]] // Ví dụ điểm A
  const pointB = [itemEnd?.geometry.coordinates[1], itemEnd?.geometry.coordinates[0]]
  return (
    <MapContainer
      center={center}
      zoom={ZOOM_LEVEL}
      ref={mapRef}
      style={{ height: '600px', width: '100%', position: 'unset' }}
    >
      <TileLayer url={osm.maptiler.url} attribution={osm.maptiler.attribution} />

      <Marker
        position={[itemStart?.geometry?.coordinates[1], itemStart?.geometry?.coordinates[0]]}
        icon={markerIconStart}
      >
        <Popup>
          <b>
            {itemStart?.geometry?.coordinates[1]}, {itemStart?.geometry.coordinates[0]}
          </b>
        </Popup>
      </Marker>
      <Marker position={[itemEnd?.geometry.coordinates[1], itemEnd?.geometry.coordinates[0]]} icon={markerIcon}>
        <Popup>
          <b>
            {itemEnd?.geometry.coordinates[1]}, {itemEnd?.geometry.coordinates[0]}
          </b>
        </Popup>
      </Marker>
      <Polyline positions={[pointA, pointB]} color='blue' />
    </MapContainer>
  )
}

export default CustomMapHistory
