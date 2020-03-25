import request from '../index'

const order = {
  getRecipient(params) {
    return request.get('/compositionv2/order/getRecipient', params)
  },
  saveRecipient(params) {
    return request.post('/compositionv2/order/saveRecipient', params)
  },
  checkPopByRecipient() {
    return request.get('/compositionv2/order/checkPopByRecipient')
  }
}

export default order
