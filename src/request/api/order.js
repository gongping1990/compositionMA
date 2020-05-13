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
  },
  getUserGroupMsg() {
    return request.get('/compositionv3/order/getUserGroupMsg')
  },
  getOneExperienceVirtualGroup() {
    return request.get('/compositionv3/order/getOneExperienceVirtualGroup')
  },
  notPayOrderList(params) {
    return request.get('/compositionv3/order/notPayOrderList', params)
  },
  fourActiveConfig(params) {
    return request.get('/compositionv3/activeconfig/fourActiveConfig', params)
  },
  newOrder(params) {
    return request.post('/compositionv3/order/newOrder', params)
  },
  pay(params) {
    return request.post('/compositionv3/order/pay', params)
  },
  getOrderDetails(params) {
    return request.get('/compositionv3/order/getOrderDetails', params)
  },
}

export default order
