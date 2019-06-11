import request from '../index'

const operate = {
  reserveCourse(params) {
    return request.post('/operate/reserveCourse', params)
  },
  startLessonStudy(params) {
    return request.post('/operate/startLessonStudy', params)
  },
  recordstopTimePoint(params) {
    return request.post('/operate/recordstopTimePoint', params)
  },
  finishWarmUp(params) {
    return request.post('/operate/finishWarmUp', params)
  },
  finishClassroomTest(params) {
    return request.post('/operate/finishClassroomTest', params)
  }
}

export default operate
