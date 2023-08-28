import { Car } from 'src/types/car'
import { SuccessResponse } from 'src/types/utils.type'
import http, { http_auth } from 'src/utils/http'

const URL_GET_CAR = '/car/get-cars-of-one-user'
const CarApi = {
  getCar() {
    return http_auth.get<SuccessResponse<Car>>(URL_GET_CAR, {})
  }
}

export default CarApi
