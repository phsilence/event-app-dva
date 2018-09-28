import React,{Component} from 'react'
import { Modal,Form,Input,Collapse,Icon,Radio } from 'antd'

class EventModal extends Component{
    constructor(props){
        super(props);
    }

    render(){
        const { item,visible, onCancel,handleOk,type,onOk,form: {
          getFieldDecorator,
          validateFields,
          getFieldsValue,
          setFieldsValue,
          resetFields
        },} = this.props;
      const modalOpts = {
        title: type !== 'create' ?  '编辑' : '新增',
        visible,
        width: 800,
        onCancel,
        wrapClassName: 'vertical-center-modal',
        className: 'test'
      }
      console.log('编辑')
      console.log(item)
      console.log('编辑ss')
/*
        const showModal = () => {
            this.setState({
                visible:true
            })
        };
        const hideModal = () => {
            this.setState({
                visible:false
            })
        };*/

        const save = () => {
            this.props.form.validateFields((err,val) => {
              let data = type !== 'create' ?  Object.assign(val,{id : item.id},{number : item.number}) : val;
              onOk(data);
            })
        }

        const restFrom =() => {
          resetFields()
        }

      const formItemLayout = {
        labelCol: { span: 4 },
        wrapperCol: { span: 14 },
      }
        return(
            <div>
                {/*<span onClick={ showModal}>*/}
                    {/*{children}*/}
                {/*</span>*/}
                <Modal
                  {...modalOpts}
                  onOk={save}
                  afterClose={restFrom}
                >
                  <Form layout="horizontal">
                  <Collapse defaultActiveKey={['1','2','3','4']}>
                    <Collapse.Panel header="事件信息" key="1">
                        <Form.Item label="事件类型"    {...formItemLayout}>
                          {
                            getFieldDecorator('eventType',{
                              initialValue:item.eventType ? item.eventType.dataType : {}
                            })( <Radio.Group  defaultValue={'sbss'}>
                              <Radio value={'sbss'}>四标四实事项</Radio>
                              <Radio value={'sqwg'}>社区网格事项</Radio>
                            </Radio.Group>)
                          }
                        </Form.Item>
                        <Form.Item label="*事件标题"  {...formItemLayout}>
                            {
                                getFieldDecorator('eventTitle',{
                                  initialValue:item.eventTitle
                                })(<Input/>)
                            }
                        </Form.Item>
                        <Form.Item label="*位置说明"  {...formItemLayout}>
                            {
                                getFieldDecorator('eventSite',{
                                  initialValue:item.eventSite
                                })(<Input/>)
                            }
                        </Form.Item>
                        <Form.Item label="*来源渠道"  {...formItemLayout}>
                            {
                                getFieldDecorator('eventSoure',{
                                  initialValue:item.eventSoure
                                })(<Input/>)
                            }
                        </Form.Item>
                        <Form.Item label="*处置期限"  {...formItemLayout}>
                            {
                                getFieldDecorator('eventDeadline',{
                                  initialValue:item.eventDeadline
                                })(<Input/>)
                            }
                        </Form.Item>
                    </Collapse.Panel>
                    <Collapse.Panel header="涉及对象" key="2">
                      <span>涉及单位：</span> <span ><Icon type='plus-circle-o' style={{color: '#e58a1f', marginRight: '5px'}}/>新增</span><br/>
                      <span>涉及人员：</span> <span ><Icon type='plus-circle-o' style={{color: '#e58a1f', marginRight: '5px'}}/>新增</span>
                    </Collapse.Panel>
                    <Collapse.Panel header="附件信息" key="3">
                    </Collapse.Panel>
                    <Collapse.Panel header="上报人信息" key="4">
                    </Collapse.Panel>
                </Collapse>
                  </Form>
                </Modal>
            </div>
        )


    }
}


export default Form.create()(EventModal)
