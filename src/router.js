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
      <Switch>
        <Route path="/main"  component={getDynamicComponent('./models/event','./routes/mainPage')} />
        <Redirect  to="/main" />
      </Switch>
    </Router>
  );
}

export default RouterConfig;
