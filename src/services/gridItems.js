import request from '../utils/request';

export function getGridItemList(params) {
    return request('/api/gridItems',{
        body: JSON.stringify(params),
        method: 'POST',
    });
}