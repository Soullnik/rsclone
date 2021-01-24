import React, { Suspense, lazy} from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
// import { ConnectedRouter } from 'connected-react-router';
import { Spin, Layout } from 'antd';
import { useSelector } from 'react-redux';

const Home = lazy(() => import('../pages/home'));
const Auth = lazy(() => import('../pages/Auth'));



const MainRouter = () => {
  const complete = useSelector((state:any) => state.auth.check);

  return (
    <Router>
      <Layout style={{ minHeight: '100vh' }}>
        <Suspense fallback={<Spin size="large" style={{ margin: 'auto' }} />}>
          {complete ? <Home /> : <Auth />}
        </Suspense>
      </Layout>
    </Router>
  );
};

export default MainRouter;
