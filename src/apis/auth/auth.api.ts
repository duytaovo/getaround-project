import http, { http_auth } from 'src/utils/http'

const authApi = {
  login(data: any) {
    return http_auth.post('auth/admin', data)
  }
}

export default authApi
