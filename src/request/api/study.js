import request from '../index'

const study = {
  listExistWorkByPage(params) {
    return request.get('/study/listExistWorkByPage', params)
  },
  addCard(params) {
    return request.post('/study/addCard', params)
  },
  addLike(params) {
    return request.post('/study/like', params)
  }
}

export default study
