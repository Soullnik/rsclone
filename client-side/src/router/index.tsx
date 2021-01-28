import React, { Suspense, lazy } from 'react';
import { history } from '../redux/store';
import { ConnectedRouter } from 'connected-react-router';
import { Switch, Route } from 'react-router-dom';
import { Spin, Layout} from 'antd';
import { useSelector } from 'react-redux';

const Home = lazy(() => import('../pages/home'));
const Auth = lazy(() => import('../pages/Auth'));

const MainRouter = () => {
  const userId = useSelector((state: any) => state.auth.userId);

  return (
    <ConnectedRouter history={history}>
      <Layout style={{ minHeight: '100vh' }}>
        <Suspense fallback={<Spin size="large" style={{ margin: 'auto' }} />}>
          <Switch>
            <Route path="/" component={userId ? Home : Auth} />
          </Switch>
        </Suspense>
      </Layout>
    </ConnectedRouter>
  );
};

export default MainRouter;
