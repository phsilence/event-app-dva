import React from 'react';
import OrderTable from '../components/eventorder/OrderTable'
import {connect} from 'dva';
import TablePage from '../components/eventorder/TablePage';

const EventOrder=({dispatch,eventorder})=>{

  const orderTable={
    data:eventorder.data,
    pagination:eventorder.pagination,
    onChange(page){
      //alert(page.current);
      console.log(page);
      dispatch({
        type:'eventorder/queryByPage',
        payload:page
      })
    }
  };

  console.log(eventorder);

  return(
    <React.Fragment>
      <div>
        <h1>EventOrder</h1>
        <hr/>
        <OrderTable props={orderTable}/>
      </div>

      <hr/>
      <hr/>
      <TablePage/>
    </React.Fragment>

  );
};
export default connect(
  ({eventorder})=>({eventorder})
) (EventOrder);
