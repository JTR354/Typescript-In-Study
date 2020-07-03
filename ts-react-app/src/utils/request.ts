import originAxios from 'axios'
import {message} from 'antd'

const axios = originAxios.create({
  timeout: 20e3
})

axios.interceptors.response.use(
  function(response) {
    if (response.data && response.data.flag === 1) {
      let errorMsg = response.data.msg
      message.error(errorMsg)
      return Promise.reject(errorMsg)
    }
    return response.data
  },
  function(error) {
    return Promise.reject(error)
  }
)

export function get(url: string, data: any) {
  return axios.get(url, {
    params: data
  })
}

export function post(url: string, data: any) {
  return axios({
    method: 'POST',
    url,
    data
  })
}

export default axios