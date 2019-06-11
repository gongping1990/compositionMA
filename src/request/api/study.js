import request from '../index'

const study = {
  viewLesson(params) {
    return request.get('/study/viewLesson', params)
  },
  joinRoom(params) {
    return request.post('/study/joinRoom', params)
  }
}

export default study
