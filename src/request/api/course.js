import request from '../index'

const course = {
  getHomePageInfo(params) {
    return request.get('/compositionv2/homepage/getHomePageInfo')
  },
  getCourseCatalog(params) {
    return request.post('/compositionv2/course/getCourseCatalog', params)
  },
  getClassInfo(params) {
    return request.get('/compositionv2/course/getClassInfo', params)
  },
  homeworkSquare(params) {
    return request.get('/compositionv2/homepage/homeworkSquare', params)
  },
  dayByMasterpiece(params) {
    return request.get('/compositionv2/homepage/dayByMasterpiece', params)
  },
  getShareTemplates(params) {
    return request.get('/compositionv2/course/getShareTemplates', params)
  }
}

export default course
