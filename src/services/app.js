import request from '../utils/request'

export function addEvent(params) {
  return request('/api/addevents',{
    body:JSON.stringify(params),
    method:'POST'
  })
}


export function getMenus(params) {
  return request('/api/addevents',{
    body:JSON.stringify(params),
    method:'POST'
  })
}

