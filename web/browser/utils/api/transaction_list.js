import axios from './index.js'
import Utils from '~/utils/index'

// get block list
export const getTransactionList = data => {
  return axios({
    url: Utils.URL.browserAPI + 'txs',
    method: 'get',
    data: data
  })
}
