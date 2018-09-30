import {getList,addEvent,removeEvent,updateEvent,batchDelete} from './mock/event2';
import gridItems from './mock/gridItems';
import {getReportedList} from './mock/reportedevent';
import {getEventOrder} from './mock/eventorder_mock';

export default {
  /* 入格事项相关接口 */
  ...gridItems,
  'POST /api/events': (req, res) => getList(req, res),
  'POST /api/addevents': (req, res) => addEvent(req, res),
  'POST /api/remove': (req, res) => removeEvent(req, res),
  'POST /api/update': (req, res) => updateEvent(req, res),
  'POST /api/batchDelete': (req, res) => batchDelete(req, res),
  'POST /api/reportedevents' : (req,res) => getReportedList(req,res),
  'POST /api/eventorder' :(req,res) =>getEventOrder(req,res),
};
