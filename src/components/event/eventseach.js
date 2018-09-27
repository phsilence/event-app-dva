import PropTypes from 'prop-types'
import React, {Component} from 'react'
import { Form, Input, Button, Select  } from 'antd'
import styles from './event.less'


class EventSearch extends Component{
  constructor(props){
    super(props)
  }

  render(){
    const {field, keyword, onSearch, onReload,
      form: {
        getFieldDecorator,
        validateFields,
        getFieldsValue
      },
    } = this.props;



    const handleSubmit = (e) => {
      e.preventDefault()
      validateFields((errors) => {
        if (errors) {
          return
        }
        onSearch(getFieldsValue())
      })
    }

    const refreshTabel  = () =>{
      onReload()
    }



    return (
      <div style={{marginBottom: 20}}>
        <div>
          <Form layout="inline">
            <Form.Item hasFeedback label='事件标题'>
              {getFieldDecorator('keyword', {
                initialValue: keyword || ''
              })(<Input size="middle" style={{width:200}} />)}
            </Form.Item>
            <Button type='primary' icon="search" onClick={handleSubmit} style={{marginRight:10}}>搜索</Button>
            <Button type='primary' onClick={refreshTabel} style={{backgroundColor: '#f5f6f7',border:'1px solid #d9d9d9',color:'#565656'}}>重置</Button>
          </Form>
        </div>
      </div>
    )

  }



}
EventSearch.propTypes = {
  form: PropTypes.object.isRequired,
  onSearch: PropTypes.func,
  onReload: PropTypes.func,
  onAdd: PropTypes.func,
}

export default Form.create()(EventSearch)
