import React, { Suspense, lazy, useEffect } from 'react';
import { history } from '../redux/store';
import { ConnectedRouter } from 'connected-react-router';
import { Switch, Route, Redirect } from 'react-router-dom';
import { Spin, Layout} from 'antd';
import { useSelector } from 'react-redux';

const Content = lazy(() => import('./content'));
const Auth = lazy(() => import('./auth'));

const MainRouter = () => {
  const userId = useSelector((state:any) => state.app.userId);

  return (
    <ConnectedRouter history={history}>
      <Layout style={{ minHeight: '100vh' }}>
        <Suspense fallback={<Spin size="large" style={{ margin: 'auto' }} />}>
          <Switch>
            <Route path="/auth" component={Auth} />
            <Route path="/content" component={userId && Content} />
            <Redirect to='/auth' />
          </Switch>
        </Suspense>
      </Layout>
    </ConnectedRouter>
  );
};

export default MainRouter;
