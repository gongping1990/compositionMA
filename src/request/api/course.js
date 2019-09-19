import request from '../index'

const course = {
  getHomePageInfo(params) {
    return request.get('/homepage/getHomePageInfo')
  },
  getCourseCatalog(params) {
    return request.post('/course/getCourseCatalog', params)
  },
  getClassInfo(params) {
    return request.get('/course/getClassInfo', params)
  },
  homeworkSquare(params) {
    return request.get('/homepage/homeworkSquare', params)
  },
  dayByMasterpiece(params) {
    return request.get('/homepage/dayByMasterpiece', params)
  },
  getShareTemplates(params) {
    return request.get('/course/getShareTemplates', params)
  }
}

export default course
