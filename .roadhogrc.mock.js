import {getList,addEvent} from './mock/event2';
export default {
  'POST /api/events': (req, res) => getList(req, res),
  'POST /api/addevents': (req, res) => addEvent(req, res),
};
