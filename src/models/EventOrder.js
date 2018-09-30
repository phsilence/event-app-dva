import * as eventorderservice from '../services/eventOrderService';

export default {
  namespace: 'eventorder',

  state: {
    data:[],
    pagination:{
      current:null,
      hideOnSinglePage:null,
      pageSize:null,
      total:null,
    }
  },

  subscriptions: {
    setup({ dispatch, history }) {  // eslint-disable-line
      history.listen(location=>{
        if(location.pathname==='/eventorder'){
          dispatch({
            type:'fetch'
          });
        }
      })
    },
  },

  effects: {
    *fetch({ payload }, { call, put }) {  // eslint-disable-line
      //console.log(payload);
      //alert('yong service');
      const result =  yield call(eventorderservice.query,{payload:{
        data:[],
        pagination:{
          current:1,
          hideOnSinglePage:true,
          pageSize:4,
          total:0,
        },
        }});
      console.log("aaaaaaaaaaaaaaa");
      console.log(result);
      yield put({
        type: 'save',
        payload:result
      });
    },
    *queryByPage({payload},{call,put}){
      console.log('query by page..');
      console.log(payload);

      const result = yield call(eventorderservice.query,{payload:{
        pagination:{
            current:payload.current,
            hideOnSinglePage:payload.hideOnSinglePage,
            pageSize:payload.pageSize,
            total:payload.total,
          },}});

      yield put({
        type:'save',
        payload:result
      });
    }
  },

  reducers: {
    save(state, action) {
      return { ...state, ...action.payload };
    },
  },
}
