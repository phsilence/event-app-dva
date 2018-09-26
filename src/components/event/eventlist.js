import {Table, Button, Divider, Icon, notification, Popconfirm} from 'antd'
import {connect} from 'dva'
import EventModal from './eventmodal'
import PropTypes from 'prop-types'
import React, {Component} from 'react'
import styles from './event.less'

class EventList extends Component {

  constructor(props) {
    super(props);
    console.log(2222)
    console.log(props)
    this.state = {
      //选择的复选框
      selectedRowKeys: []
    };

    const {onClickCheck, onDeleteItem, onEditItem} = this.props
    this.onAdd = this.onAdd.bind(this)
    this.onBatchDelete = this.onBatchDelete.bind(this)


    this.columns = [
      {
        title: '序号',
        dataIndex: 'number'
      },
      {
        title: '事件编号',
        dataIndex: 'id',
        render: value => <a>{value}</a>,
      },
      {
        title: '事件标题',
        dataIndex: 'eventTitle',
        render: value => <a>{value}</a>,
      },
      {
        title: '位置说明',
        dataIndex: 'eventSite'
      },
      {
        title: '来源渠道',
        dataIndex: 'eventSoure'
      },
      {
        title: '事件类型',
        dataIndex: 'event_type'
      },
      {
        title: '处置期限',
        dataIndex: 'eventDeadline'
      },
      {
        title: '操作',
        render: (text, record) => (
          <span>
                    <a href="javascript:;" onClick={() => onClickCheck(record)}>查看详情</a>
                       <Divider type="vertical"/>
                    <a href="javascript:;" onClick={() => onEditItem(record)}>编辑</a>
                      <Divider type="vertical"/>
                    <Popconfirm title="确定删除该事件么？删除后将不能恢复" onConfirm={() => onDeleteItem(record)} okText="确定" cancelText="取消">
                       <a href="#">删除</a>
                     </Popconfirm>
                 </span>
        )


      },
    ]


  }

  onSelectChange = (selectedRowKeys) => {
    console.log('selectedRowKeys changed: ', selectedRowKeys);
    this.setState({selectedRowKeys});
  }
  onAdd = () => {
    let {onAdd} = this.props
    console.log(6666)
    onAdd()
  }
  //删除用户
  onClickDelete = (record) => {
    this.props.onDeleteItem(record.id);
  }

  onBatchDelete = (selectedRowKeys) => {
    let {onBatchDelete} = this.props
    let arr = this.state.selectedRowKeys;
    if (arr.length == 0) {
      this.openNotificationWithIcon('warning', '请选择至少一个需要删除的机构')
    } else {
      var ids = arr.join(',');
      onBatchDelete(ids)
    }
  }

  //全局信息提示框
  openNotificationWithIcon = (type, msg) => {
    notification[type]({
      message: '提示',
      description: msg,
    });
  }


  render() {
    const {list, dispatch} = this.props;
    console.log(this.props.dataSource)
    const {loading, selectedRowKeys} = this.state;
    const rowSelection = {
      selectedRowKeys,
      onChange: this.onSelectChange,
    };


    const aa = () => {
      console.log('ahhaha')
    }

    return (
      <div style={{paddingLeft:'10px'}}>
        <div style={{marginBottom:20}}>
          <span onClick={this.onAdd} ><Icon type='plus-circle-o' style={{color: '#e58a1f', marginRight: '5px'}}/>新增</span>

          <span className="ant-divider"></span>
          <span onClick={this.onBatchDelete} style={{marginLeft: 5}}><Icon type="delete" style={{
            color: '#e58a1f',
            marginRight: '5px'
          }}/>删除</span>
        </div>
        <Table
          columns={this.columns}
          dataSource={this.props.dataSource.data}
          rowSelection={rowSelection}
          rowKey={record => record.id}
          pagination={true}
        >
        </Table>
      </div>
    )
  }
}

EventList.propTypes = {
  onPageChange: PropTypes.func,
  onDeleteItem: PropTypes.func,
  onEditItem: PropTypes.func,
  onClickCheck: PropTypes.func,
  onAdd: PropTypes.func,
  onBatchDelete: PropTypes.func,
  dataSource: PropTypes.array,
  loading: PropTypes.any,
  pagination: PropTypes.any
}
export default EventList
