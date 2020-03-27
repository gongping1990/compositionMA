import request from '../index'

const broadcast = {
  getBroadcastList(params) {
    return request.get('/compositionv2/broadcast/getBroadcastList', params)
  }
}

export default broadcast
