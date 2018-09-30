import React from 'react';
import orderTable from "./OrderTable.css";

const TablePage=()=>{


  return(
    <div>
    <div className={orderTable.paging}>
      <a name="btn-first" className={orderTable.paging_a}>首页</a>
      第 <input className={orderTable.put}/>页 共0页
      <a name="btn-next" className={orderTable.paging_a}>下一页</a>
      <a name="btn-last" className={orderTable.paging_a}>末页</a>
      <a name="btn-go" title="跳转" className={orderTable.paging_a}>跳转</a>

      <span className={orderTable.paging_span}>总条数：<i className={orderTable.paging_span_i}> 0 </i>条/每页<i className={orderTable.paging_span_i}> 10 </i>条</span>
    </div>
    </div>
  );


};

/*class TablePage extends React.Component{

  render(){
    return(
      <div>
        <div className="paging">
          <a name="btn-first" className="paging-a">首页</a>
          第 <input className="put"/>页 共0页
          <a name="btn-next" className="paging-a">下一页</a>
          <a name="btn-last" className="paging-a">末页</a>
          <a name="btn-go" title="跳转" className="paging-a">跳转</a>

          <span className="paging-span">总条数：<i className="paging-span-i"> 0 </i>条/每页<i className="paging-span-i"> 10 </i>条</span>
        </div>
      </div>
    )
  }
}*/
export default TablePage;
