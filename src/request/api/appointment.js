import request from '../index'

const appointment = {
  appointmentLesson(params) {
    return request.get('/appointment/appointmentLesson', params)
  },
  getAppointmentCatalog(params) {
    return request.post('/appointment/getAppointmentCatalog', params)
  }
}

export default appointment
