import request from '../index'

const center = {
  getMyCourse(params) {
    return request.get('/compositionv2/center/getMyCourse')
  },
  getUCRemindVO(params) {
    return request.get('/compositionv2/center/getUCRemindVO', params)
  },
  getMyGiftPackage(params) {
    return request.get('/compositionv2/center/getMyGiftPackage', params)
  },
  getRecipient(params) {
    return request.get('/compositionv2/center/getRecipient', params)
  },
  saveRecipient(params) {
    return request.post('/compositionv2/center/saveRecipient', params)
  },
  getServiceRemindVO(params) {
    return request.get('/compositionv2/center/getServiceRemindVO', params)
  },
  getBottomTipsVO(params) {
    return request.get('/compositionv2/center/getBottomTipsVO', params)
  },
  getSorceByRecordSource(params) {
    return request.get('/compositionv2/center/getSorceByRecordSource', params)
  }
}

export default center
