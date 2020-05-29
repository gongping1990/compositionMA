import request from '../index'

const study = {
  viewLesson(params) {
    return request.get('/compositionv3/study/viewLesson', params)
  },
  joinRoom(params) {
    return request.post('/compositionv3/study/joinRoom', params)
  },
  getLessonRoom(params) {
    return request.get('/compositionv3/study/getLessonRoom', params)
  },
  getUCRemindVO() {
    return request.get('/compositionv3/center/getUCRemindVO')
  },
  resetLearn(params) {
    return request.get('/compositionv3/study/resetLearn', params)
  },
  changeLearnStage(params) {
    return request.post('/compositionv3/study/changeLearnStage', params)
  },
  changeLearnInfo(params) {
    return request.post(
      '/compositionv3/study/changeLearnInfo',
      params,
      'application/json'
    )
  },
  listExistWorkByPage(params) {
    return request.get('/compositionv3/study/listExistWorkByPage', params)
  },
  addCard(params) {
    return request.post('/compositionv3/study/addCardWithLesson', params)
  },
  addLike(params) {
    return request.get('/compositionv3/study/like', params)
  },
  listLikeByPage(params) {
    return request.get('/compositionv3/study/listLikeByPage', {
      ...params,
      category: '3'
    })
  },
  listUserLessons(params) {
    return request.get('/compositionv3/study/listUserLessons', params)
  },
  listPraiseByPage(params) {
    return request.get('/compositionv3/study/listPraiseByPage', {
      ...params,
      category: '3'
    })
  },
  listWorkPraiseByPage(params) {
    return request.get('/compositionv3/study/listWorkPraiseByPage', params)
  },
  listHomeworkByLesson(params) {
    return request.get('/compositionv3/study/listHomeworkByLesson', params)
  },
  addHomework(params) {
    return request.post('/compositionv3/study/submitHomework', params)
  },
  getLessonDetail(params) {
    return request.get('/compositionv3/study/viewLesson', params)
  },
  viewMyHomework(params) {
    return request.get('/compositionv3/study/viewMyHomework', params)
  },
  viewHomework(params) {
    return request.get('/compositionv3/study/viewHomework', params)
  },
  evaluationToTeacher(params) {
    return request.post('/compositionv3/study/evaluation', params)
  },
  countCard(params) {
    return request.get('/compositionv3/study/countCard', {
      ...params,
      category: '3'
    })
  },
  listCard(params) {
    return request.get('/compositionv3/study/listCard', params)
  },
  knowReply(params) {
    return request.post('/compositionv3/study/knowReply', params)
  },
  getAttendClassCatalog() {
    return request.get('/compositionv3/study/getAttendClassCatalog', {
      category: '3'
    })
  },
  listCompositionWeekLesson(params) {
    return request.get('/compositionv3/study/listCompositionWeekLesson', {
      ...params,
      category: '3'
    })
  },
  getLessonCatalogByCourse(params) {
    return request.get('/compositionv3/study/getLessonCatalogByCourse', params)
  },
  listReplyByPage(params) {
    return request.get('/compositionv3/study/listReplyByPage', {
      ...params,
      category: '3'
    })
  },
  getPraiseById(params) {
    return request.get('/compositionv3/study/getPraiseById', params)
  },
  getLatelyDubbingByHome() {
    return request.get('/compositionv3/homepage/getLatelyDubbingByHome', {
      category: '3'
    })
  },
  listDateByCourse(params) {
    return request.get('/compositionv3/center/listDateByCourse', params)
  },
  getLearnReport(params) {
    return request.get('/compositionv3/study/getLearnReport', params)
  },
  listWrongSubject(params) {
    return request.get('/compositionv3/study/listWrongSubject', params)
  },
  saveWrongSubject(params) {
    return request.post('/compositionv3/study/saveWrongSubject', params)
  },
  listLessonCatalogByCourse(params) {
    return request.get(
      '/compositionv3/center/listLessonCatalogByCourse',
      params
    )
  },
  getRestrictCourseLesson(params) {
    return request.get('/compositionv3/study/getRestrictCourseLesson', params)
  },
  getLearnRemind() {
    return request.get('/compositionv3/study/getLearnRemind', {
      category: '3'
    })
  },
  getThreeLessonInfo(params) {
    return request.get('/compositionv3/lesson/getThreeLessonInfo', params)
  },
  getThreeLearnInfo(params) {
    return request.get('/compositionv3/lesson/getThreeLearnInfo', {
      ...params,
      category: '3'
    })
  },
  getThreeLearnResult(params) {
    return request.get('/compositionv3/lesson/getThreeLearnResult',  {
      ...params,
      category: '3'
    })
  },
  startPoint(params) {
    return request.post('/compositionv3/stucheckpoint/startPoint', params)
  },
  endPoint(params) {
    return request.post('/compositionv3/stucheckpoint/endPoint', params)
  },
  resetPoint(params) {
    return request.post('/compositionv3/stucheckpoint/resetPoint', params)
  },
  updateAnswer(params) {
    return request.post('/compositionv3/stucheckpoint/updateAnswer', params)
  },
  updatePoint(params) {
    return request.post('/compositionv3/stucheckpoint/updatePoint', params)
  },
  getWritingLessonInfo(params) {
    return request.get('/compositionv3/lesson/getWritingLessonInfo', params)
  },
  listWritingLessonCatalog(params) {
    return request.get('/compositionv3/lesson/listWritingLessonCatalog', params)
  },
  pageWritingLessonCatalog(params) {
    return request.get('/compositionv3/lesson/pageWritingLessonCatalog', params)
  },
  setUpPlayback() {
    return request.get('/compositionv3/lesson/setUpPlayback')
  },
  pageCompanionHomeWork(params) {
    return request.get('/compositionv3/lesson/pageCompanionHomeWork', params)
  },
  finishWritingLesson(params) {
    return request.get('/compositionv3/lesson/finishWritingLesson', params)
  },
  getLearnReportB(params) {
    return request.get('/compositionv3/study/getLearnReportB', params)
  }
}

export default study
