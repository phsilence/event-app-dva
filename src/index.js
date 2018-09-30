import dva from 'dva';
import './index.css';
import { browserHistory } from 'dva/router';
import createHistory from 'history/createBrowserHistory';
import createLoading from 'dva-loading';
import { message } from 'antd';
// 1. Initialize
const app = dva({
    history: createHistory(),
});

// 2. Plugins
// app.use({});

// 3. Model
// app.model(require('./models/example').default);
app.model(require('./models/app').default);
app.model(require('./models/eventreported').default);
app.model(require('./models/EventOrder').default);
app.use(createLoading());
// 4. Router
app.router(require('./router').default);

// 5. Start
app.start('#root');
