import api from '../request/api'

export function saveFormId(formId) {
  api.user.saveFormId({ formId })
}
