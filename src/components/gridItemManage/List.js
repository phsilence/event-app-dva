import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Table,Button,Popconfirm } from 'antd';

class List extends Component {
    constructor(props){
        super(props);
        const { onDeleteItem } = this.props;
        this.columns = [
            {
                title: '申请单位',
                dataIndex: 'applicationDepartment',
            },{
                title: '版本号',
                dataIndex: 'applicationVersion',
            },{
                title: '事项名称',
                dataIndex: 'applicationName',
            },{
                title: '事项类型',
                dataIndex: 'itemType',
            },{
                title: '主办部门',
                dataIndex: 'mainDepartment',
            },{
                title: '申请日期',
                dataIndex: 'createTime',
            },{
                title: '操作',
                render: (text,record) => {
                    return (
                        <span>
                        <Popconfirm title="删除？" onConfirm={() => onDeleteItem(record.id)}>
                            <Button>Delete</Button>
                        </Popconfirm>
                        <Button style={{display: this.props.activeItemState === '2' ? 'inline-block' : 'none',}}>Edit</Button>
                        </span>
                    );
                },
            }
        ];
    }

    render(){
        return (
            <Table
            dataSource={this.props.dataSource}
            columns={this.columns}
            rowKey={record => record.id}
            />
        );
    }
}

List.propTypes = {
    dataSource: PropTypes.array.isRequired,
};

export default List;