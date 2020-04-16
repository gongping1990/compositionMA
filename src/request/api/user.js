import request from '../index'

const user = {
  // 微信登录
  loginWithPhone(params) {
    return request.post('/compositionv3/user/loginWithPhone', params)
  },
  loginWithPassword(params) {
    return request.post('/compositionv3/user/loginWithPassword', params)
  },
  loginOut() {
    return request.get('/compositionv3/user/loginOut')
  },
  changePassword(params) {
    return request.post('/compositionv3/user/changePassword', params)
  },
  wxUserLogin(params) {
    return request.post('/compositionv3/user/loginWithWxMa', params)
  },
  updateUserWxMa(params) {
    return request.post('/compositionv3/user/updateUserWxMa', params)
  },
  updateGrade(params) {
    return request.post('/compositionv3/user/updateGrade', params)
  },
  addZan(params) {
    return request.get('/compositionv3/user/zan', params)
  },
  addCollect(params) {
    return request.get('/compositionv3/user/collect', params)
  },
  changeIdentity(params) {
    return request.post('/compositionv3/user/updateUserType', params)
  },
  listCollect(params) {
    return request.get('/compositionv3/user/listCollect', params)
  },
  uploadFormId(params) {
    return request.post('/compositionv3/user/uploadFormId', params)
  },
  sendCode(params) {
    return request.get('/compositionv3/common/sendCode', params)
  },
  checkLogined() {
    return request.get('/compositionv3/user/checkLogined')
  },
  saveFormId(params) {
    return request.get('/compositionv3/user/saveFormId', params)
  },
  addMyChild(params) {
    return request.post('/umg/student/addMyChild', params)
  },
  getMyChild() {
    return request.get('/umg/student/getMyChild')
  },
  getKFTeacher() {
    return request.get('/compositionv3/teacher/getKFTeacher')
  },
  bindKF(params) {
    return request.post('/homework/kfteacher/bindKF', params)
  },
  followKF(params) {
    return request.post('/homework/kfteacher/followKF', params)
  },
  listByDubbing() {
    return request.get('/compositionv3/dubbing/listByDubbing')
  },
  updateAvatar(params) {
    return request.post('/compositionv3/student/updateAvatar', params)
  }
}

export default user
