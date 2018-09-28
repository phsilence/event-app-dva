import { getGridItemList } from '../../services/gridItems';

const [page, pageSize] = [1, 10];
export default {
    namespace: 'gridItemManage',
    state: {
        list: [],
        activeItemState: 1,
    },
    subscriptions: {
        setup({ dispatch, history }){
            history.listen(location => {
                if(location.pathname === '/gridItemManage'){
                    dispatch({
                        type: 'query',
                        payload: {
                            page: page,
                            pageSize: pageSize,
                            itemType: 1,
                        },
                    });
                }
            });
        }
    },
    effects: {
        *query({ payload }, { call, put }){
            const { itemType } = payload;
            const { data } = yield call(getGridItemList, payload);
            if(data){
                yield put({
                    type: 'querySuccess',
                    payload: {
                        list: data,
                        activeItemState: itemType,
                    },
                });
            }else{
                // yield put()
            }
        },
        *create(){},
        *update(){},
    },
    reducers: {
        'delete'(state, { payload: id }){
            const newList = state.list.filter(item => item.id !== id);
            return {...state, list: newList};
        },
        showLoading(){},// 控制加载状态的reducer
        querySuccess(state, { payload }){
            return {...state, ...payload, loading: true};// 合并对象
        },
        createSuccess(){},
        deleteSuccess(){},
    }
};