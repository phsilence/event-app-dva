import {Table,Button,Divider,Icon} from 'antd'
import {connect} from 'dva'
import EventModal from './eventmodal'
import React, {  Component } from 'react'
import styles from './event.less'
class EventList extends  Component {

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

      const createEvent = (event) => {
        dispatch({
          type:'event/create',
          payload:{
            event
          }
        })
      }

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
          render: () => (
            <span>
                    <a href="javascript:;">查看详情</a>
                       <Divider type="vertical" />
                    <a href="javascript:;">编辑</a>
                      <Divider type="vertical" />
                    <a href="javascript:;">删除</a>
                 </span>
          )


        },
      ]
    return (
        <div>
            <EventModal record={{}}  ok={createEvent}>

                <span  style={{marginLeft:5}}><Icon type='plus-circle-o' style={{color:'#e58a1f',marginRight:'5px'}}/>新增</span>
              {'  '}
            </EventModal>

            <span style={{marginLeft:5}}><Icon type="delete"  style={{color:'#e58a1f',marginRight:'5px'}} />删除</span>

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


export default EventList
