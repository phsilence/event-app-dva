import React from 'react';
import { Router, Route, Switch,Redirect } from 'dva/router';
import dynamic from 'dva/dynamic'


function RouterConfig({ history,app }) {


  /**
   * 获取动态绑定模型组件
   */
  const getDynamicComponent = (modelPath,componentPath) =>
    dynamic({
      app,
      models: () => [
        import(`${modelPath}`)
      ],
      component: () => import(`${componentPath}`)
    })



  return (
    <Router history={history}>
      <switch>
        <Route path="/main"  component={getDynamicComponent('./models/event','./routes/mainPage')} />
        {/*<Route path="/main/test"  component={getDynamicComponent('./models/app','./routes/App')} />*/}
        <Redirect  to="/main" />
      </switch>
    </Router>
  );
}

export default RouterConfig;
