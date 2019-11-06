import request from '../index'

const user = {
  // 微信登录
  loginWithPhone(params) {
    return request.post('/compositionv2/user/loginWithPhone', params)
  },
  loginWithPassword(params) {
    return request.post('/compositionv2/user/loginWithPassword', params)
  },
  loginOut() {
    return request.get('/compositionv2/user/loginOut')
  },
  changePassword(params) {
    return request.post('/compositionv2/user/changePassword', params)
  },
  wxUserLogin(params) {
    return request.post('/compositionv2/user/loginWithWxMa', params)
  },
  updateUserWxMa(params) {
    return request.post('/compositionv2/user/updateUserWxMa', params)
  },
  updateGrade(params) {
    return request.post('/compositionv2/user/updateGrade', params)
  },
  addZan(params) {
    return request.get('/compositionv2/user/zan', params)
  },
  addCollect(params) {
    return request.get('/compositionv2/user/collect', params)
  },
  changeIdentity(params) {
    return request.post('/compositionv2/user/updateUserType', params)
  },
  listCollect(params) {
    return request.get('/compositionv2/user/listCollect', params)
  },
  uploadFormId(params) {
    return request.post('/compositionv2/user/uploadFormId', params)
  },
  sendCode(params) {
    return request.get('/compositionv2/common/sendCode', params)
  },
  checkLogined() {
    return request.get('/compositionv2/user/checkLogined')
  },
  addMyChild(params) {
    return request.post('/umg/student/addMyChild', params)
  },
  getMyChild() {
    return request.get('/umg/student/getMyChild')
  },
  getKFTeacher() {
    return request.get('/compositionv2/teacher/getKFTeacher')
  }
}

export default user
