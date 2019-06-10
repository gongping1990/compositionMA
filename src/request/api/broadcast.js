import request from '../index'

const broadcast = {
  getBroadcastList(params) {
    return request.post('/broadcast/getBroadcastList', params)
  }

}

export default broadcast
