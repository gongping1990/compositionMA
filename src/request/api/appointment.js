import request from '../index'

const appointment = {
  appointmentLesson(params) {
    return request.get('/compositionv2/appointment/appointmentLesson', params)
  },
  getAppointmentCatalog(params) {
    return request.post(
      '/compositionv2/appointment/getAppointmentCatalog',
      params
    )
  }
}

export default appointment
