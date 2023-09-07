import { Car } from 'src/types/car'
import { SuccessResponse } from 'src/types/utils.type'
import http, { http_auth } from 'src/utils/http'

const URL_GET_CAR = '/car/get-cars-of-one-user'
const URL_GET_CAR_BRAND_ = '/carbrand/getcarbrand'
const URL_GET_CAR_TYPE = '/vehicletype/getvehicletype'
const URL_GET_CAR_LICENSE = '/licensePlateType/getlicensePlateType'
const URL_GET_CAR_REGIS = 'regiterMethods/getregistrationmethod'
const CarApi = {
  getCar(carname: any) {
    if (carname.carname === undefined || carname.carname === '') {
      return http_auth.get<SuccessResponse<Car>>(`/car/get-cars-of-one-user`, {})
    } else if (carname.carname !== undefined) {
      return http_auth.get<SuccessResponse<Car>>(`/car/get-cars-of-one-user?carname=${carname.carname}`, {})
    }
  },
  getCarBrand() {
    return http_auth.get<SuccessResponse<any>>(URL_GET_CAR_BRAND_, {})
  },
  getCarYear(id: string) {
    return http_auth.get<SuccessResponse<any>>(`/release-year/get-release-year-by-brand-uuid?brandID=${id}`, {})
  },
  getCarSeri({ idYear, idBrand }: { idYear: string; idBrand: string }) {
    return http_auth.get<SuccessResponse<any>>(
      `/carseri/get-car-seri-by-rly-id-and-brand-id?rly_id=${idYear}&brand_id=${idBrand}`,
      {}
    )
  },
  getCarType() {
    return http_auth.get<SuccessResponse<any>>(URL_GET_CAR_TYPE, {})
  },
  getCarModel() {
    return http_auth.get<SuccessResponse<any>>('/carmodel/getcarmodel', {})
  },
  getCarLicense() {
    return http_auth.get<SuccessResponse<any>>(URL_GET_CAR_LICENSE, {})
  },
  getCarRegis() {
    return http_auth.get<SuccessResponse<any>>(URL_GET_CAR_REGIS, {})
  },
  addCar(data: any) {
    return http_auth.post('/car/create-a-car', data)
  },
  searchCars(data: any) {
    return http_auth.get<SuccessResponse<any>>('/car/find-car', data)
  }
}

export default CarApi
