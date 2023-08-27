export interface Car {
  id: number
  carUuid: string
  currentLocationInHCM: string
  isDeleted: number
  car_brand: string
  car_model: string
  vehicle_type: string
  license_plate_type: string
  car_seri: string
  user: string
  regis: string[]
  created: string
  updated: string
}

export const itemCar: Car[] = [
  {
    id: 34,
    carUuid: '763572b6-4614-458c-8591-6c82836acb07',
    currentLocationInHCM: 'Quận 8',
    isDeleted: 0,
    car_brand: 'Vinfast',
    car_model: 'Hatchback',
    vehicle_type: 'Xe 5 Chỗ',
    license_plate_type: 'Biển Trắng',
    car_seri: 'Fatdil',
    user: 'gidauco7@gmail.com',
    regis: ['Cho thuê có tài xế', 'Cho thuê tự lái'],
    created: '',
    updated: ''
  }
]
