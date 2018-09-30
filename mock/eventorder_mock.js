import assign from 'core-js/library/fn/object/assign'
const Mock=require('mockjs');

var Random = Mock.Random;
Random.extend({
  eventTypes: ['新增事件', '更新事件', '删除事件'],
  // eventTitles:['偷井盖了', '掉井盖里了', '找回井盖了'],
   eventSites:['南湖', '关山', '光谷'],
  // eventSoures:['区级下派', '群众上报'],
  // eventDeadlines:['一年','一个月','一周','一天'],
  // constellation: function(date){
  //     return this.pick(this.eventTypes)
  // }
});
let db=Mock.mock({
  'data|15-20':[{
    'id|+1': 1,
    'reaItem':'@eventSites',
    'reaContent':'@eventTypes',
    'commitTime':'@DATETIME("yyyy-MM-dd HH:mm:ss")'
    // 'eventSite':'@eventSites',
    // 'eventSoure':'@eventSoures',
    // 'eventType':'@eventTypes',
    // 'eventDeadline':'@eventDeadlines',
  }]
});

export function getEventOrder(req,res){
  const params = req.body;

  //当前页
  const current = params.pagination.current;
  //每页数量
  const pageSize = params.pagination.pageSize;

  const total = db.data.length;

  //开始索引
  const begin = (current-1)*pageSize;
  //结束索引
  const end = ((begin+pageSize+1)>(total))?(total):(begin+pageSize);


  const result={
    data:db.data.slice(begin,end),
    pagination:{
      current:current,
      hideOnSinglePage:false,
      pageSize:pageSize,
      total:total,
    }
  };
  res.status(200).json(result);
}

/*module.exports={
  [`POST /api/eventorder`](req,res){

    const params = req.body;

    //当前页
    const current = params.pagination.current;
    //每页数量
    const pageSize = params.pagination.pageSize;

    const total = db.data.length;

    //开始索引
    const begin = (current-1)*pageSize;
    //结束索引
    const end = ((begin+pageSize+1)>(total))?(total):(begin+pageSize);


    const result={
      data:db.data.slice(begin,end),
      pagination:{
        current:current,
        hideOnSinglePage:false,
        pageSize:pageSize,
        total:total,
      }
    };
    res.status(200).json(result);
  },

  /!*[`POST /api/remove`](req,res) {
    let t=req.body;
    console.log(`后台删除${t.id}`)
    let data = db.data.filter( e => e.id !== t.id )
    db.data = data;
    res.status(200).json(db);
  }*!/
};*/
