import { Car } from 'src/types/car'
import { SuccessResponse } from 'src/types/utils.type'
import http, { http_auth, http_car } from 'src/utils/http'

const URL_GET_CAR_HISTORY = ''
const URL_GET_CAR_LIST = '/car/search'

const CarApiMobile = {
  getCarHistory() {
    return http_auth.get<SuccessResponse<Car>>(URL_GET_CAR_HISTORY, {})
  },
  getCars({ lat, lng }: { lat: string; lng: string }) {
    return http_car.get<SuccessResponse<Car>>(`/car/search?lat=${lat}&lng=${lng}`, {})
  }
}

export default CarApiMobile
