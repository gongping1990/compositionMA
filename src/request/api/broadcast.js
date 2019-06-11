import request from '../index'

const broadcast = {
  getBroadcastList(params) {
    return request.get('/broadcast/getBroadcastList', params)
  }

}

export default broadcast
