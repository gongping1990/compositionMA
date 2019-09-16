import { handleActions } from 'redux-actions'
import {
  UPDATE_USERINFO,
  UPDATE_TAB_REMIND,
  CHANGE_LOGIN_STATUS
} from '../types/user'

export default handleActions(
  {
    [UPDATE_USERINFO](state, action) {
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
    },
    [CHANGE_LOGIN_STATUS](state, action) {
      return {
        ...state,
        logined: action.payload
      }
    }
  },
  {
    userInfo: {},
    remindData: {},
    logined: false
  }
)
