import {getReportedEvent} from '../services/eventreported'
import {message} from 'antd'

const param = {}

export default {
  namespace: 'reportedEvent',
  state: {
    /*table state 表格的state 更新list及刷新表格*/
    list: [],
    loading:false,
    pagination:{
      current : 1,
      total: null,
    },
    /*modal state*/
    currentItem: {},
    modalVisible: false,
    modalType: 'create',
  },
  subscriptions: {
    setup({dispatch,history}){
      history.listen(location => {
        if(location.pathname === '/main/eventReported'){
          dispatch({
            type: 'query',
            payload : {
              pageSize: 10,
              currentPage: 0
            }
          })
        }
      })
    }
  },
  effects : {
    *query({payload},{call,put}){
      yield put({type:'showLoading'});
        const data = yield call(getReportedEvent,payload);
        if(data){
          yield put({
            type: 'querySuccess',
            payload:{
              list: data,
            }
          })
        }else {
          yield put({
            type: 'queryFaild',
            payload: {
              msg: '查询失败'
            }
          })
        }
      }
    },
  reducers: {
    showLoading (state) {
      return { ...state, loading: true }
    },
    hideLoading (state) {
      return { ...state, loading: false }
    },
    querySuccess (state, action) {
      return { ...state, ...action.payload, loading: false }
    },
    queryFaild (state, action) {
      message.destroy()
      message.error(action.payload.msg);
      return { ...state, ...action.payload, loading: false }
    },
  },
}
