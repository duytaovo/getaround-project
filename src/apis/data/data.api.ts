import { SuccessResponse } from 'src/types/utils.type'
import http from 'src/utils/http'

// const URL = 'page/get/config/interface'
const URL = '/pageElement/getAllPageElement'
const dataApi = {
  getData() {
    return http.get<SuccessResponse<any>>(URL, {})
  }
}

export default dataApi
