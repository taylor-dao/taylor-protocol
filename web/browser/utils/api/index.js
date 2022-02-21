import axios from 'axios'
import qs from 'qs'

const service = axios.create({
  timeout: 100000,
})


service.interceptors.request.use(
  config => {
    config.headers = {
      'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8',
      'XXX-DOMAIN': window.location.origin,
      'lang': 'en'
    }
    if (config.FormData) {
      config.headers['Content-Type']= 'multipart/form-data'
    } else {
      config.data.lang = 'en'
      if (config.method === 'get') {
        config.params = config.data
      } else {
        config.data = qs.stringify(config.data)
      }
    }

    return config
  },
  error => {
    return Promise.reject(error)
  }
)

service.interceptors.response.use(
  response => {
    const res = response.data
    // code error
    if (res.code !== 0) {
      return Promise.reject(res.msg)
    } else {
      return res.data
    }
  },
  error => {
    return Promise.reject(error)
  }
)

export default service
