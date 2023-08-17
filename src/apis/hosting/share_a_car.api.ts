import { SuccessResponse } from 'src/types/utils.type'
import http from 'src/utils/http'

const URL_SHARE_A_CAR = '/'
const URL_ADD_TEXT = '/v1/updatePages'
const shareACarApi = {
  getShareACar() {
    return http.get<SuccessResponse<any>>(URL_SHARE_A_CAR, {})
  },

  updateText(data: any) {
    return http.put(`${URL_ADD_TEXT}`, data)
  }
}

export default shareACarApi
