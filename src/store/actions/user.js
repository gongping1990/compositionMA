import {
  UPDATE_USERINFO,
  UPDATE_TAB_REMIND,
  CHANGE_LOGIN_STATUS
} from '../types/user'
import { createAction } from 'redux-actions'

export const updateUserInfo = createAction(UPDATE_USERINFO, payload => {
  return payload
})

export const updateRemind = createAction(UPDATE_TAB_REMIND, payload => {
  return payload
})

export const changeLoginStatus = createAction(CHANGE_LOGIN_STATUS, payload => {
  return payload
})
