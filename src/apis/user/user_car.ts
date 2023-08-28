import { Car } from 'src/types/car'
import { SuccessResponse } from 'src/types/utils.type'
import http, { http_auth } from 'src/utils/http'

const URL_GET_CAR = '/car/get-cars-of-one-user'
const URL_GET_CAR_BRAND_ = '/carbrand/getcarbrand'
const URL_GET_CAR_MODEL = '/carmodel/getcarmodel'
const URL_GET_CAR_SERI = '/carseri/getcarseri'
const URL_GET_CAR_TYPE = '/vehicletype/getvehicletype'
const URL_GET_CAR_LICENSE = '/licensePlateType/getlicensePlateType'
const CarApi = {
  getCar() {
    return http_auth.get<SuccessResponse<Car>>(URL_GET_CAR, {})
  },
  getCarBrand() {
    return http_auth.get<SuccessResponse<any>>(URL_GET_CAR_BRAND_, {})
  },
  getCarModel() {
    return http_auth.get<SuccessResponse<any>>(URL_GET_CAR_MODEL, {})
  },
  getCarSeri() {
    return http_auth.get<SuccessResponse<any>>(URL_GET_CAR_SERI, {})
  },
  getCarType() {
    return http_auth.get<SuccessResponse<any>>(URL_GET_CAR_TYPE, {})
  },
  getCarLicense() {
    return http_auth.get<SuccessResponse<any>>(URL_GET_CAR_LICENSE, {})
  },
  addCar(data: any) {
    return http_auth.post('/car/create-a-car', data)
  }
}

export default CarApi
