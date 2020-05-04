import request from '../index'

const course = {
  getHomePageInfo(params) {
    return request.get('/compositionv3/homepage/getHomePageInfo', {
      category: '2'
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
      category: '2'
    })
  },
  dayByMasterpiece(params) {
    return request.get('/compositionv3/homepage/dayByMasterpiece', {
      ...params,
      category: '2'
    })
  },
  getShareTemplates(params) {
    return request.get('/compositionv3/course/getShareTemplates', params)
  }
}

export default course
