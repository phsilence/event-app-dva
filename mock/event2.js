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
    eventSites:['南湖', '关山', '光谷'],
    eventSoures:['区级下派', '群众上报'],
    eventDeadlines:['一年','一个月','一周','一天'],
    // constellation: function(date){
    //     return this.pick(this.eventTypes)
    // }
})
let db=Mock.mock({
    'data|15-20':[{
        'number|+1': 1,
        'id':'@id',
        'eventTitle':'@eventTitles',
        'eventSite':'@eventSites',
        'eventSoure':'@eventSoures',
        'eventType':'@eventTypes',
        'eventDeadline':'@eventDeadlines',
    }]
})
export function getList(req,res) {
  let tem = assign({},db)
  if(req.body.name){
    let data = db.data.filter( e => e.eventTitle.indexOf(req.body.name) !== -1)
    tem.data = data;
  }
  res.status(200).json(tem);
}

export function addEvent(req,res) {
  let e=req.body;
  console.log(req);
  e.id=Mock.mock('@id');
  e.number=db.data.length+1;
  db.data.push(e);

  res.status(200).json(e);
}

export function removeEvent(req,res) {
  let t=req.body;
  console.log(`后台删除${t.id}`)
  let data = db.data.filter( e => e.id !== t.id )
  db.data = data;
  res.status(200).json(db);
}

export function batchDelete(req,res) {
  let t=req.body;
  console.log('后台批量删除')
  console.log(t.ids)
  let data = db.data.filter( e => !t.ids.find( n => n === e.id))
  db.data = data;
  //console.log(data)
  res.status(200).json(db);
}


export function updateEvent(req,res) {
  let event=req.body;
  for (let i=0 ; i < db.data.length ;i++){
    if(db.data[i].id === event.id){
      db.data[i] = event
    }
  }
  res.status(200).json(event);
}
