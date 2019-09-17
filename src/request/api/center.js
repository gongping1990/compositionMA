import request from '../index'

const center = {
  getMyCourse(params) {
    return request.get('/center/getMyCourse')
  },
  getCourseCatalog(params) {
    return request.post('/center/getMyGiftPackage', params)
  },
  getMyGiftPackage(params) {
    return request.get('/center/getMyGiftPackage', params)
  }
}

export default center
