import request from '../index'

const course = {
  getHomePageInfo(params) {
    return request.post('/course/getHomePageInfo')
  },
  getCourseCatalog(params) {
    return request.post('/course/getCourseCatalog', params)
  },
  getClassInfo(params) {
    return request.get('/course/getClassInfo', params)
  }
}

export default course
