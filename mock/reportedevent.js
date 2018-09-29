import assign from 'core-js/library/fn/object/assign'
const Mock=require('mockjs');
var Random = Mock.Random;
Random.extend({
  eventTypes: [{'dataType':'sbss','data':'门派采集'},
    {'dataType':'sbss','data':'有路无名整治'},
    {'dataType':'sbss','data':'本市户籍人户分离管理'},
    {'dataType':'sbss','data':'有路无名整治'},
    {'dataType':'sqwg','data':'信息采集'},
    {'dataType':'sqwg','data':'网格事件'},
    {'dataType':'sqwg','data':'城市部件'},
  ],
    eventTitles:['偷井盖了', '掉井盖里了', '找回井盖了'],
    eventSites:['广东省广州市越秀区仁安新街6号', '越秀区珠光街203号', '广东省广州市越秀区青龙坊70号'],
    eventStates:['网格员上报','街镇业务部门受理','街镇网格中心分发'],
    // constellation: function(date){
    //     return this.pick(this.eventTypes)
    // }
})
let db=Mock.mock({
    'data|20-30':[{
        'number|+1': 1,
        'id':'@id',
        'eventTitle':'@eventTitles',
        'eventSite':'@eventSites',
        'eventType':'@eventTypes',
        'eventTime': '@date("yyyy-MM-dd HH:mm:ss")',
        'eventState':'@eventStates',
    }]
})
export function getReportedList(req,res) {
  let tem = assign({},db)
  if(req.body.name){
    let data = db.data.filter( e => e.eventTitle.indexOf(req.body.name) !== -1)
    tem.data = data;
  }
  res.status(200).json(tem);
}
