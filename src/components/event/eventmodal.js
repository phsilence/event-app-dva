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
        title: type !== 'create' ?  '编辑' : '新增',
        visible,
        width: 800,
        onCancel,
        wrapClassName: 'vertical-center-modal',
        className: 'test'
      }
      console.log('编辑')
      console.log(item.eventTitle)
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
              let data = type !== 'create' ?  val.assign() : val;
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
                                  initialValue:item.eventTitle
                                })(<Input/>)
                            }
                        </Form.Item>
                        <Form.Item label="位置说明">
                            {
                                getFieldDecorator('eventSite',{
                                  initialValue:item.eventSite
                                })(<Input/>)
                            }
                        </Form.Item>
                        <Form.Item label="来源渠道">
                            {
                                getFieldDecorator('eventSoure',{
                                  initialValue:item.eventSoure
                                })(<Input/>)
                            }
                        </Form.Item>
                        <Form.Item label="事件类型">
                            {
                                getFieldDecorator('eventType',{
                                  initialValue:item.eventType
                                })(<Input/>)
                            }
                        </Form.Item>
                        <Form.Item label="处置期限">
                            {
                                getFieldDecorator('eventDeadline',{
                                  initialValue:item.eventDeadline
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
