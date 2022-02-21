import axios from './index.js'
import Utils from '~/utils/index'

// get block list
export const getBlockList = data => {
  return axios({
    url: Utils.URL.browserAPI + 'blocks',
    method: 'get',
    data: data
  })
}
