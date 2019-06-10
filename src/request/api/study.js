import request from '../index'

const study = {
  listExistWorkByPage(params) {
    return request.get('/study/listExistWorkByPage', params)
  },
  addCard(params) {
    return request.post('/study/addCard', params)
  },
  addLike(params) {
    return request.get('/study/like', params)
  },
  listLikeByPage(params) {
    return request.get('/study/listLikeByPage', params)
  },
  listUserLessons(params) {
    return request.get('/study/listUserLessons', params)
  },
  listPraiseByPage(params) {
    return request.get('/study/listPraiseByPage', params)
  },
  listWorkPraiseByPage(params) {
    return request.get('/study/listWorkPraiseByPage', params)
  }
}

export default study
