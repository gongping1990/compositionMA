import request from '../index'

const openTime = {
  listOpenTimeConfig(params) {
    return request.get('/compositionv3/opentime/listOpenTimeConfig')
  },
  configOpenTime(params) {
    return request.post('/compositionv3/opentime/configOpenTime', params,'application/json')
  }
  // configOpenTime(params) {
  //   return request.post('/compositionv3/opentime/configOpenTime', params)
  // }
}

export default openTime
