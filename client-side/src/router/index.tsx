import React, { Suspense, lazy, Fragment } from 'react';
import { Switch, Route } from 'react-router-dom';
import { ConnectedRouter } from 'connected-react-router';
import { history } from '../redux/store';
import { Spin, Layout } from 'antd';

const Home = lazy(() => import('../pages/home'));
const Auth = lazy(() => import('../pages/Auth'));

const MainRouter = (props: any) => {
  return (
    <ConnectedRouter history={history}>
      <Layout style={{ minHeight: '100vh' }}>
        <Suspense fallback={<Spin size="large" style={{ margin: 'auto' }} />}>
          {props.auth ? <Home /> : <Auth />}
        </Suspense>
      </Layout>
    </ConnectedRouter>
  );
};
export default MainRouter;
