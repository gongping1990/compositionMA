import request from '../index'

const order = {
  getRecipient(params) {
    return request.get('/order/getRecipient', params)
  },
  saveRecipient(params) {
    return request.post('/order/saveRecipient', params)
  },
  checkPopByRecipient() {
    return request.get('/order/checkPopByRecipient')
  }
}

export default order
