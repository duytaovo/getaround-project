import { SuccessResponse } from 'src/types/utils.type'
import http from 'src/utils/http'

const URL_SHARE_A_CAR = '/'
const shareACarApi = {

  getShareACar() {
    return http.get<SuccessResponse<any>>(URL_SHARE_A_CAR, {
    })
  },

}

export default shareACarApi
