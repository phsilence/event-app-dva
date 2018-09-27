const Mock=require('mockjs');
var Random = Mock.Random;
Random.extend({
    eventTypes: ['家庭、邻里纠纷调适', '人户分离管理', '其它事项'],
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
  console.log(db);
  res.status(200).json(db);
}
