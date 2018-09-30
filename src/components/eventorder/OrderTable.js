import React from 'react';
import {Table} from 'antd';

const OrderTable=({props})=>{

  const columns=[{
    title: '序号',
    dataIndex: 'id',
    key: 'id',
  },{
    title: '关联项',
    dataIndex: 'reaItem',
    key: 'reaItem',
  }, {
    title: '关联内容',
    dataIndex: 'reaContent',
    key: 'reaContent',
  }, {
    title: '上报时间',
    key: 'commitTime',
    dataIndex: 'commitTime',
  }];

  return(
    <Table columns={columns} dataSource={props.data} pagination={props.pagination}
           onChange={props.onChange} rowKey={record=>record.id}/>
  )
};
export default OrderTable;
