import assign from 'core-js/library/fn/object/assign'
import {getList,addEvent,removeEvent,updateEvent,batchDelete} from './mock/event2';
import gridItems from './mock/gridItems';


const gram1 = {
  'POST /api/events': (req, res) => getList(req, res),
  'POST /api/addevents': (req, res) => addEvent(req, res),
  'POST /api/remove': (req, res) => removeEvent(req, res),
  'POST /api/update': (req, res) => updateEvent(req, res),
  'POST /api/batchDelete': (req, res) => batchDelete(req, res),
};

export default assign(gram1, gridItems);
