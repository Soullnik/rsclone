import React, { Suspense, lazy, useEffect } from 'react';
import { history } from '../redux/store';
import { ConnectedRouter } from 'connected-react-router';
import { Switch, Route } from 'react-router-dom';
import { Spin, Layout} from 'antd';
import { useSelector } from 'react-redux';

const Content = lazy(() => import('../pages/content'));
const Auth = lazy(() => import('../pages/auth'));

const MainRouter = () => {
  const userId = useSelector((state:any) => state.app.userId);

  return (
    <ConnectedRouter history={history}>
      <Layout style={{ minHeight: '100vh' }}>
        <Suspense fallback={<Spin size="large" style={{ margin: 'auto' }} />}>
          <Switch>
            <Route path="/" component={userId ? Content : Auth} />
          </Switch>
        </Suspense>
      </Layout>
    </ConnectedRouter>
  );
};

export default MainRouter;
