import http from 'src/utils/http'

const authApi = {
  login(data) {
    return http.post('login', data)
  }
}

export default authApi
