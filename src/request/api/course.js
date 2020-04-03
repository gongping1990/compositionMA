import request from '../index'

const course = {
  getHomePageInfo(params) {
    return request.get('/compositionv3/homepage/getHomePageInfo')
  },
  getCourseCatalog(params) {
    return request.post('/compositionv3/course/getCourseCatalog', params)
  },
  getClassInfo(params) {
    return request.get('/compositionv3/course/getClassInfo', params)
  },
  homeworkSquare(params) {
    return request.get('/compositionv3/homepage/homeworkSquare', params)
  },
  dayByMasterpiece(params) {
    return request.get('/compositionv3/homepage/dayByMasterpiece', params)
  },
  getShareTemplates(params) {
    return request.get('/compositionv3/course/getShareTemplates', params)
  }
}

export default course
