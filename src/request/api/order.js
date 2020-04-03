import request from '../index'

const order = {
  getRecipient(params) {
    return request.get('/compositionv3/order/getRecipient', params)
  },
  saveRecipient(params) {
    return request.post('/compositionv3/order/saveRecipient', params)
  },
  checkPopByRecipient() {
    return request.get('/compositionv3/order/checkPopByRecipient')
  }
}

export default order
