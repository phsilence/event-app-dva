import  React,{Component} from 'react'
import { Modal,Form,Input,Collapse,Icon,Radio } from 'antd'

class EventTypeModal extends Component{
  constructor(props){
    super(props)
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
      title: 'sss',
      visible,
      width: 800,
      onCancel,
      wrapClassName: 'vertical-center-modal',
      className: 'test'
    }
    return (<div>
      <Modal {...modalOpts}>
        <Form layout="horizontal">
        <span>ssss</span>
        </Form>
      </Modal>

    </div>)
  }
}


export default Form.create()(EventTypeModal)
