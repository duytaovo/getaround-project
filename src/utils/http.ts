import axios, { AxiosError, type AxiosInstance } from 'axios'
import HttpStatusCode from 'src/constants/httpStatusCode.enum'
import { toast } from 'react-toastify'
import { clearLS, getAccessTokenFromLS, getRefreshTokenFromLS, setAccessTokenToLS, setRefreshTokenToLS } from './auth'
import { isAxiosUnauthorizedError } from './utils'
import { ErrorResponse } from 'src/types/utils.type'
import { AuthResponse, RefreshTokenReponse } from 'src/types/auth.type'
export const URL_REFRESH_TOKEN = 'refresh-access-token'
import config from 'src/constants/configApi'

export class Http {
  instance: AxiosInstance
  private accessToken: string
  private refreshToken: string
  private refreshTokenRequest: Promise<string> | null
  constructor(url: string) {
    this.accessToken = getAccessTokenFromLS()
    this.refreshToken = getRefreshTokenFromLS()
    this.refreshTokenRequest = null
    this.instance = axios.create({
      baseURL: url,
      timeout: 100000,
      headers: {
        'Content-Type': 'application/json',
        'expire-access-token': 60 * 60 * 24, // 1 ngày
        'expire-refresh-token': 60 * 60 * 24 * 160 // 160 ngày,
      }
    })
    this.instance.interceptors.request.use(
      (config) => {
        if (this.accessToken && config.headers) {
          config.headers.authorization = `Bearer ${this.accessToken}`
          return config
        }
        return config
      },
      (error) => {
        return Promise.reject(error)
      }
    )
    // Add a response interceptor
    this.instance.interceptors.response.use(
      (response) => {
        const { url } = response.config
        if (url === '/admin/login') {
          const data = response.data as AuthResponse
          this.accessToken = data.data.accessToken
          this.refreshToken = data?.data?.refreshToken || ''
          setAccessTokenToLS(this.accessToken)
          setRefreshTokenToLS(this.refreshToken)
        } else if (url === '/admin/logout') {
          this.accessToken = ''
          this.refreshToken = ''
          // clearLS()
        }
        return response
      },
      (error: AxiosError) => {
        // Chỉ toast lỗi không phải 422 và 401
        if (
          ![HttpStatusCode.UnprocessableEntity, HttpStatusCode.Unauthorized].includes(error.response?.status as number)
        ) {
          // eslint-disable-next-line @typescript-eslint/no-explicit-any
          const data: any | undefined = error.response?.data
          const message = data?.message || error.message
          toast.error(message)
        }

        if (isAxiosUnauthorizedError<ErrorResponse<{ name: string; message: string }>>(error)) {
          // const config = error.response?.config || {}
          // const { url } = config
          // Trường hợp Token hết hạn và request đó không phải là của request refresh token
          // thì chúng ta mới tiến hành gọi refresh token
          // if (isAxiosExpiredTokenError(error) && url !== URL_REFRESH_TOKEN) {
          //   // Hạn chế gọi 2 lần handleRefreshToken
          //   this.refreshTokenRequest = this.refreshTokenRequest
          //     ? this.refreshTokenRequest
          //     : this.handleRefreshToken().finally(() => {
          //         // Giữ refreshTokenRequest trong 10s cho những request tiếp theo nếu có 401 thì dùng
          //         setTimeout(() => {
          //           this.refreshTokenRequest = null
          //         }, 10000)
          //       })
          //   return this.refreshTokenRequest.then((access_token) => {
          //     // Nghĩa là chúng ta tiếp tục gọi lại request cũ vừa bị lỗi
          //     return this.instance({ ...config, headers: { ...config.headers, authorization: access_token } })
          //   })
          // }

          // clearLS()
          this.accessToken = ''
          this.refreshToken = ''
          toast.error(error.response?.data.data?.message || error.response?.data.message)
          // window.location.reload()
        }
        return Promise.reject(error)
      }
    )
  }

  private handleRefreshToken() {
    return this.instance
      .post<RefreshTokenReponse>(URL_REFRESH_TOKEN, {
        refresh_token: this.refreshToken
      })
      .then((res) => {
        const { access_token } = res.data.data
        setAccessTokenToLS(access_token)
        this.accessToken = access_token
        return access_token
      })
      .catch((error) => {
        // clearLS()
        this.accessToken = ''
        this.refreshToken = ''
        throw error
      })
  }
}
const http = new Http(config.baseUrl1).instance
export const http_auth = new Http(config.baseUrlAuth).instance
export default http
