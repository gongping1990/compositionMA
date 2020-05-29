import request from '../index'

const course = {
  getHomePageInfo(params) {
    return request.get('/compositionv3/homepage/getHomePageInfo', {
      category: '3'
    })
  },
  getCourseCatalog(params) {
    return request.post('/compositionv3/course/getCourseCatalog', params)
  },
  getClassInfo(params) {
    return request.get('/compositionv3/course/getClassInfo', params)
  },
  homeworkSquare(params) {
    return request.get('/compositionv3/homepage/homeworkSquare', {
      ...params,
      category: '0'
    })
  },
  dayByMasterpiece(params) {
    return request.get('/compositionv3/homepage/dayByMasterpiece', {
      ...params,
      category: '3'
    })
  },
  getShareTemplates(params) {
    return request.get('/compositionv3/course/getShareTemplates', params)
  },
  getCourse(params) {
    return request.get('/compositionv3/course/getCourse', params)
  },
  getKFTeacherByCourse(params) {
    return request.get('/compositionv3/teacher/getKFTeacherByCourse', params)
  },
}

export default course
