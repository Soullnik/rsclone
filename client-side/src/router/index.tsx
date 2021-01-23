import React, { Suspense, lazy, useContext } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import dataContext from '../context';
// import { ConnectedRouter } from 'connected-react-router';
import { Spin, Layout } from 'antd';

const Home = lazy(() => import('../pages/home'));
const Auth = lazy(() => import('../pages/Auth'));

const MainRouter = () => {
  const { state } = useContext(dataContext);

  return (
    <Router>
      <Layout style={{ minHeight: '100vh' }}>
        <Suspense fallback={<Spin size="large" style={{ margin: 'auto' }} />}>
          {state?.user ? <Home /> : <Auth />}
        </Suspense>
      </Layout>
    </Router>
  );
};
export default MainRouter;
