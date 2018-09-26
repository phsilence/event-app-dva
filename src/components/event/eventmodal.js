import React,{Component} from 'react'
import { Modal,Form,Input} from 'antd'

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
        title: item.name ? item.name : '新增',
        visible,
        width: 800,
        onCancel,
        wrapClassName: 'vertical-center-modal',
        className: 'test'
      }
      console.log('模态框')
      console.log(modalOpts)
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
              onOk(val);
            })
        }


        return(
            <div>
                {/*<span onClick={ showModal}>*/}
                    {/*{children}*/}
                {/*</span>*/}
                <Modal
                  {...modalOpts}
                  onOk={save}
                >
                    <Form>
                        <Form.Item label="事件标题">
                            {
                                getFieldDecorator('eventTitle',{
                                    initiaValue:item.eventTitle
                                })(<Input/>)
                            }
                        </Form.Item>
                        <Form.Item label="位置说明">
                            {
                                getFieldDecorator('eventSite',{
                                    initiaValue:item.eventSite
                                })(<Input/>)
                            }
                        </Form.Item>
                        <Form.Item label="来源渠道">
                            {
                                getFieldDecorator('eventSoure',{
                                    initiaValue:item.eventSoure
                                })(<Input/>)
                            }
                        </Form.Item>
                        <Form.Item label="事件类型">
                            {
                                getFieldDecorator('eventType',{
                                    initiaValue:item.eventType
                                })(<Input/>)
                            }
                        </Form.Item>
                        <Form.Item label="处置期限">
                            {
                                getFieldDecorator('eventDeadline',{
                                    initiaValue:item.eventDeadline
                                })(<Input/>)
                            }
                        </Form.Item>
                    </Form>

                </Modal>
            </div>
        )


    }
}


export default Form.create()(EventModal)
