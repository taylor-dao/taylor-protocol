import axios from './index.js'
import Utils from '~/utils/index'

// get block list
export const getAddressList = data => {
  return axios({
    url: Utils.URL.browserAPI + 'address_top',
    method: 'get',
    data: data
  })
}
