import request from '../index'

const center = {
  getMyCourse(params) {
    return request.get('/center/getMyCourse')
  },
  getUCRemindVO(params) {
    return request.get('/center/getUCRemindVO', params)
  },
  getMyGiftPackage(params) {
    return request.get('/center/getMyGiftPackage', params)
  },
  getRecipient(params) {
    return request.get('/center/getRecipient', params)
  },
  saveRecipient(params) {
    return request.post('/center/saveRecipient', params)
  },
  getServiceRemindVO(params) {
    return request.get('/center/getServiceRemindVO', params)
  }
}

export default center
