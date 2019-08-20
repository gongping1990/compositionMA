import { UPDATE_USERINFO, UPDATE_TAB_REMIND } from '../types/user'
import { createAction } from 'redux-actions'

export const updateUserInfo = createAction(UPDATE_USERINFO, payload => {
  console.log(payload)
  return payload
})

export const updateRemind = createAction(UPDATE_TAB_REMIND, payload => {
  return payload
})
