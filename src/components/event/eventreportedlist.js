import {Table} from 'antd'
import {connect} from 'dva'
import React, {  Component } from 'react'
import styles from './event.less'
class EventReportedList extends  Component {

  state = {
    selectedRowKeys: [], // Check here to configure the default column
    loading: false,
  };

  onSelectChange = (selectedRowKeys) => {
    console.log('selectedRowKeys changed: ', selectedRowKeys);
    this.setState({ selectedRowKeys });
  }

  render(){
    const {list,dispatch} = this.props;
    console.log(this.props.dataSource)
    const { loading, selectedRowKeys } = this.state;
    const rowSelection = {
      selectedRowKeys,
      onChange: this.onSelectChange,
    };

    const columns = [
      {
        title: '序号',
        dataIndex:'number'
      },
      {
        title: '事件编号',
        dataIndex: 'id',
        render: value => <a >{value}</a>,
      },
      {
        title: '事件标题',
        dataIndex: 'eventTitle',
        render: value => <a >{value}</a>,
      },
      {
        title: '位置说明',
        dataIndex: 'eventSite'
      },
      {
        title: '事件类型',
        dataIndex: 'eventType',
        render: value => (value.data)
      },
      {
        title: '事发时间',
        dataIndex: 'eventTime'
      },
      {
        title: '流转环节',
        dataIndex: 'eventState'
      },
    ]
    return (
      <div>
        <Table
          columns={columns}
          dataSource={this.props.dataSource.data}
          rowSelection={rowSelection}
          rowKey={ t=>t.id}
          pagination={true}
        >
        </Table>
      </div>
    )
  }
}


export default EventReportedList
