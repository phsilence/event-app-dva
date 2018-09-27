import request from '../utils/request'

export function getReportedEvent(params) {
  return request('/api/reportedevents',{
    body:JSON.stringify(params),
    method:'POST'
  })
}

