import request from '../utils/request';

export function query(query) {
  /*console.log('qqqqqqqqqqqqq');
  console.log(query.payload);
  console.log(JSON.stringify(query.payload));*/
  return request('/api/eventorder',{
    body:JSON.stringify(query.payload),
    method:'POST'
  });
}

/*export function remove(params) {
  return request('/api/remove',{
    body:JSON.stringify(params),
    method:'POST'
  })
}*/

