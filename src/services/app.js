import request from '../utils/request'

export function addEvent(params) {
  return request('/api/addevents',{
    body:JSON.stringify(params),
    method:'POST'
  })
}

export function getReportingEvent(params) {
  return request('/api/events',{
    body:JSON.stringify(params),
    method:'POST'
  })
}

export function remove(params) {
  return request('/api/remove',{
    body:JSON.stringify(params),
    method:'POST'
  })
}

export function batchDelete(params) {
  return request('/api/batchDelete',{
    body:JSON.stringify(params),
    method:'POST'
  })
}


export function update(params) {
  return request('/api/update',{
    body:JSON.stringify(params),
    method:'POST'
  })
}



export function getMenus(params) {
  return request('/api/getMenus',{
    body:JSON.stringify(params),
    method:'POST'
  })
}

