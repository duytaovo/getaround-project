import { Car } from 'src/types/car'
import { SuccessResponse } from 'src/types/utils.type'
import http, { http_auth } from 'src/utils/http'

const URL_GET_CAR_HISTORY = ''
const URL_GET_CAR_LIST = ''

const CarApiMobile = {
  getCarHistory() {
    return http_auth.get<SuccessResponse<Car>>(URL_GET_CAR_HISTORY, {})
  },
  getCars() {
    return http_auth.get<SuccessResponse<Car>>(URL_GET_CAR_HISTORY, {})
  }
}

export default CarApiMobile
