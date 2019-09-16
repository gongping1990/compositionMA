import request from '../index'

const user = {
  // 微信登录
  loginWithPhone(params) {
    return request.post('/user/loginWithPhone', params)
  },
  loginWithPassword(params) {
    return request.post('/user/loginWithPassword', params)
  },
  loginOut() {
    return request.get('/user/loginOut')
  },
  changePassword(params) {
    return request.post('/user/changePassword', params)
  },
  wxUserLogin(params) {
    return request.post('/user/loginWithWxMa', params)
  },
  updateUserWxMa(params) {
    return request.post('/user/updateUserWxMa', params)
  },
  updateGrade(params) {
    return request.post('/user/updateGrade', params)
  },
  addZan(params) {
    return request.get('/user/zan', params)
  },
  addCollect(params) {
    return request.get('/user/collect', params)
  },
  changeIdentity(params) {
    return request.post('/user/updateUserType', params)
  },
  listCollect(params) {
    return request.get('/user/listCollect', params)
  },
  uploadFormId(params) {
    return request.post('/user/uploadFormId', params)
  },
  sendCode(params) {
    return request.get('/common/sendCode', params)
  },
  checkLogined() {
    return request.get('/user/checkLogined')
  }
}

export default user
