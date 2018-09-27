import React from 'react'
import PropTypes from 'prop-types'
import {connect} from 'dva'

import EventList from '../components/event/eventlist'
import EventModal from '../components/event/eventmodal'


function App({app,location,dispatch,reportingEvent}) {
  const { loading, list, pagination, currentItem, modalVisible, modalType } = reportingEvent;

  /**
   * 弹窗组件
   * @type {{item: {}, type: *, visible: *, onOk(*=): void, onCancel(): void}}
   */
  const eventModalProps = {
    item: modalType === 'create' ? {} : currentItem,
    type: modalType,
    visible: modalVisible,
    record:{},
    dataSource: list,
    onOk (data) {
      const value = data

      console.log('模态框值')
      console.log(value)
      value.currentPage = pagination.currentPage
      value.pageSize = pagination.pageSize
      dispatch({
        type: `reportingEvent/${modalType}`,
        payload: value
      });
    },
    //确认弹框

    onCancel () {
      dispatch({
        type: 'reportingEvent/hideModal'
      });
    },
  };

  /**
   * 列表组件
   * @type {{dataSource: *, loading: *, pagination: *, onPageChange(*, *, *): void, onDeleteItem(*=): void, onEditItem(*=): void}}
   */
  const eventListProps = {
    dataSource: list,
    loading,
    pagination: pagination,
    onPageChange (pagination, filters, sorter) {
      dispatch({
        type: 'reportingEvent/query',
        payload: {
          //当前页
          currentPage: pagination.current,
          //每页数量
          pageSize: pagination.pageSize,
          insInfo: sorter.insInfo,
          //排序方式
          orderBy: sorter.field,
          ...filters

        }
      });


    },

    /**
     * 批量删除
     * @param  {[type]} item [description]
     * @return {[type]}      [description]
     */
    onBatchDelete(item){
      dispatch({
        type: 'reportingEvent/batchDelete',
        payload: item
      })

    },

    showDeleteConfirm(item) {
/*      confirm({
        title: 'Are you sure delete this task?',
        content: 'Some descriptions',
        okText: 'Yes',
        okType: 'danger',
        cancelText: 'No',
        onOk() {
          dispatch({
            type: 'reportingEvent/delete',
            payload: item.id
          });
        },
        onCancel() {

        },
      });*/
    },
    //操作列删除
    onDeleteItem (item) {
      dispatch({
        type: 'reportingEvent/delete',
        payload: item.id
      });
    },
    //弹窗显示可编辑内容
    onEditItem (item) {
      console.log(item)
      dispatch({
        type: 'reportingEvent/loadModalTree',
        payload: {
          modalType: 'update',
          currentItem: item
        }
      });
    },
    //弹窗查看详情
    onClickCheck (item) {
      dispatch({
        type: 'reportingEvent/showModal',
        payload: {
          modalType: 'queryDetail',
          currentItem: item
        }
      });
    },
    //新增用户
    onAdd () {
      dispatch({
        type: 'reportingEvent/loadModalTree',
        payload: {
          modalType: 'create'
        }
      });
    },
    handleCancel() {

    }
  };

  return (
    <div>
      <EventList {...eventListProps} />
      <EventModal {...eventModalProps} />
    </div>
  );

}

App.propTypes = {
  reportingEvent: PropTypes.object,
  location: PropTypes.object,
  dispatch: PropTypes.func
}

function mapStateToProps({ reportingEvent,app }) {
  return { reportingEvent,app };
}

export default connect(mapStateToProps)(App);
