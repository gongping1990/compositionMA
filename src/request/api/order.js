import request from '../index'

const order = {
  getRecipient(params) {
    return request.get('/order/getRecipient', params)
  },
  saveRecipient(params) {
    return request.post('/order/saveRecipient', params)
  }
}

export default order
