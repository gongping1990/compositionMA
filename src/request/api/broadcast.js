import request from '../index'

const broadcast = {
  getBroadcastList(params) {
    return request.get('/compositionv3/broadcast/getBroadcastList', params)
  }
}

export default broadcast
