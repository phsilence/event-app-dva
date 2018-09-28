import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Form, Button, Row, Input, DatePicker, Col, Select, Icon } from 'antd';

const FormItem = Form.Item;

class SearchBox extends Component {
    constructor(props){
        super(props);
        this.state = {
            expand: false,
        };
    }

    toggle = () => {
        const { expand } = this.state;
        this.setState({ expand: !expand });
    }

    render(){
        const { form: { getFieldDecorator } } = this.props;
        return (
            <div>
                <Form layout='inline'>
                    <Row>
                        <Col span={5} key='applicationDepartment'>
                            <FormItem label="申请单位">
                            {getFieldDecorator('applicationDepartment')(
                                <Input />
                            )}
                            </FormItem>
                        </Col>
                        <Col span={5} key='mainDepartment'>
                            <FormItem label="主办部门">
                            {getFieldDecorator('mainDepartment')(
                                <Input />
                            )}
                            </FormItem>
                        </Col>
                        <Col span={5} key='itemType'>
                            <FormItem label="事项类型">
                            {getFieldDecorator('itemType')(
                                <Select style={{width: 150,}} />
                            )}
                            </FormItem>
                        </Col>
                        <Col span={8} style={{ textAlign: 'right' }}>
                            <Button type="primary" icon="search" htmlType="submit">搜索</Button>
                            <Button style={{ marginLeft: 8 }} onClick={this.handleReset}>Clear</Button>
                            <a style={{ marginLeft: 8, fontSize: 12 }} onClick={this.toggle}>
                            <Icon type={this.state.expand ? 'up' : 'down'} />
                            </a>
                        </Col>
                    </Row>
                    <Row>
                        <Col style={{ display: this.state.expand ? 'block' : 'none' }}>
                            <FormItem label="申请日期">
                                <Col span={11}>
                                    <FormItem style={{marginRight: 0,}}>
                                    {getFieldDecorator('startTime')(
                                        <DatePicker placeholder='请选择日期' />
                                    )}
                                    </FormItem>
                                </Col>
                                <Col span={2}>
                                    <span style={{ display: 'inline-block', width: '100%', textAlign: 'center' }}>
                                    -
                                    </span>
                                </Col>
                                <Col span={11}>
                                    <FormItem style={{marginRight: 0,}}>
                                        {getFieldDecorator('endTime')(
                                            <DatePicker placeholder='请选择日期' />
                                        )}
                                    </FormItem>
                                </Col>
                            </FormItem>
                        </Col>
                    </Row>
                </Form>
            </div>
        );
    }
}

SearchBox.propTypes = {
    // fields: PropTypes.array.isRequired,
}

export default Form.create()(SearchBox);