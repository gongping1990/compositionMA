import request from '../index'

const center = {
  getMyCourse(params) {
    return request.get('/compositionv3/center/getMyCourse', {
      category: '3'
    })
  },
  getUCRemindVO(params) {
    return request.get('/compositionv3/center/getUCRemindVO', {
      ...params,
      category: '3'
    })
  },
  getMyGiftPackage(params) {
    return request.get('/compositionv3/center/getMyGiftPackage', {
      ...params,
      category: '3'
    })
  },
  getRecipient(params) {
    return request.get('/compositionv3/center/getRecipient', params)
  },
  saveRecipient(params) {
    return request.post('/compositionv3/center/saveRecipient', params)
  },
  getServiceRemindVO(params) {
    return request.get('/compositionv3/center/getServiceRemindVO', {
      ...params,
      category: '3'
    })
  },
  getBottomTipsVO(params) {
    return request.get('/compositionv3/center/getBottomTipsVO', {
      ...params,
      category: '3'
    })
  },
  getSorceByRecordSource(params) {
    return request.get('/compositionv3/center/getSorceByRecordSource', params)
  },
  getVersionControl(params) {
    return request.get('/compositionv3/vermanage/v2/getVersionControl', {
      ...params,
      category: '3'
    })
  }
}

export default center
