import { handleActions } from 'redux-actions'
import { UPDATE_USERINFO } from '../types/user'

export default handleActions({
  [UPDATE_USERINFO] (state, action) {
    return {
      ...state,
      userInfo: action.payload
    }
  }
}, {
  userInfo: {}
})
