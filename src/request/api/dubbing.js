import request from '../index'

const dubbing = {
  getDubbingByType(params) {
    return request.get('/compositionv3/dubbing/getDubbingByType', params)
  }
}

export default dubbing
