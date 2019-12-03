import { handleActions } from 'redux-actions'
import {
  UPDATE_USERINFO,
  UPDATE_TAB_REMIND,
  CHANGE_LOGIN_STATUS,
  UPDATE_AUDIO
} from '../types/user'

let userInfo = wx.getStorageSync('userInfo')
export default handleActions(
  {
    [UPDATE_USERINFO](state, action) {
      wx.setStorageSync('userInfo', action.payload)
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
    },
    [UPDATE_AUDIO](state, action) {
      return {
        ...state,
        audioList: action.payload
      }
    }
  },
  {
    userInfo: userInfo || {},
    remindData: {},
    logined: false,
    audioList: []
  }
)
