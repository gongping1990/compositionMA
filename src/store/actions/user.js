import { UPDATE_USERINFO } from '../types/user'
import { createAction } from 'redux-actions'

export const updateUserInfo = createAction(UPDATE_USERINFO, payload => {
  return payload
})
