import request from '../index'

const study = {
  viewLesson(params) {
    return request.get('/study/viewLesson', params)
  },
  joinRoom(params) {
    return request.post('/study/joinRoom', params)
  },
  getLessonRoom(params) {
    return request.get('/study/getLessonRoom', params)
  },
  getUCRemindVO() {
    return request.get('/center/getUCRemindVO')
  },
  resetLearn(params) {
    return request.get('/study/resetLearn', params)
  },
  changeLearnStage(params) {
    return request.post('/study/changeLearnStage', params)
  },
  changeLearnInfo(params) {
    return request.post('/study/changeLearnInfo', params, 'application/json')
  },
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
  },
  listHomeworkByLesson(params) {
    return request.get('/study/listHomeworkByLesson', params)
  },
  addHomework(params) {
    return request.post('/study/submitHomework', params)
  },
  getLessonDetail(params) {
    return request.get('/study/viewLesson', params)
  },
  viewMyHomework(params) {
    return request.get('/study/viewMyHomework', params)
  },
  viewHomework(params) {
    return request.get('/study/viewHomework', params)
  },
  evaluationToTeacher(params) {
    return request.post('/study/evaluation', params)
  },
  countCard(params) {
    return request.get('/study/countCard', params)
  },
  listCard(params) {
    return request.get('/study/listCard', params)
  },
  knowReply(params) {
    return request.post('/study/knowReply', params)
  },
  getAttendClassCatalog() {
    return request.get('/study/getAttendClassCatalog')
  },
  listCompositionWeekLesson(params) {
    return request.get('/study/listCompositionWeekLesson', params)
  },
  getLessonCatalogByCourse(params) {
    return request.get('/study/getLessonCatalogByCourse', params)
  },
  listReplyByPage(params) {
    return request.get('/study/listReplyByPage', params)
  },
  getPraiseById(params) {
    return request.get('/study/getPraiseById', params)
  }
}

export default study
