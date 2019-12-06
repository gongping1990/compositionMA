import request from '../index'

const study = {
  viewLesson(params) {
    return request.get('/compositionv2/study/viewLesson', params)
  },
  joinRoom(params) {
    return request.post('/compositionv2/study/joinRoom', params)
  },
  getLessonRoom(params) {
    return request.get('/compositionv2/study/getLessonRoom', params)
  },
  getUCRemindVO() {
    return request.get('/compositionv2/center/getUCRemindVO')
  },
  resetLearn(params) {
    return request.get('/compositionv2/study/resetLearn', params)
  },
  changeLearnStage(params) {
    return request.post('/compositionv2/study/changeLearnStage', params)
  },
  changeLearnInfo(params) {
    return request.post(
      '/compositionv2/study/changeLearnInfo',
      params,
      'application/json'
    )
  },
  listExistWorkByPage(params) {
    return request.get('/compositionv2/study/listExistWorkByPage', params)
  },
  addCard(params) {
    return request.post('/compositionv2/study/addCard', params)
  },
  addLike(params) {
    return request.get('/compositionv2/study/like', params)
  },
  listLikeByPage(params) {
    return request.get('/compositionv2/study/listLikeByPage', params)
  },
  listUserLessons(params) {
    return request.get('/compositionv2/study/listUserLessons', params)
  },
  listPraiseByPage(params) {
    return request.get('/compositionv2/study/listPraiseByPage', params)
  },
  listWorkPraiseByPage(params) {
    return request.get('/compositionv2/study/listWorkPraiseByPage', params)
  },
  listHomeworkByLesson(params) {
    return request.get('/compositionv2/study/listHomeworkByLesson', params)
  },
  addHomework(params) {
    return request.post('/compositionv2/study/submitHomework', params)
  },
  getLessonDetail(params) {
    return request.get('/compositionv2/study/viewLesson', params)
  },
  viewMyHomework(params) {
    return request.get('/compositionv2/study/viewMyHomework', params)
  },
  viewHomework(params) {
    return request.get('/compositionv2/study/viewHomework', params)
  },
  evaluationToTeacher(params) {
    return request.post('/compositionv2/study/evaluation', params)
  },
  countCard(params) {
    return request.get('/compositionv2/study/countCard', params)
  },
  listCard(params) {
    return request.get('/compositionv2/study/listCard', params)
  },
  knowReply(params) {
    return request.post('/compositionv2/study/knowReply', params)
  },
  getAttendClassCatalog() {
    return request.get('/compositionv2/study/getAttendClassCatalog')
  },
  listCompositionWeekLesson(params) {
    return request.get('/compositionv2/study/listCompositionWeekLesson', params)
  },
  getLessonCatalogByCourse(params) {
    return request.get('/compositionv2/study/getLessonCatalogByCourse', params)
  },
  listReplyByPage(params) {
    return request.get('/compositionv2/study/listReplyByPage', params)
  },
  getPraiseById(params) {
    return request.get('/compositionv2/study/getPraiseById', params)
  },
  getLatelyDubbingByHome() {
    return request.get('/compositionv2/homepage/getLatelyDubbingByHome')
  },
  listDateByCourse(params) {
    return request.get('/compositionv2/center/listDateByCourse', params)
  },
  listLessonCatalogByCourse(params) {
    return request.get(
      '/compositionv2/center/listLessonCatalogByCourse',
      params
    )
  }
}

export default study
