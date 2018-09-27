import {getList,addEvent,removeEvent,updateEvent} from './mock/event2';
import gridItems from './mock/gridItems';
import assign from 'core-js/library/fn/object/assign'

const gram1 = {
  'POST /api/events': (req, res) => getList(req, res),
  'POST /api/addevents': (req, res) => addEvent(req, res),
  'POST /api/remove': (req, res) => removeEvent(req, res),
  'POST /api/update': (req, res) => updateEvent(req, res),
};

export default assign(gram1, gridItems);
