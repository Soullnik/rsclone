import React, { Suspense, lazy } from 'react';
import { history } from '../redux/store';
import { ConnectedRouter } from 'connected-react-router';
import { Switch, Route, Redirect } from 'react-router-dom';
import { Spin, Layout } from 'antd';
import { useSelector } from 'react-redux';

const Content = lazy(() => import('./content'));
const Auth = lazy(() => import('./auth'));

const MainRouter = () => {
  const userId = useSelector((state: any) => state.app.userId);

  return (
    <ConnectedRouter history={history}>
      <Layout style={{ minHeight: '100vh' }}>
        <Suspense fallback={<Spin size="large" style={{ margin: 'auto' }} />}>
          {userId ? (
            <Switch>
              <Route path={"/content"} component={Content} />
              <Redirect to={`/content/profile/${userId}`} />
            </Switch>
          ) : (
            <Switch>
              <Route path="/auth" component={Auth} />
              <Redirect to="/auth" />
            </Switch>
          )}
        </Suspense>
      </Layout>
    </ConnectedRouter>
  );
};

export default MainRouter;
