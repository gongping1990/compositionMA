import request from '../index'

const course = {
  getHomePageInfo(params) {
    return request.post('/course/getHomePageInfo')
  }

}

export default course
