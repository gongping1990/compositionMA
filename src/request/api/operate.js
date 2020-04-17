import request from '../index'

const operate = {
  reserveCourse(params) {
    return request.post('/compositionv3/operate/reserveCourse', params)
  },
  startLessonStudy(params) {
    return request.post('/compositionv3/operate/startLessonStudy', params)
  },
  recordstopTimePoint(params) {
    return request.post('/compositionv3/operate/recordstopTimePoint', params)
  },
  finishWarmUp(params) {
    return request.post('/compositionv3/operate/finishWarmUp', params)
  },
  finishClassroomTest(params) {
    return request.post('/compositionv3/operate/finishClassroomTest', params)
  }
}

export default operate
