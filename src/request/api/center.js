import request from '../index'

const center = {
  getMyCourse(params) {
    return request.get('/compositionv3/center/getMyCourse')
  },
  getUCRemindVO(params) {
    return request.get('/compositionv3/center/getUCRemindVO', params)
  },
  getMyGiftPackage(params) {
    return request.get('/compositionv3/center/getMyGiftPackage', params)
  },
  getRecipient(params) {
    return request.get('/compositionv3/center/getRecipient', params)
  },
  saveRecipient(params) {
    return request.post('/compositionv3/center/saveRecipient', params)
  },
  getServiceRemindVO(params) {
    return request.get('/compositionv3/center/getServiceRemindVO', params)
  },
  getBottomTipsVO(params) {
    return request.get('/compositionv3/center/getBottomTipsVO', params)
  },
  getSorceByRecordSource(params) {
    return request.get('/compositionv3/center/getSorceByRecordSource', params)
  },
  getSystemConfigType(params) {
    return request.get('/compositionv3/systemconfig/getSystemConfigType', params)
  }
}

export default center
