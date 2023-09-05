import http, { http_auth } from 'src/utils/http'

const authApi = {
  login(data: any) {
    return http_auth.post('/auth/login', data)
  },
  register(data: any) {
    return http_auth.post('/auth/register', data)
  },
  logout() {
    return http_auth.post('/auth/logout-user', {})
  }
}

export default authApi
