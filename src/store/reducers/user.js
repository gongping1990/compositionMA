import { handleActions } from 'redux-actions'
import { UPDATE_USERINFO, UPDATE_TAB_REMIND } from '../types/user'

export default handleActions({
  [UPDATE_USERINFO] (state, action) {
    return {
      ...state,
      userInfo: action.payload
    }
  },
  [UPDATE_TAB_REMIND](state, action) {
    return {
      ...state,
      remindData: action.payload
    }
  }
}, {
  userInfo: {},
  remindData: {}
})
