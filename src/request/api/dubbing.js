import request from '../index'

const dubbing = {
  getDubbingByType(params) {
    return request.get('/compositionv2/dubbing/getDubbingByType', params)
  }
}

export default dubbing
