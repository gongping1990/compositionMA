import request from '../index'

const appointment = {
  appointmentLesson(params) {
    return request.get('/compositionv3/appointment/appointmentLesson', params)
  },
  getAppointmentCatalog(params) {
    return request.post(
      '/compositionv3/appointment/getAppointmentCatalog',
      params
    )
  }
}

export default appointment
