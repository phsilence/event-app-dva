import React from 'react'
import PropTypes from 'prop-types'
import {connect} from 'dva'

import EventReportedList from '../components/event/eventreportedlist'
import EventSearch from '../components/event/eventseach'


function EventReported({eventreported,location,dispatch,reportedEvent}) {
  const { loading, list, pagination, currentItem, modalVisible, modalType } = reportedEvent;
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
        type: 'reportedEvent/query',
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
    //弹窗查看用户详情
    /*onClickCheck (item) {
      dispatch({
        type: 'reportingEvent/showModal',
        payload: {
          modalType: 'queryDetail',
          currentItem: item
        }
      });
    },*/
  };

  const eventSearchProps = {
    /*    field,
        keyword,*/
    onSearch (fieldsValue) {
      dispatch({
        type: 'reportedEvent/query',
        payload: {
          name: fieldsValue.keyword
        }
      });

    },
    onReload () {
      dispatch({
        type: 'reportedEvent/query',
        payload: {

        }
      });
    }
  };

  return (
    <div>
      <EventSearch {... eventSearchProps }/>
      <EventReportedList {...eventListProps} />
    </div>
  );

}

EventReported.propTypes = {
  insInfo: PropTypes.object,
  location: PropTypes.object,
  dispatch: PropTypes.func
}

function mapStateToProps({ reportedEvent,eventreported }) {
  return { reportedEvent,eventreported };
}

export default connect(mapStateToProps)(EventReported);
